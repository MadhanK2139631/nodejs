const db = require("../models");

exports.checkDuplicateTitlle = (title) =>{
    return db.tutorials.find({'title':title})
}

exports.checkDuplicateDiscription = (discription) =>{
    return db.tutorials.find({'discription':discription})
}