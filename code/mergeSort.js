// This is the main function
function mergeSort(an_array){ 
    if(an_array.length <= 1){       // return an array of length == 1 
         return an_array;
    }

    // Divide an_array into two new array 
    let array_right = an_array.splice(an_array.length/2);
    let array_left = an_array.splice(0, an_array.length/2);
    
    // Merge two array
    return merge(
        mergeSort(array_left), mergeSort(array_right)
    )
}

//  Sort arrays 
let merge = function (array_left, array_right) {
    let resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    // To get a sorted array
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