/**
 * Starting with a frequency of zero, what is the resulting frequency after all of the changes in frequency have been applied?
 */
function solution1 (input) {
  const inputArray = input.split('\n').map(Number)
  let result = inputArray.reduce((sum, currentItem) => sum + currentItem, 0)
  return result
}

/**
 * What is the first frequency your device reaches twice?
 */

function solution2 (input) {
  const inputArray = input.split('\n').map(Number)
  const seen = new Set()
  let frequency = 0
  while (true) {
    for (const value of inputArray) {
      seen.add(frequency)
      frequency += value
      if (seen.has(frequency)) {
        return frequency
      }
    }
  }
}

module.exports = {
  solution1,
  solution2
}
