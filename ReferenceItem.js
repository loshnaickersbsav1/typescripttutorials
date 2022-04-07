"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Encyclopedia = exports.ReferenceItem = void 0;
var ReferenceItem = /** @class */ (function () {
    function ReferenceItem(title, year) {
        this.title = title;
        this.year = year;
        console.log('Creating a new ReferencItem..');
    }
    /**
     * Getter _publisher
     * @return {string}
     */
    ReferenceItem.prototype.get_publisher = function () {
        return this._publisher;
    };
    /**
     * Setter _publisher
     * @param {string} value
     */
    ReferenceItem.prototype.set_publisher = function (value) {
        this._publisher = value;
    };
    ReferenceItem.prototype.printItem = function () {
        console.log("".concat(this.title, " was published in ").concat(this.year, ".")); //template string
        console.log("Department : ".concat(ReferenceItem.department, ".")); //template string
    };
    ReferenceItem.department = 'Research';
    return ReferenceItem;
}());
exports.ReferenceItem = ReferenceItem;
var Encyclopedia = /** @class */ (function (_super) {
    __extends(Encyclopedia, _super);
    function Encyclopedia(title, year, edition) {
        var _this = _super.call(this, title, year) || this;
        _this.edition = edition;
        return _this;
    }
    Encyclopedia.prototype.printCitation = function () {
        console.log("citation:  + ".concat(this.title, " + ").concat(this.year));
    };
    Encyclopedia.prototype.printItem = function () {
        _super.prototype.printItem.call(this);
        console.log("edition:  + ".concat(this.edition, " + ").concat(this.year));
    };
    return Encyclopedia;
}(ReferenceItem));
exports.Encyclopedia = Encyclopedia;
