//Setup
var express = require('express')
var router = express.Router()

//Fake DB
const cars = [
    { brand: "porsche", mpg: "20"}, 
    { brand: "Mercedes", mpg: "26"}, 
    { brand: "BMW", mpg: "22"}
];

//Routes
router.get('/', (req, res) => {
    var result = Object.values(req.query)
    var return_res = cars

    if (result.length > 0 ){
        for (var e in cars) {
            if (cars[e].brand === result[0]){
                return_res = { mpg: cars[e].mpg }
            }
        }
    }
    res.send(return_res)
})

router.post('/', (req, res) => {
    
    console.log(req.body);
    var car = {
        name : req.body.brand, 
        mpg : req.body.mpg
    };
    
    cars.push(car);
    res.send(cars);
});
//End Routes 

//Export router
module.exports = router