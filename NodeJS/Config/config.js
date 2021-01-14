const environmentDetails = {
    hostName: 'localhost',
    port: 3000
}

const databaseDetails = {
    dbName: "stockDB",
    collectionName: "stockCollection",
    mongoDBUrl : "mongodb://localhost:27017/"
}

exports.configDetails = {
    environmentDetails: environmentDetails,
    databaseDetails: databaseDetails
}