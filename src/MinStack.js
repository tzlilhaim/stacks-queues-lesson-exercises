const Stack = require("./Stack")

/* Write your class below */
class MinStack extends Stack {
  getMin() {
    return this.isEmpty() ? null : Math.min.apply(Math, this.stack)
  }
}

//You can paste the test code from the lesson below to test your solution
let ms = new MinStack()
ms.push(17)
ms.push(12)
ms.push(31)
console.log(ms.getMin()) //12
ms.pop()
ms.pop()
ms.pop()
console.log(ms.getMin()) //null
ms.push(19)
ms.push(21)
console.log(ms.getMin()) //19
ms.push(3)
console.log(ms.getMin()) //3
ms.pop()
ms.pop()
console.log(ms.getMin())

/* Do not remove the exports below */
module.exports = MinStack
