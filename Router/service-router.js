const express = require('express');
const services = require('../controllers/service-controller');
const router = express.Router();


//-- Initializing the route for the service-model schema 
router.route('/service').get(services)
module.exports = router;