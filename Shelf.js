"use strict";
exports.__esModule = true;
var Shelf = /** @class */ (function () {
    function Shelf() {
        this._items = new Array();
    }
    Shelf.prototype.add = function (item) {
        this._items.push(item);
    };
    Shelf.prototype.getFirst = function () {
        return this._items[0];
    };
    Shelf.prototype.find = function (title) {
        return this._items.filter(function (item) { return item.title === title; })[0];
    };
    return Shelf;
}());
exports["default"] = Shelf;
