# sorting algorithms

Implement and compare different kind sorting algorithms timing complexities.

See [Demo page](http://hankchiutw.github.io/sorting-algorithms/):
 - Randomly generate an array with specified size

## What's demostrated

Bubble sort, Quick sort, Merge sort, and JavaScript native sort() function

## Implements

#### Bubble sort

```js
function bubble(arInput){
    var ar = arInput.slice(0);
    var start = Date.now();

    var i, j, tmp;
    for(i = 0;i<ar.length;i++){
        for(j = 0;j<ar.length;j++){
            if(ar[i] < ar[j]){
                tmp = ar[i];
                ar[i] = ar[j];
                ar[j] = tmp;
            }
        }
    }

    return Date.now() - start;
}
```

#### Quick sort

```js
function quick(arInput){
    var start = Date.now();
    _quick(arInput);
    return Date.now() - start;
}

function _quick(arInput){
    var ar = arInput.slice(0);
    if(ar.length < 2) return ar;

    var pivot = ar[0];
    var left = [];
    var right = [];
    var i;
    for(i = 1;i<ar.length;i++){
        if(ar[i] <= pivot) left.push(ar[i]);
        else right.push(ar[i]);
    }
    left = _quick(left);
    right = _quick(right);
    return left.concat(pivot, right);
}
```

#### Merge sort

```js
function merge(arInput){
    var start = Date.now();
    _merge(arInput);
    return Date.now() - start;
}

function _merge(arInput){
    var ar = arInput.slice(0);
    if(ar.length < 2) return ar;

    var left = ar.splice(0, parseInt(ar.length/2));
    var right = ar;
    left = _merge(left);
    right = _merge(right);

    var i;
    var iL = 0;
    var iR = 0;
    var ret = [];
    for(i = 0;i<arInput.length;i++){
        if((left[iL] !== undefined && left[iL] <= right[iR]) || right[iR] === undefined){
            ret.push(left[iL]);
            iL++;
        }else{
            ret.push(right[iR]);
            iR++;
        }
    }

    return ret;
}
```
