"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rangeAge = void 0;
const faker_1 = __importDefault(require("faker"));
class rangeAge {
    translate(key, value) {
        let age = JSON.stringify(value).toLowerCase().match(/@r.*/);
        if (age) {
            let oldChildren = JSON.stringify(age).toLowerCase()
                .replace(/@range/g, '').replace('(', '')
                .replace(')', '').replace(/"/g, '')
                .replace(/\\/g, '').replace('[', '');
            let ageSplit = oldChildren.split(",", 2);
            let firstNumber = parseInt(ageSplit[0]);
            let secondNumber = parseInt(ageSplit[1]);
            let value = faker_1.default.datatype.number({
                'min': firstNumber,
                'max': secondNumber
            });
            console.log(value);
        }
    }
}
exports.rangeAge = rangeAge;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2VBZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90cmFuc2xhdGUvcmFuZ2VBZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0Esa0RBQTBCO0FBRTFCLE1BQWEsUUFBUTtJQUNqQixTQUFTLENBQUMsR0FBVyxFQUFFLEtBQWE7UUFDaEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUQsSUFBSSxHQUFHLEVBQUU7WUFDTCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRTtpQkFDOUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztpQkFDdkMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztpQkFDbEMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ3pDLElBQUksUUFBUSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQ3hDLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4QyxJQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsSUFBSSxLQUFLLEdBQUcsZUFBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7Z0JBQzlCLEtBQUssRUFBRSxXQUFXO2dCQUNsQixLQUFLLEVBQUUsWUFBWTthQUN0QixDQUFDLENBQUM7WUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQztDQUNKO0FBbEJELDRCQWtCQyJ9