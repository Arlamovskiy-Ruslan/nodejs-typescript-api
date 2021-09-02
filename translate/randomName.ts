import faker from "faker";
import {ITranslate} from "./interface/translate";

export class randomName implements ITranslate{
    translate(key: string, value: string): void {
        let firstName = JSON.stringify(value).toLowerCase().match(/@f.*/);
        if (firstName) {
            value = faker.name.firstName()
            console.log(value)
        }
    }
}