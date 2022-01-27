import { swap } from "..";

function quicksort(list: number[], start = 0, end = -1) {
  if (list.length === 1) return;

  if (end === -1) end = list.length - 1;

  if (start < end) {
    const pivotIndex = partition(list, start, end);
    quicksort(list, start, pivotIndex - 1);
    quicksort(list, pivotIndex + 1, end);
  }
}

function partition(list: number[], start: number, end: number): number {
  let index = start;
  const pivotValue = list[end];

  for (let i = start; i < end; i += 1) {
    if (list[i] <= pivotValue) {
      swap(list, i, index);
      index += 1;
    }
  }

  swap(list, index, end);

  return index;
}

export default quicksort;
