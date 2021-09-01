import express from 'express';
import * as faker from 'faker';

export function translator(key: any, value: any){
    randomFirstName(key, value)
    oneOfRole(key, value)
    randomSex(key, value)
}


function randomFirstName(key: any, value: any) {
    let firstName = JSON.stringify(value).toLowerCase().match(/@f.*/);
    if (firstName) {
        value = faker.name.firstName()
        console.log(value)
    }
}

function randomSex(key: any, value: any) {
    let sex = JSON.stringify(value).toLowerCase().match(/@s.*/);
    if (sex) {
        value = faker.random.arrayElement(['Male', 'Female']);
        console.log(value)
    }
}

function oneOfRole(key: any, value: any) {
    let role = JSON.stringify(value).toLowerCase().match(/@s.*/);

    if (role) {
        value = faker.random.arrayElement(role)
        console.log(value)
    }
}

function rangeChildren(req: express.Request, res: express.Response) {
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
