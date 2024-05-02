/* write a code to convert celcius to fahrenheit
    F = (Cx1.8) + 32
      = (Cx9/5) + 32
*/

let c = 60
const f = (c * 1.8) + 32

console.log(f)

// write a code to check whether the number is odd or even

let n = 25
let x = (n % 2) 

if(x === 1) {
  console.log("Bilangan Ganjil")
} else if(x === 0) {
  console.log("Bilangan Genap")
}

console.log(x == 0 ? "Even number" : "Odd number") //mas ilham

// Write a code to check whether the number is prime number or not

// const prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997]

// let a = 4
// if(a === prime) {
//   console.log("Ini contoh bilangan Prima")
// } else if (a !== prime) {
//   console.log("Ini Bukan merupakan bilangan Prima")
// }

// pembahasan
// 2, 3, 5, 7, 11, 13 .... 2 pembagi habis

let number = 7
let pembagi = 0 

for (let i = 1; i <= number; i++) {
  if (number % i === 0){
    pembagi++
  }
}

console.log(pembagi == 2 ? "Prime number" : "Not Prime number")

// Write a code to find the sum of the numbers 1 to N

let o = 5
let result = 0

for (let a = 1; a<= o; a++) {
  result += a
}

console.log(result)

// Write a code to find factorial of a number

let j = 6
let hasil = 1

for (let w = j; w > 0; w--) {
  hasil *= w
}

console.log(hasil)

// Write a code to print the first N fibonacci numbers

let h = 15
let y = 0
let m = 1
let nextNumber = 0

for (let l = 1; l < h; l++) {
  nextNumber = y + m
  y = m
  m = nextNumber
}

console.log(m)