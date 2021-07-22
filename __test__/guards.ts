import { isArray, isObject } from "../src"

describe("Guards", () => {
    describe("Check Array Guard", () => {
        it("Array<any> should return true.", () => {
            expect(isArray([])).toBe(true)
            expect(isArray(new Array())).toBe(true)
            expect(isArray(Object.create([]))).toBe(true)
        })

        it("Should return false.", () => {
            expect(isArray("string")).toBe(false)
            expect(isArray(0)).toBe(false)
            expect(isArray(false)).toBe(false)
            expect(isArray({})).toBe(false)
            expect(isArray(new Map())).toBe(false)
            expect(isArray(new Set())).toBe(false)
            expect(isArray(new WeakMap())).toBe(false)
            expect(isArray(new WeakSet())).toBe(false)
            expect(isArray(Object.create({}))).toBe(false)
            expect(isArray(Object.create(null))).toBe(false)
            expect(isArray(null)).toBe(false)
        })
    })

    describe("Check Object Guard", () => {
        it("Object should return true.", () => {
            expect(isObject({})).toBe(true)
            expect(isObject(Object.create({}))).toBe(true)
            expect(isObject(Object.create(null))).toBe(true)
        })

        it("Should return false.", () => {
            expect(isObject([])).toBe(false)
            expect(isObject(new Array())).toBe(false)
            expect(isObject(Object.create([]))).toBe(false)
            expect(isObject("string")).toBe(false)
            expect(isObject(0)).toBe(false)
            expect(isObject(false)).toBe(false)
            expect(isObject(new Map())).toBe(false)
            expect(isObject(new Set())).toBe(false)
            expect(isObject(new WeakMap())).toBe(false)
            expect(isObject(new WeakSet())).toBe(false)
            expect(isObject(null)).toBe(false)
        })
    })
})
