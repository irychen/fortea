import cloneArrayShallow from "./index"

describe("cloneArrayShallow", () => {
    it("test case 1", () => {
        const a = [1, 2, 3]
        const b = cloneArrayShallow(a)
        expect(a).toEqual(b)
        expect(a).not.toBe(b)
    })
    it("test case 2", () => {
        const a = [{ a: 1 }, { b: 2 }]
        const b = cloneArrayShallow(a)
        expect(a[0]).toEqual(b[0])
        expect(a[0]).not.toBe(b[0])
    })
})
