import { isArray, isObject } from "../guards"

export function copy<T>(obj: T): T {
    if (isArray(obj)) {
        return [...obj] as unknown as T
    }

    if (isObject(obj)) {
        return { ...obj }
    }

    throw new Error(`type \`${typeof obj}\` cannot be copied.`)
}
