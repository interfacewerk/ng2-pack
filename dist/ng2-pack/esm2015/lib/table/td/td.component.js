/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/td/td.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ColumnState } from './../column-state.class';
import { FormatColumnPipe } from './../pipes/format-column.pipe';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
export class TdComponent {
    /**
     * @param {?} formatColumnPipe
     */
    constructor(formatColumnPipe) {
        this.formatColumnPipe = formatColumnPipe;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    get cellValue() {
        if (!this.column) {
            return;
        }
        return this.row[this.column.config.id];
    }
    /**
     * @return {?}
     */
    get content() {
        return this.contentDiv.nativeElement.textContent;
    }
    /**
     * @return {?}
     */
    get isChanged() {
        return this.contentDiv.nativeElement.textContent.trim() !== this.formattedValue;
    }
    /**
     * @return {?}
     */
    get hasSubfields() {
        if (!this.column) {
            return;
        }
        return this.column.config.subFields && this.column.config.subFields.length > 0;
    }
    /**
     * @return {?}
     */
    get formattedValue() {
        if (!this.column) {
            return;
        }
        return this.formatColumnPipe.transform(this.cellValue, this.column);
    }
}
TdComponent.decorators = [
    { type: Component, args: [{
                selector: '[iw-td]',
                template: "<div>\n  <div *ngIf=\"!column?.config.subFields\" #contentDiv>\n    {{ cellValue | formatColumn: column }}\n  </div>\n\n  <div *ngIf=\"hasSubfields && cellValue && cellValue.length > 0\">\n\n    <div class=\"cell-list\" [ngSwitch]=\"(column.config.id)\">\n\n      <!-- TODO: default template for columns with subfields  -->\n    </div>\n  </div>\n</div>\n",
                providers: [FormatColumnPipe],
                styles: [""]
            }] }
];
/** @nocollapse */
TdComponent.ctorParameters = () => [
    { type: FormatColumnPipe }
];
TdComponent.propDecorators = {
    column: [{ type: Input }],
    row: [{ type: Input }],
    contentDiv: [{ type: ViewChild, args: ['contentDiv', { static: false },] }]
};
if (false) {
    /** @type {?} */
    TdComponent.prototype.column;
    /** @type {?} */
    TdComponent.prototype.row;
    /** @type {?} */
    TdComponent.prototype.contentDiv;
    /**
     * @type {?}
     * @private
     */
    TdComponent.prototype.formatColumnPipe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXBhY2svIiwic291cmNlcyI6WyJsaWIvdGFibGUvdGQvdGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFRaEYsTUFBTSxPQUFPLFdBQVc7Ozs7SUFNdEIsWUFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBSSxDQUFDOzs7O0lBRTNELFFBQVE7SUFDUixDQUFDOzs7O0lBRUQsSUFBSSxTQUFTO1FBQ1gsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDN0IsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Ozs7SUFFRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUNuRCxDQUFDOzs7O0lBRUQsSUFBSSxTQUFTO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEtBQUssSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUNsRixDQUFDOzs7O0lBRUQsSUFBSSxZQUFZO1FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDN0IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDakYsQ0FBQzs7OztJQUVELElBQUksY0FBYztRQUNoQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUFFLE9BQU87U0FBRTtRQUM3QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEUsQ0FBQzs7O1lBdENGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsK1dBQWdDO2dCQUVoQyxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzs7YUFDOUI7Ozs7WUFUTyxnQkFBZ0I7OztxQkFXckIsS0FBSztrQkFDTCxLQUFLO3lCQUVMLFNBQVMsU0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzs7O0lBSDFDLDZCQUE2Qjs7SUFDN0IsMEJBQWtCOztJQUVsQixpQ0FBbUU7Ozs7O0lBRXZELHVDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29sdW1uU3RhdGV9IGZyb20gJy4vLi4vY29sdW1uLXN0YXRlLmNsYXNzJztcbmltcG9ydCB7Rm9ybWF0Q29sdW1uUGlwZX0gZnJvbSAnLi8uLi9waXBlcy9mb3JtYXQtY29sdW1uLnBpcGUnO1xuXG5pbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbaXctdGRdJyxcbiAgdGVtcGxhdGVVcmw6ICd0ZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RkLmNvbXBvbmVudC5jc3MnXSxcbiAgcHJvdmlkZXJzOiBbRm9ybWF0Q29sdW1uUGlwZV1cbn0pXG5leHBvcnQgY2xhc3MgVGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSBjb2x1bW46IENvbHVtblN0YXRlO1xuICBASW5wdXQoKSByb3c6IGFueTtcblxuICBAVmlld0NoaWxkKCdjb250ZW50RGl2JywgeyBzdGF0aWM6IGZhbHNlIH0pIGNvbnRlbnREaXY6IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtYXRDb2x1bW5QaXBlOiBGb3JtYXRDb2x1bW5QaXBlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGdldCBjZWxsVmFsdWUoKTogYW55IHtcbiAgICBpZiAoIXRoaXMuY29sdW1uKSB7IHJldHVybjsgfVxuICAgIHJldHVybiB0aGlzLnJvd1t0aGlzLmNvbHVtbi5jb25maWcuaWRdO1xuICB9XG5cbiAgZ2V0IGNvbnRlbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb250ZW50RGl2Lm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQ7XG4gIH1cblxuICBnZXQgaXNDaGFuZ2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnREaXYubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudC50cmltKCkgIT09IHRoaXMuZm9ybWF0dGVkVmFsdWU7XG4gIH1cblxuICBnZXQgaGFzU3ViZmllbGRzKCkge1xuICAgIGlmICghdGhpcy5jb2x1bW4pIHsgcmV0dXJuOyB9XG4gICAgcmV0dXJuIHRoaXMuY29sdW1uLmNvbmZpZy5zdWJGaWVsZHMgJiYgdGhpcy5jb2x1bW4uY29uZmlnLnN1YkZpZWxkcy5sZW5ndGggPiAwO1xuICB9XG5cbiAgZ2V0IGZvcm1hdHRlZFZhbHVlKCkge1xuICAgIGlmICghdGhpcy5jb2x1bW4pIHsgcmV0dXJuOyB9XG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0Q29sdW1uUGlwZS50cmFuc2Zvcm0odGhpcy5jZWxsVmFsdWUsIHRoaXMuY29sdW1uKTtcbiAgfVxufVxuIl19