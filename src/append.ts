import { Operator } from "./types"

export function append<T>(items: T[]): Operator<T[]> {
    return function (state) {
        return state.concat(items)
    }
}
