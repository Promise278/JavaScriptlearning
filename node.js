// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// Input: nums = [2, 7, 11, 15], target = 9  
// Output: [0, 1]  
// Explanation: nums[0] + nums[1] = 2 + 7 = 9



let nums = [2, 7, 11, 15];
let target = 9;
let indices = [];


function allIndices() {
  for (let index = 0; index < nums.length; index++) {
    for (let secondIndex = 0; secondIndex < nums.length; secondIndex++) {
      if (nums[index] + nums[secondIndex] === target) {
        indices.push(index, secondIndex);
        return;
      }
    }
  }
}
allIndices(nums, target);
console.log(indices);
console.log(allIndices([1, 2, 4, 6, 7, 8, 8, 0], 9))



// You are given an array that may contain duplicate elements. Your task is to return a new array with all duplicate values removed, preserving the original order of first appearances.

// // Input: [1, 2, 2, 3, 4, 4]
// // Output: [1, 2, 3, 4]

// let num = [1, 2, 2, 3, 4, 4];
// let dupnum = [];

// function removeDuplicateNum() {
//     for (let i = 0; i < num.length; i++) {
//         if (dupnum.indexOf(num[i]) === -1) {
//             dupnum.push(num[i]);
//         }        
//     }
//     return dupnum
// }

// removeDuplicateNum(num)
// console.log(dupnum)



// console.log(1, 2, 4, 6, 7, 8, 8, 0)