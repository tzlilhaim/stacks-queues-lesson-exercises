/* Write your class below */
class Stack {
  constructor() {
    this.stack = []
    this.length = 0
  }
  push(x) {
    this.stack[this.length] = x
    this.length++
  }
  isEmpty() {
    return this.length ? false : true
  }
  peek() {
    return this.isEmpty() ? null : this.stack[this.length - 1]
  }
  pop() {
    if (this.isEmpty()) {
      return null
    } else {
      const item = delete this.stack[this.length - 1]
      this.length--
      this.stack = this.stack.filter((i) => i !== null)
      return item
    }
  }
  print() {
    console.log(this.stack)
  }
}

//You can paste the test code from the lesson below to test your solution
let myStack = new Stack()
console.log(myStack.isEmpty()) //true
myStack.print() //[]
myStack.push(2)
console.log(myStack.isEmpty()) //false
myStack.push(4)
myStack.print() //[2,4]
console.log(myStack.peek()) //4
myStack.pop()
myStack.pop()
myStack.print()
console.log(myStack.peek()) //null
console.log(myStack.isEmpty()) //true

/* Do not remove the exports below */
module.exports = Stack
