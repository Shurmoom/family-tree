export function capitalize(phrase: string): string {
    return phrase.split(' ').reduce((acc, current) => acc + ' ' + current.charAt(0).toUpperCase() + current.slice(1).toLowerCase(), '').trim();
}