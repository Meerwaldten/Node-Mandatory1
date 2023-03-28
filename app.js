import express from "express";
import templateEngine from "./util/templateEngine.js";

const app = express();

app.use(express.static("public"))


const frontpage = templateEngine.readPage("./public/pages/frontpage.html");
const frontpagePage = templateEngine.renderPage(frontpage, {
    tabTitle: "Welcome!"
});

const javascript = templateEngine.readPage("./public/pages/javascript.html");
const javascriptPage = templateEngine.renderPage(javascript, {
    tabTitle: "All about Javascript"
});

const nodejs = templateEngine.readPage("./public/pages/nodejs.html");
const nodejsPage = templateEngine.renderPage(nodejs, {
    tabTitle: "NodeJS is super cool"
});

const codestandards = templateEngine.readPage("./public/pages/codestandards.html");
const codestandardsPage = templateEngine.renderPage(codestandards, {
    tabTitle: "Codestandards are very important"
});

const serving = templateEngine.readPage("./public/pages/serving.html");
const servingPage = templateEngine.renderPage(serving, {
    tabTitle: "How to serve a side"
});


app.get("/", (req, res) => {
    res.send(frontpagePage);
});

app.get("/javascript", (req, res) => {
    res.send(javascriptPage);
});

app.get("/nodejs", (req, res) => {
    res.send(nodejsPage);
});

app.get("/codestandards", (req, res) => {
    res.send(codestandardsPage);
});

app.get("/serving", (req, res) => {
    res.send(servingPage);
});



const PORT = 8080;
app.listen(PORT, (error) => {
    if(error) {
        console.log(error)
        return;}
    console.log("Server is running on port: ", PORT);
});