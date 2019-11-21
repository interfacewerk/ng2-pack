/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/i18n.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { en, de } from '../locales';
/**
 * @record
 */
export function I18nLocales() { }
/**
 * @record
 */
export function I18nLocale() { }
export class I18nService {
    constructor() {
        this.language = 'en';
        this.translations = {
            en,
            de
        };
    }
    /**
     * @param {?} nestedKey
     * @param {?=} language
     * @return {?}
     */
    get(nestedKey, language = this.language) {
        if (!this.translations) {
            console.error('I18nService is used without initialization with translations');
            return '';
        }
        /** @type {?} */
        let keys = nestedKey.split('.');
        /** @type {?} */
        let translation = '';
        try {
            translation = (/** @type {?} */ (keys
                .reduce((/**
             * @param {?} translationTree
             * @param {?} key
             * @return {?}
             */
            (translationTree, key) => {
                return translationTree[key];
            }), this.translations[language])));
        }
        catch (err) {
            console.error(`Unknown key "${nestedKey}" was used!`);
        }
        return translation;
    }
}
I18nService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
I18nService.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    I18nService.prototype.language;
    /** @type {?} */
    I18nService.prototype.translations;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXBhY2svIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaTE4bi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLFlBQVksQ0FBQzs7OztBQUVwQyxpQ0FFQzs7OztBQUVELGdDQUVDO0FBR0QsTUFBTSxPQUFPLFdBQVc7SUFPdEI7UUFOQSxhQUFRLEdBQVcsSUFBSSxDQUFDO1FBQ3hCLGlCQUFZLEdBQWdCO1lBQzFCLEVBQUU7WUFDRixFQUFFO1NBQ0gsQ0FBQztJQUVjLENBQUM7Ozs7OztJQUVqQixHQUFHLENBQUMsU0FBaUIsRUFBRSxXQUFtQixJQUFJLENBQUMsUUFBUTtRQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixPQUFPLENBQUMsS0FBSyxDQUFDLDhEQUE4RCxDQUFDLENBQUM7WUFDOUUsT0FBTyxFQUFFLENBQUM7U0FDWDs7WUFDRyxJQUFJLEdBQWEsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O1lBQ3JDLFdBQVcsR0FBVyxFQUFFO1FBQzVCLElBQUk7WUFDRixXQUFXLEdBQUcsbUJBQVEsSUFBSTtpQkFDdkIsTUFBTTs7Ozs7WUFBQyxDQUFDLGVBQTJCLEVBQUUsR0FBVyxFQUFFLEVBQUU7Z0JBQ25ELE9BQU8sZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLENBQUMsR0FBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUEsQ0FBQztTQUNuQztRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsU0FBUyxhQUFhLENBQUMsQ0FBQztTQUN2RDtRQUNELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7OztZQTFCRixVQUFVOzs7Ozs7SUFFVCwrQkFBd0I7O0lBQ3hCLG1DQUdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZW4sIGRlIH0gZnJvbSAnLi4vbG9jYWxlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSTE4bkxvY2FsZXMge1xuICBbbGFuZ3VhZ2U6IHN0cmluZ106IEkxOG5Mb2NhbGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSTE4bkxvY2FsZSB7XG4gIFtrZXk6IHN0cmluZ106IEkxOG5Mb2NhbGUgfCBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJMThuU2VydmljZSB7XG4gIGxhbmd1YWdlOiBzdHJpbmcgPSAnZW4nO1xuICB0cmFuc2xhdGlvbnM6IEkxOG5Mb2NhbGVzID0ge1xuICAgIGVuLFxuICAgIGRlXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBnZXQobmVzdGVkS2V5OiBzdHJpbmcsIGxhbmd1YWdlOiBzdHJpbmcgPSB0aGlzLmxhbmd1YWdlKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMudHJhbnNsYXRpb25zKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdJMThuU2VydmljZSBpcyB1c2VkIHdpdGhvdXQgaW5pdGlhbGl6YXRpb24gd2l0aCB0cmFuc2xhdGlvbnMnKTtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgbGV0IGtleXM6IHN0cmluZ1tdID0gbmVzdGVkS2V5LnNwbGl0KCcuJyk7XG4gICAgbGV0IHRyYW5zbGF0aW9uOiBzdHJpbmcgPSAnJztcbiAgICB0cnkge1xuICAgICAgdHJhbnNsYXRpb24gPSA8c3RyaW5nPmtleXNcbiAgICAgICAgLnJlZHVjZSgodHJhbnNsYXRpb25UcmVlOiBJMThuTG9jYWxlLCBrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblRyZWVba2V5XTtcbiAgICAgICAgfSwgdGhpcy50cmFuc2xhdGlvbnNbbGFuZ3VhZ2VdKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFVua25vd24ga2V5IFwiJHtuZXN0ZWRLZXl9XCIgd2FzIHVzZWQhYCk7XG4gICAgfVxuICAgIHJldHVybiB0cmFuc2xhdGlvbjtcbiAgfVxufVxuIl19