"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transform = void 0;
const randomValue_1 = require("../randomValue");
function transform(key, value) {
    var _a, _b;
    let random = new randomValue_1.randomValue();
    (_a = random.randomName) === null || _a === void 0 ? void 0 : _a.call(random, key, value);
    (_b = random.randomSex) === null || _b === void 0 ? void 0 : _b.call(random, key, value);
}
exports.transform = transform;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNmb3JtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vdHJhbnNsYXRlL3RyYW5zZm9ybS90cmFuc2Zvcm0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsZ0RBQTJDO0FBRTNDLFNBQWdCLFNBQVMsQ0FBQyxHQUFXLEVBQUUsS0FBYTs7SUFDaEQsSUFBSSxNQUFNLEdBQWUsSUFBSSx5QkFBVyxFQUFFLENBQUE7SUFDMUMsTUFBQSxNQUFNLENBQUMsVUFBVSwrQ0FBakIsTUFBTSxFQUFjLEdBQUcsRUFBRSxLQUFLLEVBQUM7SUFDL0IsTUFBQSxNQUFNLENBQUMsU0FBUywrQ0FBaEIsTUFBTSxFQUFhLEdBQUcsRUFBRSxLQUFLLEVBQUM7QUFDbEMsQ0FBQztBQUpELDhCQUlDIn0=