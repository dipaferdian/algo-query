function compute(array) {
  let set = new Set();

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (set.has(element)) {
      return element;
    } else {
      set.add(element);
    }
  }

  return null;
}

console.log(compute([1, 3, 4, 2, 3]));
// 3

console.log(compute([5, 2, 1, 2, 5]));
// 2

console.log(compute([1, 2, 3, 4]));
// null

console.log(compute([7, 7, 8, 9]));
// 7
