const express = require('express');
const router = express.Router();
const itemsCtrl = require('../controllers/items');

router.get('/:location', itemsCtrl.index);
router.get('/new', itemsCtrl.new);
router.get('/:id/edit', itemsCtrl.edit);
router.put('/:id/update', itemsCtrl.update);
router.post('/:location', itemsCtrl.create);
router.delete('/:id', itemsCtrl.delete);

module.exports = router;
