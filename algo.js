function compute(array, index) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (index == i) return element;
  }

  return null;
}

console.log(compute([10, 20, 30, 40], 0));
// 10

console.log(compute([10, 20, 30, 40], 2));
// 30

console.log(compute(["a", "b", "c"], 1));
// "b"
