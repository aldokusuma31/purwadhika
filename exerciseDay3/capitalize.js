// Write a code to capitalize the first letter of each word in a string

let word = "hello purwadhika wonosobo" // Hello Purwadhika Wonosobo
let result = ""

for (let i = 0; i < word.length; i++) {
    if (i == 0 || word.charAt(i - 1) == " "){
        result +=word.charAt(i).toUpperCase()
    } else {
        result += word.charAt(i).toLowerCase()
    }
}

console.log(result)