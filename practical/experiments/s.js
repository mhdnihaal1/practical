// // =================process.nexttick===============
// process.nextTick(() => {
//     console.log("Executed in the next tick");
// });
// //=================setTimeout and clear timeout=========
// const timeoutId = setTimeout(() => {
//     console.log('Timeout completed after 10 seconds');
    
// }, 4000);


// setTimeout(() => {
//     clearTimeout(timeoutId);
//     console.log('Timeout cleared after 2 seconds');
// }, 2000);

// // ===========================setIntervel and clearIntervel=================

// const set = setInterval(()=>{
//     console.log(123);
// },3000)
 
// setTimeout(()=>{
//     clearInterval(set)
//     console.log('ok');
// },10000)

// // ===============================count of specific car===========================

// cars = ["Toyota", "Honda", "Ford", "Toyota", "Chevrolet", "Honda", "Tesla", "Ford", "Tesla",'Toyota','Toyota']

//     const reduce = cars.reduce((fir,sec)=> (sec==='Toyota'?fir+1:fir),0)

// console.log(reduce);
// ========================remove duplicates  ==============================


const arr = [5,2,2,1,7,5,5,5]

for(let i=0 ;i<arr.length;i++){
  for(let j=0;j<arr.length;j++){ 
     if(i!==j && arr[i]==arr[j]){ 
       arr.splice(j,1)
     }
  }
}

console.log(arr);

//======================================================
 
// hoisting in normal function vs arrow function
// find the freq of elements in an array
// - JIT
 // - memoization 
 // - .reduce(): count occurrences of a value 
// - remove all occurrences of a value from an array
// - remove nth element from array
// - cancel a setTimeout after 4 seconds
// - switch syntax
// Passed By Value vs Passed By reference
 // Object.create vs Constructor Pattern
// Callback Hell String Coercion
 



 
 
 // - running async functions without await
// - boxing *
 // - labels  
 // - static
// - destructuring (destructure array of 10 elements in 3 variables)
// - remove keys correspond to non-strings in object
 // - countdown timer that ticks to 0 and stops 
// - tomorrow’s date in DD/MM/YYYY format