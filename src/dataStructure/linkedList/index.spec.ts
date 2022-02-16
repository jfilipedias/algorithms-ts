import LinkedList from ".";

describe("Test linked list data structure", () => {
  it("should be able to create an empty list", () => {
    const list = new LinkedList<number>();

    expect(list.head).toBeNull();
    expect(list.length).toBe(0);
    expect(list.toString()).toBe("null");
    // expect(list.get(0)).toThrow("Index out of range.");
  });

  // it("should be able to add an element to the list", () => {});
});
