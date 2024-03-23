const express = require('express');
const router = express.Router();
const contactForm = require('../controllers/contact-form');

router.route('/contact').post(contactForm)
module.exports = router