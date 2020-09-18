// Given a list of numbers and a number k, return whether any two numbers from the list add up to k.
// For example, given [10, 15, 3, 7] and k of 17, return true since 10 + 7 is 17.
// Bonus: Can you do this in one pass?

let numbers = [1, 15, 3, 3, 5, 7, 10]
let k = 17

const checkResult = (numArr, k) => {
    for (let i = 0; i < numArr.length; i++) {
        if (typeof(numArr[i + 1]) === "undefined") return false
        if ((numArr[i] + numArr[i + 1]) === k) return true 
    }
}

console.log(checkResult(numbers, k))