// include http module to create the server....
const http = require('http');
// to send the response to server from external files we need to read them from fs module..
const fs = require('fs');
const port = 8080;


// then we create server which contain callback func which include two parameters request and respond
// req.url is the text written in url after port
// res is the data we use to show in server so we send it using res.end..


//********************************************************************************************************************************

// let reqHandler = (req,res)=>{
//     console.log(req.url);
//     // we have to tell the status of server and type of data.. 
//     res.writeHead(200,{'Content-type':'text/html'});
//     // res.end('hello this is localhost');
//     res.end('<b>hello this is localhost</b>');
//     // can send the html data or normal text but only one res.end is there..
// }
//********************************************************************************************************************************

// this function show how we send multiple resoponds to server but on different url
// let reqHandlerUsingRoutes = (req,res)=>{
//     if(req.url == '/about'){
//         res.writeHead(200,{'Content-type':'text/html'});
//         res.end('This is the about page in localhosted server');
//     }
//     else if(req.url == '/home'){
//         res.writeHead(200,{'Content-type':'text/html'});
//         res.end('This is the home page in localhosted server');
//     }
//     else if(req.url == '/contact'){
//         res.writeHead(200,{'Content-type':'text/html'});
//         res.end('This is the contact page in localhosted server');
//     }
//     else{
//         res.writeHead(404,{'Content-type':'text/html'});
//         res.end('No page found errrr!!!!')
//     }

// }

//********************************************************************************************************************************

// this  function shows how we use the external file to send data to server (like using JSON file we can send API or using html we can send html data or simple .txt file)
let reqHandlerUsingDiffFiles = (req,res)=>{
    if(req.url == '/about'){
        res.writeHead(200,{'Content-type':'text/html'});
        fs.readFile('./pracFile.txt','utf-8',(err,data)=>{
            if(err){
                console.log("error detected ",err);
            }
            else{
                res.end(data);
            }
        });
        
    }
    else if(req.url == '/home'){
        res.writeHead(200,{'Content-type':'text/html'});
        fs.readFile('./proj.html','utf-8',(err,data)=>{
            if(err){
                console.log("error detected ",err);
            }
            else{
                res.end(data);
            }
        });
    }
    else if(req.url == '/userapi'){
        res.writeHead(200,{'Content-type':'application/JSON'});
        fs.readFile('./package.json','utf-8',(err,data)=>{
            if(err){
                console.log("error detected ",err);
            }
            else{
                res.end(data);
            }
        });
    }
    else{
        res.writeHead(404,{'Content-type':'text/html'});
        res.end('No page found errrr!!!!')
    }
}

//********************************************************************************************************************************

// Comment out any one function from above and comment out the same function call below to see the result.......
// const server = http.createServer(reqHandler);
// const server = http.createServer(reqHandlerUsingRoutes); 
//const server = http.createServer(reqHandlerUsingDiffFiles);

//********************************************************************************************************************************

// before send the data to any url 
// server has to listen on which port url is request for the data..
// we use http.createrSerever().listen or server.listen (as we put the value in server const)...
server.listen(port,(err)=>{
    if(err){
        console.log("error detected ",err);
    }
    else{
        console.log("server is running successfully on port ",port);
    }
});

//********************************************************************************************************************************