function binarySearch(arr: number[], l: number, r: number, x: number) {
  if (r >= l) {
    let mid = l + Math.floor((r - l) / 2);
    // if the element is present in the middle itself
    if (arr[mid] == x) {
      return mid;
    }
    // if element is smaller than mid, then
    // it can only be present in the left of subarray
    if (arr[mid] > x) {
      return binarySearch(arr, l, mid - 1, x);
    }
    // else the element can be present in the right of subarray
    return binarySearch(arr, mid + 1, r, x);
  }
  return -1;
}

const arr: number[] = [10, 20, 30, 40, 50];
const x: number = 20;
console.log(binarySearch(arr, 0, arr.length - 1, x));
