/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/i18n.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { en } from '../locales/en';
import { de } from '../locales/de';
/**
 * @record
 */
export function I18nLocales() { }
/**
 * @record
 */
export function I18nLocale() { }
var I18nService = /** @class */ (function () {
    function I18nService() {
        this.language = 'en';
        this.translations = {
            en: en,
            de: de
        };
    }
    /**
     * @param {?} nestedKey
     * @param {?=} language
     * @return {?}
     */
    I18nService.prototype.get = /**
     * @param {?} nestedKey
     * @param {?=} language
     * @return {?}
     */
    function (nestedKey, language) {
        if (language === void 0) { language = this.language; }
        if (!this.translations) {
            console.error('I18nService is used without initialization with translations');
            return '';
        }
        /** @type {?} */
        var keys = nestedKey.split('.');
        /** @type {?} */
        var translation = '';
        try {
            translation = (/** @type {?} */ (keys
                .reduce((/**
             * @param {?} translationTree
             * @param {?} key
             * @return {?}
             */
            function (translationTree, key) {
                return translationTree[key];
            }), this.translations[language])));
        }
        catch (err) {
            console.error("Unknown key \"" + nestedKey + "\" was used!");
        }
        return translation;
    };
    I18nService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    I18nService.ctorParameters = function () { return []; };
    return I18nService;
}());
export { I18nService };
if (false) {
    /** @type {?} */
    I18nService.prototype.language;
    /** @type {?} */
    I18nService.prototype.translations;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXBhY2svIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaTE4bi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25DLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFFbkMsaUNBRUM7Ozs7QUFFRCxnQ0FFQztBQUVEO0lBUUU7UUFOQSxhQUFRLEdBQVcsSUFBSSxDQUFDO1FBQ3hCLGlCQUFZLEdBQWdCO1lBQzFCLEVBQUUsSUFBQTtZQUNGLEVBQUUsSUFBQTtTQUNILENBQUM7SUFFYyxDQUFDOzs7Ozs7SUFFakIseUJBQUc7Ozs7O0lBQUgsVUFBSSxTQUFpQixFQUFFLFFBQWdDO1FBQWhDLHlCQUFBLEVBQUEsV0FBbUIsSUFBSSxDQUFDLFFBQVE7UUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdEIsT0FBTyxDQUFDLEtBQUssQ0FBQyw4REFBOEQsQ0FBQyxDQUFDO1lBQzlFLE9BQU8sRUFBRSxDQUFDO1NBQ1g7O1lBQ0csSUFBSSxHQUFhLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztZQUNyQyxXQUFXLEdBQVcsRUFBRTtRQUM1QixJQUFJO1lBQ0YsV0FBVyxHQUFHLG1CQUFRLElBQUk7aUJBQ3ZCLE1BQU07Ozs7O1lBQUMsVUFBQyxlQUEyQixFQUFFLEdBQVc7Z0JBQy9DLE9BQU8sZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLENBQUMsR0FBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUEsQ0FBQztTQUNuQztRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1osT0FBTyxDQUFDLEtBQUssQ0FBQyxtQkFBZ0IsU0FBUyxpQkFBYSxDQUFDLENBQUM7U0FDdkQ7UUFDRCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDOztnQkExQkYsVUFBVTs7OztJQTJCWCxrQkFBQztDQUFBLEFBM0JELElBMkJDO1NBMUJZLFdBQVc7OztJQUN0QiwrQkFBd0I7O0lBQ3hCLG1DQUdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZW4gfSBmcm9tICcuLi9sb2NhbGVzL2VuJztcbmltcG9ydCB7IGRlIH0gZnJvbSAnLi4vbG9jYWxlcy9kZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSTE4bkxvY2FsZXMge1xuICBbbGFuZ3VhZ2U6IHN0cmluZ106IEkxOG5Mb2NhbGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSTE4bkxvY2FsZSB7XG4gIFtrZXk6IHN0cmluZ106IEkxOG5Mb2NhbGUgfCBzdHJpbmc7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJMThuU2VydmljZSB7XG4gIGxhbmd1YWdlOiBzdHJpbmcgPSAnZW4nO1xuICB0cmFuc2xhdGlvbnM6IEkxOG5Mb2NhbGVzID0ge1xuICAgIGVuLFxuICAgIGRlXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBnZXQobmVzdGVkS2V5OiBzdHJpbmcsIGxhbmd1YWdlOiBzdHJpbmcgPSB0aGlzLmxhbmd1YWdlKTogc3RyaW5nIHtcbiAgICBpZiAoIXRoaXMudHJhbnNsYXRpb25zKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdJMThuU2VydmljZSBpcyB1c2VkIHdpdGhvdXQgaW5pdGlhbGl6YXRpb24gd2l0aCB0cmFuc2xhdGlvbnMnKTtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgbGV0IGtleXM6IHN0cmluZ1tdID0gbmVzdGVkS2V5LnNwbGl0KCcuJyk7XG4gICAgbGV0IHRyYW5zbGF0aW9uOiBzdHJpbmcgPSAnJztcbiAgICB0cnkge1xuICAgICAgdHJhbnNsYXRpb24gPSA8c3RyaW5nPmtleXNcbiAgICAgICAgLnJlZHVjZSgodHJhbnNsYXRpb25UcmVlOiBJMThuTG9jYWxlLCBrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICAgIHJldHVybiB0cmFuc2xhdGlvblRyZWVba2V5XTtcbiAgICAgICAgfSwgdGhpcy50cmFuc2xhdGlvbnNbbGFuZ3VhZ2VdKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYFVua25vd24ga2V5IFwiJHtuZXN0ZWRLZXl9XCIgd2FzIHVzZWQhYCk7XG4gICAgfVxuICAgIHJldHVybiB0cmFuc2xhdGlvbjtcbiAgfVxufVxuIl19