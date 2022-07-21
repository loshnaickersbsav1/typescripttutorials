"use strict";
exports.__esModule = true;
var fs = require("fs");
function readFile(fileName, callback) {
    fs.readFile(fileName, "utf8", callback);
}
exports["default"] = readFile;
