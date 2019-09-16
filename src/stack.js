
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


//You can paste the code from the lesson below to test your solution




/* Do not remove the exports below */
module.exports = Stack