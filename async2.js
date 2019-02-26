
function addAsync(a, b) {

    var prms = new Promise(function (resolve, reject) {

        setTimeout(() => {
            if (a === 0) reject("Wrong input");
            else {
                a++;
                b++;
                var c = a + b;
                resolve(c);
            }
        }, 2000);
    });


    return prms;
}

addAsync(10, 20)
    .then(function (res) {
        console.log(res);
    })
    .catch(function (err) {
        console.log(err);
    });

addAsync(0, 20)
    .then(function (res) {
        console.log(res);
    })
    .catch(function (err) {
        console.log(err);
    });


// function addAsync(a, b) {
//     console.log("exuecting");
//     var prms = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             a++;
//             b++;
//             a = a + 10;
//             var c = a + b;
//             reject("Failed to exuecte");
//         }, 3000);
//     });

//     return prms;
// }


// //resolve / rejecting 
// var p = addAsync(10, 20);
// p.then(res => console.log(res))
//     .catch(err => console.log(err));

