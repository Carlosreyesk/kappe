var express = require('express');
var app = express();
var shoesCtrl = require('../controllers/shoes');

var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
// router.get('/', function(req, res) {
//     res.json({ message: 'hooray! welcome to our api!' });
// });

router.route('/shoes')

    // get all the todos (accessed at GET http://localhost:8080/api/todos)
    .get(shoesCtrl.find);
    // .post(todosCtrl.create)
    // .put(todosCtrl.update);

module.exports = router;
