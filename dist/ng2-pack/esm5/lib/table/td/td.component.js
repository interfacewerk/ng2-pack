/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/td/td.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ColumnState } from './../column-state.class';
import { FormatColumnPipe } from './../pipes/format-column.pipe';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
var TdComponent = /** @class */ (function () {
    function TdComponent(formatColumnPipe) {
        this.formatColumnPipe = formatColumnPipe;
    }
    /**
     * @return {?}
     */
    TdComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(TdComponent.prototype, "cellValue", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.column) {
                return;
            }
            return this.row[this.column.config.id];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdComponent.prototype, "content", {
        get: /**
         * @return {?}
         */
        function () {
            return this.contentDiv.nativeElement.textContent;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdComponent.prototype, "isChanged", {
        get: /**
         * @return {?}
         */
        function () {
            return this.contentDiv.nativeElement.textContent.trim() !== this.formattedValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdComponent.prototype, "hasSubfields", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.column) {
                return;
            }
            return this.column.config.subFields && this.column.config.subFields.length > 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdComponent.prototype, "formattedValue", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.column) {
                return;
            }
            return this.formatColumnPipe.transform(this.cellValue, this.column);
        },
        enumerable: true,
        configurable: true
    });
    TdComponent.decorators = [
        { type: Component, args: [{
                    selector: '[iw-td]',
                    template: "<div>\n  <div *ngIf=\"!column?.config.subFields\" #contentDiv>\n    {{ cellValue | formatColumn: column }}\n  </div>\n\n  <div *ngIf=\"hasSubfields && cellValue && cellValue.length > 0\">\n\n    <div class=\"cell-list\" [ngSwitch]=\"(column.config.id)\">\n\n      <!-- TODO: default template for columns with subfields  -->\n    </div>\n  </div>\n</div>\n",
                    providers: [FormatColumnPipe],
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    TdComponent.ctorParameters = function () { return [
        { type: FormatColumnPipe }
    ]; };
    TdComponent.propDecorators = {
        column: [{ type: Input }],
        row: [{ type: Input }],
        contentDiv: [{ type: ViewChild, args: ['contentDiv', { static: false },] }]
    };
    return TdComponent;
}());
export { TdComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXBhY2svIiwic291cmNlcyI6WyJsaWIvdGFibGUvdGQvdGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBRS9ELE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFaEY7SUFZRSxxQkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFBSSxDQUFDOzs7O0lBRTNELDhCQUFROzs7SUFBUjtJQUNBLENBQUM7SUFFRCxzQkFBSSxrQ0FBUzs7OztRQUFiO1lBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQUUsT0FBTzthQUFFO1lBQzdCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6QyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGdDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUNuRCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGtDQUFTOzs7O1FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ2xGLENBQUM7OztPQUFBO0lBRUQsc0JBQUkscUNBQVk7Ozs7UUFBaEI7WUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFBRSxPQUFPO2FBQUU7WUFDN0IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDakYsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx1Q0FBYzs7OztRQUFsQjtZQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUFFLE9BQU87YUFBRTtZQUM3QixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEUsQ0FBQzs7O09BQUE7O2dCQXRDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFNBQVM7b0JBQ25CLCtXQUFnQztvQkFFaEMsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7O2lCQUM5Qjs7OztnQkFUTyxnQkFBZ0I7Ozt5QkFXckIsS0FBSztzQkFDTCxLQUFLOzZCQUVMLFNBQVMsU0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztJQTZCNUMsa0JBQUM7Q0FBQSxBQXZDRCxJQXVDQztTQWpDWSxXQUFXOzs7SUFDdEIsNkJBQTZCOztJQUM3QiwwQkFBa0I7O0lBRWxCLGlDQUFtRTs7Ozs7SUFFdkQsdUNBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb2x1bW5TdGF0ZX0gZnJvbSAnLi8uLi9jb2x1bW4tc3RhdGUuY2xhc3MnO1xuaW1wb3J0IHtGb3JtYXRDb2x1bW5QaXBlfSBmcm9tICcuLy4uL3BpcGVzL2Zvcm1hdC1jb2x1bW4ucGlwZSc7XG5cbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tpdy10ZF0nLFxuICB0ZW1wbGF0ZVVybDogJ3RkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGQuY29tcG9uZW50LmNzcyddLFxuICBwcm92aWRlcnM6IFtGb3JtYXRDb2x1bW5QaXBlXVxufSlcbmV4cG9ydCBjbGFzcyBUZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNvbHVtbjogQ29sdW1uU3RhdGU7XG4gIEBJbnB1dCgpIHJvdzogYW55O1xuXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnREaXYnLCB7IHN0YXRpYzogZmFsc2UgfSkgY29udGVudERpdjogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1hdENvbHVtblBpcGU6IEZvcm1hdENvbHVtblBpcGUpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgZ2V0IGNlbGxWYWx1ZSgpOiBhbnkge1xuICAgIGlmICghdGhpcy5jb2x1bW4pIHsgcmV0dXJuOyB9XG4gICAgcmV0dXJuIHRoaXMucm93W3RoaXMuY29sdW1uLmNvbmZpZy5pZF07XG4gIH1cblxuICBnZXQgY29udGVudCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnREaXYubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudDtcbiAgfVxuXG4gIGdldCBpc0NoYW5nZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udGVudERpdi5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50LnRyaW0oKSAhPT0gdGhpcy5mb3JtYXR0ZWRWYWx1ZTtcbiAgfVxuXG4gIGdldCBoYXNTdWJmaWVsZHMoKSB7XG4gICAgaWYgKCF0aGlzLmNvbHVtbikgeyByZXR1cm47IH1cbiAgICByZXR1cm4gdGhpcy5jb2x1bW4uY29uZmlnLnN1YkZpZWxkcyAmJiB0aGlzLmNvbHVtbi5jb25maWcuc3ViRmllbGRzLmxlbmd0aCA+IDA7XG4gIH1cblxuICBnZXQgZm9ybWF0dGVkVmFsdWUoKSB7XG4gICAgaWYgKCF0aGlzLmNvbHVtbikgeyByZXR1cm47IH1cbiAgICByZXR1cm4gdGhpcy5mb3JtYXRDb2x1bW5QaXBlLnRyYW5zZm9ybSh0aGlzLmNlbGxWYWx1ZSwgdGhpcy5jb2x1bW4pO1xuICB9XG59XG4iXX0=