//verb.
// var name : noun
function findMin(arr) {
    var min = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }

    return min;
}

// var arr = [10, 3, -8, 5, 15, 10];
// var res = findMin(arr);

// var arr2 = [10, -5, -8, 100, 20, -20];
// var res2 = findMin(arr2);
// console.log(res);
// console.log(res2);