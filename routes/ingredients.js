const express = require('express');
const router = express.Router();
const ingredientsCtrl = require('../controllers/ingredients');

router.post('/recipes/:id/ingredients', ingredientsCtrl.create);

module.exports = router;