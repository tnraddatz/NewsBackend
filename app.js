//Setup
const express = require('express')
const app = express()
var cors = require('cors');

//Routes 
var movies = require('./pages/movies')
var cars = require('./pages/cars')
var news = require('./pages/news')

//Routes
app.get('/', (req, res) => {
    res.send("Hello World")
})

app.use('/movies', movies)
app.use('/cars', cars)
app.use('/news', news)

//Configs
app.use(cors());
/*var allowedOrigins =  ['http://localhost:3000',
                        'http://yourapp.com'];

app.use(cors({
    origin: function(origin, callback){    // allow requests with no origin 
      // (like mobile apps or curl requests)
      if(!origin) return callback(null, true);    if(allowedOrigins.indexOf(origin) === -1){
        var msg = 'The CORS policy for this site does not ' +
                  'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }    return callback(null, true);
    }
  }));
*/
app.use(express.json())

//server 
app.listen(8000, () => console.log("Listening at http://127.0.0.1:8000"))
