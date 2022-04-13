/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  if (idx === nums.length) return 1
  return nums[0] + product(nums, idx + 1)
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx = 0, longestWordLength = 0) {
  if (idx === words.length) return longestWordLength
  longestWordLength = Math.max(longestWordLength, words[idx].length)
  
  return longest(words, idx + 1, longestWordLength)  
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newStr = '') {
  if (idx >= str.length) return newStr

  if (idx  % 2 == 0) {
    newStr = newStr + str[idx]
    return everyOther(str, idx + 1, newStr)
  } else {
    return everyOther(str, idx + 1, newStr)
  }
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  const leftIdx = idx
  const rightIdx = str.length - idx - 1

  if (leftIdx >= rightIdx) return true
  if (str[leftIdx] !== str[rightIdx]) return false

  return isPalindrome(str, idx + 1)
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  if (idx === arr.length) return -1
  if (arr[idx] !== val) {
    return findIndex(arr, val, idx + 1)
  } else {
    return idx
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, newStr = '') {
  if (idx === str.length) return newStr
  newStr += str[str.length - idx - 1]
  
  return revString(str, idx + 1, newStr)
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let strs = []
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      strs.push(obj[key])
    } else if (typeof obj[key] === 'object') {
      strs.push(...gatherStrings(obj[key]))
    }
  }
  return strs
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, leftIdx = 0, rightIdx = arr.length - 1) {
  if (leftIdx > rightIdx) return -1
  
  const midPoint = Math.floor((leftIdx + rightIdx) / 2)
  const midVal = arr[midPoint]

  if (midVal === val) return midPoint

  if (midVal > val) {
    return binarySearch(arr, val, leftIdx, midPoint - 1)
  } else {
    return binarySearch(arr, val, midPoint + 1, rightIdx)
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
