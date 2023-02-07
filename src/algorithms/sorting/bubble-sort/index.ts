export function bubbleSort(list: number[]) {
  for (let i = 0; i < list.length - 1; i += 1) {
    for (let j = 0; j < list.length - 1; j += 1) {
      if (list[j] > list[j + 1]) {
        const temp = list[j]
        list[j] = list[j + 1]
        list[j + 1] = temp
      }
    }
  }
}
