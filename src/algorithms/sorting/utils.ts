function swap(list: number[], indexA: number, indexB: number) {
  const temp = list[indexA];
  list[indexA] = list[indexB];
  list[indexB] = temp;
}

export { swap };
