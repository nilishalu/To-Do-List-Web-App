const bodyParser = require("body-parser")
const express = require("express")

const app = express()

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    var today = new Date();
    var currDay = today.getDay();
    var day = "";

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    // if (currDay == 6 || currDay == 0) {
    //     day = "weekend";
    // }
    // else {
    //     day = "weekday"
    // }

    day = days[currDay];

    res.render('list', {kindOfDay: day});
})

app.listen(3000, function() {
    console.log("Server is running at port 3000");
})
