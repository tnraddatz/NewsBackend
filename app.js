//Setup
const express = require('express')
const app = express()
var cors = require('cors');
var env = process.env.NODE_ENV || 'dev';
port = 8000

if(env != 'dev'){
  port = 8081
}
console.log("Port = " + port)

//Routes 
var movies = require('./pages/movies')
var cars = require('./pages/cars')
var news = require('./pages/news')

//Cors
app.use(cors());

//Routes
app.get('/', (req, res) => {
    res.send("Hello World")
})

app.use('/movies', movies)
app.use('/cars', cars)
app.use('/news', news)

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
app.listen(port, () => console.log("Listening at http://127.0.0.1:" + port))
