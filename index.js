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

//Creates a new stack.
const stack = new Stack();

//Pushes 3 strings onto the stack
stack.push('Welcome');
stack.push('There');
stack.push('Hi');

//Prints the stack before the reversal.
console.log('Printing stack before reversal: ', stack.print());

//Reverses the stack.
reverse(stack);

//Prints the stack after the reversal.
console.log('Printing stack after reversal: ', stack.print());