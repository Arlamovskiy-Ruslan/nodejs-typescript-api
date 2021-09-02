"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transform = void 0;
const randomName_1 = require("../randomName");
const randomSex_1 = require("../randomSex");
const oneOf_1 = require("../oneOf");
const rangeAge_1 = require("../rangeAge");
function transform(key, value) {
    var _a, _b, _c, _d;
    let randomFirstNameV = new randomName_1.randomName();
    let randomSexV = new randomSex_1.randomSex();
    let oneOfSex = new oneOf_1.oneOf();
    let rangeChildrenV = new rangeAge_1.rangeAge();
    (_a = randomFirstNameV.translate) === null || _a === void 0 ? void 0 : _a.call(randomFirstNameV, key, value);
    (_b = randomSexV.translate) === null || _b === void 0 ? void 0 : _b.call(randomSexV, key, value);
    (_c = oneOfSex.translate) === null || _c === void 0 ? void 0 : _c.call(oneOfSex, key, value);
    (_d = rangeChildrenV.translate) === null || _d === void 0 ? void 0 : _d.call(rangeChildrenV, key, value);
}
exports.transform = transform;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdHJhbnNsYXRlL3RyYW5zZm9ybS90cmFuc2Zvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsOENBQXlDO0FBQ3pDLDRDQUF1QztBQUN2QyxvQ0FBK0I7QUFDL0IsMENBQXFDO0FBRXJDLFNBQWdCLFNBQVMsQ0FBQyxHQUFXLEVBQUUsS0FBYTs7SUFDaEQsSUFBSSxnQkFBZ0IsR0FBZSxJQUFJLHVCQUFVLEVBQUUsQ0FBQTtJQUNuRCxJQUFJLFVBQVUsR0FBZSxJQUFJLHFCQUFTLEVBQUUsQ0FBQTtJQUM1QyxJQUFJLFFBQVEsR0FBZSxJQUFJLGFBQUssRUFBRSxDQUFBO0lBQ3RDLElBQUksY0FBYyxHQUFlLElBQUksbUJBQVEsRUFBRSxDQUFBO0lBRS9DLE1BQUEsZ0JBQWdCLENBQUMsU0FBUywrQ0FBMUIsZ0JBQWdCLEVBQWEsR0FBRyxFQUFFLEtBQUssRUFBQztJQUN4QyxNQUFBLFVBQVUsQ0FBQyxTQUFTLCtDQUFwQixVQUFVLEVBQWEsR0FBRyxFQUFFLEtBQUssRUFBQztJQUNsQyxNQUFBLFFBQVEsQ0FBQyxTQUFTLCtDQUFsQixRQUFRLEVBQWEsR0FBRyxFQUFFLEtBQUssRUFBQztJQUNoQyxNQUFBLGNBQWMsQ0FBQyxTQUFTLCtDQUF4QixjQUFjLEVBQWEsR0FBRyxFQUFFLEtBQUssRUFBQztBQUUxQyxDQUFDO0FBWEQsOEJBV0MifQ==