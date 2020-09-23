const Queue = require("./Queue")

/* Write your class below */
class DuoQueue {
  constructor() {
    this.queueA = new Queue()
    this.queueB = new Queue()
    this.length = 2
  }
  enqueue(person, qNum) {
    const queue = qNum === 1 ? this.queueA : this.queueB
    queue.enqueue(person)
  }
  dequeue(qNum) {
    const queue = qNum === 1 ? this.queueA : this.queueB
    queue.dequeue()
  }
  getLongestQueue() {
    let longestQueue = this.queueA
    if (this.queueB.length > this.queueA.length) {
      longestQueue = this.queueB
    } else if (this.queueA.length === this.queueB.length) {
      longestQueue = null
    }
    return longestQueue
  }
  getShortestQueue() {
    let shortestQueue = this.queueA
    if (this.queueB.length < this.queueA.length) {
      shortestQueue = this.queueB
    } else if (this.queueA.length === this.queueB.length) {
      shortestQueue = null
    }
    return shortestQueue
  }
  balanceQueues() {
    const longestQueue = this.getLongestQueue()
    const shortestQueue = this.getShortestQueue()
    const balance =
      longestQueue && shortestQueue
        ? Math.floor((longestQueue.length - shortestQueue.length) / 2)
        : 0
    if (!balance < 1) {
      for (let i = 0; i < balance; i++) {
        let person = longestQueue.dequeue()
        shortestQueue.enqueue(person)
      }
    }
  }
}

//You can paste the test code from the lesson below to test your solution
//first set
let dq = new DuoQueue()
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(2, 2)
dq.enqueue(2, 2)
dq.dequeue(1)
dq.dequeue(1)

console.log(dq.getLongestQueue()) //Queue { queue: [ 2, 2 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 1 ] }

//second set
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)
dq.enqueue(1, 1)

console.log(dq.getLongestQueue()) //Queue { queue: [ 1, 1, 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 2, 2 ] }

//balance queues
dq.balanceQueues()
console.log(dq.getLongestQueue()) //Queue { queue: [ 1, 1, 1, 1, 1 ] }
console.log(dq.getShortestQueue()) //Queue { queue: [ 1, 1, 2, 2 ] }

/* Do not remove the exports below */
module.exports = DuoQueue
