const fs = require('fs')
const day01 = require('./src/Day01/index')

const inputForDay01 = fs.readFileSync('./src/Day01/input.txt', 'utf-8')
const result01 = day01.solution1(inputForDay01)
const result02 = day01.solution2(inputForDay01)

console.log('***** Day 01 *****')
console.log(`Solution 1 for day01: ${result01}`)
console.log(`Solution 2 for day01: ${result02}`)
