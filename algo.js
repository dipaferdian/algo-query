function compute(array) {
  let new_array = [];

  for (let i = array.length - 1; i >= 0; i--) {
    const element = array[i];

    new_array.push(element);
  }

  return new_array;
}

console.log(compute([1, 2, 3, 4]));
// [4, 3, 2, 1]

console.log(compute([10, 20, 30]));
// [30, 20, 10]

console.log(compute([5]));
// [5]

console.log(compute([]));
// []
