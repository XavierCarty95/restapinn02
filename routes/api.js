const express = require("express")
const router = express.Router();

//get list of stocks from database 
router.get('/stocks', function(req,res){
    res.send({type : 'GET'})
})

router.post('/stocks', function(req,res){
    res.send({type : 'POST'})
})

router.put('/stocks/:id', function(req,res){
    res.send({type : 'PUT'})
})

router.delete('/stocks:id', function(req,res){
    res.send({type : 'DELETE'})
})

module.exports = router 