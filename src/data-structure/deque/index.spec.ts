import Deque from ".";

describe("Test deque data structure", () => {
  it("Should be able to create an empty deque", () => {
    const deque = new Deque<number>();

    expect(deque.isEmpty()).toBe(true);
    expect(deque.size()).toBe(0);
    expect(deque.toString()).toBe("");
  });

  it("Should be able to add data to deque front", () => {
    const deque = new Deque<number>();
    deque.addFront(1);
    expect(deque.size()).toBe(1);
    expect(deque.isEmpty()).toBe(false);

    deque.addFront(2);
    expect(deque.size()).toBe(2);
    expect(deque.toString()).toBe("2, 1");

    deque.removeFront();
    deque.addFront(3);
    expect(deque.size()).toBe(2);
    expect(deque.toString()).toBe("3, 1");
  });

  it("Should be able to add data to deque back", () => {
    const deque = new Deque<number>();
    deque.addBack(1);
    expect(deque.size()).toBe(1);
    expect(deque.isEmpty()).toBe(false);

    deque.addBack(2);
    expect(deque.size()).toBe(2);
    expect(deque.toString()).toBe("1, 2");
  });

  it("Should be able to remove data to deque front", () => {
    const deque = new Deque<number>();
    deque.addBack(1);
    deque.addBack(2);
    deque.addBack(3);
    expect(deque.size()).toBe(3);
    expect(deque.toString()).toBe("1, 2, 3");
    expect(deque.isEmpty()).toBe(false);

    deque.removeFront();
    expect(deque.size()).toBe(2);
    expect(deque.toString()).toBe("2, 3");
  });

  it("Should be able to remove data to deque back", () => {
    const deque = new Deque<number>();
    deque.addBack(1);
    deque.addBack(2);
    deque.addBack(3);
    expect(deque.size()).toBe(3);
    expect(deque.toString()).toBe("1, 2, 3");
    expect(deque.isEmpty()).toBe(false);

    deque.removeBack();
    expect(deque.size()).toBe(2);
    expect(deque.toString()).toBe("1, 2");
  });

  it("Should not be able to remove data from empty queue", () => {
    const deque = new Deque<number>();

    expect(() => deque.removeFront()).toThrow(
      "Can not remove element from an empty deque."
    );
    expect(() => deque.removeBack()).toThrow(
      "Can not remove element from an empty deque."
    );
  });

  it("Should be able to peek front data", () => {
    const deque = new Deque<number>();
    deque.addBack(3);
    deque.addBack(2);

    expect(deque.peekFront()).toEqual(3);
  });

  it("Should be able to peek back data", () => {
    const deque = new Deque<number>();
    deque.addBack(3);
    deque.addBack(2);

    expect(deque.peekBack()).toEqual(2);
  });

  it("Should not be able to peek an empty queue", () => {
    const deque = new Deque<number>();

    expect(() => deque.peekFront()).toThrow(
      "Can not get element from an empty deque."
    );
    expect(() => deque.peekBack()).toThrow(
      "Can not get element from an empty deque."
    );
  });

  it("Should be able to clear the queue", () => {
    const deque = new Deque<number>();
    deque.addBack(10);
    deque.addBack(-3);

    expect(deque.size()).toBe(2);
    expect(deque.toString()).toBe("10, -3");

    deque.clear();
    expect(deque.size()).toBe(0);
    expect(deque.isEmpty()).toBe(true);
    expect(deque.toString()).toBe("");
  });
});
