//Setup
var express = require('express')
var router = express.Router()

//Fake DB
const movies = [
    { id : 1, info : { name: "Titanic", rating: "10"}}, 
    { id : 2, info : { name: "Batman", rating: "8"}}
];

//Routes
router.get('/', (req, res) => {
    res.send(movies);
});

router.post('/', (req, res) => {
    var movie = {
        id : movies.length + 1, 
        info : {
            name : req.body.info.name, 
            rating : req.body.info.rating
        }
    };

    movies.push(movie);
    res.send(movies);
});


//End Routes 

//Export router
module.exports = router