function mergeSort(list: number[], start = 0, end = -1) {
  if (list.length < 1) return;

  if (end === -1) end = list.length;

  if (end - start > 1) {
    const middle = Math.floor((end + start) / 2);

    mergeSort(list, start, middle);
    mergeSort(list, middle, end);
    merge(list, start, middle, end);
  }
}

function merge(list: number[], start: number, middle: number, end: number) {
  const left = list.slice(start, middle);
  const right = list.slice(middle, end);

  let topLeft = 0;
  let topRight = 0;

  for (let i = start; i < end; i += 1) {
    if (left[topLeft] <= right[topRight] || topRight >= right.length) {
      list[i] = left[topLeft];
      topLeft += 1;
    } else if (left[topLeft] >= right[topRight] || topLeft >= left.length) {
      list[i] = right[topRight];
      topRight += 1;
    }
  }
}

export default mergeSort;
