export function isObject(maybeObject: unknown): maybeObject is Object {
    return (
        maybeObject !== null &&
        maybeObject !== undefined &&
        Object.prototype.toString.call(maybeObject) === "[object Object]" &&
        (<any>maybeObject)?.constructor?.name !== "Array"
    )
}
