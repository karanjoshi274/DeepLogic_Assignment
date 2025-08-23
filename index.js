const http = require("http");
const https = require("https");

const SITE_URL = "https://time.com/";

function loadPage(target) {
  return new Promise((ok, fail) => {
    https.get(target, (resp) => {
      let buffer = "";
      resp.setEncoding("utf8");
      resp.on("data", chunk => buffer += chunk);
      resp.on("end", () => ok(buffer));
    }).on("error", fail);
  });
}

function grabHeadlines(page) {
  if (!page) return [];

  const anchorPattern = /<a[^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/gi;
  const collected = [];
  const usedLinks = new Set();

  let found;
  while ((found = anchorPattern.exec(page)) && collected.length < 6) {
    let urlPath = found[1];
    let headline = found[2].replace(/<[^>]+>/g, "").trim();

    if (!/(\/\d{6,}\/)/.test(urlPath)) continue;
    if (!headline) continue;

    if (urlPath.startsWith("/")) {
      urlPath = "https://time.com" + urlPath;
    }

    if (!usedLinks.has(urlPath)) {
      collected.push({ title: headline, link: urlPath });
      usedLinks.add(urlPath);
    }
  }
  return collected;
}

const app = http.createServer(async (req, res) => {
  if (req.method === "GET" && req.url === "/getTimeStories") {
    try {
      const htmlData = await loadPage(SITE_URL);
      const latest = grabHeadlines(htmlData);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(latest, null, 2));
    } catch (err) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Failed to fetch", detail: err.message }));
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Route not found", hint: "Use /getTimeStories" }));
  }
});

app.listen(8000, () => {
  console.log("Service ready at http://localhost:8000/getTimeStories");
});
