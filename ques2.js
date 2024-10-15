"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Write a TypeScript function that adds two numbers and returns the result.
var AddTwo = function (n1, n2) {
    return n1 + n2;
};
console.log(AddTwo(2, 3));
var greet = function (p) {
    console.log("greeting ".concat(p.name));
};
greet({ name: "sjnd" });
//Write a function that takes a parameter of union type string | number and returns its length if it's a string, or the number itself if it's a number.
var getLength = function (s) {
    if (typeof s === "string") {
        return s.length;
    }
    else if (typeof s === "number") {
        return s;
    }
    return 0;
};
console.log(getLength("nne"));
console.log(getLength(333));
//Create a function that accepts an array of numbers and returns a new array where each number is multiplied by 2.
var numberMultiplyBy2 = function (arr) {
    var resultArr = [];
    resultArr[0] = 0;
    for (var index = 0; index < arr.length; index++) {
        resultArr[index] = arr[index] * 2;
    }
    return resultArr;
};
console.log(numberMultiplyBy2([1, 2, 3, 4]));
//Write a TypeScript class Animal with a constructor that accepts name and age. Add a method speak() that logs the animal's name and age.
var Animal = /** @class */ (function () {
    function Animal(name, age) {
        this.name = name;
        this.age = age;
    }
    Animal.prototype.speak = function () {
        console.log(this.name, this.age);
    };
    return Animal;
}());
var a = new Animal("hw", 2);
a.speak();
//Create a generic function in TypeScript that accepts an array and returns the first element of that array.
function func(arr) {
    return arr[0];
}
console.log(func([1, 2, 3, 4]));
//Write an enum in TypeScript for the days of the week (e.g., Monday, Tuesday, etc.). Create a function that takes a day and logs whether it's a weekday or weekend.
var days;
(function (days) {
    days[days["Sunday"] = 0] = "Sunday";
    days[days["Monday"] = 1] = "Monday";
    days[days["Tuesday"] = 2] = "Tuesday";
    days[days["Wednesday"] = 3] = "Wednesday";
    days[days["Thursday"] = 4] = "Thursday";
    days[days["Friday"] = 5] = "Friday";
    days[days["Saturday"] = 6] = "Saturday";
})(days || (days = {}));
function func2(day) {
    switch (day) {
        case 0:
        case 6:
            console.log("it is a weekend ");
            break;
        default:
            console.log("its is weekdays");
            break;
    }
}
func2(days.Sunday);
//Write a TypeScript function that takes an object with an unknown structure and ensures that a specific property (e.g., id) exists and is a number.
function func3(obj) {
    console.log(obj);
    if (obj.id) {
        if (typeof obj.id === "number") {
            return true;
        }
    }
    return false;
}
console.log(func3({ id: 3 }));
//Write a function that accepts a tuple of [string, number] and returns a formatted string combining the two values.
function func4(tuple) {
    return tuple[0] + tuple[1];
}
console.log(func4(["helll", 3]));
var Rectangle = /** @class */ (function () {
    function Rectangle(l, b) {
        var _this = this;
        this.calculateArea = function () {
            console.log("these are the length and breadth ".concat(_this.length, " and ").concat(_this.breadth));
            return _this.length * _this.breadth;
        };
        this.length = l;
        this.breadth = b;
    }
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle(r) {
        var _this = this;
        this.calculateArea = function () {
            console.log(" the radius is " + _this.radius);
            return 3.14 * _this.radius * _this.radius;
        };
        this.radius = r;
    }
    return Circle;
}());
var s = new Rectangle(3, 3);
console.log(s.calculateArea());
var c = new Circle(4);
console.log(c.calculateArea());
var func10 = function (arg) {
    var result = 0;
    for (var key in arg) {
        result += arg[key];
    }
    return result;
};
console.log(func10({}));
// [3,2,1,5,6]
function func12(arr) {
    for (var index = 0; index < arr.length; index++) {
        var ele1 = arr[index].value;
        for (var j = index; j < arr.length; j++) {
            var ele2 = arr[j].value;
            if (ele1 > ele2) {
                var temp = arr[index];
                arr[index] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
console.log(func12([
    { name: "k", value: 1 },
    { name: "hd", value: 3 },
    { name: "jj", value: 2 },
]));
