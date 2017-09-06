"use strict";
exports.__esModule = true;
var express = require('express');
var app = express();
var hostname = 'localhost';
var port = 9000;
var todo_ts_1 = require("./todo.ts");
app.listen(9000, 'localhost', function() {
    console.log('Server ok, ' + hostname + ' : ' + port);
});
todo_ts_1["default"].add("blop");