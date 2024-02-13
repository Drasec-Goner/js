const EventEmitter = require('events');
// Imports the events module and create an instance of the EventEmitter class

const myEmitter = new EventEmitter();
// Create an instance of the EventEmitter class. USed to handle events

//on method - Used to register an event listener for a specific events.
//Multiple listeners can be attached to the same event.
myEmitter.on('firstevent', (args1,args2) => {
    //Event handler logic
    console.log("Event occured with arguments:",args1,args2);
});

//once method - Registers a listener that will be called only once for a specific event.
myEmitter.once('firstevent', (args1,args2) => {
    console.log('This listener will be executed only once.');
});

/*
emit method - Triggers an event. All registered listeners for that event will execute, 
and any additional arguments passed to emit will be provided to the listeners
*/
for(var i=0;i<2;i++)
{
    myEmitter.emit('firstevent', 'Hello', 'Hi');
}


const eventHandler = (args1, args2) => {
    console.log('Second Event occured with arguments:', args1, args2);
};
//Add the event handler
myEmitter.on('secondevent', eventHandler);
for(var i=0;i<5;i++)
{
    if(i==2)
    {
        //removelistener - Removes the listener after the first emission
        myEmitter.removeListener('secondevent', eventHandler);
    }
    myEmitter.emit('secondevent', 'Hello', 'Hii');
}


//removeAllListeners - removes every listeners attached to that event

myEmitter.removeAllListeners('firstevent');