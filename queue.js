class Queue { 
    constructor(){  
        this.elements = []; 
    }

    enqueue(element){ 
        this.elements.push(element) 
    }
    
    dequeue() {
        if(!this.isEmpty()) {
              return this.elements.shift();
        } else {
              return 'Underflow situation';
        }
    }

    isEmpty() {
        return this.elements.length == 0;
    }
}

module.exports = Queue;