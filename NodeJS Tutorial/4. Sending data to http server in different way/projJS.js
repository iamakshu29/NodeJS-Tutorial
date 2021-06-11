// STREAMS AND BUFFER  it is the second method to write a data to server
//using stream (the shortcut and more efficient method is pipe method)
// pipe method is written in place of rstream.on(data),(end),(error) 
//[all three get replace by one line and also it is better than this]

const fs = require('fs');
const http = require('http');
const port = 8080;

const server = http.createServer();
//server.on is an event handler which is a shorthand property 
// it works same as we used to write the function in http.createServer before 
// both are same (the content we write can be written in that function similarly)..
server.on('request', (req, res) => {
   const rstream = fs.createReadStream('index.txt');
   rstream.on('data',(chunk)=>{
    res.write(chunk);
   });
   rstream.on('end',()=>{
       res.end();
   });
   rstream.on('error',()=>{
       res.end("file not found");
   });
});

// What we do upper is we :-
// create a readable Stream
// Handle stream events --> data, end, and error
// here we can see they are the events as it also contain .on('eventname',function) syntax

server.listen(port, (err) => {
    if (err) {
        console.log(`error presents ${err}`);
    }
    else {
        console.log(`port is running successfully on ${port}`);
    }
});


//********************************************************************
// this is the 3rd efficient method than 2nd not the regular one 
// regular one is differnet method as that use fs.readFile or fs.readFileSync
// here this and above method uses fs.creareReadStream ie they are streaming the data
// chumk by chunk like video streaming not all at once like download
// watch the video for better understanding if u still get confuse
// thapa technical video 21 of node.js playlist which has 84 videos
// using pipe 

// const fs = require('fs');
// const http = require('http');
// const port = 8080;

// const server = http.createServer();
// //server.on is an event handler which is a shorthand property 
// // it works same as we used to write the function in http.createServer before 
// // both are same (the content we write can be written in that function similarly)..
// server.on('request', (req, res) => {
//    const rstream = fs.createReadStream('index.txt');
//     rstream.pipe(res);
// });

// server.listen(port, (err) => {
//     if (err) {
//         console.log(`error presents ${err}`);
//     }
//     else {
//         console.log(`port is running successfully on ${port}`);
//     }
// });
