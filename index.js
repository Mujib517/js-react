// Objects
// Properties Operations
// domain model

var person={
    name:"Mujib",
    DOJ: new Date(),
    role:"Senior Software Engineer",
    salary: 2000,
    'my property': 'akjakdjfkj'
};


//dot notation
//bracket notation

//reflection for-in
// for(var key in person){ //name, doj, salary, 
//     console.log(  person[key]  );
// }


// console.log( person["my property"] );
// console.log ( person["name"]  );
// console.log ( person["salary"]  );


// person.name = "Abc";


// console.log( person.name );
// console.log( person.salary );



// function add(a, b) {
//     if (typeof a == 'function') a = a();
//     if (typeof b == 'function') b = b();

//     console.log(a + b);
// }


// add(10, 20);
// add("Mujeeb", " Rahman");
// add([1, 2, 3], [4, 5, 6]);

// function first() {
//     return 100;
// }

// function second() {
//     return 200;
// }

// add(first, second);
// add(200, second);
// add(200, "Abc");

// //Alt+Shift+F
// // Option + Shift + F
// add(function() {
//     return 10;
// }, function () {
//     return 20;
// })

// // higher order function
// // Loosely typed
// //Ternary operator

// // var age = 10;

// // // var label;

// // if(age==10){
// //     lable="Kid";
// // }
// // else if(age==20){
// //     label="Young";
// // }
// // else{
// //     label="Rock";
// // }

// // var label = age == 10 ? "Kid": (age == 20 ? "Young": "Rock");


// //  var label = (age == 10) ? "Kid" : "Young"; //compact