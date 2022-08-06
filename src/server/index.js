//Object to store parsed data
pData = {}

//Global Variables
var path = require('path');
const express = require('express');
const app = express();

app.use(express.static('dist'));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var cors = require('cors');
app.use(cors());

const dotenv = require('dotenv');
dotenv.config();

const mockAPIResponse = require('./mockAPI.js')
const apiKey = process.env.API_KEY;

console.log(`Your API key is ${apiKey}`);

console.log(__dirname);


app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
})


// designates what port the app will listen to for incoming requests
app.listen(8888, function () {
    console.log('Example app listening on port 8888!')
})


//Get
app.get('/retrieve', getData);
function getData(req, res) {
  res.send(pData);
  console.log(pData);
};

//Post Data
app.post("/submitData", postData)
function postData(req, res) {
    newData = {
        //Do We need these? Or can we just use 'text'
        agreement: req.body.agreement,
        confidence: req.body.confidence,
        score_tag: req.body.score_tag
    }
    pData = newData;
    console.log(pData);
}


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
