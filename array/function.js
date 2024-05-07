// function declaration

function sumNumber(num1, num2) {
    let result = num1 + num2
    return result
}

let x = sumNumber(20, 30)

// console.log(x)
// console.log(sumNumber(10, 5))

function reverseWord(word) {
    let result = ""

    for (let i = word.length - 1; i >= 0; i--) {
        result += word.charAt(i)
    }

    return result
}

// console.log(reverseWord("purwadhika"))
// console.log(reverseWord("indonesia"))


function multiply(a, b=1) {
    return a * b
}

// console.log(multiply(10)) //penggunaan default parameter 

function myFunc(a, b, ...more) {
    console.log(a)
    console.log(b)
    console.log(more)
}

// myFunc("One", "Two", "Three", "Four")

// nested function

function getMessage(firstName) {
    function sayHello() {
        return `Hallo ${firstName}.`
    }

    function welcomeMessage() {
        return `Welcome to Purwadhika!`
    }

    return sayHello() + welcomeMessage()
}

// console.log(getMessage("Aldo"))

// closure function

function greeting(name) {
    const defaultMessage = "Hello "

    return function() {
        return defaultMessage + name
    }
}

const greetingDavid = greeting("David")
// console.log(greetingDavid())

// currying function
function multiplier(factor) {
    return function(number) {
        return factor * number
    }
}

const mul3 = multiplier(3)
const mul5 = multiplier(5)
// console.log(mul3(3))
// console.log(mul5(5))

// recursive function
function countDown(fromNumber) {
    console.log(fromNumber)

    let nextNumber = fromNumber - 1

    if (nextNumber > 0) {
        countDown(nextNumber)
    }
}

// countDown(3)

// Arrow Function\
const square = (number) => number * number
// console.log(square(19))