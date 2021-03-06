const express = require("express")
const router = express.Router();
const Stock = require("../models/stocks")

//get list of stocks from database 
router.get('/stocks', function(req,res,next){
    res.send({type : 'GET'})
})

router.post('/stocks', function(req,res,next){
    Stock.create(req.body).then(function(ninja){
        res.send(ninja);
    }).catch(next)
    
    res.send({
        
        type : 'POST', 
        name: req.body.name, 
        rank: req.body.price
    })
})

router.put('/stocks/:id', function(req,res,next){
    res.send({type : 'PUT'})
})

router.delete('/stocks:id', function(req,res,next){
    res.send({type : 'DELETE'})
})

module.exports = router 