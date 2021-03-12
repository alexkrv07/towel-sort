
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if (!matrix) {
    return [];
  }

  let arr = [];

  matrix.forEach((current, index) => {
    index % 2 == 0 ?  arr = arr.concat(current) : arr = arr.concat(current.reverse());
  });
  return arr; 
}
