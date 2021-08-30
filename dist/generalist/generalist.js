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
function randomFirstName(req, res) {
    const firstNameReq = req.body.firstName;
    if (firstNameReq == '@firstName') {
        let firstNameRes = faker.name.firstName();
        return firstNameRes;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhbGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2dlbmVyYWxpc3QvZ2VuZXJhbGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsNkNBQStCO0FBRS9CLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBRzNDLFNBQWdCLGVBQWUsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO0lBQ3ZFLE1BQU0sWUFBWSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hDLElBQUksWUFBWSxJQUFJLFlBQVksRUFBRTtRQUM5QixJQUFJLFlBQVksR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBRXpDLE9BQU8sWUFBWSxDQUFDO0tBRXZCO0FBQ0wsQ0FBQztBQVJELDBDQVFDO0FBRUQsU0FBZ0IsU0FBUyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7SUFDakUsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDNUIsSUFBSSxNQUFNLElBQUksTUFBTSxFQUFFO1FBQ2xCLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDM0QsT0FBTyxNQUFNLENBQUM7S0FDakI7QUFDTCxDQUFDO0FBTkQsOEJBTUM7QUFFRCxTQUFnQixTQUFTLENBQUMsR0FBb0IsRUFBRSxHQUFxQjtJQUNqRSxNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUU5QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDO1NBQ3ZELE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO1NBQ2hCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDO1NBQ2hCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdkIsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFdEMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUN4QyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUVsRCxPQUFPLE9BQU8sQ0FBQTtLQUNqQjtBQUNMLENBQUM7QUFkRCw4QkFjQztBQUVELFNBQWdCLGFBQWEsQ0FBQyxHQUFvQixFQUFFLEdBQXFCO0lBQ3JFLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBRW5DLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUM7U0FDNUQsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7U0FDaEIsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUM7U0FDaEIsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2QixJQUFJLGFBQWEsR0FBRyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTtJQUM3QyxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUNwQyxLQUFLLEVBQUUsQ0FBQztRQUNSLEtBQUssRUFBRSxDQUFDO0tBQ1gsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxXQUFXLENBQUM7QUFFdkIsQ0FBQztBQWRELHNDQWNDIn0=