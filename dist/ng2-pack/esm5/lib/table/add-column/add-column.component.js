/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/add-column/add-column.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TableComponent } from './../table.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';
var AddColumnComponent = /** @class */ (function () {
    function AddColumnComponent(tableComponent) {
        this.tableComponent = tableComponent;
        this.open = true;
        this.selected = new EventEmitter();
        this.close = new EventEmitter();
        this.value = null;
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    AddColumnComponent.prototype.ngOnChanges = /**
     * @param {?} arg
     * @return {?}
     */
    function (arg) {
        /** @type {?} */
        var columns = this.columnsNotVisibleInTable();
        // this.items = this.tableComponent.columnsForAddingFn(options);
        this.items = this.categorizeColumns(columns);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AddColumnComponent.prototype.onSelected = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (!value) {
            return;
        }
        this.selected.emit({ value: value });
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.value = null;
        }), 0);
    };
    /**
     * @return {?}
     */
    AddColumnComponent.prototype.columnsNotVisibleInTable = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var items = [];
        this.tableComponent.columnsConfig.forEach((/**
         * @param {?} columnConfig
         * @return {?}
         */
        function (columnConfig) {
            if (_this.visibleColumns.indexOf(columnConfig.id) === -1) {
                columnConfig.text = columnConfig.text || columnConfig.id;
                items.push(columnConfig);
            }
        }));
        return items;
    };
    /**
     * @param {?} columns
     * @return {?}
     */
    AddColumnComponent.prototype.categorizeColumns = /**
     * @param {?} columns
     * @return {?}
     */
    function (columns) {
        /** @type {?} */
        var itemsWithCategory = columns.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return typeof item.category !== 'undefined'; }));
        if (itemsWithCategory.length === 0) {
            // no categories present
            return (/** @type {?} */ (columns));
        }
        /** @type {?} */
        var category2Index = {};
        /** @type {?} */
        var index = 0;
        /** @type {?} */
        var options = [];
        columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        function (column) {
            /** @type {?} */
            var categoryId = (column.category && column.category.id) || 'Other';
            /** @type {?} */
            var categoryIndex = category2Index[categoryId];
            if (typeof categoryIndex === 'undefined') {
                category2Index[categoryId] = index++;
                /** @type {?} */
                var option = {
                    text: (column.category && column.category.text) || categoryId,
                    children: [(/** @type {?} */ (column))]
                };
                options.push(option);
            }
            else {
                options[categoryIndex].children.push((/** @type {?} */ (column)));
            }
        }));
        return options;
    };
    AddColumnComponent.decorators = [
        { type: Component, args: [{
                    selector: 'iw-add-column',
                    template: "<!-- NOTE: indicate no columns to add in a better way  -->\n<div class=\"combo-input-wrap\">\n  <iw-select2\n    [placeholder]=\"'table.typeToSearch' | t\"\n    [items]=\"items\"\n    [(ngModel)]=\"value\"\n    [open]=\"open\"\n    (close)=\"close.emit($event)\"\n    (ngModelChange)=\"onSelected($event)\">\n  </iw-select2>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    AddColumnComponent.ctorParameters = function () { return [
        { type: TableComponent }
    ]; };
    AddColumnComponent.propDecorators = {
        visibleColumns: [{ type: Input }],
        open: [{ type: Input }],
        selected: [{ type: Output }],
        close: [{ type: Output }]
    };
    return AddColumnComponent;
}());
export { AddColumnComponent };
if (false) {
    /** @type {?} */
    AddColumnComponent.prototype.visibleColumns;
    /** @type {?} */
    AddColumnComponent.prototype.open;
    /** @type {?} */
    AddColumnComponent.prototype.selected;
    /** @type {?} */
    AddColumnComponent.prototype.close;
    /** @type {?} */
    AddColumnComponent.prototype.items;
    /** @type {?} */
    AddColumnComponent.prototype.value;
    /**
     * @type {?}
     * @private
     */
    AddColumnComponent.prototype.tableComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWNvbHVtbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItcGFjay8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS9hZGQtY29sdW1uL2FkZC1jb2x1bW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRXBELE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEY7SUFlRSw0QkFBcUIsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBUjFDLFNBQUksR0FBWSxJQUFJLENBQUM7UUFFcEIsYUFBUSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUM5RSxVQUFLLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUdyQyxVQUFLLEdBQWtCLElBQUksQ0FBQztJQUc1QixDQUFDOzs7OztJQUVELHdDQUFXOzs7O0lBQVgsVUFBWSxHQUFROztZQUNkLE9BQU8sR0FBbUIsSUFBSSxDQUFDLHdCQUF3QixFQUFFO1FBQzdELGdFQUFnRTtRQUNoRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7OztJQUVELHVDQUFVOzs7O0lBQVYsVUFBVyxLQUFhO1FBQXhCLGlCQU1DO1FBTEMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUFFLE9BQU87U0FBRTtRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssT0FBQSxFQUFDLENBQUMsQ0FBQztRQUM1QixVQUFVOzs7UUFBQztZQUNULEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLENBQUMsR0FBRSxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUM7Ozs7SUFFRCxxREFBd0I7OztJQUF4QjtRQUFBLGlCQVNDOztZQVJLLEtBQUssR0FBbUIsRUFBRTtRQUM5QixJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQyxZQUEwQjtZQUNuRSxJQUFJLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDdkQsWUFBWSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxJQUFJLFlBQVksQ0FBQyxFQUFFLENBQUM7Z0JBQ3pELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDMUI7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFRCw4Q0FBaUI7Ozs7SUFBakIsVUFBa0IsT0FBdUI7O1lBQ25DLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxNQUFNOzs7O1FBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssV0FBVyxFQUFwQyxDQUFvQyxFQUFDO1FBQ3RGLElBQUksaUJBQWlCLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNsQyx3QkFBd0I7WUFDeEIsT0FBTyxtQkFBcUIsT0FBTyxFQUFBLENBQUM7U0FDckM7O1lBQ0csY0FBYyxHQUFtQyxFQUFFOztZQUNuRCxLQUFLLEdBQUcsQ0FBQzs7WUFDVCxPQUFPLEdBQStCLEVBQUU7UUFDNUMsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFDLE1BQW9COztnQkFDL0IsVUFBVSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLE9BQU87O2dCQUMvRCxhQUFhLEdBQUcsY0FBYyxDQUFDLFVBQVUsQ0FBQztZQUM5QyxJQUFJLE9BQU8sYUFBYSxLQUFLLFdBQVcsRUFBRTtnQkFDeEMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDOztvQkFDakMsTUFBTSxHQUE2QjtvQkFDckMsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLFVBQVU7b0JBQzdELFFBQVEsRUFBRSxDQUFDLG1CQUFtQixNQUFNLEVBQUEsQ0FBQztpQkFDdEM7Z0JBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN0QjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsTUFBTSxFQUFBLENBQUMsQ0FBQzthQUNqRTtRQUNILENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Z0JBbkVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsMFZBQXdDOztpQkFFekM7Ozs7Z0JBUk8sY0FBYzs7O2lDQVVuQixLQUFLO3VCQUNMLEtBQUs7MkJBRUwsTUFBTTt3QkFDTixNQUFNOztJQTJEVCx5QkFBQztDQUFBLEFBckVELElBcUVDO1NBaEVZLGtCQUFrQjs7O0lBQzdCLDRDQUFrQzs7SUFDbEMsa0NBQThCOztJQUU5QixzQ0FBd0Y7O0lBQ3hGLG1DQUFxQzs7SUFFckMsbUNBQXVCOztJQUN2QixtQ0FBNEI7Ozs7O0lBRWYsNENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb2x1bW5Db25maWd9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7U2VsZWN0Mk9wdGlvbiwgU2VsZWN0MkNhdGVnb3JpemVkT3B0aW9uLCBTZWxlY3QySXRlbU9wdGlvbn0gZnJvbSAnLi4vLi4vc2VsZWN0Mi9zZWxlY3QyLmNvbXBvbmVudCc7XG5pbXBvcnQge1RhYmxlQ29tcG9uZW50fSBmcm9tICcuLy4uL3RhYmxlLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaXctYWRkLWNvbHVtbicsXG4gIHRlbXBsYXRlVXJsOiAnYWRkLWNvbHVtbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydhZGQtY29sdW1uLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBBZGRDb2x1bW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSB2aXNpYmxlQ29sdW1uczogc3RyaW5nW107XG4gIEBJbnB1dCgpIG9wZW46IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3RlZDogRXZlbnRFbWl0dGVyPHt2YWx1ZTogc3RyaW5nfT4gPSBuZXcgRXZlbnRFbWl0dGVyPHt2YWx1ZTogc3RyaW5nfT4oKTtcbiAgQE91dHB1dCgpIGNsb3NlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGl0ZW1zOiBTZWxlY3QyT3B0aW9uW107XG4gIHZhbHVlOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvciAocHJpdmF0ZSB0YWJsZUNvbXBvbmVudDogVGFibGVDb21wb25lbnQpIHtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGFyZzogYW55KSB7XG4gICAgbGV0IGNvbHVtbnM6IENvbHVtbkNvbmZpZ1tdID0gdGhpcy5jb2x1bW5zTm90VmlzaWJsZUluVGFibGUoKTtcbiAgICAvLyB0aGlzLml0ZW1zID0gdGhpcy50YWJsZUNvbXBvbmVudC5jb2x1bW5zRm9yQWRkaW5nRm4ob3B0aW9ucyk7XG4gICAgdGhpcy5pdGVtcyA9IHRoaXMuY2F0ZWdvcml6ZUNvbHVtbnMoY29sdW1ucyk7XG4gIH1cblxuICBvblNlbGVjdGVkKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAoIXZhbHVlKSB7IHJldHVybjsgfVxuICAgIHRoaXMuc2VsZWN0ZWQuZW1pdCh7dmFsdWV9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgIH0sIDApO1xuICB9XG5cbiAgY29sdW1uc05vdFZpc2libGVJblRhYmxlKCk6IENvbHVtbkNvbmZpZ1tdIHtcbiAgICBsZXQgaXRlbXM6IENvbHVtbkNvbmZpZ1tdID0gW107XG4gICAgdGhpcy50YWJsZUNvbXBvbmVudC5jb2x1bW5zQ29uZmlnLmZvckVhY2goKGNvbHVtbkNvbmZpZzogQ29sdW1uQ29uZmlnKSA9PiB7XG4gICAgICBpZiAodGhpcy52aXNpYmxlQ29sdW1ucy5pbmRleE9mKGNvbHVtbkNvbmZpZy5pZCkgPT09IC0xKSB7XG4gICAgICAgIGNvbHVtbkNvbmZpZy50ZXh0ID0gY29sdW1uQ29uZmlnLnRleHQgfHwgY29sdW1uQ29uZmlnLmlkO1xuICAgICAgICBpdGVtcy5wdXNoKGNvbHVtbkNvbmZpZyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9XG5cbiAgY2F0ZWdvcml6ZUNvbHVtbnMoY29sdW1uczogQ29sdW1uQ29uZmlnW10pOiBTZWxlY3QyT3B0aW9uW10ge1xuICAgIGxldCBpdGVtc1dpdGhDYXRlZ29yeSA9IGNvbHVtbnMuZmlsdGVyKChpdGVtKSA9PiB0eXBlb2YgaXRlbS5jYXRlZ29yeSAhPT0gJ3VuZGVmaW5lZCcpO1xuICAgIGlmIChpdGVtc1dpdGhDYXRlZ29yeS5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIG5vIGNhdGVnb3JpZXMgcHJlc2VudFxuICAgICAgcmV0dXJuIDxTZWxlY3QySXRlbU9wdGlvbltdPmNvbHVtbnM7XG4gICAgfVxuICAgIGxldCBjYXRlZ29yeTJJbmRleDoge1tjYXRlZ29yeUlkOiBzdHJpbmddOiBudW1iZXJ9ID0ge307XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBsZXQgb3B0aW9uczogU2VsZWN0MkNhdGVnb3JpemVkT3B0aW9uW10gPSBbXTtcbiAgICBjb2x1bW5zLmZvckVhY2goKGNvbHVtbjogQ29sdW1uQ29uZmlnKSA9PiB7XG4gICAgICBsZXQgY2F0ZWdvcnlJZCA9IChjb2x1bW4uY2F0ZWdvcnkgJiYgY29sdW1uLmNhdGVnb3J5LmlkKSB8fCAnT3RoZXInO1xuICAgICAgbGV0IGNhdGVnb3J5SW5kZXggPSBjYXRlZ29yeTJJbmRleFtjYXRlZ29yeUlkXTtcbiAgICAgIGlmICh0eXBlb2YgY2F0ZWdvcnlJbmRleCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY2F0ZWdvcnkySW5kZXhbY2F0ZWdvcnlJZF0gPSBpbmRleCsrO1xuICAgICAgICBsZXQgb3B0aW9uOiBTZWxlY3QyQ2F0ZWdvcml6ZWRPcHRpb24gPSB7XG4gICAgICAgICAgdGV4dDogKGNvbHVtbi5jYXRlZ29yeSAmJiBjb2x1bW4uY2F0ZWdvcnkudGV4dCkgfHwgY2F0ZWdvcnlJZCxcbiAgICAgICAgICBjaGlsZHJlbjogWzxTZWxlY3QySXRlbU9wdGlvbj5jb2x1bW5dXG4gICAgICAgIH07XG4gICAgICAgIG9wdGlvbnMucHVzaChvcHRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3B0aW9uc1tjYXRlZ29yeUluZGV4XS5jaGlsZHJlbi5wdXNoKDxTZWxlY3QySXRlbU9wdGlvbj5jb2x1bW4pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbn1cbiJdfQ==