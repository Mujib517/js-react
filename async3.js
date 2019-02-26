// 1. callback
// 2. Promise
// 3. async await
// 4. Observables
// 5. Generators

function fetchData(url) {
    var prms = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url) {
                var books = [{ id: 1, name: "Speaking JS", price: 100, inStock: true },
                { id: 2, name: "Eloquent JS", price: 80, inStock: true },
                { id: 3, name: "HeadFirst JS", price: 120, inStock: false }];

                resolve(books);
            }
            else reject("Invalid URL");
        }, 2000);
    });

    return prms;
}

async function call() {
    try {
        var data = await fetchData("http://google.com");
        console.log(data);
    }
    catch (err) {
        console.log(err);
    }
}

call();


// fetchData("http://google.com")
//     .then(function (res) {
//         console.log(res);
//     })
//     .catch(function (err) {
//         console.log(err);
//     });

// fetchData()
//     .then(function (res) {
//         console.log(res);
//     })
//     .catch(function (err) {
//         console.log(err);
//     });
