const http = require('http');
const fs = require('fs')
const myserver = http.createServer((req,res)=>{
    const log = `${Date.now()}; new one comes\n`;
    fs.appendFile('log.txt',log,(err,data)=>{
        res.end("screen p hu")
    })
});
myserver.listen(8000,()=>{
    console.log(`server started`)
})