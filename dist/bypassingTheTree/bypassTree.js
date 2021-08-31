"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.traverse = void 0;
function traverse(node, func) {
    const stack = [node];
    while (stack.length) {
        const node = stack.shift();
        Object.keys(node).forEach((key) => {
            func(key, node[key], node);
            if (node[key] instanceof Object) {
                stack.unshift(node[key]);
                return;
            }
        });
    }
}
exports.traverse = traverse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnlwYXNzVHJlZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2J5cGFzc2luZ1RoZVRyZWUvYnlwYXNzVHJlZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxTQUFnQixRQUFRLENBQUMsSUFBUyxFQUFFLElBQVM7SUFDekMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVyQixPQUFPLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDakIsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBRTFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDOUIsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDMUIsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksTUFBTSxFQUFFO2dCQUM3QixLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO2dCQUN4QixPQUFNO2FBQ1Q7UUFDTCxDQUFDLENBQUMsQ0FBQTtLQUNMO0FBQ0wsQ0FBQztBQWRELDRCQWNDIn0=