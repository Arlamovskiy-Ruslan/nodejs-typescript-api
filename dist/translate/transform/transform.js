"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transform = void 0;
const randomName_1 = require("../randomName");
const randomSex_1 = require("../randomSex");
const oneOf_1 = require("../oneOf");
const rangeAge_1 = require("../rangeAge");
const randomDob_1 = require("../randomDob");
function transform(key, value) {
    var _a, _b, _c, _d, _e;
    let randomFirstNameV = new randomName_1.randomName();
    let randomSexV = new randomSex_1.randomSex();
    let oneOfSex = new oneOf_1.oneOf();
    let rangeAgeV = new rangeAge_1.rangeAge();
    let randomDobV = new randomDob_1.randomDob();
    (_a = randomFirstNameV.translate) === null || _a === void 0 ? void 0 : _a.call(randomFirstNameV, key, value);
    (_b = randomSexV.translate) === null || _b === void 0 ? void 0 : _b.call(randomSexV, key, value);
    (_c = oneOfSex.translate) === null || _c === void 0 ? void 0 : _c.call(oneOfSex, key, value);
    (_d = rangeAgeV.translate) === null || _d === void 0 ? void 0 : _d.call(rangeAgeV, key, value);
    (_e = randomDobV.translate) === null || _e === void 0 ? void 0 : _e.call(randomDobV, key, value);
}
exports.transform = transform;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdHJhbnNsYXRlL3RyYW5zZm9ybS90cmFuc2Zvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsOENBQXlDO0FBQ3pDLDRDQUF1QztBQUN2QyxvQ0FBK0I7QUFDL0IsMENBQXFDO0FBQ3JDLDRDQUF1QztBQUV2QyxTQUFnQixTQUFTLENBQUMsR0FBVyxFQUFFLEtBQWE7O0lBQ2hELElBQUksZ0JBQWdCLEdBQWUsSUFBSSx1QkFBVSxFQUFFLENBQUE7SUFDbkQsSUFBSSxVQUFVLEdBQWUsSUFBSSxxQkFBUyxFQUFFLENBQUE7SUFDNUMsSUFBSSxRQUFRLEdBQWUsSUFBSSxhQUFLLEVBQUUsQ0FBQTtJQUN0QyxJQUFJLFNBQVMsR0FBZSxJQUFJLG1CQUFRLEVBQUUsQ0FBQTtJQUMxQyxJQUFJLFVBQVUsR0FBZSxJQUFJLHFCQUFTLEVBQUUsQ0FBQTtJQUU1QyxNQUFBLGdCQUFnQixDQUFDLFNBQVMsK0NBQTFCLGdCQUFnQixFQUFhLEdBQUcsRUFBRSxLQUFLLEVBQUM7SUFDeEMsTUFBQSxVQUFVLENBQUMsU0FBUywrQ0FBcEIsVUFBVSxFQUFhLEdBQUcsRUFBRSxLQUFLLEVBQUM7SUFDbEMsTUFBQSxRQUFRLENBQUMsU0FBUywrQ0FBbEIsUUFBUSxFQUFhLEdBQUcsRUFBRSxLQUFLLEVBQUM7SUFDaEMsTUFBQSxTQUFTLENBQUMsU0FBUywrQ0FBbkIsU0FBUyxFQUFhLEdBQUcsRUFBRSxLQUFLLEVBQUM7SUFDakMsTUFBQSxVQUFVLENBQUMsU0FBUywrQ0FBcEIsVUFBVSxFQUFhLEdBQUcsRUFBRSxLQUFLLEVBQUM7QUFDdEMsQ0FBQztBQVpELDhCQVlDIn0=