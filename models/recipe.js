const mongoose = require('mongoose');
const recipes = require('../controllers/recipes');

const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    item: {type: Schema.Types.ObjectId, ref: 'Item'},
    quantity: {
        type: Number
    },
    measurement: {
        type: String
    }
})

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
    }
});

module.exports = mongoose.model('Recipe', recipeSchema);