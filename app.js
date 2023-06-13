//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use("viewengine","ejs");


app.get("/",function(req,res){
    
    var today=new Date();
    var day="";

    // const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var options={
        weekday:"long",
        day:"numeric",
        month:"long"
    };
    var day=today.toLocaleDateString("en-US",options)
    res.render("list", {kindofDay: day});


});


app.listen(3000,function(){
    console.log("server running on port 3000");

});