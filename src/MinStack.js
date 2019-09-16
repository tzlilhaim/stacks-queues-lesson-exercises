const Stack = require('./Stack')

class MinStack extends Stack {
  constructor() {
    super()
    this.minValues = new Stack()
  }

  push(x) {
    if (this.isEmpty()) {
      this.minValues.push(x)
    } else {
      x < this.minValues.peek() ? this.minValues.push(x) : null
    }

    super.push(x)
  }

  pop() {
    if (this.isEmpty()) {
      return null
    } else {
      this.length--
      this.stack[this.length] === this.minValues.peek() ? this.minValues.pop() : null
      return delete this.stack[this.length]
    }
  }

  getMin() {
    return this.minValues.peek() ? this.minValues.peek() : null
  }
}


//You can paste the code from the lesson below to test your solution




/* Do not remove the exports below */
module.exports = MinStack