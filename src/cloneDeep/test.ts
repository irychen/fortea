import cloneDeep from "./index"

describe("cloneDeep", () => {
    it("test case 1", () => {
        const a = { a: 1, b: { c: 2 } }
        const b = cloneDeep(a)
        expect(a).toEqual(b)
        expect(a).not.toBe(b)
    })
    it("test case 2", () => {
        const a = { a: 1, b: { c: 2 } }
        const b = cloneDeep(a)
        expect(a.b).toEqual(b.b)
        expect(a.b).not.toBe(b.b)
    })
    it("test case 3", () => {
        const a = { a: 1, b: { c: 2 } }
        const b = cloneDeep(a)
        a.b.c = 3
        expect(a.b.c).not.toEqual(b.b.c)
    })
})
