((exports) => {
  function sort(arInput){
    let ar = arInput.slice(0);
    let start = Date.now();

    let i, j, tmp;
    for(i = 0;i<ar.length;i++){
      for(j = 0;j<ar.length;j++){
        if(ar[i] < ar[j]){
          tmp = ar[i];
          ar[i] = ar[j];
          ar[j] = tmp;
        }
      }
    }

    return ar;
  }

  exports.bubbleSort = {
    name: 'Bubble',
    do: sort
  };
})(window);
