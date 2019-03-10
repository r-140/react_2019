var pg = require('pg');
// var conString = "postgres://corpus:corpus@10.30.0.208:5432/corpus";
var conString = "postgres://doccloud:doccloud@localhost:5432/doccloud";



  const getAssets = (request, response) => {
    
    var client = new pg.Client(conString);
    client.connect();
    client.query('SELECT id, sys_title, sys_author, sys_date_cr, sys_type, sys_parent, sys_uuid FROM public.documents', (error, results) => {
      if (error) {
        throw error
      }

    //   var data = results.rows;
      
      response.status(200).json(results.rows);

      client.end();
    })
  }

  module.exports = {
    getAssets

  }


