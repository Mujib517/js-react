//asyncronous js
// synchronous 
// single threaded

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




