import faker from "faker";
import {ITranslate} from "./interface/translate";

export class randomValue implements ITranslate {

    randomName(key: string, value: string): void {
        let firstName = JSON.stringify(value).toLowerCase().match(/@f.*/);
        if (firstName) {
            value = faker.name.firstName()
            console.log(value)
        }
    }

    randomSex(key: any, value: any): void {
        let sex = JSON.stringify(value).toLowerCase().match(/@s.*/);
        if (sex) {
            value = faker.random.arrayElement(['Male', 'Female']);
            console.log(value)
        }
    }
}