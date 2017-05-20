var mongoose     = require('mongoose');
var Shoe = require('../models/shoe');

function find(req, res){
    Shoe.find({ deleted: false }, function(err, todos) {
        if (err)
            res.send(err);
        res.json(todos);
    });
}

// function create(req, res){
//     var todo = nesw Todo({
//         val: req.body.val,
//         deleted: req.body.deleted
//     })
//     todo.save(function (err, todo) {
//         if (err) { return next(err) }
//         res.json(201, todo)
//     });
// }

// function update(req, res){
//     console.log(req.body);
//     var updateData = {
//         deleted: req.body.deleted,
//         val: req.body.val
//     };
//     Todo.update({_id: req.body._id}, updateData, function(err,affected) {
//         if (err) { return next(err) }
//         res.json(200, affected)
//     });
// }

module.exports = {find};
