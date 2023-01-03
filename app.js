const bodyParser = require("body-parser")
const express = require("express")
const date = require(__dirname + "/date.js");

const app = express()

app.set('view engine', 'ejs');
 
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

const items = ["Finish WOC responsive web",
"Finish IC Campus connect work",
"Complete IRIS Product task work"
]

const workItems = [];

app.get('/', function(req, res) {
    console.log(date)
    const day = date.getDate();

    res.render('list', {listTitle: day, newItems: items});
})

app.get("/work", function(req, res) {
    res.render('list', {listTitle: "Work", newItems: workItems});
})

app.post('/', function(req, res) {
    const item = req.body.newItem;

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work")
    }
    else {
        items.push(item)
        res.redirect("/");
    }
})

app.listen(3000, function() {
    console.log("Server is running at port 3000");
})
