const db = require("../models");
const Tutorials=db.tutorials;


exports.checkDuplicateTitle=(title)=>{
    console.log("Duplicate")

    Tutorial.findOne({title:title}).exec((err,tutorials)=>{
        if(err){
            throw err;
        }
    })
}