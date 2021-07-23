import { append, updateItem, patch } from "../src"

describe("Operators", () => {
    describe("Patch", () => {
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

            const newState2 = patch<UserModel>({
                todo: {
                    id: 0,
                    body: "body",
                    done: false,
                },
            })(newState)

            expect(newState !== newState2).toBe(true)
            expect(newState.todo !== newState2.todo).toBe(true)
            expect(newState2.id).toEqual(newState.id)
            expect(newState2.name).toEqual(newState.name)
            expect(newState2.todo.body).toEqual("body")
            expect(newState2.todo.id).toEqual(0)
            expect(newState2.todo.done).toBeFalsy()
        })
    })

    describe("Append", () => {
        it("Should append items and copy the old list.", () => {
            const state = [0, 1]
            const newState = append<number>([7, 8, 9])(state)

            expect(state === newState).toBe(false)
            expect(state.length).toBe(2)
            expect(newState.length).toBe(state.length + 3)
        })

        it("Should work with patch", () => {
            type S = { nums: number[] }

            const state: S = { nums: [0, 1] }
            const newState = patch<S>({
                nums: append<number>([7, 8]),
            })(state)

            expect(state.nums !== newState.nums).toBe(true)
            expect(state.nums.length).toBe(2)
            expect(newState.nums.length).toBe(4)
            expect(newState.nums[0]).toEqual(0)
            expect(newState.nums[newState.nums.length - 1]).toEqual(8)
        })
    })

    describe("UpdateItem", () => {
        it("Should update the item.", () => {
            type User = { id: number; name: string }
            const state: User[] = Array.from({ length: 10 }, (_, id) => {
                return { id, name: `Test ${id}` }
            })

            const newState = updateItem<User>(
                (users) => users.findIndex((u) => u.id === 5),
                patch<User>({
                    name: "Khaled",
                })
            )(state)

            expect(state !== newState).toBe(true)
            expect(state.length).toEqual(newState.length)
            expect(state[0]).toBe(newState[0])
            expect(state[5] !== newState[5]).toBe(true)
            expect(state[5].name).toEqual("Test 5")
            expect(newState[5].name).toEqual("Khaled")
        })
    })
})
