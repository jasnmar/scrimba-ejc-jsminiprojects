const grades = [75, 83, 66, 43, 55, 99, 87, 16, 89, 64, 70, 80, 94, 77, 66, 73]

/*
Challenge
1. Use the .reduce() method to find the total of all of the students grades.
2. Do some simple maths to log out the class average. 
*/
const total = grades.reduce(function(total, current) {
    return total+current
})

const average = total / grades.length
console.log(`The class average is ${average}`)