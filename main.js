var express = require('express');
var app = express();
var hostname = 'localhost';
var port = 9000;
import todo from './todo.ts';
app.listen(9000, 'localhost', function() {
    console.log('Server ok, ' + hostname + ' : ' + port);
})

todo.add("blop");