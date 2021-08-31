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
exports.rangeChildren = exports.oneOfRole = exports.randomSex = exports.randomFirstName = void 0;
const faker = __importStar(require("faker"));
var map = require('underscore/cjs/map.js');
function randomFirstName(key, value) {
    if (value == '@firstName') {
        value = faker.name.firstName();
        console.log(value);
    }
}
exports.randomFirstName = randomFirstName;
function randomSex(req, res) {
    const sexReq = req.body.sex;
    if (sexReq == '@sex') {
        let sexRes = faker.random.arrayElement(['Male', 'Female']);
        return sexRes;
    }
}
exports.randomSex = randomSex;
function oneOfRole(req, res) {
    const roleReq = req.body.role;
    let oldRole = JSON.stringify(roleReq).replace(/@oneOf/g, '')
        .replace('(', '')
        .replace(')', '')
        .replace(/"/g, '');
    let roleSplit = oldRole.split(",", 2);
    if (roleReq != roleReq.replace(/@oneOf.*/)) {
        let roleRes = faker.random.arrayElement(roleSplit);
        return roleRes;
    }
}
exports.oneOfRole = oneOfRole;
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
exports.rangeChildren = rangeChildren;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhbGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2dlbmVyYWxpc3QvZ2VuZXJhbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNkNBQStCO0FBRS9CLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBRTNDLFNBQWdCLGVBQWUsQ0FBQyxHQUFRLEVBQUUsS0FBVTtJQUVoRCxJQUFJLEtBQUssSUFBSSxZQUFZLEVBQUU7UUFDdkIsS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7UUFFOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtLQUVyQjtBQUNMLENBQUM7QUFSRCwwQ0FRQztBQUVELFNBQWdCLFNBQVMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO0lBQ2pFLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQzVCLElBQUksTUFBTSxJQUFJLE1BQU0sRUFBRTtRQUNsQixJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQzNELE9BQU8sTUFBTSxDQUFDO0tBQ2pCO0FBQ0wsQ0FBQztBQU5ELDhCQU1DO0FBRUQsU0FBZ0IsU0FBUyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7SUFDakUsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7SUFFOUIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztTQUN2RCxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztTQUNoQixPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztTQUNoQixPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZCLElBQUksU0FBUyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBRXRDLElBQUksT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUU7UUFDeEMsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUE7UUFFbEQsT0FBTyxPQUFPLENBQUE7S0FDakI7QUFDTCxDQUFDO0FBZEQsOEJBY0M7QUFFRCxTQUFnQixhQUFhLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtJQUNyRSxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUVuQyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO1NBQzVELE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO1NBQ2hCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO1NBQ2hCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkIsSUFBSSxhQUFhLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDN0MsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDcEMsS0FBSyxFQUFFLENBQUM7UUFDUixLQUFLLEVBQUUsQ0FBQztLQUNYLENBQUMsQ0FBQztJQUNILE9BQU8sV0FBVyxDQUFDO0FBRXZCLENBQUM7QUFkRCxzQ0FjQyJ9