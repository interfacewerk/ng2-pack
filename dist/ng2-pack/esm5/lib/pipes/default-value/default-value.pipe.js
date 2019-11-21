/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/default-value/default-value.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var DefaultValuePipe = /** @class */ (function () {
    function DefaultValuePipe() {
    }
    /**
     * @param {?} value
     * @param {?=} defaultValue
     * @param {?=} args
     * @return {?}
     */
    DefaultValuePipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} defaultValue
     * @param {?=} args
     * @return {?}
     */
    function (value, defaultValue, args) {
        if (defaultValue === void 0) { defaultValue = '—'; }
        if (typeof value !== 'undefined' && !this.isEmptyString(value)) {
            return value;
        }
        return defaultValue;
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    DefaultValuePipe.prototype.isEmptyString = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return typeof value === 'string' && value.trim() === '';
    };
    DefaultValuePipe.decorators = [
        { type: Pipe, args: [{
                    name: 'defaultValue'
                },] }
    ];
    return DefaultValuePipe;
}());
export { DefaultValuePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC12YWx1ZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXBhY2svIiwic291cmNlcyI6WyJsaWIvcGlwZXMvZGVmYXVsdC12YWx1ZS9kZWZhdWx0LXZhbHVlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUVwRDtJQUFBO0lBY0EsQ0FBQzs7Ozs7OztJQVZDLG9DQUFTOzs7Ozs7SUFBVCxVQUFVLEtBQVUsRUFBRSxZQUF1QixFQUFFLElBQVU7UUFBbkMsNkJBQUEsRUFBQSxrQkFBdUI7UUFDM0MsSUFBSSxPQUFPLEtBQUssS0FBSyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzlELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDOzs7Ozs7SUFFTyx3Q0FBYTs7Ozs7SUFBckIsVUFBc0IsS0FBVTtRQUM5QixPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQzFELENBQUM7O2dCQWJGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsY0FBYztpQkFDckI7O0lBWUQsdUJBQUM7Q0FBQSxBQWRELElBY0M7U0FYWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2RlZmF1bHRWYWx1ZSdcbn0pXG5leHBvcnQgY2xhc3MgRGVmYXVsdFZhbHVlUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgZGVmYXVsdFZhbHVlOiBhbnkgPSAn4oCUJywgYXJncz86IGFueSk6IGFueSB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcgJiYgIXRoaXMuaXNFbXB0eVN0cmluZyh2YWx1ZSkpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgaXNFbXB0eVN0cmluZyh2YWx1ZTogYW55KSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUudHJpbSgpID09PSAnJztcbiAgfVxufVxuIl19