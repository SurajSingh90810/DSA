// Move all zeroes to end of array.

function zero(num) {
  let arr = [];

  for (let i = 0; i < num.length; i++) {
    if (num[i] !== 0) {
      arr.push(num[i]);
    }
  }

  for (let i = 0; i < num.length; i++) {
    if (num[i] === 0) {
      arr.push(num[i]);
    }
  }

  return arr;
}

// console.log(zero([0, 0, 3, 0, 4]));

// Find all duplicate elements in array.
function duplicate(num) {
  let arr = [];
  for (let i = 0; i < num.length; i++) {
    if (arr.includes(num[i])) {
      console.log(num[i]);
    } else {
      arr.push(num[i]);
    }
  }
}

// duplicate([1, 1, 5, 6, 6, 7, 8, 8]);

// Rotate array by k steps right.

function rotate(num, k) {
  let n = num.length;

  return num.slice(n - k).concat(num.slice(0, n - k));
}

// console.log(rotate([1, 2, 5, 3, 4, 8], 3));

// Find missing number from array 1 to n.

function Misisng(number) {
  let arr = [];
  let max = Math.max(...number);

  for (let i = 1; i < max; i++) {
    if (!number.includes(i)) {
      arr.push(i);
    }
  }
  return arr;
}

// console.log(Misisng([1, 2, 4, 6, 8, 9, 12]));

// Find frequency of each element.

function Frequency(arr) {
  let result = arr.reduce((a, b) => {
    a[b] = (a[b] || 0) + 1;
    return a;
  }, {});

  return result;
}

// console.log(Frequency([1, 1, 2, 3, 10, 5, 5, 6, 6, 8, 8, 5]));

// Find element occurring maximum times.

function Frequency(arr) {
  let result = arr.reduce((a, b) => {
    a[b] = (a[b] || 0) + 1;
    return a;
  }, {});

  let frequency = 0;
  let maxElement = null;

  for (let key in result) {
    if (result[key] > frequency) {
      frequency = result[key];
      maxElement = Number(key);
    }
  }

  return maxElement;
}
// console.log(Frequency([1, 1, 2, 3, 3, 3, 3, 3, 10, 5, 5, 6, 6, 8, 8, 5]))

// Group same words.

function groupWords(arr) {
  let obj = {};
  arr.forEach(function (word) {
    let key = word.split("").sort().join("");
    obj[key] = obj[key] || [];
    obj[key].push(word);
  });
  return Object.values(obj);
}

// console.log(groupWords(["cat", "act", "dog", "god", "tac"]));

// Merge two sorted arrays into one sorted array.

function MergeArray(arr1, arr2) {
  let result = [];

  result.push(arr1, arr2);
  return result.flat();
}
// console.log(
//   MergeArray([1, 2, 3, 4, 5, 6, 7, 8, 9], [10, 11, 12, 13, 14, 15, 16]),
// );

// Capitalize first letter of each word.

function Capitalize(sen) {
  let give = sen.map((word) => {
    let first = word.split("")[0].toUpperCase();
    let rest = word.slice(1);
    return first + rest;
  });
  return give;
}
// console.log(Capitalize(["my", "name", "is", "suraj"]));
