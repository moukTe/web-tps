function identity(value) {
    return value;
}
;
function getFirst(arr) {
    return arr[0];
}
;
// 3. Repository class
var Repository = /** @class */ (function () {
    function Repository() {
        this.tab = [];
    }
    Repository.prototype.add = function (item) {
        this.tab.push(item);
    };
    Repository.prototype.remove = function (index) {
        this.tab.splice(index, 1);
    };
    Repository.prototype.getAll = function () {
        return this.tab;
    };
    return Repository;
}());
