import { swap } from "../utils";

function quicksort(list: number[], begin = 0, end: number = null) {
  if (list.length <= 1) return;

  if (end === null) end = list.length - 1;

  if (begin < end) {
    const pivotIndex = partition(list, begin, end);
    quicksort(list, begin, pivotIndex - 1);
    quicksort(list, pivotIndex + 1, end);
  }
}

function partition(list: number[], begin: number, end: number): number {
  let index = begin;
  const pivotValue = list[end];

  for (let i = begin; i < end; i += 1) {
    if (list[i] <= pivotValue) {
      swap(list, i, index);
      index += 1;
    }
  }

  swap(list, index, end);

  return index;
}

export default quicksort;
