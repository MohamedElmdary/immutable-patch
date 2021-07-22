export function isArray(maybeArray: unknown): maybeArray is Array<any> {
    return (
        Array.isArray(maybeArray) ||
        Object.prototype.toString.call(maybeArray) === "[object Array]" ||
        maybeArray instanceof Array
    )
}
