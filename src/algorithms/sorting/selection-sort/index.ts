export function selectionSort(list: number[]) {
  for (let i = 0; i < list.length - 1; i += 1) {
    let minValueIndex = i

    for (let j = minValueIndex; j < list.length; j += 1) {
      if (list[j] < list[minValueIndex]) {
        minValueIndex = j
      }

      if (list[i] > list[minValueIndex]) {
        const temp = list[i]
        list[i] = list[minValueIndex]
        list[minValueIndex] = temp
      }
    }
  }
}
