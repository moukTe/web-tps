//1. sum
function add(a, b) {
    return a + b;
}
//2. greet
function greet(name, age) {
    if (age)
        console.log("Hello ".concat(name, ", you are ").concat(age, " years old."));
    else
        console.log('Hello ' + name + '!');
}
//3. power
function power(base, exp) {
    if (exp === void 0) { exp = 1; }
    return Math.pow(base, exp);
}
function combine(a, b) {
    return a + b;
}
