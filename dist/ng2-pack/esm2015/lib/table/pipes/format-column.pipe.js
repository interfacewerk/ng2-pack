/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/pipes/format-column.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DefaultValuePipe } from './../../pipes/default-value/default-value.pipe';
import { Pipe } from '@angular/core';
export class FormatColumnPipe {
    /**
     * @param {?} defaultValuePipe
     */
    constructor(defaultValuePipe) {
        this.defaultValuePipe = defaultValuePipe;
    }
    /**
     * @param {?} value
     * @param {?} column
     * @return {?}
     */
    transform(value, column) {
        if (!column) {
            return;
        }
        /** @type {?} */
        let formattedValue = this.applyFormatters(value, column.config.formatters);
        return this.defaultValuePipe.transform(formattedValue, '—');
    }
    /**
     * @param {?} value
     * @param {?} formatters
     * @return {?}
     */
    applyFormatters(value, formatters) {
        if (!formatters) {
            return value;
        }
        return formatters.reduce((/**
         * @param {?} currentValue
         * @param {?} formatter
         * @return {?}
         */
        (currentValue, formatter) => {
            /** @type {?} */
            let args = formatter.arguments || [];
            return formatter.transform(currentValue, ...args);
        }), value);
    }
}
FormatColumnPipe.decorators = [
    { type: Pipe, args: [{
                name: 'formatColumn'
            },] }
];
/** @nocollapse */
FormatColumnPipe.ctorParameters = () => [
    { type: DefaultValuePipe }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormatColumnPipe.prototype.defaultValuePipe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9ybWF0LWNvbHVtbi5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXBhY2svIiwic291cmNlcyI6WyJsaWIvdGFibGUvcGlwZXMvZm9ybWF0LWNvbHVtbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sZ0RBQWdELENBQUM7QUFHaEYsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFLcEQsTUFBTSxPQUFPLGdCQUFnQjs7OztJQUMzQixZQUFvQixnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUV0RCxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBVSxFQUFFLE1BQW1CO1FBQ3ZDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFBRSxPQUFPO1NBQUU7O1lBQ3BCLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUMxRSxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQzlELENBQUM7Ozs7OztJQUVELGVBQWUsQ0FBQyxLQUFVLEVBQUUsVUFBMEM7UUFDcEUsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLFVBQVUsQ0FBQyxNQUFNOzs7OztRQUFDLENBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxFQUFFOztnQkFDL0MsSUFBSSxHQUFHLFNBQVMsQ0FBQyxTQUFTLElBQUksRUFBRTtZQUNwQyxPQUFPLFNBQVMsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDcEQsQ0FBQyxHQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ1osQ0FBQzs7O1lBdEJGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsY0FBYzthQUNyQjs7OztZQVBPLGdCQUFnQjs7Ozs7OztJQVNWLDRDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGVmYXVsdFZhbHVlUGlwZX0gZnJvbSAnLi8uLi8uLi9waXBlcy9kZWZhdWx0LXZhbHVlL2RlZmF1bHQtdmFsdWUucGlwZSc7XG5pbXBvcnQge0Rpc3BsYXlGb3JtYXR0ZXJ9IGZyb20gJy4vLi4vdHlwZXMnO1xuaW1wb3J0IHtDb2x1bW5TdGF0ZX0gZnJvbSAnLi8uLi9jb2x1bW4tc3RhdGUuY2xhc3MnO1xuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdmb3JtYXRDb2x1bW4nXG59KVxuZXhwb3J0IGNsYXNzIEZvcm1hdENvbHVtblBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkZWZhdWx0VmFsdWVQaXBlOiBEZWZhdWx0VmFsdWVQaXBlKSB7XG5cbiAgfVxuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBjb2x1bW46IENvbHVtblN0YXRlKSB7XG4gICAgaWYgKCFjb2x1bW4pIHsgcmV0dXJuOyB9XG4gICAgbGV0IGZvcm1hdHRlZFZhbHVlID0gdGhpcy5hcHBseUZvcm1hdHRlcnModmFsdWUsIGNvbHVtbi5jb25maWcuZm9ybWF0dGVycyk7XG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFZhbHVlUGlwZS50cmFuc2Zvcm0oZm9ybWF0dGVkVmFsdWUsICfigJQnKTtcbiAgfVxuXG4gIGFwcGx5Rm9ybWF0dGVycyh2YWx1ZTogYW55LCBmb3JtYXR0ZXJzOiB1bmRlZmluZWQgfCBEaXNwbGF5Rm9ybWF0dGVyW10pOiBhbnkge1xuICAgIGlmICghZm9ybWF0dGVycykge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0dGVycy5yZWR1Y2UoKGN1cnJlbnRWYWx1ZSwgZm9ybWF0dGVyKSA9PiB7XG4gICAgICBsZXQgYXJncyA9IGZvcm1hdHRlci5hcmd1bWVudHMgfHwgW107XG4gICAgICByZXR1cm4gZm9ybWF0dGVyLnRyYW5zZm9ybShjdXJyZW50VmFsdWUsIC4uLmFyZ3MpO1xuICAgIH0sIHZhbHVlKTtcbiAgfVxufVxuIl19