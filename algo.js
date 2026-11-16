function compute(array) {
  let new_array = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    new_array.push(element);
  }

  return new_array;
}

console.log(compute([1, 2, 3, 4]));
// [1, 2, 3, 4]

console.log(compute([10, 20, 30]));
// [10, 20, 30]

console.log(compute([]));
// []
