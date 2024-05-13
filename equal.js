function equal(a, b) {
    return JSON.stringify(a) === JSON.stringify(b)
}

console.log(equal({a: 1}, {a: 1}))