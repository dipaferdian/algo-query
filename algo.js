function compute(array1, array2) {
  let new_array = [];

  for (let i = 0; i < array1.length; i++) {
    const element = array1[i];

    new_array.push(element);
  }

  for (let i = 0; i < array2.length; i++) {
    const element = array2[i];

    new_array.push(element);
  }

  return new_array;
}

console.log(compute([1, 2, 3], [4, 5, 6]));
// [1, 2, 3, 4, 5, 6]

console.log(compute([10, 20], [30, 40]));
// [10, 20, 30, 40]

console.log(compute([], [1, 2]));
// [1, 2]

console.log(compute([1, 2], []));
// [1, 2]
