let word = "madam"
let reverseWord = "" // kata yang dibalik

// console.log(word.charAt())

for(let i = word.length - 1; i >= 0; i--) {
    // console.log(word.charAt(i))
    reverseWord += word.charAt(i)
}

if (word == reverseWord) {
    console.log(`${word} is palindrome`)
} else {
    console.log(`${word} is not palindrome`)
}