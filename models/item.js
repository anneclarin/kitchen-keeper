const mongoose = require('mongoose');
const items = require('../controllers/items');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    item: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    expiration: {
        type: Date
    },
    location: {
        type: String,
        enum: ['Fridge', 'Freezer', 'Supplies', 'Pantry'],
        required: true
    },
    category: {
        type: String
    }
});

module.exports = mongoose.model('Item', itemSchema);