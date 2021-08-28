import {CommonRoutesConfig} from '../common/common.routes.config';
import express from 'express';
import * as faker from 'faker';

var map = require('underscore/cjs/map.js');

export class PatientsRoutes extends CommonRoutesConfig {
    private _: any;

    constructor(app: express.Application) {
        super(app, 'PatientsRoutes');
    }

    configureRoutes() {

        const oneOf = (node: string, node1: string) => {
            const oneOfSex = [node, node1];
            const random = Math.floor(Math.random() * oneOfSex.length);
        }

        this.app.route(`/patients`)
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`List of patients`);
            })
            .post((req: express.Request, res: express.Response) => {
                const firstName = req.body.firstName;
                const sex = req.body.sex;

                if (firstName == '@firstName' && sex == '@sex') {
                    let firstNameV = faker.name.firstName()
                    let sexV = faker.random.arrayElement(['Male', 'Female']);

                    console.log(firstNameV + '\t' + sexV)
                    res.status(200).send('First Name:\t' + firstNameV + '\n' +
                                                    'Sex:\t' + sexV + '\n');

                }

            });

        return this.app;
    }

}