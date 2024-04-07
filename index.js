const playerGuess = 3
const correctAnswer = 3

/*
Challenge 
1. Refactor the if else statement to use a ternary operator.
*/

// let message2 = ''
// if (playerGuess === correctAnswer) {
//     message = 'Correct!'
// }
// else {
//     message = 'Wrong!'
// }

const message = playerGuess===correctAnswer ? "Correct" : "Wrong!"

console.log(message)