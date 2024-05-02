let age = 17
if (age >= 17) {
    console.log("You can now create an ID Card")
} else {
    console.log("You are not old enough to create an ID Card")
}

// Else if statement

let grade = "B"

if (grade === "A") {
    console.log("Excelent Result")
} else if (grade === "B") {
    console.log("Great Result!")
}

// Switch Case

let now = new Date()
let day = now.getDay() //2

switch (day) {
    case 0:
        console.log("Minggu")
        break
    case 1:
        console.log("Senin")
        break
    case 2:
        console.log("Selasa")
        break
    case 3:
        console.log("Rabu")
        break
    case 4:
        console.log("Kamis")
        break
    case 5:
        console.log("Jumat")
        break
    case 6:
        console.log("Sabtu")
        break
}

// ternary Operator

let kata = "JavaScript"

console.log(kata === "JavaScript" ? "JavaScript" : "not JavaScript")