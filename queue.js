class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}


class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek(){
        return this.first ? this.first.value : null;
    }

    enqueue(value){
        var newNode = new Node(value);
        if(this.isEmpty()){
            this.first = newNode;
            this.last = newNode;
            this.length++;
        }else{
            this.last.next = newNode;
            this.last = newNode;
            this.length++
        }
        
    }

    dequeue(){
        if(this.isEmpty()){
            throw new Error("Empty ");
        }

        if(this.length == 1){
            this.last = null;
        }

        var node = this.first;

        this.first = this.first.next;

        return node.value;
    }

    isEmpty(){
        return this.length == 0;
    }

 
}

var pro = new Queue();

pro.enqueue(1)
pro.enqueue(2)
pro.enqueue(3)
pro.enqueue(4)

console.log(pro.peek());
pro.dequeue()
console.log(pro.peek());
console.log(pro);


