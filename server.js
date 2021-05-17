const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html");
});



app.post("/",function(req,res){
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  var result = n1/(n2*n2);
    console.log(req.body.num1);
    res.send("answer is " + result);
});




app.listen(3000,function(){
  console.log("server has started on our port")
});
