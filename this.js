
var mobile = {
    name: "Mobile",
    display: function (p1, p2) {
        function inner() {
            console.log(this.name, p1, p2);
        }

        inner();
    }
};

var rect = {
    name: "Rectangle"
};

var sq = {
    name: "Square"
};

// mobile.display("p1","p2");


// mobile.display(); //mobile object

// var fn = mobile.display;
// fn(); //undefined. Global object

// mobile.display.call(rect, "param1", "param2");
// mobile.display.apply(rect, ["param1", "param2"]); //apply-array
//runtime polymorphism
// var newFn = mobile.display.bind(rect, "p1", "p2"); //fixes this context
// newFn.apply(sq); //call it using sq context
