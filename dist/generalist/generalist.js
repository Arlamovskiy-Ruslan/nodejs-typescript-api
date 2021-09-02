"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.translator = void 0;
const faker = __importStar(require("faker"));
function translator(key, value) {
    randomFirstName(key, value);
    oneOfRole(key, value);
    randomSex(key, value);
}
exports.translator = translator;
function randomFirstName(key, value) {
    let firstName = JSON.stringify(value).toLowerCase().match(/@f.*/);
    if (firstName) {
        value = faker.name.firstName();
        console.log(value);
    }
}
function randomSex(key, value) {
    let sex = JSON.stringify(value).toLowerCase().match(/@s.*/);
    if (sex) {
        value = faker.random.arrayElement(['Male', 'Female']);
        console.log(value);
    }
}
function oneOfRole(key, value) {
    let role = JSON.stringify(value).toLowerCase().match(/@s.*/);
    if (role) {
        value = faker.random.arrayElement(role);
        console.log(value);
    }
}
function rangeChildren(req, res) {
    const children = req.body.children;
    let oldChildren = JSON.stringify(children).replace(/@range/g, '')
        .replace('(', '')
        .replace(')', '')
        .replace(/"/g, '');
    let childrenSplit = oldChildren.split(",", 2);
    let childrenRes = faker.datatype.number({
        'min': 0,
        'max': 4
    });
    return childrenRes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhbGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2dlbmVyYWxpc3QvZ2VuZXJhbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNkNBQStCO0FBRS9CLFNBQWdCLFVBQVUsQ0FBQyxHQUFRLEVBQUUsS0FBVTtJQUMzQyxlQUFlLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQzNCLFNBQVMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDckIsU0FBUyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQTtBQUN6QixDQUFDO0FBSkQsZ0NBSUM7QUFHRCxTQUFTLGVBQWUsQ0FBQyxHQUFRLEVBQUUsS0FBVTtJQUN6QyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRSxJQUFJLFNBQVMsRUFBRTtRQUNYLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7S0FDckI7QUFDTCxDQUFDO0FBRUQsU0FBUyxTQUFTLENBQUMsR0FBUSxFQUFFLEtBQVU7SUFDbkMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUQsSUFBSSxHQUFHLEVBQUU7UUFDTCxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO0tBQ3JCO0FBQ0wsQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFDLEdBQVEsRUFBRSxLQUFVO0lBQ25DLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRTdELElBQUksSUFBSSxFQUFFO1FBQ04sS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7S0FDckI7QUFDTCxDQUFDO0FBRUQsU0FBUyxhQUFhLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtJQUM5RCxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUVuQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO1NBQzVELE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO1NBQ2hCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO1NBQ2hCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkIsSUFBSSxhQUFhLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDN0MsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDcEMsS0FBSyxFQUFFLENBQUM7UUFDUixLQUFLLEVBQUUsQ0FBQztLQUNYLENBQUMsQ0FBQztJQUNILE9BQU8sV0FBVyxDQUFDO0FBRXZCLENBQUMifQ==