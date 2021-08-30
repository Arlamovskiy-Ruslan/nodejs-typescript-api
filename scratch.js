var o =
    {
        user: {
            firstName: 'Adam',
            sex: 'male',
            role: 'user',
            children:
                [
                    {
                        name: 'Villiam',
                        age: 6
                    }, {
                    name: 'Danny',
                    age: 8
                }
                ]
        }
    };
// function traverse(o, func) {
//     const stack = [o];
//
//     while (stack.length) {
//         const obj = stack.shift()
//
//         Object.keys(obj).forEach((key) => {
//             func(key, obj[key], obj)
//             if (obj[key] instanceof Object) {
//                 stack.unshift(obj[key])
//                 return
//             }
//         })
//     }
// }
//
// const fx = (key, value, obj) => console.log(key, value)
// traverse(o, fx)

function process(key, value) {
    console.log(key + " : " + value);
}

function traverse(obj, func) {
    for (var i in obj) {
        func.apply(this, [i, obj[i]]);
        if (obj[i] !== null && typeof (obj[i]) == "object") {
            traverse(obj[i], func);
        }
    }
}

traverse(o, process);