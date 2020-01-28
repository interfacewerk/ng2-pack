export interface I18nLocales {
    [language: string]: I18nLocale;
}
export interface I18nLocale {
    [key: string]: I18nLocale | string;
}
export declare class I18nService {
    language: string;
    translations: I18nLocales;
    constructor();
    get(nestedKey: string, language?: string): string;
}
