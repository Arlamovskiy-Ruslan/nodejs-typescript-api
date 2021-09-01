"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.oneOf = void 0;
const faker_1 = __importDefault(require("faker"));
class oneOf {
    oneOf(key, value) {
        if (value) {
            let roleRes = faker_1.default.random.arrayElement();
            console.log(roleRes);
        }
    }
    ;
}
exports.oneOf = oneOf;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25lT2YuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cmFuc2xhdGUvb25lT2YudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsa0RBQTBCO0FBRzFCLE1BQWEsS0FBSztJQUNkLEtBQUssQ0FBQyxHQUFXLEVBQUUsS0FBYTtRQUM1QixJQUFJLEtBQUssRUFBRTtZQUNQLElBQUksT0FBTyxHQUFHLGVBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLENBQUE7WUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUN2QjtJQUNMLENBQUM7SUFBQSxDQUFDO0NBQ0w7QUFQRCxzQkFPQyJ9