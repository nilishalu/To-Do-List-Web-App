const bodyParser = require("body-parser")
const express = require("express")

const app = express()

app.get('/', function(req, res) {
    var today = new Date();
    var currDay = today.getDay();

    if (currDay == 6 || currDay == 0) {
        res.write("<p>It's a weekend</p>");
        res.write("<h1>Let's chill out</h1>")
        res.send();
    }
    else {
        res.sendFile(__dirname + "/index.html")
    }
})

app.listen(3000, function() {
    console.log("Server is running at port 3000");
})
