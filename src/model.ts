export const Reset = '\x1b[0m';

type TEffects = keyof typeof  effects;
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
type TColorsName = 'black'| 'blue'| 'cyan'| 'green'| 'magenta'| 'red'| 'white'| 'yellow';
export const colors = ['black', 'blue', 'cyan', 'green', 'magenta', 'red', 'white', 'yellow'];

type TColorsVal = {
    [P in TColorsName]: string;
};
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

type TContrast = keyof typeof  contrast;
export const contrast = {
    black: 'white',
    red: 'black',
    green: 'black',
    yellow: 'black',
    blue: 'black',
    magenta: 'black',
    cyan: 'black',
    white: 'black',
};

export type {
    TContrast,
    TColorsVal,
    TColorsName,
    TEffects
}
