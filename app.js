const bodyParser = require("body-parser")
const express = require("express")

const app = express()

app.set('view engine', 'ejs');
 
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

var items = ["Finish WOC responsive web",
"Finish IC Campus connect work",
"Complete IRIS Product task work"
]

app.get('/', function(req, res) {
    var today = new Date();

    var options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }

    var day = today.toLocaleDateString("en-US", options)

    res.render('list', {kindOfDay: day, newItems: items});
})

app.post('/', function(req, res) {
    var item = req.body.newItem;
    items.push(item)

    res.redirect("/");
})

app.listen(3000, function() {
    console.log("Server is running at port 3000");
})
