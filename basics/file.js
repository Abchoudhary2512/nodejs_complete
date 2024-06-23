const fs = require('fs')
const os = require('os')
//sync
// fs.writeFileSync('./test.txt','hey there');

//async
fs.writeFile('./test.txt','hey theressss',(err) => {})

//const res = fs.readFileSync('./test2.txt','utf-8')
//console.log(res)
//ye return krta hai

//async void return
// fs.readFile('./test2.txt','utf-8',(err,res)=>{
//     if(err){
//         console.log("err",err);
//     }
//     else{
//         console.log(res);
//     }
// })

//data apend type k liye
fs.appendFileSync('./test2.txt',`hey there`)


// console.log(os.cpus().length) //maximum threads size itni ho ksti hai


//blockcing code  - sync
//non blocking code - async



//example of the synnc or block code
console.log("2");

const res = fs.readFileSync('./test2.txt','utf-8');
console.log(res);

console.log("23");

console.log("2323");

console.log("3223");

console.log("223233");


// console.log("12");
// fs.readFile('./test2.txt','utf-8',(err,res)=>{
//     if(err){
//         console.log("err is",err);
//     }
//     else{
//         console.log(res);
//     }
// })

// console.log("13");
// console.log("14");console.log("15");