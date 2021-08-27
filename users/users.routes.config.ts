import {CommonRoutesConfig} from '../common/common.routes.config';
import express from 'express';
import * as faker from 'faker';

export class PatientsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'PatientsRoutes');
    }

    configureRoutes() {

        this.app.route(`/patients`)
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`List of patients`);
            })
            .post((req: express.Request, res: express.Response) => {
                const fn = req.body.firstName;
                if(fn == '@firstName'){
                    let value = faker.name.findName()
                    console.log(value)
                }

                res.status(200).send(`Post to patients\t`);


            });

        return this.app;
    }

}