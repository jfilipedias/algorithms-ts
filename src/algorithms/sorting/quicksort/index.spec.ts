import quicksort from ".";

describe("Tests quicksort algorithm", () => {
  it("Should be able to order a list", () => {
    const list = [2, 5, 10, 3, 0];
    quicksort(list);

    expect(list).toStrictEqual([0, 2, 3, 5, 10]);
  });
});
