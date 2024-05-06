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

myFunc("One", "Two", "Three", "Four")

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

console.log(getMessage("Aldo"))