
// /function currying(a) {
//     return function(b) {
//         return function(c) {
//             return a + b + c;
//         };
//     };
// }

// console.log(currying(10)(20)(30)); // Output: 60

//=========================================================================
// function sample(){
//     console.log(this)

// }

// sample.call('nihal')

//==========================================================================

// let arr = [1, 3, 4, 8, 9, 6, 7];

// let minValue = arr.reduce((first, second) => Math.min(first,  second));

// console.log(minValue); // Output: 1


//=========================================================================

// const fs = require('fs').promises;

// let prom = new Promise(async (resolve, reject) => {
//     let data = new Date().toString();

//     try {
//         await fs.writeFile('one.js', data, 'utf8');
//         resolve('File created successfully');
//     } catch (err) {
//         reject(err);
//     }
// });

// prom.then((message) => {
//     console.log(message); // Output: File created successfully
// }).catch((error) => {
//     console.error('Error:', error);
// });


//====================================================================================

// const http = require('http');
// const fs = require('fs');

// let port = 3000;

// http.createServer((req, res) => {
//     let data = "Hello, this is some data!";
//     fs.writeFile('response.txt', data, (err) => {
//         if (err) {
//             res.writeHead(500, { 'Content-Type': 'text/plain' });
//             res.end('Error writing file');
//         } else {
//             res.writeHead(200, { 'Content-Type': 'text/plain' });
//             res.end('File written and server is running');
//         }
//     });
// }).listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });

//=====================================================================

// function* evenNumbers(arr) {
//     for (let num of arr) {
//         if (num % 2 === 0) {
//             yield num;
//         }
//     }
// }

// let arr = [1, 2, 3, 4, 5, 6];
// let iterate = evenNumbers(arr);

// console.log(iterate.next().value); // Output: 2
// console.log(iterate.next().value); // Output: 4
// console.log(iterate.next().value); // Output: 6
// console.log(iterate.next().done);  // Output: true






