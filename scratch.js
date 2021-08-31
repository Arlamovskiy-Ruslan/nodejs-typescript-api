
var o =
    {
        user: {
            firstName: '@Adam',
            sex: '@male',
            role: '@user',
            children:
                [
                    {
                        name: '@Villiam',
                        age: "@"
                    }, {
                    name: '@Danny',
                    age: "@"
                }
                ]
        }
    };

function traverse(node, func) {
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

// const fx = (key, value) => console.log(key, value)
const fx = (key, value) => {
    if (value === "@Adam"){
        console.log("SSSS")
    }
    if (value === "@male"){
        console.log("SS")
    }
}

traverse(o, fx)

// function process(key, value) {
//     console.log(key + " : " + value);
// }
//
// function traverse(node, func) {
//     for (var prop in node) {
//         func(prop, node[prop]);
//         if (node[prop] !== null && typeof (node[prop]) == "object") {
//             traverse(node[prop], func);
//         }
//     }
// }

// traverse(o, process);