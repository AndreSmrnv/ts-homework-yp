import {
    backgroundColors,
    effects,
    fontColors,
    Reset
}                       from './model';
import type {
    TColorsName,
    TEffects,
}                       from './model';

function addColor(text: string, color: TColorsName, isBackground = false): string {
    if (isBackground) {
        return text + backgroundColors[color];
    }
    return text + fontColors[color];
}
function getEffects(effectList: Array<TEffects>): string {
    return effectList.map(effect => effects[effect]).join('');
}
interface IOptions {
    font: TColorsName;
    background: TColorsName;
    effects: Array<TEffects>;
}
export function color(text: string, options: IOptions): string {
    const preparedText = text.replace(/ё/g, 'е');
    let result = '';
    if (options) {
        if (options.font) {
            result = addColor(result, options.font);
        }
        if (options.background) {
            result = addColor(result, options.background, true);
        }
        if (options.effects) {
            result += getEffects(options.effects);
        }
        result += preparedText;
        result += Reset;
        return result;
    }
    return preparedText;
}
