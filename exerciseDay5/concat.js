// Write a function that takes an array of words and returns a string by concatenating the words in the array, separated by commas and - the last word - by an 'and'.

function concat(arr) {
    let lastWord = arr.pop()
    return arr.join(",") + `, and ${lastWord}`
}

console.log(concat(["apple", "banana", "cherry", "date"]))