type classNameItem = string | Record<string, boolean>

/**
 * @name classNames
 * @description generate class names
 * @param args
 * @returns string
 */
function classNames(...args: classNameItem[]): string {
    const classes = []
    for (let i = 0; i < args.length; i++) {
        const arg = args[i]
        if (!arg) continue
        const argType = typeof arg
        if (argType === "string" || argType === "number") {
            classes.push(arg)
        } else if (Array.isArray(arg)) {
            classes.push(classNames(...arg))
        } else if (argType === "object") {
            for (const key in arg as Record<string, boolean>) {
                if (Object.prototype.hasOwnProperty.call(arg, key) && arg[key]) {
                    classes.push(key)
                }
            }
        }
    }
    return classes.join(" ")
}

export default classNames
