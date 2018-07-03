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
    items: {}
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
  const start = Date.now();
  return (arInput) => {
    return new Promise((resolve) => {
      alg.do(arInput);
      const spended = Date.now() - start;
      result.$set(result.items, alg.name, spended)
      resolve(arInput);
    });
  };
}
