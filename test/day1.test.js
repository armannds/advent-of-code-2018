/* global it, describe */
const expect = require('chai').expect
const day1 = require('../src/day1/index')

describe('Day1 solution 1', () => {
  it('shall produce a sum of 3', () => {
    const input = '1\n-2\n3\n1'
    const result = day1.solution1(input)
    expect(result).to.equal(3)
  })

  it('shall produce a sum of 3', () => {
    const input = '1\n1\n1'
    const result = day1.solution1(input)
    expect(result).to.equal(3)
  })

  it('shall produce a sum of 0', () => {
    const input = '1\n1\n-2'
    const result = day1.solution1(input)
    expect(result).to.equal(0)
  })

  it('shall produce a sum of -6', () => {
    const input = '-1\n-2\n-3'
    const result = day1.solution1(input)
    expect(result).to.equal(-6)
  })
})

describe('Day1 solution 2', () => {
  it('shall reach frequency 2 twice', () => {
    const input = '1\n-2\n3\n1'
    const result = day1.solution2(input)
    expect(result).to.equal(2)
  })

  it('shall reach frequency 0 twice', () => {
    const input = '1\n-1'
    const result = day1.solution2(input)
    expect(result).to.equal(0)
  })

  it('shall reach frequency 10 twice', () => {
    const input = '3\n3\n4\n-2\n-4'
    const result = day1.solution2(input)
    expect(result).to.equal(10)
  })

  it('shall reach frequency 5 twice', () => {
    const input = '-6\n3\n8\n5\n-6'
    const result = day1.solution2(input)
    expect(result).to.equal(5)
  })

  it('shall reach frequency 14 twice', () => {
    const input = '7\n7\n-2\n-7\n-4'
    const result = day1.solution2(input)
    expect(result).to.equal(14)
  })
})
