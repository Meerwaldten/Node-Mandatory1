import express from "express";
import templateEngine from "./util/templateEngine.js";

const app = express();

app.use(express.static("public"))


const frontpage = templateEngine.readPage("./public/pages/frontpage.html");
const frontpagePage = templateEngine.renderPage(frontpage, {
    tabTitle: "Welcome! | Hejsa"
});


app.get("/", (req, res) => {
    res.send(frontpagePage);
})







const PORT = 8080;
app.listen(PORT, (error) => {
    if(error) {
        console.log(error)
        return;}
    console.log("Server is running on port: ", PORT);
});