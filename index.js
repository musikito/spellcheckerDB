const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
  word : String
});

mySchema.index({'$**': 'text'});

const data = require("./data");


const myModel = mongoose.model('word',mySchema);

//getWord("aa");

console.log(data);
mongoose.connect("mongodb://localhost/data",{useNewUrlParser:true},function(error){
    if(!error){
        console.log("db connected");
    }
});
const term = 'a';
for(var i = 0; i < data.length; i++) {
    var obj = data[i];

    console.log(obj[i]);
}


//console.log(myModel.find({ $text: { $search: term } }));
/*
myModel.find({
   $text: {$search: term}, 
}).then(word =>console.log(word)).catch(e => console.error(e));
*/
//console.log(myModel.find({term}),function(err,doc){console.log(doc)});

//console.log(myModel.find({"abay":1}, {$exists: true}));
//myModel.findOne({"abay":1}).then(function (doc) {console.log(doc)});
//myModel.find({"abbey": 1}, function(err,obj) { console.log(obj[0]); });
/*function getWord(letter){
myModel.find({"bsf":1}, function (err, docs) {
  // docs.forEach
   if(!err){
        console.log("no errors");
    }
    if(docs[term]){
        //res.send(letter + " here");
        console.log(" here")
    }else{
        //res.send(letter + " not here");
        console.log("not here")
    }
    //console.log(letter);
  console.log("word", docs);
});


//}

*/
app.listen(port, () => console.log(`listening on port ${port}!`));