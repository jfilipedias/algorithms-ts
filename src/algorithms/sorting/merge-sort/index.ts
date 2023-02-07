export function mergeSort(list: number[], begin = 0, end = -Infinity) {
  if (end === -Infinity) {
    end = list.length
  }

  if (list.length < 1 || end - begin <= 1) {
    return
  }

  const middle = Math.floor((end + begin) / 2)

  mergeSort(list, begin, middle)
  mergeSort(list, middle, end)
  merge(list, begin, middle, end)
}

function merge(list: number[], begin: number, middle: number, end: number) {
  const left = list.slice(begin, middle)
  const right = list.slice(middle, end)

  let topLeft = 0
  let topRight = 0

  for (let i = begin; i < end; i += 1) {
    if (left[topLeft] <= right[topRight] || topRight >= right.length) {
      list[i] = left[topLeft]
      topLeft += 1
    } else if (left[topLeft] >= right[topRight] || topLeft >= left.length) {
      list[i] = right[topRight]
      topRight += 1
    }
  }
}
