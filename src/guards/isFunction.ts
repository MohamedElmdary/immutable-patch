export function isFunction(maybeFn: unknown): maybeFn is Function {
    return (
        typeof maybeFn === "function" ||
        Object.prototype.toString.call(maybeFn) === "[object Function]"
    )
}
