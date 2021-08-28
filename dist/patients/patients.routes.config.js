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
var map = require('underscore/cjs/map.js');
class PatientsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'PatientsRoutes');
    }
    configureRoutes() {
        const oneOf = (node, node1) => {
            const oneOfSex = [node, node1];
            const random = Math.floor(Math.random() * oneOfSex.length);
        };
        this.app.route(`/patients`)
            .get((req, res) => {
            res.status(200).send(`List of patients`);
        })
            .post((req, res) => {
            const firstName = req.body.firstName;
            const sex = req.body.sex;
            if (firstName == '@firstName' && sex == '@sex') {
                let firstNameV = faker.name.firstName();
                let sexV = faker.random.arrayElement(['Male', 'Female']);
                console.log(firstNameV + '\t' + sexV);
                res.status(200).send('First Name:\t' + firstNameV + '\n' +
                    'Sex:\t' + sexV + '\n');
            }
        });
        return this.app;
    }
}
exports.PatientsRoutes = PatientsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF0aWVudHMucm91dGVzLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhdGllbnRzL3BhdGllbnRzLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlFQUFrRTtBQUVsRSw2Q0FBK0I7QUFFL0IsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLHVCQUF1QixDQUFDLENBQUM7QUFFM0MsTUFBYSxjQUFlLFNBQVEseUNBQWtCO0lBR2xELFlBQVksR0FBd0I7UUFDaEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxlQUFlO1FBRVgsTUFBTSxLQUFLLEdBQUcsQ0FBQyxJQUFZLEVBQUUsS0FBYSxFQUFFLEVBQUU7WUFDMUMsTUFBTSxRQUFRLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDL0IsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQy9ELENBQUMsQ0FBQTtRQUVELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQzthQUN0QixHQUFHLENBQUMsQ0FBQyxHQUFvQixFQUFFLEdBQXFCLEVBQUUsRUFBRTtZQUNqRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQzthQUNELElBQUksQ0FBQyxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO1lBQ2xELE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1lBQ3JDLE1BQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBRXpCLElBQUksU0FBUyxJQUFJLFlBQVksSUFBSSxHQUFHLElBQUksTUFBTSxFQUFFO2dCQUM1QyxJQUFJLFVBQVUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO2dCQUN2QyxJQUFJLElBQUksR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUV6RCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUE7Z0JBQ3JDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxVQUFVLEdBQUcsSUFBSTtvQkFDeEIsUUFBUSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQzthQUUzRDtRQUVMLENBQUMsQ0FBQyxDQUFDO1FBRVAsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7Q0FFSjtBQXJDRCx3Q0FxQ0MifQ==