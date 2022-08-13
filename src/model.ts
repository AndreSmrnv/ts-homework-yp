export const Reset = '\x1b[0m';

export const effects = {
    bright: '\x1b[1m',
    dim: '\x1b[2m',
    italic: '\x1b[3m',
    underscore: '\x1b[4m',
    blink: '\x1b[5m',
};

export const fontColors: TColorsVal = {
    black: '\x1b[30m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    magenta: '\x1b[35m',
    cyan: '\x1b[36m',
    white: '\x1b[37m',
};

export const colors: Array<TColorsName>  = ['black', 'blue', 'cyan', 'green', 'magenta', 'red', 'white', 'yellow'];

export const backgroundColors: TColorsVal = {
    black: '\x1b[40m',
    red: '\x1b[41m',
    green: '\x1b[42m',
    yellow: '\x1b[43m',
    blue: '\x1b[44m',
    magenta: '\x1b[45m',
    cyan: '\x1b[46m',
    white: '\x1b[47m',
};

export const contrast: TContrastVal = {
    black: 'white',
    red: 'black',
    green: 'black',
    yellow: 'black',
    blue: 'black',
    magenta: 'black',
    cyan: 'black',
    white: 'black',
};

type TColorsName =  string;

type TColorsVal = {
    [P in TColorsName]: string;
};

type TContrastVal = {
    [P in TColorsName]: string;
};

type TMdOptionBool = 'bold'| 'italic'| 'mono'| 'blockquote';
type TMdOptionStr = 'link';
type TMdOption = 'bold'| 'italic'| 'mono'| 'blockquote' | 'link' ;

type ColorOptions = {
    font?: TColorsName;
    background?: TColorsName;
    effects?: Array<TEffects>;

}
type TContrast = keyof typeof  contrast;

type TMdOptions =
  {
    bold: boolean;
    italic: boolean;
    mono: boolean;
    blockquote: boolean;
    link: string
  };
type TLogOptions = Partial<ColorOptions & TMdOptions>

type TEffects = keyof typeof  effects;

export type {
    TContrast,
    TColorsVal,
    TColorsName,
    TEffects,
    TMdOption,
    TMdOptions,
    ColorOptions,
    TLogOptions,
}
