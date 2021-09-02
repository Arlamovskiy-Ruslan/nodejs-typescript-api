import {ITranslate} from "./interface/translate";
import faker from "faker";

export class rangeAge implements ITranslate {
    translate(key: string, value: string) {
        let age = JSON.stringify(value).toLowerCase().match(/@r.*/);
        if (age) {
            let oldChildren = JSON.stringify(age).toLowerCase()
                .replace(/@range/g, '').replace('(', '')
                .replace(')', '').replace(/"/g, '')
                .replace(/\\/g, '').replace('[', '');
            let ageSplit = oldChildren.split(",", 2)
            let firstNumber = parseInt(ageSplit[0]);
            let secondNumber = parseInt(ageSplit[1]);
            let value = faker.datatype.number({
                'min': firstNumber,
                'max': secondNumber
            });
            console.log(value);
        }
    }
}