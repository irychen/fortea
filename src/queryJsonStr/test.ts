import { forBoolean, forNumber, forString } from "./index"

const str = '{"uid":"bf891430-dd30-4ae7-8301-4794c294174d","iat":1705415289,"exp":1705501689} '

describe("forNumber", () => {
    it("test case 1", () => {
        expect(forNumber('{"a":1}', "a")).toBe(1)
    })
    it("test case 2", () => {
        expect(forNumber('{"a":1}', "b")).toBe(null)
    })
    it("test case 3", () => {
        expect(forNumber('{"a":123}', "a")).toBe(123)
    })
    // null json
    it("test case 4", () => {
        expect(forNumber(null, "a")).toBe(null)
    })
    // null query
    it("test case 5", () => {
        expect(forNumber('{"a":1}', null)).toBe(null)
    })
    it("test case 6", () => {
        expect(forNumber(str, "iat")).toBe(1705415289)
    })
    it("test case 7", () => {
        expect(forNumber(str, "exp")).toBe(1705501689)
    })
})

describe("forString", () => {
    it("test case 1", () => {
        expect(forString('{"a":"1"}', "a")).toBe("1")
    })
    it("test case 2", () => {
        expect(forString('{"a":"1"}', "b")).toBe(null)
    })
    it("test case 3", () => {
        expect(forString('{"a":"123"}', "a")).toBe("123")
    })
    // null json
    it("test case 4", () => {
        expect(forString(null, "a")).toBe(null)
    })
    // null query
    it("test case 5", () => {
        expect(forString('{"a":"1"}', null)).toBe(null)
    })
})

describe("forBoolean", () => {
    it("test case 1", () => {
        expect(forBoolean('{"a":true}', "a")).toBe(true)
    })
    it("test case 2", () => {
        expect(forBoolean('{"a":false}', "a")).toBe(false)
    })
    it("test case 3", () => {
        expect(forBoolean('{"a":false}', "b")).toBe(null)
    })
    // null json
    it("test case 4", () => {
        expect(forBoolean(null, "a")).toBe(null)
    })
    // null query
    it("test case 5", () => {
        expect(forBoolean('{"a":true}', null)).toBe(null)
    })
})
