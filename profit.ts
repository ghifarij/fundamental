/*
● You are given an array prices where prices[i] is the price of a given stock on the ith day.
● You want to maximize your profit by choosing a single day to buy one stock and choosing a different
day in the future to sell that stock.
● Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit,
return 0.
● Example 1:
    ○ Input: prices = [7,1,5,3,6,4]
    ○ Output: 5
    ○ Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
    ○ Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you
sell.
● Example 2:
    ○ Input: prices = [7,6,4,3,1]
    ○ Output: 0
    ○ Explanation: In this case, no transactions are done and the max profit = 0.
*/

function profit(arr: number[]) {
  // const min = Math.min(...arr)
  // const idxMin = arr.indexOf(min)
  // const newArr = arr.splice(idxMin)
  // const max = Math.max(...newArr)

  // return max - min

  const res = [];
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      res.push(arr[i] - arr[j]);
    }
  }
  return res;
}

console.log(profit([8, 3, 2]));

function profit2(prices: number[]) {
  var min = Math.min(...prices);
  var index = prices.indexOf(min);
  var arr = [];

  for (var i = index + 1; i < prices.length; i++) {
    arr.push(prices[i] - min);
  }
  var high = Math.max(...arr);
  var idxMax = arr.indexOf(high);

  return index + idxMax;
}

console.log(profit2([2, 9, 7, 1, 5, 3, 6, 4]));
console.log(profit2([7, 1, 5, 3, 6, 4]));
