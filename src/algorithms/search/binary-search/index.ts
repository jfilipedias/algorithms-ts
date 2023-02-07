export function binarySearch(
  list: number[],
  item: number,
  begin = 0,
  end = -Infinity,
): number {
  if (end === -Infinity) {
    end = list.length - 1
  }

  if (begin > end && end) {
    return -1
  }

  const middle = Math.floor((end + begin) / 2)

  if (list[middle] > item) {
    return binarySearch(list, item, begin, middle - 1)
  }

  if (list[middle] < item) {
    return binarySearch(list, item, middle + 1, end)
  }

  return middle
}
