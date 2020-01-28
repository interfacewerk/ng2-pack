/**
 * @fileoverview added by tsickle
 * Generated from: lib/select2/select2.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/**
 * @record
 */
export function Select2ItemOption() { }
if (false) {
    /** @type {?} */
    Select2ItemOption.prototype.text;
    /** @type {?} */
    Select2ItemOption.prototype.id;
}
/**
 * @record
 */
export function Select2CategorizedOption() { }
if (false) {
    /** @type {?} */
    Select2CategorizedOption.prototype.text;
    /** @type {?} */
    Select2CategorizedOption.prototype.children;
}
/** @type {?} */
export var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return Select2Component; })),
    multi: true
};
var Select2Component = /** @class */ (function () {
    function Select2Component(elementRef) {
        this.elementRef = elementRef;
        this.placeholder = '';
        this.open = false;
        this.close = new EventEmitter();
        this.onChange = (/**
         * @param {?} v
         * @return {?}
         */
        function (v) { });
        this.onTouched = (/**
         * @return {?}
         */
        function () { });
    }
    /**
     * @return {?}
     */
    Select2Component.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updateData();
    };
    /**
     * @param {?} arg
     * @return {?}
     */
    Select2Component.prototype.ngOnChanges = /**
     * @param {?} arg
     * @return {?}
     */
    function (arg) {
        this.updateData();
    };
    /**
     * @return {?}
     */
    Select2Component.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeSelect2();
    };
    // implements ControlValueAccessor
    // write model value into view
    // implements ControlValueAccessor
    // write model value into view
    /**
     * @param {?} v
     * @return {?}
     */
    Select2Component.prototype.writeValue = 
    // implements ControlValueAccessor
    // write model value into view
    /**
     * @param {?} v
     * @return {?}
     */
    function (v) {
        this.currentValue = v;
        if (!this.element) {
            return;
        }
        this.element.val(v).trigger('change');
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    Select2Component.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    Select2Component.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) { this.onTouched = fn; };
    /**
     * @param {?} e
     * @return {?}
     */
    Select2Component.prototype.onClose = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.close.emit(e);
    };
    /**
     * @return {?}
     */
    Select2Component.prototype.removeSelect2 = /**
     * @return {?}
     */
    function () {
        if (this.element) {
            this.element.off('select2:select');
            this.element.select2('destroy');
            this.element.remove();
            this.element = null;
        }
    };
    /**
     * @return {?}
     */
    Select2Component.prototype.updateData = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.removeSelect2();
        // replace a select as a work-around for data not replacing correctly, it was always appending more data
        this.element = jQuery('<select></select>').attr('style', 'width:200px');
        this.element.on('select2:select', (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            _this.currentValue = _this.element.val();
            _this.onChange(_this.currentValue);
        }));
        this.element.on('select2:close', (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            _this.onClose(e);
        }));
        this.elementRef.nativeElement.appendChild(this.element.get(0));
        this.element.select2({
            data: this.items || [],
            // allowClear: true,
            placeholder: this.placeholder,
            multiple: this.multiple,
            tags: this.tags
        });
        this.element.val(this.currentValue).trigger('change');
        if (this.open) {
            this.element.select2('open');
        }
    };
    Select2Component.decorators = [
        { type: Component, args: [{
                    selector: 'iw-select2',
                    template: "<!--<div>\n  <select style=\"width: 200px\" #selector></select>\n</div>-->\n",
                    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    Select2Component.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    Select2Component.propDecorators = {
        items: [{ type: Input }],
        tags: [{ type: Input }],
        multiple: [{ type: Input }],
        placeholder: [{ type: Input }],
        open: [{ type: Input }],
        close: [{ type: Output }]
    };
    return Select2Component;
}());
export { Select2Component };
if (false) {
    /** @type {?} */
    Select2Component.prototype.items;
    /** @type {?} */
    Select2Component.prototype.tags;
    /** @type {?} */
    Select2Component.prototype.multiple;
    /** @type {?} */
    Select2Component.prototype.placeholder;
    /** @type {?} */
    Select2Component.prototype.open;
    /** @type {?} */
    Select2Component.prototype.close;
    /** @type {?} */
    Select2Component.prototype.currentValue;
    /**
     * @type {?}
     * @private
     */
    Select2Component.prototype.element;
    /** @type {?} */
    Select2Component.prototype.onChange;
    /** @type {?} */
    Select2Component.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    Select2Component.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0Mi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItcGFjay8iLCJzb3VyY2VzIjpbImxpYi9zZWxlY3QyL3NlbGVjdDIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLEVBRVYsVUFBVSxHQUdYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUt6RSx1Q0FHQzs7O0lBRkMsaUNBQWE7O0lBQ2IsK0JBQVc7Ozs7O0FBR2IsOENBR0M7OztJQUZDLHdDQUFhOztJQUNiLDRDQUE4Qjs7O0FBR2hDLE1BQU0sS0FBTyxtQ0FBbUMsR0FBUTtJQUNwRCxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVOzs7SUFBQyxjQUFNLE9BQUEsZ0JBQWdCLEVBQWhCLENBQWdCLEVBQUM7SUFDL0MsS0FBSyxFQUFFLElBQUk7Q0FDZDtBQUVEO0lBbUJFLDBCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBUmpDLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLFNBQUksR0FBWSxLQUFLLENBQUM7UUFFckIsVUFBSyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUE0QnJDLGFBQVE7Ozs7UUFBRyxVQUFDLENBQVMsSUFBTSxDQUFDLEVBQUM7UUFJN0IsY0FBUzs7O1FBQUcsY0FBTyxDQUFDLEVBQUM7SUExQnJCLENBQUM7Ozs7SUFFRCxtQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCxzQ0FBVzs7OztJQUFYLFVBQVksR0FBUTtRQUNsQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELHNDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsa0NBQWtDO0lBQ2xDLDhCQUE4Qjs7Ozs7OztJQUM5QixxQ0FBVTs7Ozs7OztJQUFWLFVBQVcsQ0FBUztRQUNsQixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUFFLE9BQU87U0FBRTtRQUM5QixJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Ozs7SUFHRCwyQ0FBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBcUI7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCw0Q0FBaUI7Ozs7SUFBakIsVUFBa0IsRUFBWSxJQUFVLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzs7Ozs7SUFFOUQsa0NBQU87Ozs7SUFBUCxVQUFRLENBQVE7UUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsd0NBQWE7OztJQUFiO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNyQjtJQUNILENBQUM7Ozs7SUFFRCxxQ0FBVTs7O0lBQVY7UUFBQSxpQkF3QkM7UUF2QkMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLHdHQUF3RztRQUN4RyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsZ0JBQWdCOzs7O1FBQUUsVUFBQyxDQUFRO1lBQ3pDLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUN2QyxLQUFJLENBQUMsUUFBUSxDQUFDLEtBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNuQyxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLGVBQWU7Ozs7UUFBRSxVQUFDLENBQVE7WUFDeEMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNsQixDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRS9ELElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxJQUFLLEVBQUU7O1lBRXZCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1NBQ2hCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEQsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDOUI7SUFDSCxDQUFDOztnQkF0RkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0Qix3RkFBcUM7b0JBRXJDLFNBQVMsRUFBRSxDQUFFLG1DQUFtQyxDQUFFOztpQkFDbkQ7Ozs7Z0JBaENDLFVBQVU7Ozt3QkFtQ1QsS0FBSzt1QkFDTCxLQUFLOzJCQUNMLEtBQUs7OEJBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUVMLE1BQU07O0lBeUVULHVCQUFDO0NBQUEsQUF2RkQsSUF1RkM7U0FqRlksZ0JBQWdCOzs7SUFFM0IsaUNBQXFDOztJQUNyQyxnQ0FBdUI7O0lBQ3ZCLG9DQUEyQjs7SUFDM0IsdUNBQWtDOztJQUNsQyxnQ0FBK0I7O0lBRS9CLGlDQUFxQzs7SUFFckMsd0NBQXFCOzs7OztJQUNyQixtQ0FBcUI7O0lBeUJyQixvQ0FBNkI7O0lBSTdCLHFDQUFxQjs7Ozs7SUEzQlQsc0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEVsZW1lbnRSZWYsXG4gIE9uQ2hhbmdlcyxcbiAgZm9yd2FyZFJlZixcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuZGVjbGFyZSB2YXIgalF1ZXJ5OiBhbnk7XG5cbmV4cG9ydCB0eXBlIFNlbGVjdDJPcHRpb24gPSBTZWxlY3QySXRlbU9wdGlvbiB8IFNlbGVjdDJDYXRlZ29yaXplZE9wdGlvbjtcblxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3QySXRlbU9wdGlvbiB7XG4gIHRleHQ6IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3QyQ2F0ZWdvcml6ZWRPcHRpb24ge1xuICB0ZXh0OiBzdHJpbmc7XG4gIGNoaWxkcmVuOiBTZWxlY3QySXRlbU9wdGlvbltdO1xufVxuXG5leHBvcnQgY29uc3QgQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBTZWxlY3QyQ29tcG9uZW50KSxcbiAgICBtdWx0aTogdHJ1ZVxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaXctc2VsZWN0MicsXG4gIHRlbXBsYXRlVXJsOiAnc2VsZWN0Mi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzZWxlY3QyLmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbIENVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SIF1cbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0MkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25EZXN0cm95IHtcbiAgLy8gZGF0YSBmb3Igc2VsZWN0MiBkcm9wZG93blxuICBASW5wdXQoKSBpdGVtczogQXJyYXk8U2VsZWN0Mk9wdGlvbj47XG4gIEBJbnB1dCgpIHRhZ3M6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG11bHRpcGxlOiBib29sZWFuO1xuICBASW5wdXQoKSBwbGFjZWhvbGRlcjogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIG9wZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgY3VycmVudFZhbHVlOiBzdHJpbmc7XG4gIHByaXZhdGUgZWxlbWVudDogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy51cGRhdGVEYXRhKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhhcmc6IGFueSkge1xuICAgIHRoaXMudXBkYXRlRGF0YSgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5yZW1vdmVTZWxlY3QyKCk7XG4gIH1cblxuICAvLyBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yXG4gIC8vIHdyaXRlIG1vZGVsIHZhbHVlIGludG8gdmlld1xuICB3cml0ZVZhbHVlKHY6IHN0cmluZykge1xuICAgIHRoaXMuY3VycmVudFZhbHVlID0gdjtcbiAgICBpZiAoIXRoaXMuZWxlbWVudCkgeyByZXR1cm47IH1cbiAgICB0aGlzLmVsZW1lbnQudmFsKHYpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICB9XG5cbiAgb25DaGFuZ2UgPSAodjogc3RyaW5nKSA9PiB7fTtcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHY6IHN0cmluZykgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cbiAgb25Ub3VjaGVkID0gKCkgPT4ge307XG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB7fSk6IHZvaWQgeyB0aGlzLm9uVG91Y2hlZCA9IGZuOyB9XG5cbiAgb25DbG9zZShlOiBFdmVudCkge1xuICAgIHRoaXMuY2xvc2UuZW1pdChlKTtcbiAgfVxuXG4gIHJlbW92ZVNlbGVjdDIoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50Lm9mZignc2VsZWN0MjpzZWxlY3QnKTtcbiAgICAgIHRoaXMuZWxlbWVudC5zZWxlY3QyKCdkZXN0cm95Jyk7XG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZURhdGEoKSB7XG4gICAgdGhpcy5yZW1vdmVTZWxlY3QyKCk7XG4gICAgLy8gcmVwbGFjZSBhIHNlbGVjdCBhcyBhIHdvcmstYXJvdW5kIGZvciBkYXRhIG5vdCByZXBsYWNpbmcgY29ycmVjdGx5LCBpdCB3YXMgYWx3YXlzIGFwcGVuZGluZyBtb3JlIGRhdGFcbiAgICB0aGlzLmVsZW1lbnQgPSBqUXVlcnkoJzxzZWxlY3Q+PC9zZWxlY3Q+JykuYXR0cignc3R5bGUnLCAnd2lkdGg6MjAwcHgnKTtcbiAgICB0aGlzLmVsZW1lbnQub24oJ3NlbGVjdDI6c2VsZWN0JywgKGU6IEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IHRoaXMuZWxlbWVudC52YWwoKTtcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5jdXJyZW50VmFsdWUpO1xuICAgIH0pO1xuICAgIHRoaXMuZWxlbWVudC5vbignc2VsZWN0MjpjbG9zZScsIChlOiBFdmVudCkgPT4ge1xuICAgICAgdGhpcy5vbkNsb3NlKGUpO1xuICAgIH0pO1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudC5nZXQoMCkpO1xuXG4gICAgdGhpcy5lbGVtZW50LnNlbGVjdDIoe1xuICAgICAgZGF0YTogdGhpcy5pdGVtcyB8fCDCoFtdLFxuICAgICAgLy8gYWxsb3dDbGVhcjogdHJ1ZSxcbiAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyLFxuICAgICAgbXVsdGlwbGU6IHRoaXMubXVsdGlwbGUsXG4gICAgICB0YWdzOiB0aGlzLnRhZ3NcbiAgICB9KTtcbiAgICB0aGlzLmVsZW1lbnQudmFsKHRoaXMuY3VycmVudFZhbHVlKS50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc2VsZWN0Mignb3BlbicpO1xuICAgIH1cbiAgfVxufVxuIl19