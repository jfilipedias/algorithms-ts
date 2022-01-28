function binarySearch(
  list: number[],
  item: number,
  begin = 0,
  end: number = undefined
): number {
  if (end === undefined) end = list.length - 1;

  if (begin <= end) {
    const middle = Math.floor((end + begin) / 2);

    if (list[middle] === item) return middle;
    if (list[middle] > item) return binarySearch(list, item, begin, middle - 1);
    if (list[middle] < item) return binarySearch(list, item, middle + 1, end);
  }

  return -1;
}

export default binarySearch;
