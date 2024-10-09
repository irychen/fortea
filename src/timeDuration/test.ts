import timeDuration from "./index"

describe("timeDuration", () => {
    it("should convert time duration to milliseconds", () => {
        expect(timeDuration("1s")).toBe(1000)
        expect(timeDuration("1m")).toBe(60000)
        expect(timeDuration("1h")).toBe(3600000)
        expect(timeDuration("1d")).toBe(86400000)
        expect(timeDuration("1w")).toBe(604800000)
        expect(timeDuration("1M")).toBe(2592000000)
        expect(timeDuration("1y")).toBe(31536000000)
    })

    it("should convert time duration to milliseconds", () => {
        expect(timeDuration("1h2m3s")).toBe(3723000)
        expect(timeDuration("1y2M3d4w5h6m7s")).toBe(39416767000)
    })

    // some special cases
    it("some special cases", () => {
        expect(timeDuration("")).toBe(0)
        expect(timeDuration("1")).toBe(0)
        expect(timeDuration("1s1m")).toBe(61000)
        expect(timeDuration("1s1s")).toBe(2000)
        expect(timeDuration("1s1m")).toBe(61000)
        expect(timeDuration("1s1h")).toBe(3601000)
        expect(timeDuration("1s1d")).toBe(86401000)
    })
})
