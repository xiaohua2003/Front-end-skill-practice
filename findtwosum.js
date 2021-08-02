/* @return {number[]} An array of 2 indices. The indices of the two elements whose sum is equal to sum.
 */
function findTwoSum(numbers, sum) {
  // Your code goes here
  for (let i=0; i<numbers.length; i++){
    for (let j=i+1; j<numbers.length; j++){
      if(numbers[i]+numbers[j]==sum){
        return [i, j]
      }
      
    }
  }
  return null
  
}

const indices = findTwoSum([ 3, 1, 5, 7, 5, 9 ], 10);
console.log(indices);