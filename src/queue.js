
class Queue {
  constructor() {
    this.queue = []
    this.length = 0
  }

  enqueue(x) {
    //Write your code here
    this.queue[this.length] = x
    this.length++
  }

  dequeue() {
    //Write your code here
    let firstValue = this.queue[0]
    this.queue.splice(0, 1)
    this.length--

    return firstValue ? firstValue : null
  }

  isEmpty() {
    //Write your code here
    return this.length ? false : true
  }

  peek() {
    //Write your code here
    return this.length ? this.queue[0] : null
  }

  print() {
    //Write your code here
    console.log(this.queue)
  }
}


//You can paste the code from the lesson below to test your solution




/* Do not remove the exports below */
module.exports = Queue