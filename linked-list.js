class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }

        this.tail = this.head;
        this.length = 1;
    }

    append(val) {
        var newNode = new Node(val)

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
    }

    prepend(val) {
        var newNode = new Node(val)

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    print() {
        var str = "";
        var pointer = this.head;

        while (pointer.next != null) {
            str = str + pointer.value + "---->";
            pointer = pointer.next;
        }
        str = str + pointer.value

        console.log(str)
    }

    insert(index, value) {
        //Check for proper parameters;
        if (index >= this.length) {
            console.log('yes')
            return this.append(value);
        }

        const newNode = {
            value: value,
            next: null
        }
        const leader = this.traverseToIndex(index - 1);
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
        return this.printList();
    }

    traverseToIndex(index) {
        //Check parameters
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
    }

    remove(index){
        if (index >= this.length) {
            throw new Error("Cannot delete out of bound index")
        }

        if(index == 0){
            this.head = this.head.next;
        }else{
            var previousNode = this.traverseToIndex(index-1);
            previousNode.next = previousNode.next.next;
        }

        this.length--

    }

    reverse(){
        var first = this.head;
        this.tail = this.head
        var second = first.next;
        while(second){
            var temp = second.next;

            second.next = first;

            first = second;
            second = temp;

        }
        this.head.next = null;
        this.head = first;
      
    }
}

var linked = new LinkedList(10)
linked.append(5);
linked.append(16)
linked.prepend(0)
linked.prepend(8)
linked.reverse()
linked.print()
// console.log(JSON.stringify(linked))
