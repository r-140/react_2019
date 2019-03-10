
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var db = require("./dbtool");

var api = express.Router();


// todo add select by id, select by type
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
})


app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

api.get('/assets', db.getAssets)



app.use('/api', api);

app.listen(63145);


