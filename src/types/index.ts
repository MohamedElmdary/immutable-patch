export type Operator<T> = (state: T) => T
export type Index<T> = number | ((state: T[]) => number)
