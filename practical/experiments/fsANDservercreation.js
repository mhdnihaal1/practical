
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

//-----------------------------server creation ---------------------------------

// const http = require('http');
// const fs = require('fs')

// http.createServer((req,res)=>{

//   fs.readFile('s.js',(err,data)=>{

//     res.writeHead(200,({'content-type':'text/js'}))
//     res.write(data)
//     res.end('Hello')
//   })
// }).listen(3003,()=>{
// console.log('server is running...')
// })
//------------------------------fs read file and write into another file-----------------------------------------

//delte =unlink
//rename =rename
//update=update

//  const fs=require('fs')

//  fs.readFile('./dupe.html','UTF8',(err,data)=>{
//   if(err){
//     console.log(err);
//     return
//   }

//   fs.writeFile('./dupo.html',data,'UTF8',(err)=>{
//     if(err){
//       console.log(err);
//     }
//     console.log('send');
//     return
//   })

//  })


//-------------------------------server creation------------------------------

// const http = require('http')
// const fs = require('fs')

// http.createServer((req,res)=>{ 

// fs.readFile('./s.js',(err,data)=>{

// res.writeHead(200,{'content-type':'text/html'})
// res.write(data)
// res.end('hello')

// })

// }).listen(4000,()=>{
// console.log('running)
// })
//-------------------------------------------  route  --------------------------------------------------

// const express=require('express')
// const app=express()


// // app.use((req,res,next)=>{
// //   console.error(error)
// //   next()
// // })


// // app.use((req,res,next)=>{
// //   console.error(error)
// //   next()
// // })
// app.get('/',(req,res)=>{
//   res.send('Hello every one')
//  // console.log('hi everyone')
// })

// app.get('/homes',(req,res)=>{
//   res.send('Hello every two')
//  // console.log('hi everyone')
// })

// app.listen(7002,()=>{
//   console.log('server is running')
// })



//-----------------api not working----------------

// const express =require ('express')
// const path = require('path')

// const app=express()

// app.set('view engine','ejs')
// app.set(express.static('views'))
// app.get('/',(req,res)=>{
// res.render('sample.js')
// })

// app.listen(3000,()=>{
//   console.log("running...")
// })


//------------------------create file and add date -----------------------

// const fs = require('fs');

// const date = Date()

// fs.writeFile('example1.txt',date,'utf8',(err)=>{

// if(err){
//   console.error('error',err)
// }else{

//   console.log('file successfully created  :',date)
// }

// })
//------------------------------------middleware------------------------------------------

// const express=require('express')
// const app=express()



//   app.get('./home',(req,res,next)=>{
//   const error=new Error('error simulated')
//   next()
// })

// const middleware=(err,req,res,next)=>{

//   console.error(err.stack)
       
//   res.status(500),json('error occured')   

// }

// app.use(middleware)

//    app.listen(7002,()=>{
  //   console.log('server is running')
  // })

// //--------------------------------getting number from user and giving it odd or even---------------------------------------

// const express=require('express')
// const app = express()

// app.get('/val/num',(req,res)=>{
//   const num=req.params.num 

//    if(isNaN(num)){
//     res.status(400).json({error:'failed'})
//   }else{
//     const result= num%2===0?'even':'odd';
//     res.json({num,result})

//   }
// }).listen(3000,()=>{
//   console.log('server is running')
// })