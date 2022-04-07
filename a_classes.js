"use strict";
exports.__esModule = true;
exports.PublicLibrarian = exports.Researcher = exports.Employee = exports.UnversityLibrarian = void 0;
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.addToSchedule = function () {
        console.log('Employee added to schedule. ');
    };
    Employee.prototype.logTitle = function () {
        console.log("Employee has title ".concat(this.tilte, ". "));
    };
    return Employee;
}());
exports.Employee = Employee;
var Researcher = /** @class */ (function () {
    function Researcher() {
    }
    Researcher.prototype.doResearch = function (topic) {
        console.log("Do research on ".concat(topic, "."));
    };
    return Researcher;
}());
exports.Researcher = Researcher;
var UnversityLibrarian = /** @class */ (function () {
    function UnversityLibrarian() {
    }
    UnversityLibrarian.prototype.assistCustomer = function (custName) {
        console.log("".concat(this.name, "  is assisting ").concat(custName));
    };
    return UnversityLibrarian;
}());
exports.UnversityLibrarian = UnversityLibrarian;
var PublicLibrarian = /** @class */ (function () {
    function PublicLibrarian() {
    }
    PublicLibrarian.prototype.assistCustomer = function (custName) {
        console.log('Assisting customer.');
    };
    PublicLibrarian.prototype.teachCommunity = function () {
        console.log('Teaching community . ');
    };
    return PublicLibrarian;
}());
exports.PublicLibrarian = PublicLibrarian;
