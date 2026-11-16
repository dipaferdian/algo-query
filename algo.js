function compute(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    sum += element;
  }

  return sum;
}

console.log(compute([10, 20, 30]));
// 60

console.log(compute([1, 2, 3, 4, 5]));
// 15

console.log(compute([-2, 5, -3]));
// 0

console.log(compute([]));
// 0
