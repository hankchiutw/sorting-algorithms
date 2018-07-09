((exports) => {
  const alg = new Alg('Merge(recursive)', sort);

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
    let lo = left.shift();
    let hi = right.shift();
    while(lo !== undefined || hi !== undefined) {
      alg.onCompared();
      if (lo === undefined) {
        ret = ret.concat(hi, right);
        break;
      } else if (hi === undefined) {
        ret = ret.concat(lo, left);
        break;
      }

      if (lo <= hi) {
        ret.push(lo);
        lo = left.shift();
      } else {
        ret.push(hi);
        hi = right.shift();
      }
    }
    return ret;
  }

  exports.mergeSort1 = alg;
})(window);

((exports) => {
  const alg = new Alg('Merge(bottom up)', sort);

  function sort(arInput){
    let ret = [];
    let size = arInput.length;
    let subSize = 1;
    let i = 0;
    while (subSize < size) {
      const left = arInput.slice(i, i + subSize);
      const right = arInput.slice(i + subSize, i + subSize*2);
      const merged = _merge(left, right);
      ret = ret.concat(merged);

      i += subSize*2;
      if (i >= size) {
        i = 0;
        subSize *= 2;
        arInput = ret;
        ret = [];
        continue;
      }
    }

    return ret;
  }

  // pop one each time and compare
  function _merge(left, right) {
    let ret = [];
    let lo = left.shift();
    let hi = right.shift();
    while(lo !== undefined || hi !== undefined) {
      alg.onCompared();
      if (lo === undefined) {
        ret = ret.concat(hi, right);
        break;
      } else if (hi === undefined) {
        ret = ret.concat(lo, left);
        break;
      }

      if (lo <= hi) {
        ret.push(lo);
        lo = left.shift();
      } else {
        ret.push(hi);
        hi = right.shift();
      }
    }
    return ret;
  }

  exports.mergeSort2 = alg;
})(window);
