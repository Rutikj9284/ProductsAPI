const express = require('express');
const {getAllProducts, getAllProductsTesting} = require('../controller/productControllers');
const router = express.Router();

router.route('/').get(getAllProducts);
router.route('/testing').get(getAllProductsTesting);

module.exports = router;