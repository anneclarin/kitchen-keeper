const Item = require('../models/item');
const Recipe = require('../models/recipe');

module.exports = {
    index,
    new: newRecipe,
    create,
    show,
    delete: deleteRecipe,
    edit,
    update,
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

function show(req, res) {
    Recipe.findById(req.params.id)
    .populate({ path: 'ingredients', populate: { path: 'item', model: 'Item' } })
    .exec(function(err, recipe) {
        Item.find({}, function(err, items) {
        res.render('recipes/show', { recipe, items} )
        })
    })
};

function deleteRecipe(req, res) {
    Recipe.findByIdAndDelete(req.params.id, function(err, recipe) {
        res.redirect('/recipes')
    }) 
};

function edit(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        res.render('recipes/edit', {title: 'Edit Recipe', recipe})
    })
};

function update(req, res) {
    Recipe.findByIdAndUpdate(req.params.id, req.body, function(err, recipe) {
        recipe.save(function(err) {
           if (err) return res.redirect(`/recipes/${recipe.id}/edit`)
           res.redirect(`/recipes/${recipe.id}`)
        })
    })
};