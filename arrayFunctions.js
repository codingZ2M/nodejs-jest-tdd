function average(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
}
module.exports = average;


function sumArray(arr) {
  if (arr.length === 0) 
    return 0;
  if(arr.length >= 0)  
   return sum = arr.reduce((acc, curr) => acc + curr, 0);
}

function getFirstElement(arr) {
  if (arr.length >= 1) {
    return arr[0];
  }
}

module.exports= {average, sumArray, getFirstElement}