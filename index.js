import { studentsArr } from '/studentsArr.js'

function calculateClassAverage(studentsArr) {
    const totalGrades = studentsArr.reduce((total, cStudents) => {
        return total + cStudents.grade
    }, 0)
    return totalGrades / studentsArr.length
}

console.log(calculateClassAverage(studentsArr))