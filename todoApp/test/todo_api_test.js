var supertest = require('supertest');
var should = require('should');
var process = require('process');
var server = supertest.agent('http://localhost:3000');
var test_item = {name: 'Master Express JS',
                 completed: false,
                 note: 'Working hard...'};
var todo_item;

var create_todo_item_test_suit = function(){
  describe('post for create to do item', function(){
      it('should create a test item', function(done){
          server.post('/todos').send(test_item).end(function(err, res){
            res.body.name.should.equal(test_item.name);
            todo_item = res.body;
            created = true;
            done();
          });
      });
  });
};

var get_todo_item_test_suit = function(){
  describe('get for get itme inform',function(){
    it('should get the list contan test item',function(done){
      server.get('/todos').end(function(err, res){
        var bool = res.body.should.be.an.Array;
        done();
      });
    });
    it('should get test item',function(done){
      server.get('/todos/'+todo_item.id).end(function(err, res){
        res.body.name.should.equal(test_item.name);
        done();
      });
    });
  });
};

var delete_todo_item_suit = function(){
  describe('delete the test item', function(){
    it('should delet the item we just create', function(done){
      server.delete('/todos/' + todo_item.id).end(function(err, res){
        res.body.id.should.equal(todo_item.id);
        done();
      });
    });
  });
};

process.nextTick(function(){
  process.nextTick(delete_todo_item_suit);
  get_todo_item_test_suit();
});

create_todo_item_test_suit();
