//Object to store parsed data
pData = {}

//Global Variables
const app = express()

var path = require('path')
const express = require('express')
app.use(express.static('dist'))

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var cors = require('cors');
app.use(cors());

const dotenv = require('dotenv');
dotenv.config();

// const mockAPIResponse = require('./mockAPI.js')


console.log(`Your API key is ${process.env.API_KEY}`);

console.log(__dirname)


app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})


// designates what port the app will listen to for incoming requests
app.listen(8888, function () {
    console.log('Example app listening on port 8888!')
})

const apiKey = process.env.API_KEY;

//Post data
app.get('/all', getData);
function getData(req, res) {
  res.send(pData);
  console.log(pData);
};

//Post Data
app.post("/postData", postData)
function postData(req, res) {
    pData = {
        //Do We need these? Or can we just use 'text'
        agreement: req.body.agreement,
        confidence: req.body.confidence,
        score: req.body.score_tag
    }
    res.send(pData);
    console.log(pData);
}


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
