//Constructor function
//ES5
function Person(name) {
    //data
    this.name = name; //4bytes
    this.salary = 20000;//4 bytes

    //behavior. 4bytes
    // this.display = function () {
    //     console.log(this.name, this.salary);
    // }
}

Person.prototype.display = function () {
    console.log(this.name, this.salary);
}

var p1 = new Person("Mujib");
var p2 = new Person("Kalyan");
p2.display();
p1.display();

