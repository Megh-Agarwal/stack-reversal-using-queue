const Queue = require("./queue");
const Stack = require("./stack");

function reverse(stack){ 
    const queue = new Queue(); //Creating a new queue
    while(!stack.isEmpty()){ // Looping until the stack is empty.
       queue.enqueue(stack.pop()); //Enqueue the popped stack element.
    } 
    
    while(!queue.isEmpty()){  //Looping until the queue is empty.
       stack.push(queue.dequeue()); //Pushed the dequeued queue element.
    }
}

const stack = new Stack();

stack.push('Welcome');
stack.push('There');
stack.push('Hi');

console.log('Printing stack before reversal: ', stack.print());

reverse(stack);

console.log('Printing stack after reversal: ', stack.print());