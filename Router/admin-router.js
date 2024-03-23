const express = require('express');
const adminController = require('../controllers/admin-controller');
const authMidleWare = require('../middleware/auth-middleware');
const adminMiddlewere = require('../middleware/admin-middlewere');
const router = express.Router();

router.route('/users').get(authMidleWare, adminMiddlewere, adminController.getAllUsers);

// --- fetching the user data for updation in Front-End 
router.route('/users/:id').get(authMidleWare, adminMiddlewere, adminController.getUsersById);

// --- user delete route
router.route('/users/delete/:id').delete(authMidleWare, adminMiddlewere, adminController.deleteUserById)

// --- Edit the user data
router.route('/users/update/:id').patch(authMidleWare, adminMiddlewere, adminController.updateUserById)


// -- all contact data and route
router.route('/contacts').get(authMidleWare, adminMiddlewere, adminController.getAllContacts)

// -- contact message and data delete
router.route('/contacts/delete/:id').delete(authMidleWare, adminMiddlewere, adminController.deleteContactById)


module.exports = router