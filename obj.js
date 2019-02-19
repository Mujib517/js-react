//Objects
// Object literals
var person = {
    name: "Mujib",
    salary: 1000,

    //method
    display: function () {
        console.log(this.name, this.salary);
    }
};

var person2 = {
    name: "Kalyan",
    salary: 1000,

    //method
    display: function () {
        console.log(this.name, this.salary);
    }
};

var arr = [{ name: 'obj1' }, { name: 'obj2' }, { name: 'obj3' }];

for (var i = 0; i < arr.length; i++) {
    var obj = arr[i];
    console.log(obj.name);
}

// function fizzBuzz(n) {
//     if (n === 0) return;

//     if (n % 3 === 0 && n % 5 === 0) console.log("FizzBuzz");
//     else if (n % 3 === 0) console.log("Fizz");
//     else if (n % 5 === 0) console.log("Buzz");
// }