//Setup
var express = require('express');
var clean_url = require('./clean_url').clean_url
const urlMetadata = require('url-metadata')

var router = express.Router()

//Routes
router.get('/', (req, res) => {
    res.send(constants.API_KEY)
})

router.post('/new_article', (req,res) => {
    var url = clean_url(req.body.url)

    urlMetadata(url).then(
        function (metadata) {    // success handler
            res.send(metadata)
        },
        function (error) {      // failure handler
            console.error(error)
            res.status(404).send({error : "Cannot Find URL"})
        }
    )
})

//End Routes 


//Export router
module.exports = router