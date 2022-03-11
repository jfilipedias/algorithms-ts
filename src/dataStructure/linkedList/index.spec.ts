import LinkedList from ".";

describe("Test linked list data structure", () => {
  it("Should be able to create an empty linked list", () => {
    const list = new LinkedList<number>();

    expect(list.size()).toBe(0);
    expect(list.toString()).toBe("");
    expect(() => list.getAt(0)).toThrow("Index out of range.");
    expect(() => list.getFirst()).toThrow(
      "Can not get element from an empty list."
    );
    expect(() => list.getLast()).toThrow(
      "Can not get element from an empty list."
    );
  });

  it("Should be able to add multiple elements to the list", () => {
    const list = new LinkedList<number>();
    list.push(9);
    list.push(13);
    list.push(0);

    expect(list.size()).toBe(3);
    expect(list.toString()).toBe("9, 13, 0");
  });

  it("Should be able to prepend element to the list", () => {
    const list = new LinkedList<number>();
    list.prepend(9);
    list.prepend(13);
    list.prepend(0);

    expect(list.size()).toBe(3);
    expect(list.toString()).toBe("0, 13, 9");
  });

  it("Should be able to insert element to the list", () => {
    const list = new LinkedList<number>();
    list.push(37);
    list.push(0);

    list.insert(-12, 0);
    list.insert(-13, 1);
    list.insert(69, 2);

    expect(list.size()).toBe(5);
    expect(list.toString()).toBe("-12, -13, 69, 37, 0");
  });

  it("Should not be able to insert a element to a no-existing index", () => {
    const list = new LinkedList<number>();
    expect(() => list.insert(13, 2)).toThrow("Index out of range.");

    list.push(9);
    expect(() => list.insert(13, 2)).toThrow("Index out of range.");
  });

  it("Should be able to delete a existing element", () => {
    const list = new LinkedList<number>();
    list.push(9);
    list.push(-2);
    list.push(13);
    list.push(0);
    list.remove(9);

    expect(list.size()).toBe(3);
    expect(list.toString()).toBe("-2, 13, 0");

    list.remove(13);
    expect(list.size()).toBe(2);
    expect(list.toString()).toBe("-2, 0");
  });

  it("Should not be able to delete a non-existing element", () => {
    const list = new LinkedList<number>();
    list.push(9);
    list.push(13);
    list.push(0);
    list.remove(15);

    expect(list.size()).toBe(3);
    expect(list.toString()).toBe("9, 13, 0");
  });

  it("Should not be able to delete element from an empty list", () => {
    const list = new LinkedList<number>();

    expect(() => list.remove(15)).toThrow(
      "Can not delete element from an empty list"
    );
  });

  it("Should be able to delete element at a specific index", () => {
    const list = new LinkedList<number>();
    list.push(9);
    list.push(7);
    list.push(13);
    list.push(0);
    list.push(1);

    list.removeAt(0);
    expect(list.size()).toBe(4);
    expect(list.toString()).toBe("7, 13, 0, 1");

    list.removeAt(3);
    expect(list.size()).toBe(3);
    expect(list.toString()).toBe("7, 13, 0");

    list.removeAt(1);
    expect(list.size()).toBe(2);
    expect(list.toString()).toBe("7, 0");
  });

  it("Should not be able to delete element at a non-existing index", () => {
    const list = new LinkedList<number>();
    list.push(9);
    list.push(7);

    expect(() => list.removeAt(3)).toThrow("Index out of range.");
  });

  it("Should be able to get element at a specific index", () => {
    const list = new LinkedList<number>();
    list.push(9);
    list.push(13);
    list.push(0);

    expect(list.getFirst()).toBe(9);
    expect(list.getAt(0)).toBe(9);
    expect(list.getAt(1)).toBe(13);
    expect(list.getAt(2)).toBe(0);
    expect(list.getLast()).toBe(0);
  });

  it("Should not be able to get element from an empty list", () => {
    const list = new LinkedList<number>();
    expect(() => list.getAt(1)).toThrow("Index out of range.");
  });

  it("Should be able to set element at a specific index", () => {
    const list = new LinkedList<number>();
    list.push(9);
    list.push(13);
    list.push(0);
    expect(list.toString()).toBe("9, 13, 0");

    list.set(-12, 0);
    expect(list.toString()).toBe("-12, 13, 0");

    list.set(37, 2);
    expect(list.toString()).toBe("-12, 13, 37");
  });

  it("Should not be able to set element from an empty list", () => {
    const list = new LinkedList<number>();
    expect(() => list.set(0, 1)).toThrow("Index out of range.");
  });

  it("Should be able to get the index of a element", () => {
    const list = new LinkedList<number>();
    list.push(9);
    list.push(13);
    list.push(0);

    expect(list.indexOf(9)).toBe(0);
    expect(list.indexOf(13)).toBe(1);
    expect(list.indexOf(0)).toBe(2);
    expect(list.indexOf(15)).toBe(-1);
  });

  it("Should be able to clear a existing list", () => {
    const list = new LinkedList<number>();
    list.push(9);
    list.push(13);
    list.push(0);
    expect(list.size()).toBe(3);
    expect(list.toString()).toBe("9, 13, 0");

    list.clear();
    expect(list.size()).toBe(0);
    expect(list.toString()).toBe("");
    expect(() => list.getFirst()).toThrow(
      "Can not get element from an empty list."
    );
  });
});
