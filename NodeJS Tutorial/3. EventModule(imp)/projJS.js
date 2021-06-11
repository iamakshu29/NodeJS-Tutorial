// EVENTS MODULE
// one event emit can emit or call all the events..
// no of arguemtns in event.emit should be equal to parameters used in defining the events..
// always emit the event after define ...


//including events module using require
//here EventEmitter is a class
const EventEmitter = require('events');

//so for calling a class we the sytax is 
const event = new EventEmitter();


//.on syntax is used to set any cutom event you want
// setting the event you want using the
event.on('play a game',(a,b)=>{
    console.log(`the multiplication is ${a*b}`);
});

event.on('play a game',(a,b)=>{
    console.log(`the sum is ${a+b}`);
})


// emit or call the event which you set
event.emit('play a game',2,3);
