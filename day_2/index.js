// Given an array of integers, return a new array such that each 
// element at index i of the new array is the product of all the 
// numbers in the original array except the one at i.

let val = 1
let output = []
let input = [1, 2, 3, 4, 5]

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
        if (i === j) {
            val *= 1
        } else {
            val *= input[j]
        }
    }
    output.push(val)
    val = 1
}

console.log(output)