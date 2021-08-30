import {CommonRoutesConfig} from '../common/common.routes.config';
import express from 'express';
import {oneOfRole, randomFirstName, randomSex} from "../generalist/generalist";

var map = require('underscore/cjs/map.js');

export class PatientsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'PatientsRoutes');
    }

    configureRoutes() {

        this.app.route(`/generator`)
            .post((req: express.Request, res: express.Response) => {
                res.status(200).send(randomFirstName(req) )
            });
        return this.app;
    }
}