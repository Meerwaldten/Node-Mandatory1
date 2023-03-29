import express from "express";
import templateEngine from "./util/templateEngine.js";

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));

const login = templateEngine.readPage("./public/pages/login/login.html");
const loginPage = templateEngine.renderLoginPage(login, {
    tabTitle: "Please log in"
});

const frontpage = templateEngine.readPage("./public/pages/frontpage/frontpage.html");
const frontpagePage = templateEngine.renderPage(frontpage, {
    tabTitle: "Welcome!"
});

const functions = templateEngine.readPage("./public/pages/functions/functions.html");
const functionsPage = templateEngine.renderPage(functions, {
    tabTitle: "All about functions"
});

const variables = templateEngine.readPage("./public/pages/variables/variables.html");
const variablesPage = templateEngine.renderPage(variables, {
    tabTitle: "All about variables"
});

const nodejs = templateEngine.readPage("./public/pages/nodejs/nodejs.html");
const nodejsPage = templateEngine.renderPage(nodejs, {
    tabTitle: "NodeJS is super cool"
});

const codestandards = templateEngine.readPage("./public/pages/codestandards/codestandards.html");
const codestandardsPage = templateEngine.renderPage(codestandards, {
    tabTitle: "Codestandards are very important"
});

const serving = templateEngine.readPage("./public/pages/serving/serving.html");
const servingPage = templateEngine.renderPage(serving, {
    tabTitle: "How to serve a side"
});


app.get("/", (req, res) => {
    res.send(loginPage);
});

app.get("/frontpage", (req, res) => {
    res.send(frontpagePage);
});

app.get("/functions", (req, res) => {
    res.send(functionsPage);
});

app.get("/variables", (req, res) => {
    res.send(variablesPage);
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


app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (username === "meerwaldt" && password === "123"){
        res.redirect("/frontpage");
    }else {
        res.redirect("/");
    }
})


const PORT = 8080;
app.listen(PORT, (error) => {
    if(error) {
        console.log(error)
        return;}
    console.log("Server is running on port: ", PORT);
});