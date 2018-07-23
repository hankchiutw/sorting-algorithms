const dataSize = 10000;
const header = new Vue({
  el: '#header',
  data: {
    dataSize
  }
});

const result = new Vue({
  el: '#result',
  data: {
    items: []
  }
});

const arInput = (new Array(dataSize))
  .fill(0)
  .map(() => parseInt(Math.random()*dataSize));
const arSorted = [].concat(arInput).sort((a, b) => a - b);

[
  mergeSort1,
  mergeSort2,
  quickSort,
  bubbleSort
].reduce(
  (promiseChain, alg) => promiseChain.then(runnerFactory(alg)),
  Promise.resolve(arInput)
);

function runnerFactory(alg) {
  return (arInput) => {
    return alg.do([].concat(arInput))
      .then(({sorted, spended}) => {
        // check result
        const shouldSort = arSorted.every((v, i) => {
          return sorted[i] === v;
        });
        if (!shouldSort) {
          console.warn('Sort wrong:', alg.name);
        }
        result.items.push({
          name: alg.name,
          spended,
          compared: alg.compared
        });
        return arInput;
      });
  };
}
