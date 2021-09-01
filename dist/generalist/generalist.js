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
exports.translate = void 0;
const faker = __importStar(require("faker"));
function translate(key, value) {
    removeBrackets(key, value);
    randomFirstName(key, value);
    randomSex(key, value);
}
exports.translate = translate;
function removeBrackets(key, value) {
    value = JSON.stringify(value)
        .replace('(', ' ')
        .replace(')', ' ')
        .replace(/"/g, ' ');
    console.log(value);
}
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
    if (value) {
        let roleRes = faker.random.arrayElement();
        console.log(roleRes);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhbGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2dlbmVyYWxpc3QvZ2VuZXJhbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNkNBQStCO0FBRS9CLFNBQWdCLFNBQVMsQ0FBQyxHQUFRLEVBQUUsS0FBVTtJQUMxQyxjQUFjLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQzFCLGVBQWUsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUE7SUFDM0IsU0FBUyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQTtBQUN6QixDQUFDO0FBSkQsOEJBSUM7QUFFRCxTQUFTLGNBQWMsQ0FBQyxHQUFRLEVBQUUsS0FBVTtJQUN4QyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUM7U0FDeEIsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7U0FDakIsT0FBTyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7U0FDakIsT0FBTyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQ3RCLENBQUM7QUFFRCxTQUFTLGVBQWUsQ0FBQyxHQUFRLEVBQUUsS0FBVTtJQUN6QyxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRSxJQUFJLFNBQVMsRUFBRTtRQUNYLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7S0FDckI7QUFDTCxDQUFDO0FBRUQsU0FBUyxTQUFTLENBQUMsR0FBUSxFQUFFLEtBQVU7SUFDbkMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUQsSUFBSSxHQUFHLEVBQUU7UUFDTCxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO0tBQ3JCO0FBQ0wsQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFDLEdBQVEsRUFBRSxLQUFVO0lBRW5DLElBQUksS0FBSyxFQUFFO1FBQ1AsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0tBQ3ZCO0FBQ0wsQ0FBQztBQUVELFNBQVMsYUFBYSxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7SUFDOUQsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7SUFFbkMsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztTQUM1RCxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztTQUNoQixPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztTQUNoQixPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZCLElBQUksYUFBYSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQzdDLElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQ3BDLEtBQUssRUFBRSxDQUFDO1FBQ1IsS0FBSyxFQUFFLENBQUM7S0FDWCxDQUFDLENBQUM7SUFDSCxPQUFPLFdBQVcsQ0FBQztBQUV2QixDQUFDIn0=