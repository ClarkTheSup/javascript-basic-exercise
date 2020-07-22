export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.
  if (array == null && array == undefined) {
    throw new Error('Creating list from undefined array');
  }
  if (array.length === 0) {
    throw new Error('Creating list from empty array');
  }
  function Node (value) {
    this.value = value;
    this.next = null;
  }
  const list = new Node(null);
  let p = list;
  for (let i = 0; i < array.length; i++) {
    p.next = new Node(array[i]);
    p = p.next;
  }
  return list.next;
}
