((exports) => {
  function sort(arInput){
    let ar = arInput.slice(0);
    if(ar.length < 2) return ar;

    let left = ar.splice(0, parseInt(ar.length/2));
    let right = ar;
    left = sort(left);
    right = sort(right);

    let i;
    let iL = 0;
    let iR = 0;
    let ret = [];
    for(i = 0; i < arInput.length; i++){
      if((left[iL] !== undefined &&
        left[iL] <= right[iR]) ||
        right[iR] === undefined){
        ret.push(left[iL]);
        iL++;
      }else{
        ret.push(right[iR]);
        iR++;
      }
    }

    return ret;
  }

  exports.mergeSort = {
    name: 'Merge',
    do: sort
  };
})(window);
