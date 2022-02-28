//'use strict'
//first attempt

let table = [2,5,1,9,0,3];
function mergeSort(an_array){ 
    if(an_array.length <= 1){
        return an_array;
    }
    let array_right = an_array.splice(an_array.length/2);
    let array_left = an_array.splice(0, an_array.length/2);
    
    return merge(
        mergeSort(array_left), mergeSort(array_right)
    )
}

let merge = function (array_left, array_right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;
  
    // kind of an arrayPrototype.sort(a,b => a - b)
    while (leftIndex < array_left.length && rightIndex < array_right.length) {
      if (array_left[leftIndex] < array_right[rightIndex]) {
        resultArray.push(array_left[leftIndex]);
        leftIndex++;
      } else {
        resultArray.push(array_right[rightIndex]);
        rightIndex++;
      }
    }

    // concatenate
    return resultArray.concat(array_left.slice(leftIndex)).concat(array_right.slice(rightIndex));
  }