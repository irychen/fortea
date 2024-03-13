import cloneShallow from "../cloneShallow"

function cloneArrayShallow<T>(array: T[]): T[] {
    return cloneShallow(array).map(item => {
        return cloneShallow(item)
    })
}

export default cloneArrayShallow
