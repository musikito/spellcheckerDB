var fs = require('fs');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
  word : String
});

mySchema.index({'$**': 'text'});

const myModel = mongoose.model('word',mySchema);

mongoose.connect("mongodb://localhost/data",{useNewUrlParser:true},function(error){
    if(!error){
        console.log("db connected");
    }
});

fs.readFile("words.txt", "utf8", function(err, data) {
    //if there's an error throw it
    if (err) throw err;
    

    // console.log(dataClean);
    var deptDataArray = data.split("\n");
    //used to clean any unusued first empty lines
     deptDataArray.shift();
    // console.log(deptDataArray);

    //grab dept id and name from the file

    for (var i = 0; i < deptDataArray.length; i++) {
        var obj = deptDataArray[i];
    var wordins = new myModel({word:obj});
        
        wordins.save(function(error){
             console.log("Your bee has been saved!");
 if (error) {
     console.error(error);
  }
        });
        
        
    console.log(wordins);
       
    } // end for

    
   
    
    
});



app.listen(port, () => console.log(`listening on port ${port}!`));