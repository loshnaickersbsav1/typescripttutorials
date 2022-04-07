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
/**
 *
 * @param item
 *      obj a
 *      obj b extends a -this referes to car ; polymorphic cause it represents
 *
 *      createfluent API for books
 */
var LibraryBook = /** @class */ (function () {
    function LibraryBook() {
    }
    LibraryBook.prototype.checkout = function () {
        console.log('checkout book');
        return this;
    };
    LibraryBook.prototype.checkin = function () {
        //console.log('checking in a book.');
        if (this instanceof ChildrensBook) {
            console.log('Child checking in a book.');
        }
        if (this instanceof ElectronicBook) {
            console.log('electonic checking in a book.');
        }
        return this;
    };
    return LibraryBook;
}());
var ChildrensBook = /** @class */ (function (_super) {
    __extends(ChildrensBook, _super);
    function ChildrensBook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChildrensBook.prototype.Clean = function () {
        console.log('cleaning a book.');
        return this;
    };
    return ChildrensBook;
}(LibraryBook));
var ElectronicBook = /** @class */ (function (_super) {
    __extends(ElectronicBook, _super);
    function ElectronicBook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElectronicBook.prototype.RemoveFromCustomerDevice = function () {
        console.log('remove');
        return this;
    };
    return ElectronicBook;
}(LibraryBook));
var kidbook = new ChildrensBook();
kidbook.checkin() //checkin is inherited from Librarybook but still belongs to Childrens book, chilfdrens book returned.
    .Clean() // therefore clean can be called
    .checkout(); // then checkpit which also returns children book obj.
var elec = new ElectronicBook();
elec.checkin() //checkin is inherited from Librarybook but still belongs to Childrens book, chilfdrens book returned.
    .RemoveFromCustomerDevice() // therefore clean can be called
    .checkout(); // then checkpit which also returns children book obj.
