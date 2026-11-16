function compute(array) {
  let min = null;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element < min || min === null) {
      min = element;
    }
  }

  return min;
}

console.log(compute([10, 20, 30, 40]));
// 10

console.log(compute([5, 2, 9, 1]));
// 1

console.log(compute([-10, -3, -20]));
// -20

console.log(compute([]));
// null
