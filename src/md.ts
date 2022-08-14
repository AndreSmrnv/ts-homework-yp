import { color } from './colors';
import type {
    TMdOption,
    TLogOptions
}                       from './model';
export const mdOptionsList: Array<TMdOption> = ['bold', 'italic', 'mono', 'link', 'blockquote'];

export function markdown(text: string, options: TLogOptions ): string {
    let result = text;
    if (options) {
        if (options.bold) {
            result = color(`**${result}**`, { font: 'yellow', effects: ['bright'] });
        }
        if (options.italic) {
            result = color(`_${result}_`, { font: 'magenta', effects: ['italic'] });
        }
        if (options.mono) {
            result = color(`\`${result}\``, { font: 'green' });
        }
        if (options.link) {
            result = `[${result}](${color(options.link, { font: 'blue', effects: ['underscore'] })})`;
        }
        if (options.blockquote) {
            result = color(`> ${result.replace(/\n/g, '\n> ')}`);
        }
    }
    return result;
}
