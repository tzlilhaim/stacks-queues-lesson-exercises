const MinStack = require('../../src/MinStack')

describe('Exercise 2', () => {
    it('Should create a `getMin` method which returns the minimum value in the stack', function () {
        const ms = new MinStack()

        ms.push(17)
        ms.push(12)
        ms.push(31)
        expect(ms.getMin(), `when pushing 17,12,31 to the stack, the 'getMin' function should return 12 but got ${ms.getMin()}`).toBe(12)

        ms.pop()
        ms.pop()
        ms.pop()
        expect(ms.getMin(), `when pushing 17,12,31 to the stack and then popping all values, the 'getMin' function should return 'null' but got ${ms.getMin()}`).toBe(null)

        ms.push(19)
        ms.push(21)
        expect(ms.getMin(), `when pushing 19,21 to the stack, the 'getMin' function should return 19 but got ${ms.getMin()}`).toBe(19)

        ms.push(3)
        expect(ms.getMin(), `when pushing 19,21,3 to the stack, the 'getMin' function should return 3 but got ${ms.getMin()}`).toBe(3)

        ms.pop()
        ms.pop()
        expect(ms.getMin(), `when pushing 19,21,3 to the stack and then popping 2 values, the 'getMin' function should return 19 but got ${ms.getMin()}`).toBe(19)
    })
})