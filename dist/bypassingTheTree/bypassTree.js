"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.traverse = void 0;
function traverse(node, func) {
    const stack = [node];
    while (stack.length) {
        const node = stack.shift();
        Object.keys(node).forEach((key) => {
            if (node[key] instanceof Object) {
                func(key, node[key], node);
                stack.unshift(node[key]);
                return;
            }
        });
    }
}
exports.traverse = traverse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnlwYXNzVHJlZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2J5cGFzc2luZ1RoZVRyZWUvYnlwYXNzVHJlZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxTQUFnQixRQUFRLENBQUMsSUFBUyxFQUFFLElBQXdEO0lBQ3hGLE1BQU0sS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFckIsT0FBTyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQ2pCLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUUxQixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzlCLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLE1BQU0sRUFBRTtnQkFDN0IsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7Z0JBQzFCLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7Z0JBQ3hCLE9BQU07YUFDVDtRQUNMLENBQUMsQ0FBQyxDQUFBO0tBQ0w7QUFDTCxDQUFDO0FBZEQsNEJBY0MifQ==