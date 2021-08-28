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
exports.PatientsRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const faker = __importStar(require("faker"));
const { check, oneOf, validationResult } = require('express-validator/check');
class PatientsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'PatientsRoutes');
    }
    configureRoutes() {
        this.app.route(`/patients`)
            .get((req, res) => {
            res.status(200).send(`List of patients`);
        })
            .post((req, res) => {
            const firstName = req.body.firstName;
            const sex = oneOf([
                check('a').exists(),
                check('b').exists(),
                check('c').exists()
            ]);
            if (firstName == '@firstName') {
                let value = faker.name.findName();
                console.log(value, value);
                res.status(200).send(`Post to patients\t` + value);
            }
            else
                res.status(200).send(`ErrorEvent\t`);
        });
        return this.app;
    }
}
exports.PatientsRoutes = PatientsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlcnMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3VzZXJzL3VzZXJzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlFQUFrRTtBQUVsRSw2Q0FBK0I7QUFDL0IsTUFBTSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxPQUFPLENBQUMseUJBQXlCLENBQUMsQ0FBQztBQUU5RSxNQUFhLGNBQWUsU0FBUSx5Q0FBa0I7SUFDbEQsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDakMsQ0FBQztJQUdELGVBQWU7UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7YUFDdEIsR0FBRyxDQUFDLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDakQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM3QyxDQUFDLENBQUM7YUFDRCxJQUFJLENBQUMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUNsRCxNQUFNLFNBQVMsR0FBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNwQyxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUM7Z0JBQ2QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRTtnQkFDbkIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRTtnQkFDbkIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRTthQUN0QixDQUFDLENBQUE7WUFDRixJQUFHLFNBQVMsSUFBSSxZQUFZLEVBQUM7Z0JBQ3pCLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7Z0JBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFBO2dCQUN6QixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUMsQ0FBQzthQUN0RDs7Z0JBQU0sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7UUFFUCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztDQUVKO0FBNUJELHdDQTRCQyJ9