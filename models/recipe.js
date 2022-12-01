const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    madeOn: {
        type: Date
    },
    comment: {
        type: String
    }
});

const ingredientSchema = new Schema({
    item: {type: Schema.Types.ObjectId, ref: 'Item'},
    quantity: {
        type: Number
    },
    measurement: {
        type: String
    }
});

const recipeSchema = new Schema({
    name: {
        type: String
    },
    ingredients: [ingredientSchema],
    servingSize: {
        type: Number
    },
    instructions: {
        type: String
    },
    comments: [commentSchema]
});

module.exports = mongoose.model('Recipe', recipeSchema);