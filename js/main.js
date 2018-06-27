/** globals mergeSort */

const headerDom = document.getElementById('header');
const resultDom = document.getElementById('result');
const statusDom = document.getElementById('status');

const dataSize = 10000;
const arInput = (new Array(dataSize))
  .fill(0)
  .map(() => parseInt(Math.random()*dataSize));
document.getElementById('data-size').innerHTML = `size: ${dataSize}`;

testRunner(mergeSort, arInput)
  .then(() => {
    testRunner(quickSort, arInput);
  })
  .then(() => {
    testRunner(bubbleSort, arInput);
  });

function testRunner(alg, arInput) {
  resultDom.innerHTML += `
    <p class='result-${alg.name}'>
      <span class='name'>${alg.name}</span>
      <span class='spended'></span>
    </p>
  `;
  const start = Date.now();
  return new Promise((resolve) => {
    resolve(alg.do(arInput));
  }).then(() => {
    const spended = Date.now() - start;
    resultDom.querySelector(`.result-${alg.name} .spended`).innerHTML = spended;
  });
}
