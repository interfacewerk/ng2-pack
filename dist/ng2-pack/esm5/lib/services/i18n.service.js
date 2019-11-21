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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXBhY2svIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaTE4bi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxNQUFNLFlBQVksQ0FBQzs7OztBQUVwQyxpQ0FFQzs7OztBQUVELGdDQUVDO0FBRUQ7SUFRRTtRQU5BLGFBQVEsR0FBVyxJQUFJLENBQUM7UUFDeEIsaUJBQVksR0FBZ0I7WUFDMUIsRUFBRSxJQUFBO1lBQ0YsRUFBRSxJQUFBO1NBQ0gsQ0FBQztJQUVjLENBQUM7Ozs7OztJQUVqQix5QkFBRzs7Ozs7SUFBSCxVQUFJLFNBQWlCLEVBQUUsUUFBZ0M7UUFBaEMseUJBQUEsRUFBQSxXQUFtQixJQUFJLENBQUMsUUFBUTtRQUNyRCxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUN0QixPQUFPLENBQUMsS0FBSyxDQUFDLDhEQUE4RCxDQUFDLENBQUM7WUFDOUUsT0FBTyxFQUFFLENBQUM7U0FDWDs7WUFDRyxJQUFJLEdBQWEsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O1lBQ3JDLFdBQVcsR0FBVyxFQUFFO1FBQzVCLElBQUk7WUFDRixXQUFXLEdBQUcsbUJBQVEsSUFBSTtpQkFDdkIsTUFBTTs7Ozs7WUFBQyxVQUFDLGVBQTJCLEVBQUUsR0FBVztnQkFDL0MsT0FBTyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUIsQ0FBQyxHQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQSxDQUFDO1NBQ25DO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDWixPQUFPLENBQUMsS0FBSyxDQUFDLG1CQUFnQixTQUFTLGlCQUFhLENBQUMsQ0FBQztTQUN2RDtRQUNELE9BQU8sV0FBVyxDQUFDO0lBQ3JCLENBQUM7O2dCQTFCRixVQUFVOzs7O0lBMkJYLGtCQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0ExQlksV0FBVzs7O0lBQ3RCLCtCQUF3Qjs7SUFDeEIsbUNBR0UiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBlbiwgZGUgfSBmcm9tICcuLi9sb2NhbGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBJMThuTG9jYWxlcyB7XG4gIFtsYW5ndWFnZTogc3RyaW5nXTogSTE4bkxvY2FsZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJMThuTG9jYWxlIHtcbiAgW2tleTogc3RyaW5nXTogSTE4bkxvY2FsZSB8IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEkxOG5TZXJ2aWNlIHtcbiAgbGFuZ3VhZ2U6IHN0cmluZyA9ICdlbic7XG4gIHRyYW5zbGF0aW9uczogSTE4bkxvY2FsZXMgPSB7XG4gICAgZW4sXG4gICAgZGVcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIGdldChuZXN0ZWRLZXk6IHN0cmluZywgbGFuZ3VhZ2U6IHN0cmluZyA9IHRoaXMubGFuZ3VhZ2UpOiBzdHJpbmcge1xuICAgIGlmICghdGhpcy50cmFuc2xhdGlvbnMpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0kxOG5TZXJ2aWNlIGlzIHVzZWQgd2l0aG91dCBpbml0aWFsaXphdGlvbiB3aXRoIHRyYW5zbGF0aW9ucycpO1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBsZXQga2V5czogc3RyaW5nW10gPSBuZXN0ZWRLZXkuc3BsaXQoJy4nKTtcbiAgICBsZXQgdHJhbnNsYXRpb246IHN0cmluZyA9ICcnO1xuICAgIHRyeSB7XG4gICAgICB0cmFuc2xhdGlvbiA9IDxzdHJpbmc+a2V5c1xuICAgICAgICAucmVkdWNlKCh0cmFuc2xhdGlvblRyZWU6IEkxOG5Mb2NhbGUsIGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uVHJlZVtrZXldO1xuICAgICAgICB9LCB0aGlzLnRyYW5zbGF0aW9uc1tsYW5ndWFnZV0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihgVW5rbm93biBrZXkgXCIke25lc3RlZEtleX1cIiB3YXMgdXNlZCFgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRyYW5zbGF0aW9uO1xuICB9XG59XG4iXX0=