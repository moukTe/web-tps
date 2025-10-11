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
//1.class person
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hi, I'm ".concat(this.name, ", ").concat(this.age, " years old."));
    };
    return Person;
}());
//2.etudiant
var Etudiant = /** @class */ (function (_super) {
    __extends(Etudiant, _super);
    function Etudiant(name, age, school) {
        var _this = _super.call(this, name, age) || this;
        _this.school = school;
        return _this;
    }
    return Etudiant;
}(Person));
//3.shape abstract
var Shape = /** @class */ (function () {
    function Shape() {
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(r) {
        var _this = _super.call(this) || this;
        _this.r = r;
        return _this;
    }
    Circle.prototype.area = function () {
        return Math.PI * Math.pow(this.r, 2);
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(w, h) {
        var _this = _super.call(this) || this;
        _this.w = w;
        _this.h = h;
        return _this;
    }
    Rectangle.prototype.area = function () {
        return this.w * this.h;
    };
    return Rectangle;
}(Shape));
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
    }
    Car.prototype.drive = function () {
        console.log("".concat(this.model, " is driving..."));
    };
    return Car;
}());
var karhabti = new Car("Golf5");
karhabti.drive();
