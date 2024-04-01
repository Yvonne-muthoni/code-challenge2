//Defines a function takes begin and end as a parameter which represent a range of numbers
function generateArray(begin,end){
  //intializes an array called returns 
  let returns = [];
  // a for loop that iterates over each number begin to end
  // loop variable is initialized to begin and continues as long as "a" is <= end
  for (let a = begin;a<=end;a++){

    returns.push(a);
  }
  return returns;
}
let returns = generateArray(4,7);