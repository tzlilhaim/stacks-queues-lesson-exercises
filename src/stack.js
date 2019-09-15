
class Stack {
  constructor() {
    this.stack = []
    this.length = 0
  }

  push(x) {
    //Write your code here
    this.stack[this.length] = x
    this.length++
  }

  isEmpty() {
    //Write your code here
    return !this.length ? true : false
  }

  peek() {
    //Write your code here
    return this.isEmpty() ? null : this.stack[this.length - 1]
  }

  pop() {
    //Write your code here
    if (this.isEmpty()) {
      return null
    } else {
      this.length--
      return delete this.stack[this.length]
    }
  }

  print() {
    //Write your code here
    console.log(this.stack)
  }
}

//You can use the following code to test your solution
let myStack = new Stack()
console.log(myStack.isEmpty())    //true
myStack.print()                    //[]
myStack.push(2)
console.log(myStack.isEmpty())     //false
myStack.push(4)
myStack.print()                    //[2,4]
console.log(myStack.peek())        //4
myStack.pop()
myStack.pop()
console.log(myStack.peek())       //null
console.log(myStack.isEmpty())    //true



/* Do not remove the exports below */
module.exports = Stack