const express = require('express');
const router = express.Router();
const recipesCtrl = require('../controllers/recipes');

router.get('/', recipesCtrl.index);
router.get('/new', recipesCtrl.new);
router.get('/:id', recipesCtrl.show);
router.get('/:id/edit', recipesCtrl.edit);
router.put('/:id/update', recipesCtrl.update);
router.post('/', recipesCtrl.create);
router.delete('/:id', recipesCtrl.delete);

module.exports = router;