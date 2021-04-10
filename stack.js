class Stack { 
    constructor(){  
        this.elements = []; 
    }

    push(element){ 
        this.elements.push(element);
    }

    pop(){ 
        if(this.isEmpty()) return "Underflow situation"; 
        else return this.elements.pop();
    }

    isEmpty(){ 
        return this.elements.length == 0;
    }

    print(){
        return this.elements;
    }

}

module.exports = Stack