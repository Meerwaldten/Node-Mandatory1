import express from "express";
const app = express();

app.use(express.static("public"));





app.get("/", (req, res) => {
    res.send("Haaaalløj");
})







const PORT = 8080;
app.listen(PORT, (error) => {
    if(error) {
        console.log(error)
        return;}
    console.log("Server is running on port: ", PORT);
});