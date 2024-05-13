function myFunc(input) {
    let res = {}
    for (const key in input[0]) {
        res[input[0][key]] = key
    }

    return [res]
}

let obj = [
    {
        name: 'David',
        age: 20
    }
]

console.log(myFunc(obj))