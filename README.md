Time.com Latest Stories Scraper

This is a small Node.js project I made to fetch the latest 6 stories from Time.com.
The idea is pretty simple: grab the homepage HTML, look for links, and return the top 6 in JSON format.
I only used built-in Node modules (http, https) and a bit of regex to keep things basic – no external packages.

Steps to run:-

1.Download or clone the project.

2.Open a terminal in the project folder.

3.Start the server:

  node app.js


Open your browser and check:
=>http://localhost:8000/getTimeStories

Example output
<img width="928" height="677" alt="image" src="https://github.com/user-attachments/assets/a6b1e48f-7746-4725-8bfd-fe6c52731b68" />

A few notes

1.This project uses a really simple approach (regex + string matching).

2.If Time.com changes how their site is structured, the regex might need a quick update.

3.I didn’t add any external libraries since the instructions said not to.
