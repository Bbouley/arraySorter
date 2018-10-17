let testArr = [-3, 1, 4, 8, -6, -7, -13, 3, 7];
let testArr2 = [4, -8, 3, -2, 1, -7, 9, -10, -5]

let randomArrayGenerator = (arrLength) => {
    let testArray = [];
    for (let i = 0; i < arrLength; i++) {
        testArray.push((Math.round(Math.random()) * 2 - 1) * Math.ceil(Math.random() * 100))
    }
    return testArray;
}

let testArr3 = randomArrayGenerator(100);

let arraySorter = (arr) => {
    arr.forEach((el, ind) => {
        if (el > 0) {
            arr = swapWithLastNegative(arr, el, ind);
        }
    });
    return arr;
}

let swapWithLastNegative = (arr, el, ind) => {
    let lastInd = arr.length - 1;
    while (el > 0 && lastInd >= 0) {
        if (arr[lastInd] < 0 && lastInd > ind) {
            let lastNegative = arr[lastInd];
            arr[lastInd] = el;
            arr[ind] = lastNegative;
            break;
        }
        lastInd -= 1;
    }
    return arr;
}

console.log(arraySorter(testArr));
console.log(arraySorter(testArr2));
console.log(arraySorter(testArr3));