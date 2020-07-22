export default function waitForAll(...promises) {
  // This function returns a promise which will be triggered when all the `promises` are completed.
  //
  // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
  // if one of the `promises` is rejected, then the returned promise will be rejected.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in wait_for_all_spec.js.
  // * Please do NOT modify the signature of the function.

  // let p = Promise.resolve();
  for (let i = 0; i < promises.length; i++) {
    if (!(promises[i] instanceof Promise)) {
      throw new Error('Not all elements are promises.');
    }
  }

  return new Promise((resolve, reject) => {
    let arr = [];
    function check(){
      if (arr.length == promises.length){
        for(let p of arr){
          if(p == 'rejected'){
            reject();
            return;
          }
        }
        resolve();
      }
    }
    
    for (let promise of promises) {
      promise.then(
        ()=>{arr.push('resolved');check();},
        ()=>{arr.push('rejected');check();}
      );
    }
  });
}