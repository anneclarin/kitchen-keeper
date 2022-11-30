const express = require('express');
const router = express.Router();
const itemsCtrl = require('../controllers/items');

router.get('/:location', itemsCtrl.index);
router.get('/new', itemsCtrl.new);
router.get('/:id/edit', itemsCtrl.edit);
router.post('/:location', itemsCtrl.create);
router.delete('/:id', itemsCtrl.delete);
router.put('/:id', itemsCtrl.update);

module.exports = router;
