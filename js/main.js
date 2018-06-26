/** globals mergeSort */

const headerDom = document.getElementById('header');
const resultDom = document.getElementById('result');
headerDom.innerHTML = mergeSort.name;

const dataSize = 100;
const arInput = (new Array(dataSize))
  .fill(0)
  .map(() => parseInt(Math.random()*dataSize));

const result = mergeSort.do(arInput);
resultDom.innerHTML = result;
