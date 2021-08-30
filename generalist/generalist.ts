import express from 'express';
import * as faker from 'faker';

var map = require('underscore/cjs/map.js');


export function randomFirstName(req: express.Request, res: express.Response) {
    const firstNameReq = req.body.firstName;
    if (firstNameReq == '@firstName') {
        let firstNameRes = faker.name.firstName()

        return firstNameRes;

    }
}

export function randomSex(req: express.Request, res: express.Response) {
    const sexReq = req.body.sex;
    if (sexReq == '@sex') {
        let sexRes = faker.random.arrayElement(['Male', 'Female']);
        return sexRes;
    }
}

export function oneOfRole(req: express.Request, res: express.Response) {
    const roleReq = req.body.role;

    let oldRole = JSON.stringify(roleReq).replace(/@oneOf/g, '')
        .replace('(', '')
        .replace(')', '')
        .replace(/"/g, '');
    let roleSplit = oldRole.split(",", 2);

    if (roleReq != roleReq.replace(/@oneOf.*/)) {
        let roleRes = faker.random.arrayElement(roleSplit)

        return roleRes
    }
}

export function rangeChildren(req: express.Request, res: express.Response) {
    const children = req.body.children;

    let oldChildren = JSON.stringify(children).replace(/@range/g, '')
        .replace('(', '')
        .replace(')', '')
        .replace(/"/g, '');
    let childrenSplit = oldChildren.split(",", 2)
    let childrenRes = faker.datatype.number({
        'min': 0,
        'max': 4
    });
    return childrenRes;

}
