"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomValue = void 0;
const faker_1 = __importDefault(require("faker"));
class randomValue {
    randomName(key, value) {
        let firstName = JSON.stringify(value).toLowerCase().match(/@f.*/);
        if (firstName) {
            value = faker_1.default.name.firstName();
            console.log(value);
        }
    }
    randomSex(key, value) {
        let sex = JSON.stringify(value).toLowerCase().match(/@s.*/);
        if (sex) {
            value = faker_1.default.random.arrayElement(['Male', 'Female']);
            console.log(value);
        }
    }
}
exports.randomValue = randomValue;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZG9tVmFsdWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cmFuc2xhdGUvcmFuZG9tVmFsdWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0RBQTBCO0FBRzFCLE1BQWEsV0FBVztJQUVwQixVQUFVLENBQUMsR0FBVyxFQUFFLEtBQWE7UUFDakMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEUsSUFBSSxTQUFTLEVBQUU7WUFDWCxLQUFLLEdBQUcsZUFBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtZQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQ3JCO0lBQ0wsQ0FBQztJQUVELFNBQVMsQ0FBQyxHQUFRLEVBQUUsS0FBVTtRQUMxQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1RCxJQUFJLEdBQUcsRUFBRTtZQUNMLEtBQUssR0FBRyxlQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDckI7SUFDTCxDQUFDO0NBQ0o7QUFqQkQsa0NBaUJDIn0=