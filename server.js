var express = require("express");
var app = express();
var cfenv = require("cfenv");
var bodyParser = require('body-parser')
let path = require('path');
var request = require("request");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use("/exit",function(req,res,next){
  process.exit();
});

app.use("/",function(req,res,next){
  request.get('http://149.81.124.226:8080/getAll',function(err,result,body){
    if(err) //TODO: handle err
    if(result.statusCode !== 200 ) //etc
    //TODO Do something with response

      console.log("body");


      res.render('index',{'docs':body});
  });

});



var port = process.env.PORT || 8080
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});
