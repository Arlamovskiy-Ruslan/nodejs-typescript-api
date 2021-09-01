"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientsRoutes = void 0;
const bypassTree_1 = require("../bypassingTheTree/bypassTree");
const transform_1 = require("../translate/transform/transform");
class PatientsRoutes {
    configureRoutes(app) {
        app.route(`/generate`)
            .post((req, res) => {
            res.status(200).send(bypassTree_1.traverse(req.body, transform_1.transform));
        });
        return app;
    }
}
exports.PatientsRoutes = PatientsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdG9yLnJvdXRlcy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9nZW5lcmF0b3IvZ2VuZXJhdG9yLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsK0RBQXdEO0FBRXhELGdFQUEyRDtBQUUzRCxNQUFhLGNBQWM7SUFFdkIsZUFBZSxDQUFDLEdBQXdCO1FBRXBDLEdBQUcsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDO2FBQ2pCLElBQUksQ0FBQyxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO1lBQ2xELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxxQkFBUyxDQUFDLENBQUMsQ0FBQTtRQUN2RCxDQUFDLENBQUMsQ0FBQztRQUNQLE9BQU8sR0FBRyxDQUFDO0lBRWYsQ0FBQztDQUNKO0FBWEQsd0NBV0MifQ==