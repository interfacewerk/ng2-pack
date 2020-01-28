/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/pipes/format-column.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DefaultValuePipe } from './../../pipes/default-value/default-value.pipe';
import { Pipe } from '@angular/core';
var FormatColumnPipe = /** @class */ (function () {
    function FormatColumnPipe(defaultValuePipe) {
        this.defaultValuePipe = defaultValuePipe;
    }
    /**
     * @param {?} value
     * @param {?} column
     * @return {?}
     */
    FormatColumnPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} column
     * @return {?}
     */
    function (value, column) {
        if (!column) {
            return;
        }
        /** @type {?} */
        var formattedValue = this.applyFormatters(value, column.config.formatters);
        return this.defaultValuePipe.transform(formattedValue, '—');
    };
    /**
     * @param {?} value
     * @param {?} formatters
     * @return {?}
     */
    FormatColumnPipe.prototype.applyFormatters = /**
     * @param {?} value
     * @param {?} formatters
     * @return {?}
     */
    function (value, formatters) {
        if (!formatters) {
            return value;
        }
        return formatters.reduce((/**
         * @param {?} currentValue
         * @param {?} formatter
         * @return {?}
         */
        function (currentValue, formatter) {
            /** @type {?} */
            var args = formatter.arguments || [];
            return formatter.transform.apply(formatter, tslib_1.__spread([currentValue], args));
        }), value);
    };
    FormatColumnPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'formatColumn'
                },] }
    ];
    /** @nocollapse */
    FormatColumnPipe.ctorParameters = function () { return [
        { type: DefaultValuePipe }
    ]; };
    return FormatColumnPipe;
}());
export { FormatColumnPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormatColumnPipe.prototype.defaultValuePipe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LWNvbHVtbi5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXBhY2svIiwic291cmNlcyI6WyJsaWIvdGFibGUvcGlwZXMvZm9ybWF0LWNvbHVtbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLGdEQUFnRCxDQUFDO0FBR2hGLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBSUUsMEJBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO0lBRXRELENBQUM7Ozs7OztJQUVELG9DQUFTOzs7OztJQUFULFVBQVUsS0FBVSxFQUFFLE1BQW1CO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFBRSxPQUFPO1NBQUU7O1lBQ3BCLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUMxRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7OztJQUVELDBDQUFlOzs7OztJQUFmLFVBQWdCLEtBQVUsRUFBRSxVQUEwQztRQUNwRSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sVUFBVSxDQUFDLE1BQU07Ozs7O1FBQUMsVUFBQyxZQUFZLEVBQUUsU0FBUzs7Z0JBQzNDLElBQUksR0FBRyxTQUFTLENBQUMsU0FBUyxJQUFJLEVBQUU7WUFDcEMsT0FBTyxTQUFTLENBQUMsU0FBUyxPQUFuQixTQUFTLG9CQUFXLFlBQVksR0FBSyxJQUFJLEdBQUU7UUFDcEQsQ0FBQyxHQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ1osQ0FBQzs7Z0JBdEJGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsY0FBYztpQkFDckI7Ozs7Z0JBUE8sZ0JBQWdCOztJQTRCeEIsdUJBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQXBCWSxnQkFBZ0I7Ozs7OztJQUNmLDRDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGVmYXVsdFZhbHVlUGlwZX0gZnJvbSAnLi8uLi8uLi9waXBlcy9kZWZhdWx0LXZhbHVlL2RlZmF1bHQtdmFsdWUucGlwZSc7XG5pbXBvcnQge0Rpc3BsYXlGb3JtYXR0ZXJ9IGZyb20gJy4vLi4vdHlwZXMnO1xuaW1wb3J0IHtDb2x1bW5TdGF0ZX0gZnJvbSAnLi8uLi9jb2x1bW4tc3RhdGUuY2xhc3MnO1xuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdmb3JtYXRDb2x1bW4nXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1hdENvbHVtblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZWZhdWx0VmFsdWVQaXBlOiBEZWZhdWx0VmFsdWVQaXBlKSB7XG5cbiAgfVxuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBjb2x1bW46IENvbHVtblN0YXRlKSB7XG4gICAgaWYgKCFjb2x1bW4pIHsgcmV0dXJuOyB9XG4gICAgbGV0IGZvcm1hdHRlZFZhbHVlID0gdGhpcy5hcHBseUZvcm1hdHRlcnModmFsdWUsIGNvbHVtbi5jb25maWcuZm9ybWF0dGVycyk7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFZhbHVlUGlwZS50cmFuc2Zvcm0oZm9ybWF0dGVkVmFsdWUsICfigJQnKTtcbiAgfVxuXG4gIGFwcGx5Rm9ybWF0dGVycyh2YWx1ZTogYW55LCBmb3JtYXR0ZXJzOiB1bmRlZmluZWQgfCBEaXNwbGF5Rm9ybWF0dGVyW10pOiBhbnkge1xuICAgIGlmICghZm9ybWF0dGVycykge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0dGVycy5yZWR1Y2UoKGN1cnJlbnRWYWx1ZSwgZm9ybWF0dGVyKSA9PiB7XG4gICAgICBsZXQgYXJncyA9IGZvcm1hdHRlci5hcmd1bWVudHMgfHwgW107XG4gICAgICByZXR1cm4gZm9ybWF0dGVyLnRyYW5zZm9ybShjdXJyZW50VmFsdWUsIC4uLmFyZ3MpO1xuICAgIH0sIHZhbHVlKTtcbiAgfVxufVxuIl19