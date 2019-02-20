//ECMAScript ES4, ES5, ES6, ES7
// Chrome V8, IE Chakra, 
// ES (specs)
// class 
// literals, constructor fun, object.create and class
// let: Block scoped
// const: Block scoped
//string interpolation


var name = "John";
var age = 20;

// var str = name + " is " + age + " years old";
var str = `${name} is ${age} years old`;
console.log(str);


// function fn() {

//     if (true) {
//         //var function scoped

//         const obj = {
//             name: "mujib"
//         };

//         obj.newProp = "kfdajfkdaj";

//         // obj={};//error

//         console.log(obj);
//     }


// }

// fn();



// class BaseMobile {

//     constructor(){
//         console.log("Base mobile constructor");
//     }

//     display() {
//         console.log(this.width, this.height);
//     }
// }

// class Mobile extends BaseMobile {

//     constructor() {
//         super();
//         //state
//         this.width = 10;
//         this.height = 5;
//         this.color = "red";

//         console.log("inside init");
//     }

//     //behavior
//     call() {
//         console.log("Calling..");
//     }
// }

// var m = new Mobile();
// m.display();