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

<<<<<<< HEAD

=======
>>>>>>> a7144435feeb8cfa2330296b39a83f4dc963958e
        this.app.route(`/patients`)
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`List of patients`);
            })
            .post((req: express.Request, res: express.Response) => {
                const firstName = req.body.firstName;
                const sex = req.body.sex;
                const role = req.body.role;

                var old = JSON.stringify(role).replace(/@oneOf/g, '')
                                              .replace('(', '')
                                              .replace(')', '');

                if (firstName == '@firstName' && sex == '@sex') {
                    let firstNameRes = faker.name.firstName()
                    let sexRes = faker.random.arrayElement(['Male', 'Female']);

<<<<<<< HEAD
                    console.log(firstNameV + '\n' + sexV + '\n' + old)
                    res.status(200).send('First Name:\t' + firstNameV + '\n' +
                        'Sex:\t' + sexV + '\n' +
                        'role:\t' + old);
=======
                    console.log(firstNameRes + '\t' + sexRes)
                    res.status(200).send('First Name:\t' + firstNameRes + '\n' +
                                                    'Sex:\t' + sexRes + '\n');
>>>>>>> a7144435feeb8cfa2330296b39a83f4dc963958e

                }

            });

        return this.app;
    }

}