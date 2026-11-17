function compute(array, steps) {
  if (array.length === 0) return [];

  const break_at_index = steps % array.length;
  let new_array = [];
  let move_element_position = [];

  for (let index = break_at_index; index < array.length; index++) {
    const element = array[index];
    move_element_position.push(element);
  }

  for (let index = 0; index < break_at_index; index++) {
    const element = array[index];
    new_array.push(element);
  }

  return [...move_element_position, ...new_array];
}

// console.log(compute([1, 2, 3, 4, 5], 1));
// // [5, 1, 2, 3, 4]

// console.log(compute([1, 2, 3, 4, 5], 2));
// // [4, 5, 1, 2, 3]

// console.log(compute([1, 2, 3], 3));
// // [1, 2, 3]

// console.log(compute([1, 2, 3], 0));
// // [1, 2, 3]

// console.log(compute([], 2));
// // []

console.log(compute([1, 2, 3], 5));
// [2, 3, 1]

console.log(compute([1, 2, 3], 0));
// [1, 2, 3]
