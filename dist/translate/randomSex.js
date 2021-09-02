"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomSex = void 0;
const faker_1 = __importDefault(require("faker"));
class randomSex {
    translate(key, value) {
        let sex = JSON.stringify(value).toLowerCase().match(/@s.*/);
        if (sex) {
            value = faker_1.default.random.arrayElement(['Male', 'Female']);
            console.log(value);
        }
    }
}
exports.randomSex = randomSex;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZG9tU2V4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdHJhbnNsYXRlL3JhbmRvbVNleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxrREFBMEI7QUFFMUIsTUFBYSxTQUFTO0lBQ2xCLFNBQVMsQ0FBQyxHQUFRLEVBQUUsS0FBVTtRQUMxQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1RCxJQUFJLEdBQUcsRUFBRTtZQUNMLEtBQUssR0FBRyxlQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDckI7SUFDTCxDQUFDO0NBQ0o7QUFSRCw4QkFRQyJ9