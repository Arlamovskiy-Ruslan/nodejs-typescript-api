import faker from "faker";
import {ITranslate} from "./interface/translate";

export class oneOf implements ITranslate {
    oneOf(key: string, value: string): void {
        if (value) {
            let roleRes = faker.random.arrayElement()
            console.log(roleRes)
        }
    };
}