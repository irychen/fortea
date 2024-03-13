import isArray from "../isArray"
import isObject from "../isObject"

function cloneShallow<T>(value: T): T {
    if (isArray(value)) {
        return value.slice() as T
    } else if (isObject(value)) {
        return Object.assign({}, value) as T
    } else {
        return value
    }
}

export default cloneShallow
