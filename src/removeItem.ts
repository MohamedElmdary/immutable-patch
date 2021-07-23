import { isFunction } from "./guards"
import { Index, Operator } from "./types"
import { copy } from "./utils"

export function removeItem<T>(index: Index<T>): Operator<T[]> {
    return function (state) {
        const clone = copy(state)
        const idx = isFunction(index) ? index(state) : index
        clone.splice(idx, 1)
        return clone
    }
}
