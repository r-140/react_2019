var pg = require('pg');
// var conString = "postgres://corpus:corpus@10.30.0.208:5432/corpus";
var conString = "postgres://doccloud:doccloud@localhost:5432/doccloud";



const getAssets = (request, response) => {
    
  var client = new pg.Client(conString);
  client.connect();

  // SELECT *
  // FROM items
  // LIMIT {itemsPerPage} OFFSET {(page - 1) * itemsPerPage}

  // client.query('SELECT id, name, domain, domain2, created_by, creation_date FROM asset where type =$1', ['layout.'], (error, results) => {
  // client.query('SELECT id, name, version, type, state, domain, domain2, author, language, created_by, creation_date FROM asset where type =$1', ['ddd.'], (error, results) => {
  client.query('SELECT id, sys_title, sys_author, sys_date_cr, sys_type, sys_parent, sys_uuid FROM public.documents', (error, results) => {
    if (error) {
      throw error
    }

    console.log("getAssets(): data " + results.rows);
    
    response.status(200).json(results.rows);

    client.end();
  })
};

// const getAssetInfo = (request, response) => {
    
//   var client = new pg.Client(conString);
//   client.connect();



//   client.query('SELECT id, name, domain, domain2, created_by, creation_date FROM asset where type =$1 group by id', ['layout.'], (error, results) => {
//   // client.query('SELECT id, name, version, type, state, domain, domain2, author, language, created_by, creation_date FROM asset where type =$1', ['ddd.'], (error, results) => {
//   // client.query('SELECT id, sys_title, sys_author, sys_date_cr, sys_type, sys_parent, sys_uuid FROM public.documents', (error, results) => {
//     if (error) {
//       throw error
//     }

//     console.log("getAssetInfo(): data " + results.rows);
    
//     response.status(200).json(results.rows);

//     client.end();
//   })
// }

const getDomains = (request, response) => {
    
  var client = new pg.Client(conString);
  client.connect();


  // client.query('SELECT pathid, name FROM domain order by pathid', (error, results) => {
    client.query('SELECT sys_symbolic_name as pathid, sys_title as name FROM public.system', (error, results) => {
    if (error) {
      throw error
    }

    console.log("get1stDomains(): data " + results.rows);
    
    response.status(200).json(results.rows);

    client.end();
  })
}


 

  module.exports = {
    getAssets,
    getDomains

  }


