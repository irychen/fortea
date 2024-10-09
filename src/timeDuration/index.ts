import toNumber from "../toNumber"

/**
 * convert time duration to milliseconds
 * @param duration time string, like: 1s、1m、1h、1d、1w、1M、1y 1h2m3s 1y2M3d4w5h6m7s
 * @returns milliseconds
 */
function timeDuration(duration: string) {
    const reg = /(\d+)([smhdwMy])/g
    let total = 0
    let match: RegExpExecArray | null
    while ((match = reg.exec(duration))) {
        const [_, num, unit] = match
        const time = toUnit(unit)
        total += toNumber(num) * time
    }
    return total
}

function toUnit(unit: string) {
    switch (unit) {
        case "s":
            return 1000
        case "m":
            return 60 * 1000
        case "h":
            return 60 * 60 * 1000
        case "d":
            return 24 * 60 * 60 * 1000
        case "w":
            return 7 * 24 * 60 * 60 * 1000
        case "M":
            return 30 * 24 * 60 * 60 * 1000
        case "y":
            return 365 * 24 * 60 * 60 * 1000
        default:
            throw new Error(`Invalid duration unit: ${unit}`)
    }
}

export default timeDuration
