const MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";


exports.connectToDb = function(data){

  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("stockDB");
    var query = {$or: [{"Tags": {$regex: ".*"+data+".*"}},{"Tag2": {$regex: ".*"+data+".*"}},{"Tag3": {$regex: ".*"+data+".*"}}]};
    dbo.collection("stockCollection").find(query).toArray(async function(err, result) {
      if (err) throw err;
      db.close();
    });
  });
}