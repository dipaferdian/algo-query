function compute(array) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    count++;
  }

  return count;
}

console.log(compute([10, 20, 30, 40]));
// 4

console.log(compute(["a", "b", "c"]));
// 3

console.log(compute([]));
// 0
