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

[
  mergeSort,
  quickSort,
  bubbleSort
].reduce(
  (promiseChain, alg) => promiseChain.then(runnerFactory(alg)),
  Promise.resolve(arInput)
);

function runnerFactory(alg) {
  return (arInput) => {
    return alg.do(arInput)
      .then((spended) => {
        result.items.push({
          name: alg.name,
          spended,
          compared: alg.compared
        });
        return arInput;
      });
  };
}
