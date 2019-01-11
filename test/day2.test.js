/* global it, describe */
const expect = require('chai').expect
const day2 = require('../src/day2/index')

describe('Day2 solution 1', () => {
  it('shall produce checksum of 12', () => {
    const input = 'abcdef\nbababc\nabbcde\nabcccd\naabcdd\nabcdee\nababab'
    const result = day2.solution1(input)
    expect(result).to.equal(12)
  })
})
