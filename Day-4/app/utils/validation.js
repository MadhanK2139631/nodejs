
const { tutorials } = require("../models");
const { body } = require('express-validator');

const checkDuplicateTitles = async (title) => {
    const existingTutorial = await tutorials.findOne({ "title": { $regex: `^${title}$`, $options: 'i' }});
    if (existingTutorial) {
        throw new Error('Title already exists.Please choose a differnt title.');
    }
    return true;
}

exports.createRecordValidator = [
    body('title').trim().notEmpty().withMessage("Title can't be empty!").bail().custom(checkDuplicateTitles),
    body('description').trim().notEmpty().withMessage("Description can't be empty!").bail(),
    body('published').trim().notEmpty().withMessage("Published can't be empty!")
]


