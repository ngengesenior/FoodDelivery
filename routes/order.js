const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const order_controller = require('../controllers/order.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', order_controller.test);
router.get('/', order_controller.all);

router.post('/:cust/create', order_controller.create);

router.get('/:id', order_controller.details);


router.put('/:id', order_controller.update);

router.delete('/:id', order_controller.delete);


module.exports = router;