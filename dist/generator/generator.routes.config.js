"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatientsRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const generalist_1 = require("../generalist/generalist");
var map = require('underscore/cjs/map.js');
class PatientsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'PatientsRoutes');
    }
    configureRoutes() {
        this.app.route(`/generator`)
            .post((req, res) => {
            res.status(200).send("First Name:\t" + generalist_1.randomFirstName(req, res) + '\n'
                + "Sex:\t" + generalist_1.randomSex(req, res) + '\n'
                + "Role:\t" + generalist_1.oneOfRole(req, res) + '\n');
        });
        return this.app;
    }
}
exports.PatientsRoutes = PatientsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdG9yLnJvdXRlcy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9nZW5lcmF0b3IvZ2VuZXJhdG9yLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEseUVBQWtFO0FBRWxFLHlEQUErRTtBQUUvRSxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsdUJBQXVCLENBQUMsQ0FBQztBQUUzQyxNQUFhLGNBQWUsU0FBUSx5Q0FBa0I7SUFDbEQsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELGVBQWU7UUFFWCxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUM7YUFDdkIsSUFBSSxDQUFDLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7WUFDbEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLDRCQUFlLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxHQUFHLElBQUk7a0JBQ3RDLFFBQVEsR0FBRyxzQkFBUyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxJQUFJO2tCQUNyQyxTQUFTLEdBQUcsc0JBQVMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUE7UUFDNUUsQ0FBQyxDQUFDLENBQUM7UUFDUCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztDQUNKO0FBZkQsd0NBZUMifQ==