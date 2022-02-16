import { Queue } from ".";

describe("Test queue data structure", () => {
  it("should be able to create a queue", () => {
    const queue = new Queue<number>();
    expect(queue).toBeDefined();
  });

  it("should be able to enqueue data", () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    expect(queue.size()).toBe(1);

    queue.enqueue(2);
    expect(queue.size()).toBe(2);
  });

  it("should be able to dequeue data", () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    const element = queue.dequeue();
    expect(element).toEqual(1);
    expect(queue.size()).toBe(2);
    expect(queue.peek()).toEqual(2);
  });

  it("should not be able to dequeue an empty queue", () => {
    const queue = new Queue<number>();
    expect(() => queue.dequeue()).toThrow("Can not dequeue an empty queue.");
  });

  it("should be able to peek data", () => {
    const queue = new Queue<number>();
    queue.enqueue(3);
    queue.enqueue(2);

    expect(queue.peek()).toEqual(3);
  });

  it("should not be able to peek an empty queue", () => {
    const queue = new Queue<number>();
    expect(() => queue.peek()).toThrow(
      "Can not get element from an empty queue."
    );
  });
});
