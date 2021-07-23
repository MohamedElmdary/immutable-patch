import { Operator } from "./types"

export function insertItems<T>(values: T[], start: number = 0): Operator<T[]> {
    return function (state) {
        let offset = start < 0 ? 0 : start
        if (offset === 0) {
            return values.concat(state)
        } else if (offset >= state.length) {
            return state.concat(values)
        }
        return [...state.slice(0, offset), ...values, ...state.slice(offset)]
    }
}
