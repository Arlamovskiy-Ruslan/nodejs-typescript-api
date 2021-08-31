"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientsRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const bypassTree_1 = require("../bypassingTheTree/bypassTree");
const generalist_1 = require("../generalist/generalist");
class PatientsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'PatientsRoutes');
    }
    configureRoutes() {
        this.app.route(`/generator`)
            .post((req, res) => {
            const fx = (key, value) => console.log(generalist_1.randomFirstName(key, value));
            res.status(200).send(bypassTree_1.traverse(req.body, fx));
        });
        return this.app;
    }
}
exports.PatientsRoutes = PatientsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdG9yLnJvdXRlcy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9nZW5lcmF0b3IvZ2VuZXJhdG9yLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUVBQWtFO0FBRWxFLCtEQUF3RDtBQUN4RCx5REFBeUQ7QUFFekQsTUFBYSxjQUFlLFNBQVEseUNBQWtCO0lBQ2xELFlBQVksR0FBd0I7UUFDaEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxlQUFlO1FBRVgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO2FBQ3ZCLElBQUksQ0FBQyxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO1lBQ2xELE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBTyxFQUFFLEtBQVMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0QkFBZSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFBO1lBQzNFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQ2hELENBQUMsQ0FBQyxDQUFDO1FBQ1AsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBRXBCLENBQUM7Q0FDSjtBQWZELHdDQWVDIn0=