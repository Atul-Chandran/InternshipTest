const MongoClient = require('mongodb').MongoClient;
const dbDetails = require('../Config/config');
const dbConfigDetails = dbDetails.configDetails.databaseDetails;


function sendStockData(request,response){
    response.setHeader('Content-Type', 'application/json');

    // If query parameter has been passed
    if(request.query.tag){
        MongoClient.connect(dbConfigDetails.mongoDBUrl, function(err, db) {
            if (err) throw err;
            var dbo = db.db(dbConfigDetails.dbName);
            var query = {$or: [{"Tags": {$regex: ".*" + request.query.tag + ".*"}},{"Tag2": {$regex: ".*"+ request.query.tag +".*"}},{"Tag3": {$regex: ".*"+ request.query.tag +".*"}}]};
            dbo.collection(dbConfigDetails.collectionName).find(
                query,
                {
                    projection: {
                        "_id": 0,
                        "Title": 1,
                        "Unit": 1,
                        "Frequency": 1,
                        "Source": 1,
                        "Description": 1, 
                    }
                }
            ).toArray(async function(err, result) {
              if (err) throw err;
              db.close();
    
              if(result){
                  dataResponse = {
                      status: 200,
                      message: "Success",
                      data: result
                  }
    
                  response.json(dataResponse);
              }
              else{
                  failedResponse = {
                      status: 400,
                      message: "Bad Request",
                      data: {}
                  }
    
                  response.json(failedResponse);
              }
            });
        });
    }
    else{
        noDataResponse = {
            status: 400,
            message: "Tag cannot be empty",   
        };

        response.json(noDataResponse);
    }
};

exports.sendStockData = sendStockData;