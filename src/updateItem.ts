import { isFunction } from "./guards"
import { Index, Operator } from "./types"
import { copy } from "./utils"

type Updater<T> = Partial<T> | ((state: T) => Partial<T>) | Operator<T>
export function updateItem<T>(
    index: Index<T>,
    updater: Updater<T>
): Operator<T[]> {
    return function (state) {
        const clone = copy(state)
        const idx = isFunction(index) ? index(clone) : index
        if (idx === -1) {
            return clone
        }
        const patcher = isFunction(updater) ? updater(clone[idx]) : updater
        clone[idx] = patcher as T
        return clone
    }
}
