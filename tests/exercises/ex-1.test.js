const Stack = require('../../src/stack')

describe('Exercise 1', () => {
    it('Should create a push method which adds a new element to the top of the stack', function () {
        const stack = new Stack()
        stack.push(1)

        const expectedStack = [1]

        expect(stack.length, `when pushing 1 to the stack, the length of the stack should be 1`).toBe(1)
        expect(stack.stack, `when pushing 1 to the stack, the stack should look like this - [1]`).toEqual(expectedStack)
    })

    it('Should create a peek method which returns the top element of the stack', function () {
        const stack = new Stack()

        for (let i = 1; i <= 3; i++) {
            stack.push(i)
            expect(stack.peek(), `when pushing ${i} to the stack, the top element should be ${i}`).toBe(i)
        }
    })

    it('Should create a pop method which removes the top element of the stack (and returns it)', function () {
        const stack = new Stack()

        stack.push(1)
        stack.push(2)
        stack.push(3)

        for (let i = 3; i > 1; i--) {
            expect(stack.length, `when pushing 1,2,3 to the stack, the length of the stack should be ${i}`).toBe(i)

            stack.pop()
            expect(stack.peek(), `when pushing 1,2,3 to the stack and popping, the popped element should be ${i - 1}`).toBe(i - 1)
        }
    })
})