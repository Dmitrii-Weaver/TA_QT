const express = require("express");
const app = express()


app.get("/", (req, res) => {
    res.send("<h1>test passed</h1>")
});

app.get("/certs/all", (req, res) => {
    res.send("<h1>all certificates</h1>")
});
app.get("/certs/get/", (req, res) => {
    res.send("<h1>1 certificate</h1>")
});
app.post("/certs/cre/", (req, res) => {
    res.send("<h1>create a certificate</h1>")
});
app.post("/certs/del/", (req, res) => {
    res.send("<h1>delete a certificate</h1>")
});


app.listen(5000, () => {
    console.log("server live on port 5000")
})