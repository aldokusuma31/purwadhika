// Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are of the same length.

function calculate(arr1, arr2) {
    let res = []

    for (let i = 0; i < arr1.length; i++) {
        res.push(arr1[i] + arr2[i])
    }

    return res
}

// console.log(calculate([1, 2, 3], [3, 2, 1]))

// menggunakan variabel penampung
let num1 = [1, 2, 3]
let num2 = [3, 2, 1]
console.log(calculate(num1, num2))