function compute(array) {
  let min = null;
  let max = null;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];

    if (max === null) {
      max = element;
    } else {
      if (element > max) {
        min = max;
        max = element;
      } else {
        if (element > min && element != max) {
          min = element;
        }
      }
    }
  }

  return min;
}

console.log(compute([10, 5, 8, 20, 15]));
// 15

console.log(compute([5, 5, 3, 2]));
// 3

console.log(compute([1, 2, 3]));
// 2

console.log(compute([10, 10, 10]));
// null

console.log(compute([]));
// null
