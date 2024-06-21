const fs = require('fs')

//sync
// fs.writeFileSync('./test.txt','hey there');

//async
fs.writeFile('./test.txt','hey theressss',(err) => {})

//const res = fs.readFileSync('./test2.txt','utf-8')
//console.log(res)

//async return
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

