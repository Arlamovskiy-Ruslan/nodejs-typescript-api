import {ITranslate} from "./interface/translate";

export class randomDob implements ITranslate {

    translate(key: string, value: string | Date): void {

        let dob = JSON.stringify(value).toLowerCase()
        if (dob) {
            let oldDob = JSON.stringify(dob).toLowerCase().replace(/@randomDate/g, '')
                .replace(/@randomdate/g, '').replace('[', '')
                .replace(/"/g, '').replace('(', '')
                .replace(')', '').replace(/\\/g, '')
                .replace('/', '').replace('{', '')
                .replace('}', '').replace(']', '');
            let now = new Date();
            value = getRandomDate(new Date('2000-01-01T01:57:45.271Z'), new Date(now))

            console.log(value.toISOString())

        }
    }
}

function getRandomDate(from: Date, to: Date) {
    const fromTime = from.getTime();
    const toTime = to.getTime();
    return new Date(fromTime + Math.random() * (toTime - fromTime));
}

