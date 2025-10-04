// //=======================flattern a jagged array recursion =======================================


// function flattenArray(arr) {
//     if (!Array.isArray(arr)) {
//       return [arr];
//     }
  
//     let result = [];  mn
//     for (let i = 0; i < arr.length; i++) {
//       result = result.concat(flattenArray(arr[i]));
//     }
  
//     return result;
//   }
  

// let jaggedArray = [[1], [2, 3], [4, 5, 6], [7, 8, 9, 10],[[[[]]]]];

// let flattenedArray = flattenArray(jaggedArray);

// console.log(flattenedArray);



//==============================================string reverse====================================


// function reverseString(str) {
//     if (str.length <= 1) {
//         return str;
//     }
//     return str[str.length - 1] + reverseString(str.slice(0,-1));
// }


// function reverseName(name) {
//     if (name === "") return "";
//     return reverseName(name.slice(1)) + name[0];
//   }

// const originalString = "Hello, World!";
// const reversedString = reverseString(originalString);
// console.log(reversedString); 

//======================================checking array is a palindrome=============================

// function isPalindrome(str) {
//     if (str.length <= 1) {
//         return true;
//     }

//     if (str[0] !== str[str.length - 1]) {
//         return false;
//     }
    
//     return isPalindrome(str.slice(1, -1));
// }
// const testString = "madam";
// console.log(isPalindrome(testString)); 

// const testString2 = "hello";
// console.log(isPalindrome(testString2)); 


//=================================recursive binary search=========================================

// function first(arr,target){
//     function second(left,right){
//       if(left > right){
//         return -1
//       }
//       const middle = Math.floor((left + right)/2)
//       if(target == arr[middle]){
//         return middle
//       }
//       if(target < arr[middle]){
//         return second(left,middle -1)
//       }else{
//         return second(middle +1,right)
//       }
//     }
//     return second(0,arr.length-1)
// }

//======================easy and simple version of above===================


// function binarySearch(arr, target, left = 0, right = arr.length - 1) {
//     if (left > right) {
//         return -1;
//     }
//     let mid = Math.floor((left + right) / 2);                            
//     if (arr[mid] === target) {
//         return mid; 
//     } else if (arr[mid] < target) {
//         return binarySearch(arr, target, mid + 1, right); 
//     } else {
//         return binarySearch(arr, target, left, mid - 1); 
//     }
// }

// const ar = [1,2,3,4,5,6,7,8,9]
// const target = 4;
// const fir = binarySearch(ar,target)
// console.log(fir)

//================================ Recursive LinearSearch==========================================

// function recursiveLinearSearch(arr, target, index = 0) {
//     if (index >= arr.length) {
//         return -1; 
//     }

//     if (arr[index] === target) {
//         return index; 
//     }
//     return recursiveLinearSearch(arr, target, index + 1);
// }
// const array = [10, 20, 30, 40, 50];
// const target = 30;
// console.log(recursiveLinearSearch(array, target)); 

//========================================    Count Digits   =========================================

// function countDigits(n) {
//     if (n < 10) {
//         return 1;
//     }
//     return 1 + countDigits(Math.floor(n / 10));
// }
// console.log(countDigits(45456)) // 5

//========================================== sum of all numbers ==================================


// function sum(arr){
//     if(arr.length <1){
//         return 0
//     }

//     return arr[0] + sum(arr.slice(1))
// }
// let arr = [1,2,3,4,5]

// console.log(sum(arr)) // 15