import { describe, it, expect } from 'vitest'
import { Queue } from '.'

describe('Test queue data structure', () => {
  it('Should be able to create an empty queue', () => {
    const queue = new Queue<number>()

    expect(queue.isEmpty()).toBeTruthy()
    expect(queue.size()).toEqual(0)
    expect(queue.toString()).toEqual('')
    expect(() => queue.peek()).toThrow(
      'Can not get element from an empty queue.',
    )
  })

  it('Should be able to enqueue data', () => {
    const queue = new Queue<number>()
    queue.enqueue(1)

    expect(queue.size()).toEqual(1)

    queue.enqueue(2)

    expect(queue.size()).toEqual(2)
    expect(queue.toString()).toEqual('1, 2')
  })

  it('Should be able to dequeue data', () => {
    const queue = new Queue<number>()
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)

    const element = queue.dequeue()

    expect(element).toEqual(1)
    expect(queue.size()).toEqual(2)
    expect(queue.peek()).toEqual(2)
    expect(queue.toString()).toEqual('2, 3')
  })

  it('Should not be able to dequeue an empty queue', () => {
    const queue = new Queue<number>()

    expect(() => queue.dequeue()).toThrow('Can not dequeue an empty queue.')
  })

  it('Should be able to peek data', () => {
    const queue = new Queue<number>()
    queue.enqueue(3)
    queue.enqueue(2)

    expect(queue.peek()).toEqual(3)
  })

  it('Should not be able to peek an empty queue', () => {
    const queue = new Queue<number>()

    expect(() => queue.peek()).toThrow(
      'Can not get element from an empty queue.',
    )
  })

  it('Should be able to clear the queue', () => {
    const queue = new Queue<number>()
    queue.enqueue(10)
    queue.enqueue(-3)
    queue.clear()

    expect(queue.isEmpty()).toBeTruthy()
  })
})
