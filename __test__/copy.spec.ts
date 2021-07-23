import { copy } from "../src"

describe("Utils", () => {
    describe("Copy", () => {
        it("should be false", () => {
            const x = {}
            expect(copy(x) === x).toEqual(false)

            const q = { todos: [] }
            expect(copy(q) !== q).toEqual(true)
            expect(copy(q).todos).toBe(q.todos)
        })
    })
})
