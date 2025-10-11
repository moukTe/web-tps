"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
var Repository = /** @class */ (function () {
    function Repository() {
        this.items = [];
    }
    Repository.prototype.add = function (item) {
        this.items.push(item);
    };
    Repository.prototype.remove = function (item) {
        var index = this.items.indexOf(item);
        if (index > -1)
            this.items.splice(index, 1);
    };
    Repository.prototype.getAll = function () {
        return this.items;
    };
    Repository.prototype.find = function (predicate) {
        return this.items.find(predicate);
    };
    return Repository;
}());
exports.Repository = Repository;
