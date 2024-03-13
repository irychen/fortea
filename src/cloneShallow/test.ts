import cloneShallow from "./index"

describe("cloneShallow", () => {
    it("test case 1", () => {
        expect(cloneShallow(123)).toBe(123)
    })
    it("test case 2", () => {
        expect(cloneShallow("123")).toBe("123")
    })
    it("test case 3", () => {
        expect(cloneShallow([1, 2, 3])).toEqual([1, 2, 3])
    })
    it("test case 4", () => {
        expect(cloneShallow({ a: 1, b: 2 })).toEqual({ a: 1, b: 2 })
    })
    it("test case 5", () => {
        expect(cloneShallow({ a: 1, b: { c: 3 } })).toEqual({ a: 1, b: { c: 3 } })
    })
    it("test case 6", () => {
        expect(cloneShallow({ a: 1, b: { c: 3 } })).not.toBe({ a: 1, b: { c: 3 } })
    })
    it("test case 7", () => {
        const a = [1, 2, 3]
        expect(cloneShallow(a)).not.toBe(a)
    })
    it("test case 8", () => {
        const a = { a: 1, b: 2 }
        expect(cloneShallow(a)).not.toBe(a)
    })
})
