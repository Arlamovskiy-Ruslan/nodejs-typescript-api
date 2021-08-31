import {CommonRoutesConfig} from '../common/common.routes.config';
import express from 'express';
import {traverse} from "../bypassingTheTree/bypassTree";


var map = require('underscore/cjs/map.js');

export class PatientsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'PatientsRoutes');
    }

    configureRoutes() {

        this.app.route(`/generator`)
            .post((req: express.Request, res: express.Response) => {
                const fx = (key:any, value:any, node:any) => console.log(key, value)
                res.status(200).send('Response:\t' + traverse(req.body, fx))
            });
        return this.app;
    }
}