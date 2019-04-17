var express = require('express');
var module = require('./dbmodule');
var bodyparser = require('body-parser');
var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/getAllBooks',function(req,res){
        module.getAllBooks(req,res);
})

app.listen(3000, function () {
    console.log("port running on 3000");
})

