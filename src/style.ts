import { color }                    from './colors';
import { markdown, mdOptionsList }  from './md';
import { colors, IColorOptions }    from './model';
import type {
    TMdOptions,
    TColorsName,
}                                   from './model';

function isMarkdownOptions(options: TMdOptions) {
    return mdOptionsList.some(key => key in options);
}
type TStyle = (text: string, options: IColorOptions ) => string;
function styleImpl (text: string, options: IColorOptions | TMdOptions)  {
    if (text.length === 0) {
        return text;
    }
    if ('font' in options || 'background' in options || 'effects' in options) {
        return color(text, options);
    }
    if (('bold' in options || 'italic' in options || 'mono' in options) && isMarkdownOptions(options)) {
        return markdown(text, options);
    }
    return text;
}
const colorsObj = new Map(colors.map(color => [color, (text: string) => console.log(style(text, { font: color } ))]));
export const style: TStyle = Object.assign(styleImpl, {
    log: (text: string, options: IColorOptions) => {
        console.log(style(text, options));
    },
    color: (x: TColorsName) => {
        const log = colorsObj.get(x);
        return log || console.log;
    },
});
