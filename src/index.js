const fs = require('fs')
const day1 = require('./day1/index')
const day2 = require('./day2/index')

const inputDay1 = fs.readFileSync('./src/day1/input.txt', 'utf-8')
const day1part1 = day1.solution1(inputDay1)
const day1part2 = day1.solution2(inputDay1)

console.log('***** Day 1 *****')
console.log(`Solution 1 for day 1: ${day1part1}`)
console.log(`Solution 2 for day 1: ${day1part2}`)

const inputDay2 = fs.readFileSync('./src/day2/input.txt', 'utf-8')
const day2part1 = day2.solution1(inputDay2)
const day2part2 = day2.solution2(inputDay2)

console.log('***** Day 2 *****')
console.log(`Solution 1 for day 2: ${day2part1}`)
console.log(`Solution 2 for day 2: ${day2part2}`)
