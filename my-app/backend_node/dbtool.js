var pg = require('pg');
var conString = "postgres://corpus:corpus@10.30.0.208:5432/corpus";

module.exports = {
 getAssets: function() {
     return getAssetsFromDB();
 }

}

async function getAssetsFromDB() {
    var client = new pg.Client(conString);

    // var queryStr = client.query("SELECT id, name, version, type, state, domain, domain2, author, language, created_by, creation_date FROM asset where type =$1", ['layput.']);
    //fired after last row is emitted


     client.connect();
    var res = await client.query('SELECT id, name, version, type, state, domain, domain2, author, language, created_by, creation_date FROM asset where type =$1', ['layout.']);
    // res.rows.forEach(row=>{
    //     console.log(row);

    // });

    // var resJson = JSON.stringify(res.rows);

    // console.log("result " + resJson);
    
    await client.end();


    return resJson;
 }
