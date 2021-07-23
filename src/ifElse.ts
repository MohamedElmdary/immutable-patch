import { isFunction } from "./guards"
import { Operator } from "./types"

type Condition<T> = ((state: T) => boolean) | boolean
type Case<T> = Operator<T> | T

export function ifElse<T>(
    cnd: Condition<T>,
    ifTrue: Case<T>,
    ifFalse: Case<T>
): Operator<T> {
    return function (state) {
        const condition = isFunction(cnd) ? cnd(state) : cnd

        if (condition) {
            return isFunction(ifTrue) ? ifTrue(state) : ifTrue
        }

        return isFunction(ifFalse) ? ifFalse(state) : ifFalse
    }
}
