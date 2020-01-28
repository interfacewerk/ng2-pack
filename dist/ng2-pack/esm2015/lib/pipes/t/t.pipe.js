/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/t/t.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { I18nService } from './../../services/i18n.service';
import { Pipe } from '@angular/core';
export class TPipe {
    /**
     * @param {?} i18nService
     */
    constructor(i18nService) {
        this.i18nService = i18nService;
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
        return this.i18nService.get(value);
    }
}
TPipe.decorators = [
    { type: Pipe, args: [{
                name: 't'
            },] }
];
/** @nocollapse */
TPipe.ctorParameters = () => [
    { type: I18nService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TPipe.prototype.i18nService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXBhY2svIiwic291cmNlcyI6WyJsaWIvcGlwZXMvdC90LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDMUQsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFLcEQsTUFBTSxPQUFPLEtBQUs7Ozs7SUFDaEIsWUFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBRyxDQUFDOzs7Ozs7SUFFaEQsU0FBUyxDQUFDLEtBQVUsRUFBRSxJQUFVO1FBQzlCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7O1lBUkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxHQUFHO2FBQ1Y7Ozs7WUFMTyxXQUFXOzs7Ozs7O0lBT0wsNEJBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJMThuU2VydmljZX0gZnJvbSAnLi8uLi8uLi9zZXJ2aWNlcy9pMThuLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICd0J1xufSlcbmV4cG9ydCBjbGFzcyBUUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG5TZXJ2aWNlOiBJMThuU2VydmljZSkge31cblxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgYXJncz86IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuaTE4blNlcnZpY2UuZ2V0KHZhbHVlKTtcbiAgfVxuXG59XG4iXX0=