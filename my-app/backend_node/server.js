
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

api.get('/assets/:filter', db.getAssetsByFilter)

api.get('/assets/asset/:id', db.getAssetById)

api.get('/domains', db.getDomains)



app.use('/api', api);

app.listen(63145);


