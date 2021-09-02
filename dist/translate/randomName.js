"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomName = void 0;
const faker_1 = __importDefault(require("faker"));
class randomName {
    translate(key, value) {
        let firstName = JSON.stringify(value).toLowerCase().match(/@f.*/);
        if (firstName) {
            value = faker_1.default.name.firstName();
            console.log(value);
        }
    }
}
exports.randomName = randomName;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZG9tTmFtZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3RyYW5zbGF0ZS9yYW5kb21OYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtEQUEwQjtBQUcxQixNQUFhLFVBQVU7SUFDbkIsU0FBUyxDQUFDLEdBQVcsRUFBRSxLQUFhO1FBQ2hDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xFLElBQUksU0FBUyxFQUFFO1lBQ1gsS0FBSyxHQUFHLGVBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7WUFDOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUNyQjtJQUNMLENBQUM7Q0FDSjtBQVJELGdDQVFDIn0=