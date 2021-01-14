const http = require('http');
const app = require('express')();

const configDetails = require('./Config/config');
const func = require('./Controller/stock.controller');

const environmentDetails = configDetails.configDetails.environmentDetails;

const hostName = environmentDetails.hostName;
const port = environmentDetails.port;

app.get('/data',func.sendStockData);

const server = http.createServer(app);

server.listen(port, hostName, () => {
  console.log(`Server running at http://${hostName}:${port}/`);
});