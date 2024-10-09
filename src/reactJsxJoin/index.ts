import { ReactNode, isValidElement, cloneElement } from "react"
import { v4 } from "uuid"

function reactJsxJoin(arr: Array<ReactNode>, separator: ReactNode) {
    const result = [] as Array<ReactNode>
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            result.push(arr[i])
        } else {
            result.push(arr[i])
            if (isValidElement(separator)) {
                result.push(cloneElement(separator, { key: v4() }))
            }
        }
    }
    return result
}

export default reactJsxJoin
