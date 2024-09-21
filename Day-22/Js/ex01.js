const numbers = [1, 2, 3, 4, 5];

function reverseNumber(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(reverseNumber(numbers));
