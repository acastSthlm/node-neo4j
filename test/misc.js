/*** Generated by streamline 0.10.15 (callbacks) - DO NOT EDIT ***/(function() {
  var db, expect, neo4j;

  expect = require('chai').expect;

  neo4j = require('..');

  db = new neo4j.GraphDatabase('http://localhost:7474');

  this.misc = {
    'callback that throws error': function(next) {
      var called, timer;
      return next();
      called = false;
      timer = null;
      return db.getNodeById(0, function(err, node) {
        console.log('(temporary debugging) callback called');
        if (timer) {
          clearTimeout(timer);
        }
        if (called) {
          throw new Error("Callback called twice!");
        } else {
          called = true;
        }
        timer = setTimeout(next, 1000);
        return null.foo;
      });
    }
  };

}).call(this);
