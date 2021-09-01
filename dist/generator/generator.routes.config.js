"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientsRoutes = void 0;
const bypassTree_1 = require("../bypassingTheTree/bypassTree");
const generalist_1 = require("../generalist/generalist");
class PatientsRoutes {
    configureRoutes(app) {
        app.route(`/generator`)
            .post((req, res) => {
            res.status(200).send(bypassTree_1.traverse(req.body, generalist_1.translator));
        });
        return app;
    }
}
exports.PatientsRoutes = PatientsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdG9yLnJvdXRlcy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9nZW5lcmF0b3IvZ2VuZXJhdG9yLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsK0RBQXdEO0FBQ3hELHlEQUFvRDtBQUVwRCxNQUFhLGNBQWM7SUFFdkIsZUFBZSxDQUFDLEdBQXdCO1FBRXBDLEdBQUcsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDO2FBQ2xCLElBQUksQ0FBQyxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO1lBQ2xELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSx1QkFBVSxDQUFDLENBQUMsQ0FBQTtRQUN4RCxDQUFDLENBQUMsQ0FBQztRQUNQLE9BQU8sR0FBRyxDQUFDO0lBRWYsQ0FBQztDQUNKO0FBWEQsd0NBV0MifQ==