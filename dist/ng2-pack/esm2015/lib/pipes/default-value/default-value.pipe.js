/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/default-value/default-value.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class DefaultValuePipe {
    /**
     * @param {?} value
     * @param {?=} defaultValue
     * @param {?=} args
     * @return {?}
     */
    transform(value, defaultValue = '—', args) {
        if (typeof value !== 'undefined' && !this.isEmptyString(value)) {
            return value;
        }
        return defaultValue;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    isEmptyString(value) {
        return typeof value === 'string' && value.trim() === '';
    }
}
DefaultValuePipe.decorators = [
    { type: Pipe, args: [{
                name: 'defaultValue'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC12YWx1ZS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXBhY2svIiwic291cmNlcyI6WyJsaWIvcGlwZXMvZGVmYXVsdC12YWx1ZS9kZWZhdWx0LXZhbHVlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUtwRCxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7O0lBQzNCLFNBQVMsQ0FBQyxLQUFVLEVBQUUsZUFBb0IsR0FBRyxFQUFFLElBQVU7UUFDdkQsSUFBSSxPQUFPLEtBQUssS0FBSyxXQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzlELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDOzs7Ozs7SUFFTyxhQUFhLENBQUMsS0FBVTtRQUM5QixPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQzFELENBQUM7OztZQWJGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsY0FBYzthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnZGVmYXVsdFZhbHVlJ1xufSlcbmV4cG9ydCBjbGFzcyBEZWZhdWx0VmFsdWVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBkZWZhdWx0VmFsdWU6IGFueSA9ICfigJQnLCBhcmdzPzogYW55KTogYW55IHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJyAmJiAhdGhpcy5pc0VtcHR5U3RyaW5nKHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0VtcHR5U3RyaW5nKHZhbHVlOiBhbnkpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS50cmltKCkgPT09ICcnO1xuICB9XG59XG4iXX0=