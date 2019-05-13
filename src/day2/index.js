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
  for (let i = 0; i < inputArray.length - 1; i++) {
    for (let j = 1; j < inputArray.length; j++) {
      if (checkDifferences(inputArray[i], inputArray[j]) === 1) {
        return getCommonLetters(inputArray[i], inputArray[j])
      }
    }
  }

}

function checkDifferences (firstWord, secondWord) {
  let differences = 0
  for (let i = 0; i < firstWord.length; i++) {
    if (firstWord[i] !== secondWord[i]) {
      differences++
    }
  }
  return differences
}

function getCommonLetters (firstWord, secondWord) {
  let commonLetters = []
  for (let i = 0; i < firstWord.length; i++) {
    if (firstWord[i] === secondWord[i]) {
      commonLetters.push(firstWord[i])
    }
  }
  return commonLetters.join('')
}

module.exports = {
  solution1,
  solution2
}
