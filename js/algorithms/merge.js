((exports) => {
  const alg = new Alg('Merge', sort);

  function sort(arInput){
    // copy the input
    let ar = arInput.slice(0);

    // done when input size 1
    if(ar.length < 2) return ar;

    // split input to two subarrays 
    // and recursively sort each subarray
    let left = ar.splice(0, parseInt(ar.length/2));
    let right = ar;
    left = sort(left);
    right = sort(right);

    return _merge(left, right);
  }

  // pop one each time and compare
  function _merge(left, right) {
    let ret = [];
    let lo = left.pop();
    let hi = right.pop();
    while(lo !== undefined && hi !== undefined) {
      if (lo === undefined) {
        ret = ret.concat(hi, right);
        break;
      } else if (hi === undefined) {
        ret = ret.concat(lo, left);
        break;
      }

      if (lo <= hi) {
        ret.push(lo);
        lo = left.pop();
      } else {
        ret.push(hi);
        hi = right.pop();
      }
    }
    return ret;
  }

  exports.mergeSort = alg;
})(window);
