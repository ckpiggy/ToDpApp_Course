var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var TODOS_FILE = path.join(__dirname, '../data/data.json');

//callback will pass err, todos
var get_todos = function(callback){
  fs.readFile(TODOS_FILE, function(err, data){
    var todos;
    if (err) {
      callback(err, null);
    }else{
      todos = JSON.parse(data);
      callback(null, todos);
    }
  });
};

//callback will pass err
var set_todos = function(todos, callback){
  fs.writeFile(TODOS_FILE, JSON.stringify(todos, null, 4), function(err) {
    if (err) {
      callback(err);
    }else{
      callback(null);
    }
  });
};


router.get('/', function(req, res, next){
  get_todos(function(err, todos){
    if (err) {
      res.send(err);
    }else{
      res.json(todos);
    }
  });
});

router.post('/', function(req, res, next){
  get_todos(function(err, todos){
    var todo;
    if (err) {
      res.send(err);
    }else{
      todo = {name: req.body.name,
              note: req.body.note,
              completed: false,
              id: todos.length,
              update_at: Date.now()};
      todos.push(todo);
      set_todos(todos, function(err){
        if (err) {
          res.send(err);
        }else{
          res.json(todo);
        }
      });
    }
  });
});

router.get('/:id',function(req, res, next){
  get_todos(function(err, todos){
    var id = parseInt(req.params.id);
    if (todos.length <= id) {
      res.send(new Error('out of bound!'));
    }else{
      res.json(todos[id]);
    }
  });
});

router.put('/:id',function(req, res, next){
  get_todos(function(err, todos){
    var newTodo, id;
    if (err) {
      res.send(err);
    }else{
      id = parseInt(req.params.id);
      if (todos.length <= id) {
        res.send(new Error('out of bound!'));
      }else{
        newTodo = {name: req.body.name,
                   note: req.body.note,
                   completed: false,
                   id: id,
                   update_at: Date.now()};
        todos[id] = newTodo;
        set_todos(todos, function(err){
          if (err) {
            res.send(err);
          }else{
            res.json(newTodo);
          }
        });
      }
    }
  });
});

router.delete('/:id',function(req, res, next){
	get_todos(function(err, todos){
    var id = parseInt(req.params.id);
    var deleted;
    if (err) {
      res.send(err);
    }else{
      if (id > -1) {
        deleted = todos[id];
        todos.splice(id, 1);
      }
      set_todos(todos, function(err){
        if (err) {
          res.send(err);
        }else{
          console.log(deleted);
          res.json(deleted);
        }
      });
    }
  });
});

module.exports = router;
