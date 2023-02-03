import Queue from ".";

describe("Test queue data structure", () => {
  it("Should be able to create an empty queue", () => {
    const queue = new Queue<number>();

    expect(queue.isEmpty()).toBe(true);
    expect(queue.size()).toBe(0);
    expect(queue.toString()).toBe("");
    expect(() => queue.peek()).toThrow(
      "Can not get element from an empty queue."
    );
  });

  it("Should be able to enqueue data", () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    expect(queue.size()).toBe(1);

    queue.enqueue(2);
    expect(queue.size()).toBe(2);
    expect(queue.toString()).toBe("1, 2");
  });

  it("Should be able to dequeue data", () => {
    const queue = new Queue<number>();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    const element = queue.dequeue();
    expect(element).toEqual(1);
    expect(queue.size()).toBe(2);
    expect(queue.peek()).toEqual(2);
    expect(queue.toString()).toBe("2, 3");
  });

  it("Should not be able to dequeue an empty queue", () => {
    const queue = new Queue<number>();
    expect(() => queue.dequeue()).toThrow("Can not dequeue an empty queue.");
  });

  it("Should be able to peek data", () => {
    const queue = new Queue<number>();
    queue.enqueue(3);
    queue.enqueue(2);

    expect(queue.peek()).toEqual(3);
  });

  it("Should not be able to peek an empty queue", () => {
    const queue = new Queue<number>();
    expect(() => queue.peek()).toThrow(
      "Can not get element from an empty queue."
    );
  });

  it("Should be able to clear the queue", () => {
    const queue = new Queue<number>();
    queue.enqueue(10);
    queue.enqueue(-3);

    expect(queue.size()).toBe(2);
    expect(queue.isEmpty()).toBe(false);
    expect(queue.toString()).toBe("10, -3");
    expect(queue.peek()).toEqual(10);

    queue.clear();
    expect(queue.size()).toBe(0);
    expect(queue.isEmpty()).toBe(true);
    expect(queue.toString()).toBe("");
    expect(() => queue.peek()).toThrow(
      "Can not get element from an empty queue."
    );
  });
});
