var pg = require('pg');
// var conString = "postgres://corpus:corpus@10.30.0.208:5432/corpus";
var conString = "postgres://doccloud:doccloud@localhost:5432/doccloud";



const getAssets = (request, response) => {
    


  var client = new pg.Client(conString);
  client.connect();


  // client.query('SELECT id, name, domain, domain2, created_by, creation_date FROM asset where type =$1', ['layout.'], (error, results) => {
  client.query('SELECT id, sys_title, sys_author, sys_date_cr, sys_type, sys_parent, sys_uuid FROM public.documents', (error, results) => {
    if (error) {
      throw error
    }

    console.log("getAssets: found ", results.rowCount)

    response.status(200).json(results.rows);

    client.end();
  })
};


const getAssetsByFilter = (request, response) => {
    
  var client = new pg.Client(conString);
  client.connect();

  // todo parse filter json
  const domain = request.params.filter

  // client.query('SELECT id, name, domain, domain2, created_by, creation_date FROM asset where type =$1 and domain=$2', ['layout.', domain], (error, results) => {
  client.query('SELECT id, sys_title, sys_author, sys_date_cr, sys_type, sys_parent, sys_uuid FROM public.documents where sys_type =$1', [domain], (error, results) => {
    if (error) {
      throw error
    }
    console.log("getAssetsByFilter: found ", results.rowCount)   
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

    console.log("getDomains: found ", results.rowCount) 
    
    response.status(200).json(results.rows);

    client.end();
  })
}


 

  module.exports = {
    getAssets,
    getDomains,
    getAssetsByFilter

  }


