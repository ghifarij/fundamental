/*
● Given a non-empty array of integers nums, every element appears twice except for one. Find that
single one.
● Example 1:
    ○ Input: nums = [2,2,1]
    ○ Output: 1
● Example 2:
    ○ Input: nums = [4,1,2,1,2]
    ○ Output: 4
● Example 3:
    ○ Input: nums = [1]
    ○ Output: 1
*/

// my solution
function twice(nums: number[]) {
  const countNum: { [key: number]: number } = {};

  for (let num of nums) {
    if (countNum[num]) {
      countNum[num]++;
    } else {
      countNum[num] = 1;
    }
  }

  for (let num of nums) {
    if (countNum[num] == 1) {
      return num;
    }
  }
}

const input1: number[] = [2, 2, 1];
console.log(twice(input1));

// lecturer solution
function single(arr: number[]) {
  return arr.filter(
    (item, _idx, num) => num.filter((val) => val == item).length == 1
  );
}

const input2: number[] = [4, 1, 2, 1, 2];
console.log(single(input2));

// friend solution
function myFunction(nums: number[]) {
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1] && nums[i] !== nums[i - 1]) {
      return nums[i];
    }
  }
  return "not found";
}

const input3: number[] = [2, 2, 1];
console.log(myFunction(input3));
