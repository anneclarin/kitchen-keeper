const express = require('express');
const router = express.Router();
const recipesCtrl = require('../controllers/recipes');

router.get('/', recipesCtrl.index);
router.get('/new', recipesCtrl.new);
// router.get('/:location/:id', itemsCtrl.edit);
router.post('/', recipesCtrl.create);
// router.put('/:location/:id', itemsCtrl.update);

module.exports = router;