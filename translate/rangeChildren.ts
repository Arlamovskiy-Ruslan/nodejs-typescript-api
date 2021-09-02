import {ITranslate} from "./interface/translate";
import faker from "faker";

export class rangeChildren implements ITranslate {
    translate(key: string, value: string) {
        let oldChildren = JSON.stringify(value).toLowerCase()
            .replace(/@range/g, '').replace('(', '')
            .replace(')', '').replace(/"/g, '');
        let childrenSplit = oldChildren.split(",", 2)
        let childrenRes = faker.datatype.number({
            'min': 1,
            'max': 40
        });
        console.log(childrenRes);
    }
}