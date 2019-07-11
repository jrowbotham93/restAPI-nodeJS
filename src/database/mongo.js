const { MongoMemoryServer } = require('mongodb-memory-server');
const { MongoClient } = require('mongodb');

let database = null;

async function startDatabase(){
  const mongo = new MongoMemoryServer();
  const mongoDBURL = await mongo.getConnectionString();
  const connection = await MongoClient.connect(mongoDBURL, {useNewUrlParser: true});

  database = connection.db();
}

async function getDatabase(){
  if(!database) await startDatabase();
  return database;
}


// export two functions
module.exports = {
  getDatabase, // return reference to database
  startDatabase, // initilise the databse in mem
};
