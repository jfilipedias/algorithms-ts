import quicksort from ".";

describe("Tests quicksort algorithm", () => {
  it("Should be able to sort a number list", () => {
    const list = [2, 12, 5, 10, 3, 0, 1];
    quicksort(list);

    expect(list).toStrictEqual([0, 1, 2, 3, 5, 10, 12]);
  });
});
