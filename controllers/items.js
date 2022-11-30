const Item = require('../models/item');

module.exports = {
    index,
    new: newItem,
    create,
    delete: deleteItem,
    edit,
    update
};

function index(req, res) {
    Item.find({location: req.params.location}, function(err, results) {
        res.render(`${req.params.location}/index`, {items: results})
    })
  };

function newItem(req, res) {
    res.render('items/new', {title: 'New Item'})
};

function create(req, res) {
    const item = new Item(req.body)
    item.save(function(err) {
        if (err) return res.redirect('/items/new')
        res.redirect(`/items/${item.location}`)
    })
};

function deleteItem(req, res) {
    Item.findByIdAndDelete(req.params.id, function(err, item) {
        res.redirect(`/items/${item.location}`)
    })
}

function edit(req, res) {
    Item.findById(req.params.id, function(err, item) {
        res.render('edit/index', {title: 'Edit Item', item})
    })
};

function update(req, res) {
    Item.findByIdAndUpdate(req.params.id, req.body, function(err, item) {
        item.save(function(err) {
            if (err) return res.redirect(`/items/${item.id}/edit`)
            res.redirect(`/items/${item.location}`)
        })
    })
};