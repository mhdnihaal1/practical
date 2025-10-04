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


// const arr = [5,2,2,1,7,5,5]
// let arrr=[]
//     for(let i=0;i<arr.length;i++){
//         let one=true
//         for(let j=0;j<arr.length;j++){
//             if(j!==i && arr[i]==arr[j]){
//              one=false
//             }
//         }
//         if(!one){
//             arrr.push(arr[i])

//         }
//     }


// console.log(arrr);

//======================================================


let ar = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 1];
let arr = 0;

for (let i = 0; i < ar.length; i++) {
  arr ^= ar[i];
}

console.log(arr); 
