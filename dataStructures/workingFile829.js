class ListWithAry {
constructor(){
this.ary = [];
}

  print(){
  for(let i=0; i < this.ary.length; i++){
  console.log(i)
  }};

  push(val){
    this.ary[this.ary.length] = val; // this allows us to put the new item on the end by finding the end of the array
  }

}



class ListWithLinkedNodes{
  constructor(){
  this.head = null;
  this.tail = null;
  }
  
  print(){
    let curr =  head; // curr i equal to the first node node
    while (curr !== null){ // if curr is not equal to null
      console.log(curr.val);
      curr = curr.next;
    }};

  push(val){
    let newNode = new LinkedListNode(val);
    if(!this.head){
      this.head = newNode;
    }else {
      while (curr !== null){ // if curr is not equal to null
        console.log(curr.val);
        curr = curr.next;
    }
  }

}

/* head -> node2 -> node3 -> tail
//! NODE
let node = {
  next: null, //point to nexr node in list
  val: null // the next value in the list
} */

class LinkedListNode{
  constructor(){
      this.next = next;
    this.val;
  }
}
