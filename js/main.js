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

testRunner(mergeSort, arInput)
  .then(() => {
    testRunner(quickSort, arInput);
  })
  .then(() => {
    testRunner(bubbleSort, arInput);
  });

function testRunner(alg, arInput) {
  const start = Date.now();
  return new Promise((resolve) => {
    resolve(alg.do(arInput));
  }).then(() => {
    const spended = Date.now() - start;
    result.$set(result.items, alg.name, spended);
    
  });
}
