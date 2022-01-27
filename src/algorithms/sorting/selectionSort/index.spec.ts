import selectionSort from ".";

describe("Test the selection sort algorithm", () => {
  it("Should be able to maintain a already sorted list", () => {
    const list = [1, 2, 3, 5, 9, 20, 28, 32, 39, 42, 76, 87, 99, 112];
    const sortedList = [1, 2, 3, 5, 9, 20, 28, 32, 39, 42, 76, 87, 99, 112];
    selectionSort(list);

    expect(list).toStrictEqual(sortedList);
  });

  it("Should be able to sort a random list", () => {
    const list = [2, 72, 5, 91, 111, 63, 10, 88, 3, 42, 25, 0, 30, 17, 1];
    const sortedList = [0, 1, 2, 3, 5, 10, 17, 25, 30, 42, 63, 72, 88, 91, 111];
    selectionSort(list);

    expect(list).toStrictEqual(sortedList);
  });

  it("Should be able to sort a decrescent sorted list", () => {
    const list = [117, 90, 88, 74, 69, 51, 42, 34, 28, 16, 8, 5, 3, 1];
    const sortedList = [1, 3, 5, 8, 16, 28, 34, 42, 51, 69, 74, 88, 90, 117];

    selectionSort(list);

    expect(list).toStrictEqual(sortedList);
  });

  it("Should be able to sort a list with repeated elements", () => {
    const list = [7, 7, 7, 7, 7, 1, 1, 9, 9, 0, 4, 4, 4, 5, 4, 5, 7, 1];
    const sortedList = [0, 1, 1, 1, 4, 4, 4, 4, 5, 5, 7, 7, 7, 7, 7, 7, 9, 9];

    selectionSort(list);

    expect(list).toStrictEqual(sortedList);
  });
});
