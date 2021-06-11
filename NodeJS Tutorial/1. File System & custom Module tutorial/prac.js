// // using custom modules 
// const {add,sub,name} = require('./prac2.js');
// console.log(`The result is ${add(4,5)}`);
// console.log(`The result is ${sub(9,5)}`);
// console.log(`The result is ${name}`);

// // now we are using fileSystem module  ie fs
// const fs = require('fs');
// // Write file asynchronously (must include a callback function in async), if(file not exist create and append the data)
// fs.writeFile('./pracFile.txt','This is a dummy File...',(err)=>{
//     if(err){
//         console.log('error is present ',err);
//     }
//     else{
//         console.log('file is created..');
//     }
// });

// fs.appendFile('./pracFile.txt',' This file is used for practice purpose..',(err)=>{
//     if(err){
//         console.log('error is present ',err);
//     }
//     else{
//         console.log('file is edited..');
//     }
// });

// fs.readFile('./pracFile.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log('error is present ',err);
//     }
//     else{
//         console.log(data);
//         console.log('file read successfully..');
//     }
// });



// there are similar function like fs.writeFileSync , readFileSync 
// they syntax is same only the callback func is removed