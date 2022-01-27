import { swap } from ".";

describe("Test the sorting common functions", () => {
  it("Should be able to swap list elements", () => {
    const list = [1, 2];
    const swappedList = [2, 1];

    swap(list, 0, 1);

    expect(list).toStrictEqual(swappedList);
  });
});
