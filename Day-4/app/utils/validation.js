

// const db = require("../models");

// exports.checkDuplicateTitlle = (title) =>{
//     return db.tutorials.find({'title':title})
// }

// exports.checkDuplicateDiscription = (discription) =>{
//     return db.tutorials.find({'discription':discription})
// }



const { tutorials } = require("../models");
const { body } = require('express-validator');

const checkDuplicateTitles = async (title) => {
   const lowerTitle= title.toLowerCase()
    const existingTutorial = await tutorials.findOne({ "title": title});
    if (existingTutorial) {
        throw new Error('Title already exists.');
    }
    return true;
}

exports.createRecordValidator = [
    body('title').trim().notEmpty().withMessage("Title cannot be empty").bail().custom(checkDuplicateTitles),
    body('description').trim().notEmpty().withMessage("Description cannot be empty").bail(),
    body('published').trim().notEmpty().withMessage("Published cannot be empty")
]


