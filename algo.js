function isElementExist(array, value) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (element === value) return true;
  }

  return false;
}

function compute(array) {
  let new_array = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (!isElementExist(new_array, element)) {
      new_array.push(element);
    }
  }

  return new_array;
}

console.log(compute([1, 2, 2, 1]));
// [1, 2, 3, 4]

console.log(compute([5, 5, 5, 5]));
// [5]

console.log(compute([1, 2, 3]));
// [1, 2, 3]

console.log(compute([]));
// []
