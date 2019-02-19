//Object Literal {}
//Constructor function (template)
// Object.create
// Javascript runtime modes: Sloppy, Strict
// 'use strict';
// prototype inheritance
// ES6, this, call, bind, apply
var baseMobile = {
    display: function () {
        console.log(this.width, this.height);
    }
};

var m1 = Object.create(baseMobile, {
    //prop descriptor
    width: { value: 10, writable: false, enumerable: true, configurable: true },
    height: { value: 5, enumerable: true },
    pi: { value: 3.14, enumerable: false, writable: false, configurable: false }
});

// m1.width = 500;

// console.log(m1);
// m1.display();
// m1.toString();
// m1.abc(); //error

// Object.defineProperty(m1, "width", {
//     writable: true,
//     enumerable: false,
//     configurable: false
// });



// function Mobile(color) {
//     this.height = 5;
//     this.width = 3;
//     this.color = color;
// }

// Mobile.prototype.call = function (number) {
//     console.log("Calling", number);
// }

// Mobile.prototype.display = function () {
//     console.log(this.width, this.height, this.color);
// }

// var m1 = new Mobile("Red");
// var m2 = new Mobile("Black");
// var m3 = new Mobile("Green");
// m1.call(1234566);
// m1.display();
// m2.display();


// function fn(a, b) {
//     'use strict';
//     var x = 100;
// }

// fn();

//development time
//dev
//QA
//stg
//prod