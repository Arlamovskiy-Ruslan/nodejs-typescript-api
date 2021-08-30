import {CommonRoutesConfig} from '../common/common.routes.config';
import express from 'express';
import * as faker from 'faker';

var map = require('underscore/cjs/map.js');

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
                const firstNameReq = req.body.firstName;
                const sexReq = req.body.sex;
                const roleReq = req.body.role;
                const children = req.body.children;

                let oldRole = JSON.stringify(roleReq).replace(/@oneOf/g, '')
                                                     .replace('(', '')
                                                     .replace(')', '')
                                                     .replace(/"/g, '');
                let oldChildren = JSON.stringify(children).replace(/@range/g, '')
                                                          .replace('(', '')
                                                          .replace(')', '')
                                                          .replace(/"/g, '');
                let roleSplit = oldRole.split(",",2);
                let childrenSplit = oldChildren.split(",",2)


                if (firstNameReq == '@firstName' && sexReq == '@sex' && roleReq != roleReq.replace(/@oneOf.*/)) {
                    let firstNameRes = faker.name.firstName()
                    let sexRes = faker.random.arrayElement(['Male', 'Female']);
                    let roleRes = faker.random.arrayElement(roleSplit)
                    let childrenRes = faker.datatype.number({
                        'min': 0,
                        'max': 4
                    });

                    console.log(firstNameRes + '\n' +
                                sexRes + '\n' +
                                roleRes + '\n' +
                                childrenRes)
                    res.status(200).send('First Name:\t' + firstNameRes + '\n' +
                                                     'Sex:\t' + sexRes + '\n' +
                                                     'Role:\t' + roleRes + '' + '\n' +
                                                     'Children:\t' + childrenRes);

                }
            });
        return this.app;
    }
}