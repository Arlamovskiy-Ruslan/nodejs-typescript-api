import {ITranslate} from "../interface/translate";
import {randomName} from "../randomName";
import {randomSex} from "../randomSex";
import {oneOf} from "../oneOf";

export function transform(key: string, value: string){
    let randomFirstNameV: ITranslate = new randomName()
    let randomSexV: ITranslate = new randomSex()
    let oneOfSex: ITranslate = new oneOf()

    randomFirstNameV.translate?.(key, value)
    randomSexV.translate?.(key, value)
    oneOfSex.translate?.(key, value)

}
