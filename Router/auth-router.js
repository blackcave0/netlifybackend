/* In express.js express.Router() is a mini express application without all the srver configtations bu with the ability to define routes, middleware, and even have it own set of route handlers. It allows you to modularize yuor routes and middleware to keep your code organized and maintainable */

const express = require('express');
const authControl = require('../controllers/auth-controller');
const router = express.Router();
const {signupSchema, loginSchema} = require('../validators/auth-validator');
const validate = require('../middleware/validate-middleware')
const authMiddleWare = require('../middleware/auth-middleware')
/* router.get('/' ,(req, resp)=>{
  resp.send('Hello from router side')
}) */

router.route('/').get(authControl.Home)
router.route('/register').post(validate(signupSchema),authControl.Registration)
router.route('/login').post(validate(loginSchema),authControl.Login)

// -- JsonWebToken Route
router.route('/users').get(authMiddleWare, authControl.Users);

module.exports = router;