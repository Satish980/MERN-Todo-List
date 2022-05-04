const express = require('express');
const Todo = require('../models/todo');
const router = express.Router();

router.get('/todos', (req, res, next) => {
    //get placeholder
    Todo.find({}, 'action')
        .then((data) => res.json(data))
        .catch(next);
})

router.post('/todos', (req, res, next) => {
    //post placeholder
    console.log(req);
    if (req.body.action) {
        console.log(req.body.action)
        Todo.create(req.body)
            .then((data) => res.json(data))
            .catch(next);
    }
    else {
        console.log("Error")
        res.json({
            error: 'The todo text field is required'
        });
    }
})

router.delete('/todos/:id', (req, res, next) => {
    //delete placeholder
    Todo.findOneAndDelete({ _id: req.params.id })
        .then((data) => res.json(data))
        .catch(next);
})

module.exports = router;

