function FizzBuzz(n) {
    let res = []

    for(let i = 1; n >= i; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            res.push("FizzBuzz")
        } else if (i % 3 === 0) {
            res.push("Fizz")
        } else if (i % 5 === 0){
            res.push("Buzz")
        } else {
            res.push(i)
        }
    }
    return res.join(", ")
}

console.log(FizzBuzz(15))

