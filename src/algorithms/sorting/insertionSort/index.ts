function insertionSort(list: number[]) {
  for (let i = 1; i < list.length; i += 1) {
    const key = list[i];
    let currentIndex = i - 1;

    while (currentIndex >= 0 && list[currentIndex] > key) {
      list[currentIndex + 1] = list[currentIndex];
      currentIndex -= 1;
    }

    list[currentIndex + 1] = key;
  }
}

export default insertionSort;
