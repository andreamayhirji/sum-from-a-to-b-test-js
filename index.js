
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if (fromN === toN){
    return toN;
  } return fromN + sum(fromN + 1, toN);
}
//So if we called the function with the following values: sum(3, 7), it would sum 3 + 4 + 5 + 6 + 7 and output 25.
console.log(sum(5, 5));

module.exports = sum;