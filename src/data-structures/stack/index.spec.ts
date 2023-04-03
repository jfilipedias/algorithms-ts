import { describe, it, expect, beforeEach } from 'vitest'
import { Stack } from '.'

describe('Test stack data structure', () => {
  let stack: Stack<number>

  beforeEach(() => {
    stack = new Stack<number>()
  })

  it('Should be able to create a empty stack', () => {
    expect(stack.isEmpty()).toBeTruthy()
    expect(stack.size()).toEqual(0)
    expect(stack.toString()).toEqual('')
    expect(() => stack.peek()).toThrow(
      'Can not get element from an empty stack.',
    )
  })

  it('Should be able to push data', () => {
    stack.push(10)

    expect(stack.size()).toEqual(1)

    stack.push(-3)

    expect(stack.size()).toEqual(2)
    expect(stack.toString()).toEqual('10, -3')
  })

  it('Should be able to pop data', () => {
    stack.push(10)
    stack.push(-3)
    stack.push(0)

    const element = stack.pop()

    expect(element).toEqual(0)
    expect(stack.size()).toEqual(2)
    expect(stack.peek()).toEqual(-3)
    expect(stack.toString()).toEqual('10, -3')
  })

  it('Should not be able to pop an empty stack', () => {
    expect(() => stack.pop()).toThrow(
      'Can not pop element from an empty stack.',
    )
  })

  it('Should be able to peek data', () => {
    stack.push(10)
    stack.push(-3)

    expect(stack.peek()).toEqual(-3)
  })

  it('Should be able to clear the stack', () => {
    stack.push(10)
    stack.push(-3)
    stack.clear()

    expect(stack.isEmpty()).toBeTruthy()
  })
})
