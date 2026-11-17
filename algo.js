function compute(array) {
  let odd = [];
  let even = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element % 2 === 0) {
      even.push(element);
    } else {
      odd.push(element);
    }
  }

  return [...even, ...odd];
}

console.log(compute([1, 2, 3, 4, 5, 6]));
// [2, 4, 6, 1, 3, 5]

console.log(compute([7, 3, 2, 8, 5]));
// [2, 8, 7, 3, 5]

console.log(compute([2, 4, 6]));
// [2, 4, 6]

console.log(compute([]));
// []
