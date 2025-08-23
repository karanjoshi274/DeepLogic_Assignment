Time.com Latest Stories Scraper

This is a small Node.js project I made to fetch the latest 6 stories from Time.com.
The idea is pretty simple: grab the homepage HTML, look for links, and return the top 6 in JSON format.
I only used built-in Node modules (http, https) and a bit of regex to keep things basic – no external packages.

Steps to run:-

&nbsp;&nbsp;&nbsp;&nbsp;1.Download or clone the project.

&nbsp;&nbsp;&nbsp;&nbsp;2.Open a terminal in the project folder.

&nbsp;&nbsp;&nbsp;&nbsp;3.Start the server:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;node index.js or nodemon index.js


Open your browser and check:

&nbsp;&nbsp;&nbsp;&nbsp;=>http://localhost:8000/getTimeStories

Example output
<img width="928" height="677" alt="image" src="https://github.com/user-attachments/assets/a6b1e48f-7746-4725-8bfd-fe6c52731b68" />

A few notes

&nbsp;&nbsp;&nbsp;&nbsp;1.This project uses a really simple approach (regex + string matching).

&nbsp;&nbsp;&nbsp;&nbsp;2.If Time.com changes how their site is structured, the regex might need a quick update.

&nbsp;&nbsp;&nbsp;&nbsp;3.I didn’t add any external libraries since the instructions said not to.
