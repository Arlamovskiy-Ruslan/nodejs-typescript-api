import {ITranslate} from "../interface/translate";
import {randomName} from "../randomName";
import {randomSex} from "../randomSex";
import {oneOf} from "../oneOf";
import {rangeAge} from "../rangeAge";
import {randomDob} from "../randomDob";

export function transform(key: string, value: string){
    let randomFirstNameV: ITranslate = new randomName()
    let randomSexV: ITranslate = new randomSex()
    let oneOfSex: ITranslate = new oneOf()
    let rangeAgeV: ITranslate = new rangeAge()
    let randomDobV: ITranslate = new randomDob()

    randomFirstNameV.translate?.(key, value)
    randomSexV.translate?.(key, value)
    oneOfSex.translate?.(key, value)
    rangeAgeV.translate?.(key, value)
    randomDobV.translate?.(key, value)
}
