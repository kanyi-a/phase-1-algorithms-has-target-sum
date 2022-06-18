function hasTargetSum(array, target) {
  const seenNumbers = {};

  for (const number of array) {
    const complement = target - number;
    if (complement in seenNumbers) return true;
    seenNumbers[number] = true;
  }

  return false;
}


 
  // Write your algorithm here
 



/* 
  Write the Big O time complexity of your function here
  Runtime: 0(n^2)
  Space:0(n)
 for(let i = 0; i <array.lenth; i++){
   n steps
  const complement = target - array[i]
  for(let j = i + 1; j < array.length; j++)
  n * n
  if (array[j] === complement) return true;
}


*/

/* 
  Add your pseudocode here
  hasTargetSum([22, 19, 4, 6, 30], 25));
  1.iterate through each number in the array

  2.for the current num,identify a complement that adds to the target
  3.iterate through the rest of the array 
  4.check if any number is our complement
  5.if so, return true
  6.if i reach the end of the array return false.


*/




/*
  Add written explanation of your solution here
   1.Create an empty object to store the numbers that have already been looped through to avoid using 2 for loops
   2.Create a for loop that iterates through the array 
   3.Minus that value from the target 
   4.introduse in an if statement to compare if the value we get from after subtracting from the target compares to the object of numbers we had
  looped through in order to avoid using a second for loop
*/
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
