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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXBhY2svIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvaTE4bi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsRUFBRSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25DLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFFbkMsaUNBRUM7Ozs7QUFFRCxnQ0FFQztBQUdELE1BQU0sT0FBTyxXQUFXO0lBT3RCO1FBTkEsYUFBUSxHQUFXLElBQUksQ0FBQztRQUN4QixpQkFBWSxHQUFnQjtZQUMxQixFQUFFO1lBQ0YsRUFBRTtTQUNILENBQUM7SUFFYyxDQUFDOzs7Ozs7SUFFakIsR0FBRyxDQUFDLFNBQWlCLEVBQUUsV0FBbUIsSUFBSSxDQUFDLFFBQVE7UUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDdEIsT0FBTyxDQUFDLEtBQUssQ0FBQyw4REFBOEQsQ0FBQyxDQUFDO1lBQzlFLE9BQU8sRUFBRSxDQUFDO1NBQ1g7O1lBQ0csSUFBSSxHQUFhLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztZQUNyQyxXQUFXLEdBQVcsRUFBRTtRQUM1QixJQUFJO1lBQ0YsV0FBVyxHQUFHLG1CQUFRLElBQUk7aUJBQ3ZCLE1BQU07Ozs7O1lBQUMsQ0FBQyxlQUEyQixFQUFFLEdBQVcsRUFBRSxFQUFFO2dCQUNuRCxPQUFPLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QixDQUFDLEdBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFBLENBQUM7U0FDbkM7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNaLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLFNBQVMsYUFBYSxDQUFDLENBQUM7U0FDdkQ7UUFDRCxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDOzs7WUExQkYsVUFBVTs7Ozs7O0lBRVQsK0JBQXdCOztJQUN4QixtQ0FHRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGVuIH0gZnJvbSAnLi4vbG9jYWxlcy9lbic7XG5pbXBvcnQgeyBkZSB9IGZyb20gJy4uL2xvY2FsZXMvZGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEkxOG5Mb2NhbGVzIHtcbiAgW2xhbmd1YWdlOiBzdHJpbmddOiBJMThuTG9jYWxlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEkxOG5Mb2NhbGUge1xuICBba2V5OiBzdHJpbmddOiBJMThuTG9jYWxlIHwgc3RyaW5nO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSTE4blNlcnZpY2Uge1xuICBsYW5ndWFnZTogc3RyaW5nID0gJ2VuJztcbiAgdHJhbnNsYXRpb25zOiBJMThuTG9jYWxlcyA9IHtcbiAgICBlbixcbiAgICBkZVxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgZ2V0KG5lc3RlZEtleTogc3RyaW5nLCBsYW5ndWFnZTogc3RyaW5nID0gdGhpcy5sYW5ndWFnZSk6IHN0cmluZyB7XG4gICAgaWYgKCF0aGlzLnRyYW5zbGF0aW9ucykge1xuICAgICAgY29uc29sZS5lcnJvcignSTE4blNlcnZpY2UgaXMgdXNlZCB3aXRob3V0IGluaXRpYWxpemF0aW9uIHdpdGggdHJhbnNsYXRpb25zJyk7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGxldCBrZXlzOiBzdHJpbmdbXSA9IG5lc3RlZEtleS5zcGxpdCgnLicpO1xuICAgIGxldCB0cmFuc2xhdGlvbjogc3RyaW5nID0gJyc7XG4gICAgdHJ5IHtcbiAgICAgIHRyYW5zbGF0aW9uID0gPHN0cmluZz5rZXlzXG4gICAgICAgIC5yZWR1Y2UoKHRyYW5zbGF0aW9uVHJlZTogSTE4bkxvY2FsZSwga2V5OiBzdHJpbmcpID0+IHtcbiAgICAgICAgICByZXR1cm4gdHJhbnNsYXRpb25UcmVlW2tleV07XG4gICAgICAgIH0sIHRoaXMudHJhbnNsYXRpb25zW2xhbmd1YWdlXSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBVbmtub3duIGtleSBcIiR7bmVzdGVkS2V5fVwiIHdhcyB1c2VkIWApO1xuICAgIH1cbiAgICByZXR1cm4gdHJhbnNsYXRpb247XG4gIH1cbn1cbiJdfQ==