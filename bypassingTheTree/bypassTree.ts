export function traverse(node: any, func: any) {
    const stack = [node];

    while (stack.length) {
        const node = stack.shift()

        Object.keys(node).forEach((key) => {
            func(key, node[key], node)
            if (node[key] instanceof Object) {
                stack.unshift(node[key])
                return
            }
        })
    }
}
