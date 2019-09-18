const DuoQueue = require('../../src/DuoQueue')

describe('Exercise 3', () => {
  it('Should create a DuoQueue which consists of ', function () {
    const dq = new DuoQueue()

    dq.enqueue(1, 1)
    dq.enqueue(1, 1)
    dq.enqueue(1, 1)
    dq.enqueue(2, 2)
    dq.enqueue(2, 2)
    dq.dequeue(1)
    dq.dequeue(1)

    expect(JSON.stringify(dq.getLongestQueue()), 'enqueueing multiple ').toContain('[2,2]')
    expect(JSON.stringify(dq.getShortestQueue()), '').toContain('[1]')


    dq.enqueue(1, 1)
    dq.enqueue(1, 1)
    dq.enqueue(1, 1)
    dq.enqueue(1, 1)
    dq.enqueue(1, 1)
    dq.enqueue(1, 1)

    expect(JSON.stringify(dq.getLongestQueue()), '').toContain('[1,1,1,1,1,1,1]')
    expect(JSON.stringify(dq.getShortestQueue()), '').toContain('[2,2]')

    dq.balanceQueues()

    expect(JSON.stringify(dq.getLongestQueue()), '').toContain('[1,1,1,1,1]')
    expect(JSON.stringify(dq.getShortestQueue()), '').toContain('[2,2,1,1]')
  })
})