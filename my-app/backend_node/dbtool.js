var pg = require('pg');
var conString = "postgres://corpus:corpus@10.30.0.208:5432/corpus";
// var conString = "postgres://doccloud:doccloud@localhost:5432/doccloud";



  const getAssets = (request, response) => {
    
    var client = new pg.Client(conString);
    client.connect();
    client.query('SELECT id, name, version, type, state, domain, domain2, author, language, created_by, creation_date FROM asset ', (error, results) => {
    // client.query('SELECT id, name, version, type, state, domain, domain2, author, language, created_by, creation_date FROM asset where type =$1', ['layout.'], (error, results) => {
    // client.query('SELECT id, sys_title, sys_author, sys_date_cr, sys_type, sys_parent, sys_uuid FROM public.documents', (error, results) => {
      if (error) {
        throw error
      }

      console.log("data " + results.rows);
      
      response.status(200).json(results.rows);

      client.end();
    })
  }

  module.exports = {
    getAssets

  }


