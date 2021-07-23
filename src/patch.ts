import { isFunction } from "./guards"
import { Operator } from "./types"
import { copy } from "./utils"

export type Patcher<T> = {
    [R in keyof T]: T[R] | Operator<T[R]>
}

export function patch<T>(patchers: Patcher<Partial<T>>): Operator<T> {
    return function (state) {
        const clone = copy(state)

        for (const key in patchers) {
            let patcher: any = patchers[key]

            if (isFunction(patcher)) {
                patcher = patcher(clone[key])
            }

            clone[key] = patcher
        }

        return clone
    }
}
