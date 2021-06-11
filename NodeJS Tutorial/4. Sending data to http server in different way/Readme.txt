in this we respond to server in different way than we did in folder 2
In folder 2 we respond the data using fs.readFileSync() or fs.readFile()

But here we use the method fs.createReadStream()


what is stream ?
it simply means to send the data in chcunks or small parts of data
the data is send as soon as it gets...

whereas in fs.readfile the whole data is send at once not in the small chunks..



As the data in streams also responds very fast so that we can't see the data 
coming in chunks but still it is what it is..


Here We saw 2 methods of responding data to server using stream method 

the second is the shorthand of the first one and working is same..
