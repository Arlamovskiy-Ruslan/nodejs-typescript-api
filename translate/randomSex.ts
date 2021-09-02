import {ITranslate} from "./interface/translate";
import faker from "faker";

export class randomSex implements ITranslate {
    translate(key: any, value: any): void {
        let sex = JSON.stringify(value).toLowerCase().match(/@s.*/);
        if (sex) {
            value = faker.random.arrayElement(['Male', 'Female']);
            console.log(value)
        }
    }
}