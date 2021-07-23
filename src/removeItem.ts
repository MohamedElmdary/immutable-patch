import { isFunction } from "./guards"
import { Operator } from "./types"
import { copy } from "./utils"

type Index<T> = number | ((state: T[]) => number)
export function removeItem<T>(index: Index<T>): Operator<T[]> {
    return function (state) {
        const clone = copy(state)
        const idx = isFunction(index) ? index(state) : index
        clone.splice(idx, 1)
        return clone
    }
}
