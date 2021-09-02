"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rangeChildren = void 0;
const faker_1 = __importDefault(require("faker"));
class rangeChildren {
    translate(key, value) {
        let oldChildren = JSON.stringify(value).toLowerCase()
            .replace(/@range/g, '').replace('(', '')
            .replace(')', '').replace(/"/g, '');
        let childrenSplit = oldChildren.split(",", 2);
        let childrenRes = faker_1.default.datatype.number({
            'min': 0,
            'max': 4
        });
        console.log(childrenRes);
    }
}
exports.rangeChildren = rangeChildren;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZ2VDaGlsZHJlbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3RyYW5zbGF0ZS9yYW5nZUNoaWxkcmVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLGtEQUEwQjtBQUUxQixNQUFhLGFBQWE7SUFDdEIsU0FBUyxDQUFDLEdBQVcsRUFBRSxLQUFhO1FBQ2hDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFO2FBQ2hELE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7YUFDdkMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hDLElBQUksYUFBYSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzdDLElBQUksV0FBVyxHQUFHLGVBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1lBQ3BDLEtBQUssRUFBRSxDQUFDO1lBQ1IsS0FBSyxFQUFFLENBQUM7U0FDWCxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FDSjtBQVpELHNDQVlDIn0=