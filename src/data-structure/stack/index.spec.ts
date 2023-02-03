import Stack from ".";

describe("Test stack data structure", () => {
  it("Should be able to create a empty stack", () => {
    const stack = new Stack<number>();

    expect(stack.isEmpty()).toBe(true);
    expect(stack.size()).toBe(0);
    expect(stack.toString()).toBe("");
    expect(() => stack.peek()).toThrow(
      "Can not get element from an empty stack."
    );
  });

  it("Should be able to push data", () => {
    const stack = new Stack<number>();
    stack.push(10);
    expect(stack.size()).toBe(1);

    stack.push(-3);
    expect(stack.size()).toBe(2);
    expect(stack.toString()).toBe("10, -3");
  });

  it("Should be able to pop data", () => {
    const stack = new Stack<number>();
    stack.push(10);
    stack.push(-3);
    stack.push(0);

    const element = stack.pop();
    expect(element).toEqual(0);
    expect(stack.size()).toBe(2);
    expect(stack.peek()).toEqual(-3);
    expect(stack.toString()).toBe("10, -3");
  });

  it("Should not be able to pop an empty stack", () => {
    const stack = new Stack<number>();
    expect(() => stack.pop()).toThrow(
      "Can not pop element from an empty stack."
    );
  });

  it("Should be able to peek data", () => {
    const stack = new Stack<number>();
    stack.push(10);
    stack.push(-3);

    expect(stack.peek()).toEqual(-3);
    expect(stack.toString()).toBe("10, -3");
  });

  it("Should be able to clear the stack", () => {
    const stack = new Stack<number>();
    stack.push(10);
    stack.push(-3);

    expect(stack.size()).toBe(2);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.toString()).toBe("10, -3");
    expect(stack.peek()).toEqual(-3);

    stack.clear();
    expect(stack.size()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
    expect(stack.toString()).toBe("");
    expect(() => stack.peek()).toThrow(
      "Can not get element from an empty stack."
    );
  });
});
