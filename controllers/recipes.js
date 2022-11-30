const Recipe = require('../models/recipe');

module.exports = {
    index,
    new: newRecipe,
    create,
    // edit,
    // update,
    //delete
};

function index(req, res) {
    Recipe.find({}, function(err, recipes) {
        res.render('recipes/index', {title: 'All Recipes', recipes})
    })
  };

function newRecipe(req, res) {
    res.render('recipes/new', {title: 'New Recipe'})
};

function create(req, res) {
    const recipe = new Recipe(req.body)
    recipe.save(function(err) {
        if (err) return res.redirect('/recipes/new')
        res.redirect('/recipes')
    })
};