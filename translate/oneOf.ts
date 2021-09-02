import faker from "faker";
import {ITranslate} from "./interface/translate";

export class oneOf implements ITranslate {
    translate(key: string, value: string): void {
        let role = JSON.stringify(value).toLowerCase().match(/@o.*/);
        if (role) {
            let oldRole = JSON.stringify(role).toLowerCase().replace(/@oneOf/g, '')
                .replace(/@oneof/g, '').replace('[', '')
                .replace(/"/g, '').replace('(', '')
                .replace(')', '').replace(/\\/g, '')
                .replace('/', '').replace('{', '')
                .replace('}', '').replace(']', '');
            let splitRole = oldRole.split(",", 2)
            value = faker.random.arrayElement(splitRole)
            console.log(value)
        }
    };
}