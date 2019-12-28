class Node{
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(val){
        var newNode = new Node(val);

        if(this.isEmpty()){
            this.top = newNode;
            this.bottom = newNode;
            this.length++;
        }else{
            newNode.next = this.top;
            this.top = newNode;
            this.length++
        }
    }

    pop(){
        if(this.isEmpty()){
            throw new Error("Empty")
        }

        var data = this.top.value;

        this.top = this.top.next;
        this.length --;

        return data;
    }

    peek(){
        if(this.isEmpty()){
            throw new Error("Empty")
        }

        return this.top.value;
    }


    isEmpty(){
        return this.length == 0
    }
}


var pro = new Stack();
pro.push(1)
pro.push(2)
pro.push(3)
pro.push(4)
console.log(pro.pop())
console.log(pro.pop())
console.log(pro.peek())
console.log(pro.pop())
console.log(pro.peek())