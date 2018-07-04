((exports) => {
  function sort(arInput){
    let ar = arInput.slice(0);
    if(ar.length < 2) return ar;

    let pivot = ar[0];
    let left = [];
    let right = [];
    let i;
    for(i = 1;i<ar.length;i++){
        if(ar[i] <= pivot) left.push(ar[i]);
        else right.push(ar[i]);
    }
    left = sort(left);
    right = sort(right);

    return left.concat(pivot, right);
  }

  exports.quickSort = new Alg('Quick', sort);
})(window);
