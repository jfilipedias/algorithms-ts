export function quicksort(list: number[], begin = 0, end: number = null) {
  if (list.length <= 1) return

  if (end === null) end = list.length - 1

  if (begin < end) {
    const pivotIndex = partition(list, begin, end)
    quicksort(list, begin, pivotIndex - 1)
    quicksort(list, pivotIndex + 1, end)
  }
}

function partition(list: number[], begin: number, end: number): number {
  let index = begin
  const pivotValue = list[end]

  for (let i = begin; i < end; i += 1) {
    if (list[i] <= pivotValue) {
      ;[list[i], list[index]] = [list[index], list[i]]
      index += 1
    }
  }

  ;[list[index], list[end]] = [list[end], list[index]]

  return index
}
