import { color }                    from './colors';
import { markdown, mdOptionsList }  from './md';
import { colors }    from './model';
import type {
    TMdOptions,
    TColorsName,
    ColorOptions,
    TLogOptions,
}                                   from './model';

function isMarkdownOptions(options: TLogOptions): boolean {
    return mdOptionsList.some(key => key in options);
}
type TStyleImpl = (text: string, options: TLogOptions ) => string;
type TStyle = TStyleImpl &
    {
        log(text: string, options: TLogOptions): void;
        color(x: TColorsName):    ((text: string) => void)
    } ;
function styleImpl (text: string, options: ColorOptions | TMdOptions)  {
    if (text.length === 0) {
        return text;
    }
    if ('font' in options || 'background' in options || 'effects' in options) {
        return color(text, options);
    }
    if (isMarkdownOptions(options)) {
        return markdown(text, options);
    }
    return text;
}
const colorsObj = new Map(colors.map(color => [color, (text: string) => console.log(style(text, { font: color } ))]));
export const style: TStyle = Object.assign(styleImpl, {
    log: (text: string, options: TLogOptions) => {
        console.log(style(text, options));
    },
    color: (x: TColorsName) => {
        const log = colorsObj.get(x);
        return log || console.log;
    },
});
