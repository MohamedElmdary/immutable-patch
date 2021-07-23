import { Operator, patch } from "../src"

interface TodoModel {
    id: number
    body: string
    done: boolean
}

interface UserModel {
    id: string
    name: string
    todo: TodoModel
}

describe("Operators", () => {
    describe("Patch", () => {
        it("Should return new object", () => {
            const state: UserModel = {
                id: "Awesome ID",
                name: "Mohamed",
                todo: {
                    id: 0,
                    body: "body",
                    done: true,
                },
            }

            const newState = patch<UserModel>({
                id: (value) => value + " 2",
                name: "My New Name",
                todo: patch<TodoModel>({
                    id: 5,
                    done(value) {
                        return !value
                    },
                }),
            })(state)

            expect(state === newState).toBe(false)
            expect(newState.id).toEqual(state.id + " 2")
            expect(state.todo === newState.todo).toBe(false)
            expect(state.todo.body).toEqual(newState.todo.body)
            expect(state.todo.id).toEqual(0)
            expect(newState.todo.id).toEqual(5)
            expect(state.todo.done !== newState.todo.done).toBe(true)
        })
    })
})
