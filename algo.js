function compute(array, n) {
  let expected_sum = (n * (n + 1)) / 2;
  let current_sum = 0;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    current_sum += element;
  }

  return expected_sum - current_sum;
}

console.log(compute([1, 2, 4, 5], 5));
// 3

console.log(compute([2, 3, 4, 5], 5));
// 1

console.log(compute([1, 2, 3, 4], 5));
// 5

console.log(compute([1], 2));
// 2

console.log(compute([5, 1, 4, 2], 5));
// 3

console.log(compute([3, 1, 5, 2], 5));
// 4
