function compute(array, target) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element > target) return element;
  }

  return null;
}

console.log(compute([2, 5, 8, 1, 10], 6));
// 8

console.log(compute([1, 2, 3, 4], 5));
// null

console.log(compute([10, 20, 30], 5));
// 10

console.log(compute([], 5));
// null
