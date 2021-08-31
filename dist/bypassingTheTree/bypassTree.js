"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.traverse = void 0;
function traverse(node, func) {
    const stack = [node];
    while (stack.length) {
        const obj = stack.shift();
        Object.keys(obj).forEach((key) => {
            func(key, obj[key], obj);
            if (obj[key] instanceof Object) {
                stack.unshift(obj[key]);
                return;
            }
        });
    }
}
exports.traverse = traverse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnlwYXNzVHJlZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2J5cGFzc2luZ1RoZVRyZWUvYnlwYXNzVHJlZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSxTQUFnQixRQUFRLENBQUMsSUFBUyxFQUFFLElBQVM7SUFDekMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUVyQixPQUFPLEtBQUssQ0FBQyxNQUFNLEVBQUU7UUFDakIsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFBO1FBRXpCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7WUFDeEIsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLFlBQVksTUFBTSxFQUFFO2dCQUM1QixLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO2dCQUN2QixPQUFNO2FBQ1Q7UUFDTCxDQUFDLENBQUMsQ0FBQTtLQUNMO0FBQ0wsQ0FBQztBQWRELDRCQWNDIn0=