import {CommonRoutesConfig} from '../common/common.routes.config';
import express from 'express';
import {traverse} from "../bypassingTheTree/bypassTree";
import {randomFirstName} from "../generalist/generalist";

export class PatientsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'PatientsRoutes');
    }

    configureRoutes() {

        this.app.route(`/generator`)
            .post((req: express.Request, res: express.Response) => {
                const fx = (key:any, value:any) => console.log(randomFirstName(key, value))
                res.status(200).send(traverse(req.body, fx))
            });
        return this.app;
        
    }
}