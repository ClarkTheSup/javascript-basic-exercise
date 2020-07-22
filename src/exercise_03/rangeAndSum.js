export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  const arr = [];
  if (start === end) {
    return arr;
  }

  if (start < end) {
    for (let i = start; i < end; i++) {
      arr.push(i);
    }
  } else {
    for (let i = start; i > end; i--) {
      arr.push(i);
    }
  }
  return arr;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.
  let s = 0;
  if (numbers == null || numbers == undefined) {
    return s;
  }
  for (let i = 0; i < numbers.length; i++) {
    s += numbers[i];
  }
  return s;
}
