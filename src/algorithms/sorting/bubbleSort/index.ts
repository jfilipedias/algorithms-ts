import { swap } from "../utils";

function bubbleSort(list: number[]) {
  for (let i = 0; i < list.length - 1; i += 1) {
    for (let j = 0; j < list.length - 1; j += 1) {
      if (list[j] > list[j + 1]) {
        swap(list, j, j + 1);
      }
    }
  }
}

export default bubbleSort;
