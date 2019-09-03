class ListWithAry {
  constructor() {
    this.ary = [];
  }

  print() {
    for (let i = 0; i < this.ary.length; i++) {
      console.log(i);
    }
  }

  push(val) {
    this.ary[this.ary.length] = val; // this allows us to put the new item on the end by finding the end of the array
  }

  pop(val) {
    let returnValue = this.ary[this.ary.length - 1];
    this.ary[this.ary.length - 1] = undefined; // this allows us to put the new item on the end by finding the end of the array
  }
  getLength() {
    return this.ary.length;
  }

  unshift() {
    for (let i = this.ary.length; i > 0; i--) {
      this.ary[i] = this.ary[i - 1];
    }
    this.ary[0] = val;
  }

  clear() {
    //iterate through every item and destroy it
  }

  get(index) {
    return this.ary.index;
  }
}

class ListWithLinkedNodes {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  print() {
    let curr = head; // curr i equal to the first node node
    while (curr !== null) {
      // if curr is not equal to null
      console.log(curr.val);
      curr = curr.next;
    }
  }

  push(val) {
    let newNode = new LinkedListNode(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      while (curr.next !== null) {
        // if curr is not equal to null
        console.log(curr.val);
        curr = curr.next;
      }
      curr.next = newNode;
    }
  } // if head is not equal to null, go to next node; rinse and repeat till you find null

  pop() {
    let returnValue = null;
    if (this.head !== null && this.head.next !== null) {
      while (curr.next.next !== null) {
        curr = curr.next;
      }
      returnValue = curr.next;
      curr.next = null;
    } else {
      //if head is the last item
    }
    return returnValue;
  }

  getLength() {
    //iterate through every node and keep a count of the number of nodes we have seen
  }

  unshift(val) {
    let newNode = new LinkedListNode();
    newNode.next = this.head;
    this.head = newNode;
  }

  clear() {
    this.head = null; // if we want to clear the entire list, we would set the head to null
  } // since everything is built off of the head, if we set it to null, it will destroy the other nodes
  //if we had a tail, we would also have to set the tail to null to make sure that the list gets wiped

  get() {
    //loop until we reach the item at index
  }
}

/* head -> node2 -> node3 -> tail -> null
//! NODE
let node = {
  next: null, //point to nexr node in list
  val: null // the next value in the list
} */

class LinkedListNode {
  constructor() {
    this.next = next;
    this.val;
  }
}

//palindrome is a string that is the same backwards and forwards
function isPalindrome(string) {
  //return true if string is a palindrome
  //else false
  if (string === string.reverse) {
    return true;
  } else {
    return false;
  }
}

// Algorithm Comparing Speed:
/* function isPalindrome(string){
return true if string is a palindrome
else false
if (string === string.reverse){
  return true;
}else{
  return false
}
}
console.log(isPalindrome('racecar')); */

/* let newString = ""
function isPalindrome(string){
for (let i = string.length -1; i >=0; i--){
  newString += string[i]
  console.log(`Our new string is ${newString}.`)
}

}
isPalindrome('racecar')
console.log(newString) */

/* let newString = ""
function isPalindrome(str){
for (let i of str){
  newString += str[i]
  console.log(`Our new string is ${newString}.`)
  if ( newString === str){
  return true;
  }else {
  return false
  }
}
}
isPalindrome('racecar') */

/* function isPalindrome(str){
   str.split("").reverse().join("");
  
}
 */

// !Binary Search Alg
const binarySearchRecursive = (inputArray, key, min, max) => {
  if (min > max) {
    return null; // Nothing left to search. It's not in the array.
  } else {
    const mid = Math.floor((min + max) / 2); // Find the middle
    const element = inputArray[mid];
    if (key === element) {
      return mid; // Found it!
    } else if (key < element) {
      // It's in the first half.
      return binarySearchRecursive(inputArray, key, min, mid - 1);
    } else {
      // It's in the second half.
      return binarySearchRecursive(inputArray, key, mid + 1, max);
    }
  }
};
const arr = ["A", "B", "C", "D", "E", "F", "G", "H"];
console.log(binarySearchRecursive(arr, "G", 0, arr.length - 1));
