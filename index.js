const speedWarning = (speedLimit, speed) => {
    if(speed>speedLimit) {
        return `You are going at ${speed} mph!`
    }    
}

console.log(speedWarning(30, 40))

/*
Challenge
1. Refactor this function to use an arrow function.
2. Make sure you write the least code possible.
*/