export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.
  if (array == null && array == undefined) {
    throw new Error('Flatten undefined or null array');
  }
  if (array.length === 0) {
    return [];
  }
  const new_arr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] instanceof Array) {
      for (let j = 0; j < array[i].length; j++) {
        new_arr.push(array[i][j]);
      }
    } else {
      new_arr.push(array[i]);
    }
  }
  return new_arr;
}
