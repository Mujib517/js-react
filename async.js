//asyncronous js
// synchronous 
// single threaded
// non blocking

// asyncronous operations:
// 1. timers (setTimeout, setInterval)
// 2. db operations
// 3. File read/write
// 4. Web svc calls


// setInterval(function () {
//     console.log("hello");
// }, 1000);

// function add(a, b) {
//     a++;
//     b++;
//     a + 10;

//     return a + b;
// }

// var res = add(10, 20);
// console.log(res);

//entity 2
function addAsync(a, b, done) {
    // console.log("execution started");

    setTimeout(() => {
        // console.log("Calculations started");
        a++;
        b++;
        // console.log("calculation completed");
        var c = a + b;
        done(c);
    }, 3000);

    // console.log("execution stopped");
}


//entity 1
// function callback(res) {
//     console.log(res);
// }
// addAsync(10, 20, callback);

addAsync(10, 20, res => console.log(res));




