// This is the main function
let array = [4,2,5,3,0,9,1,7]
function mergeSort(an_array){ 
    if(an_array.length <= 1){       // return an array of length == 1 
         return an_array;
    }

    // Divide an_array into two new array 
    let array_right = an_array.splice(an_array.length/2);
    let array_left = an_array;  

    // Merge two array
    return merge(
        mergeSort(array_left), mergeSort(array_right)
    )
}

//  a function to sort
let merge = function (array_left, array_right) {
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // This loop sort two array
    while (leftIndex < array_left.length && rightIndex < array_right.length) {
      if (array_left[leftIndex] < array_right[rightIndex]) {
        resultArray.push(array_left[leftIndex]);
        leftIndex++;

      } else {
        resultArray.push(array_right[rightIndex]);
        rightIndex++;
      }
    }

    // the sorted array
    return resultArray.concat(array_left.slice(leftIndex)).concat(array_right.slice(rightIndex));
  }
