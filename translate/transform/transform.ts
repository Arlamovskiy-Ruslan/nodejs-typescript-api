import {ITranslate} from "../interface/translate";
import {randomValue} from "../randomValue";

export function transform(key: string, value: string) {
    let random: ITranslate = new randomValue()
    random.randomName?.(key, value)
    random.randomSex?.(key, value)
}
