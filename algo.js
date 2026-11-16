function compute(array, target) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element === target) count++;
  }

  return count;
}

console.log(compute([1, 2, 3, 2, 4, 2], 2));
// 3

console.log(compute([5, 5, 5, 5], 5));
// 4

console.log(compute([1, 2, 3], 9));
// 0

console.log(compute([], 1));
// 0
