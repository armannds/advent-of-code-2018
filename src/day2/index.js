function solution1 (input) {
  const inputArray = input.split('\n')
  let twos = 0
  let threes = 0
  inputArray.forEach(row => {
    let tally = {}
    row.split('').forEach(char => {
      tally[char] = (tally[char] !== undefined) ? tally[char] + 1 : 1
    })
    const count = new Set(Object.values(tally))
    if (count.has(2)) {
      twos++
    }
    if (count.has(3)) {
      threes++
    }
  })
  return twos * threes
}

function solution2 (input) {
  const inputArray = input.split('\n')
}

module.exports = {
  solution1,
  solution2
}
