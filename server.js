var fs = require('fs');
var cors = require('cors');
var express = require('express');

var dataRawPicks = fs.readFileSync('./zData/pickData.json');
var dataRawMoney = fs.readFileSync('./zData/moneyData.json');
var dataRawTicker = fs.readFileSync('./zData/tickerData.json');
var dataRawDisplay = fs.readFileSync('./zData/displayData.json');
var pickData = JSON.parse(dataRawPicks);
var moneyData = JSON.parse(dataRawMoney);
var tickerData = JSON.parse(dataRawTicker);
var displayData = JSON.parse(dataRawDisplay);

var app = express();

var server = app.listen(8080, listening);

function listening(){
  console.log('listening. . .')
}

app.use(cors({origin: '*'}));
app.get('/pickData', sendPickData);
app.get('/moneyData', sendMoneyData);
app.get('/tickerData', sendTickerData);
app.get('/displayData', sendDisplayData);

function sendPickData(request, response){
  response.send(pickData);
}

function sendMoneyData(request, response){
  response.send(moneyData);
}

function sendTickerData(request, response){
  response.send(tickerData);
}

function sendDisplayData(request, response){
  response.send(displayData);
}
