const fs=require('fs');
const crypto = require("crypto");

const start = Date.now();
// we can increse the thread pool size till 4 but this will affect the time required 
// for encryption as Thread pool size is 1 The it take more time vice versa.
process.env.UV_THREADPOOL_SIZE = 1;


setTimeout(()=>console.log("Timer 1 finished"),0);
setImmediate(()=>console.log("Immediate 1 finished"));


fs.readFile("test-file.txt",()=>{
console.log("I/O Finished");

// reson behind putting them in callback to know about which function execute first
setTimeout(()=>console.log("Timer 2 finished"),0);
setTimeout(()=>console.log("Timer 3 finished"),3000);
setImmediate(()=>console.log("Immediate 2 finished"));

// Reson behind immediate 2 finish first due to polling as event loop waits for I/O polling and expired timer
process.nextTick(()=>console.log("Process next Tick")); 

crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
console.log(Date.now() - start, "Password encrypted");

crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
console.log(Date.now() - start, "Password encrypted");

crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
console.log(Date.now() - start, "Password encrypted");

crypto.pbkdf2Sync("password", "salt", 100000, 1024, "sha512");
console.log(Date.now() - start, "Password encrypted");
});
 

// firstly  the top level code get executed  
console.log("Hello From the Top Level Code");
