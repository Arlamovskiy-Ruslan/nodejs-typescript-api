export function traverse(node: any, func: (key: string, value: string, node: object) => void) {
    const stack = [node];

    while (stack.length) {
        const node = stack.shift()

        Object.keys(node).forEach((key) => {
            if (node[key] instanceof Object) {
                func(key, node[key], node)
                stack.unshift(node[key])
                return
            }
        })
    }
}
