const Queue = require('./Queue')

class DuoQueue extends Queue {
  constructor() {
    super()
    this.q1 = new Queue()
    this.q2 = new Queue()
  }

  enqueue(person, qNum) {
    this[`q${qNum}`].enqueue(person)
  }

  dequeue(qNum) {
    this[`q${qNum}`].dequeue()
  }

  getLongestQueue() {
    if (this.q1.length === this.q2.lenght) {
      return "both equal"
    } else {
      return this.q1.length > this.q2.length ? this.q1 : this.q2
    }
  }

  getShortestQueue() {
    if (this.q1.length === this.q2.lenght) {
      return "both equal"
    } else {
      return this.q1.length < this.q2.length ? this.q1 : this.q2
    }
  }

  balanceQueues() {
    let longestQueue = this.getLongestQueue()
    let shortestQueue = this.getShortestQueue()

    while ((longestQueue.length - shortestQueue.length) > 1) {
      shortestQueue.enqueue(longestQueue.peek())
      longestQueue.dequeue()
    }
  }

  print() {
    console.log("Queue 1: ")
    this.q1.print()

    console.log("Queue 2: ")
    this.q2.print()
  }
}


//You can paste the code from the lesson below to test your solution




/* Do not remove the exports below */
module.exports = DuoQueue