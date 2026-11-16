function compute(array, target) {
  let new_array = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element !== target) new_array.push(element);
  }

  return new_array;
}

console.log(compute([1, 2, 3, 2, 4], 2));
// [1, 3, 4]

console.log(compute([5, 5, 5], 5));
// []

console.log(compute([1, 2, 3], 9));
// [1, 2, 3]

console.log(compute([], 1));
// []
