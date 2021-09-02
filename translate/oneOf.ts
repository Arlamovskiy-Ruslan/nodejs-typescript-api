import faker from "faker";
import {ITranslate} from "./interface/translate";

export class oneOf implements ITranslate {
    translate(key: string, value: string): void {
        let role = JSON.stringify(value).toLowerCase().match(/@o.*/);
        if (role) {

            value = faker.random.arrayElement(['adm', 'usr'])
            console.log(value)
        }
    };
}