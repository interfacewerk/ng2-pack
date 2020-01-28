/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/add-column/add-column.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TableComponent } from './../table.component';
import { Component, EventEmitter, Input, Output } from '@angular/core';
export class AddColumnComponent {
    /**
     * @param {?} tableComponent
     */
    constructor(tableComponent) {
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
    ngOnChanges(arg) {
        /** @type {?} */
        let columns = this.columnsNotVisibleInTable();
        // this.items = this.tableComponent.columnsForAddingFn(options);
        this.items = this.categorizeColumns(columns);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onSelected(value) {
        if (!value) {
            return;
        }
        this.selected.emit({ value });
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.value = null;
        }), 0);
    }
    /**
     * @return {?}
     */
    columnsNotVisibleInTable() {
        /** @type {?} */
        let items = [];
        this.tableComponent.columnsConfig.forEach((/**
         * @param {?} columnConfig
         * @return {?}
         */
        (columnConfig) => {
            if (this.visibleColumns.indexOf(columnConfig.id) === -1) {
                columnConfig.text = columnConfig.text || columnConfig.id;
                items.push(columnConfig);
            }
        }));
        return items;
    }
    /**
     * @param {?} columns
     * @return {?}
     */
    categorizeColumns(columns) {
        /** @type {?} */
        let itemsWithCategory = columns.filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => typeof item.category !== 'undefined'));
        if (itemsWithCategory.length === 0) {
            // no categories present
            return (/** @type {?} */ (columns));
        }
        /** @type {?} */
        let category2Index = {};
        /** @type {?} */
        let index = 0;
        /** @type {?} */
        let options = [];
        columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
            /** @type {?} */
            let categoryId = (column.category && column.category.id) || 'Other';
            /** @type {?} */
            let categoryIndex = category2Index[categoryId];
            if (typeof categoryIndex === 'undefined') {
                category2Index[categoryId] = index++;
                /** @type {?} */
                let option = {
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
    }
}
AddColumnComponent.decorators = [
    { type: Component, args: [{
                selector: 'iw-add-column',
                template: "<!-- NOTE: indicate no columns to add in a better way  -->\n<div class=\"combo-input-wrap\">\n  <iw-select2\n    [placeholder]=\"'table.typeToSearch' | t\"\n    [items]=\"items\"\n    [(ngModel)]=\"value\"\n    [open]=\"open\"\n    (close)=\"close.emit($event)\"\n    (ngModelChange)=\"onSelected($event)\">\n  </iw-select2>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
AddColumnComponent.ctorParameters = () => [
    { type: TableComponent }
];
AddColumnComponent.propDecorators = {
    visibleColumns: [{ type: Input }],
    open: [{ type: Input }],
    selected: [{ type: Output }],
    close: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWNvbHVtbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItcGFjay8iLCJzb3VyY2VzIjpbImxpYi90YWJsZS9hZGQtY29sdW1uL2FkZC1jb2x1bW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRXBELE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPbEYsTUFBTSxPQUFPLGtCQUFrQjs7OztJQVU3QixZQUFxQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFSMUMsU0FBSSxHQUFZLElBQUksQ0FBQztRQUVwQixhQUFRLEdBQWtDLElBQUksWUFBWSxFQUFtQixDQUFDO1FBQzlFLFVBQUssR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3JDLFVBQUssR0FBa0IsSUFBSSxDQUFDO0lBRzVCLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLEdBQVE7O1lBQ2QsT0FBTyxHQUFtQixJQUFJLENBQUMsd0JBQXdCLEVBQUU7UUFDN0QsZ0VBQWdFO1FBQ2hFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQWE7UUFDdEIsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUFFLE9BQU87U0FBRTtRQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBQyxDQUFDLENBQUM7UUFDNUIsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDcEIsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7OztJQUVELHdCQUF3Qjs7WUFDbEIsS0FBSyxHQUFtQixFQUFFO1FBQzlCLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLE9BQU87Ozs7UUFBQyxDQUFDLFlBQTBCLEVBQUUsRUFBRTtZQUN2RSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDdkQsWUFBWSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUMsSUFBSSxJQUFJLFlBQVksQ0FBQyxFQUFFLENBQUM7Z0JBQ3pELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDMUI7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxPQUF1Qjs7WUFDbkMsaUJBQWlCLEdBQUcsT0FBTyxDQUFDLE1BQU07Ozs7UUFBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFdBQVcsRUFBQztRQUN0RixJQUFJLGlCQUFpQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDbEMsd0JBQXdCO1lBQ3hCLE9BQU8sbUJBQXFCLE9BQU8sRUFBQSxDQUFDO1NBQ3JDOztZQUNHLGNBQWMsR0FBbUMsRUFBRTs7WUFDbkQsS0FBSyxHQUFHLENBQUM7O1lBQ1QsT0FBTyxHQUErQixFQUFFO1FBQzVDLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxNQUFvQixFQUFFLEVBQUU7O2dCQUNuQyxVQUFVLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksT0FBTzs7Z0JBQy9ELGFBQWEsR0FBRyxjQUFjLENBQUMsVUFBVSxDQUFDO1lBQzlDLElBQUksT0FBTyxhQUFhLEtBQUssV0FBVyxFQUFFO2dCQUN4QyxjQUFjLENBQUMsVUFBVSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUM7O29CQUNqQyxNQUFNLEdBQTZCO29CQUNyQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksVUFBVTtvQkFDN0QsUUFBUSxFQUFFLENBQUMsbUJBQW1CLE1BQU0sRUFBQSxDQUFDO2lCQUN0QztnQkFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3RCO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixNQUFNLEVBQUEsQ0FBQyxDQUFDO2FBQ2pFO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDSCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7WUFuRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QiwwVkFBd0M7O2FBRXpDOzs7O1lBUk8sY0FBYzs7OzZCQVVuQixLQUFLO21CQUNMLEtBQUs7dUJBRUwsTUFBTTtvQkFDTixNQUFNOzs7O0lBSlAsNENBQWtDOztJQUNsQyxrQ0FBOEI7O0lBRTlCLHNDQUF3Rjs7SUFDeEYsbUNBQXFDOztJQUVyQyxtQ0FBdUI7O0lBQ3ZCLG1DQUE0Qjs7Ozs7SUFFZiw0Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbHVtbkNvbmZpZ30gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHtTZWxlY3QyT3B0aW9uLCBTZWxlY3QyQ2F0ZWdvcml6ZWRPcHRpb24sIFNlbGVjdDJJdGVtT3B0aW9ufSBmcm9tICcuLi8uLi9zZWxlY3QyL3NlbGVjdDIuY29tcG9uZW50JztcbmltcG9ydCB7VGFibGVDb21wb25lbnR9IGZyb20gJy4vLi4vdGFibGUuY29tcG9uZW50JztcblxuaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpdy1hZGQtY29sdW1uJyxcbiAgdGVtcGxhdGVVcmw6ICdhZGQtY29sdW1uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ2FkZC1jb2x1bW4uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEFkZENvbHVtbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHZpc2libGVDb2x1bW5zOiBzdHJpbmdbXTtcbiAgQElucHV0KCkgb3BlbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgQE91dHB1dCgpIHNlbGVjdGVkOiBFdmVudEVtaXR0ZXI8e3ZhbHVlOiBzdHJpbmd9PiA9IG5ldyBFdmVudEVtaXR0ZXI8e3ZhbHVlOiBzdHJpbmd9PigpO1xuICBAT3V0cHV0KCkgY2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgaXRlbXM6IFNlbGVjdDJPcHRpb25bXTtcbiAgdmFsdWU6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yIChwcml2YXRlIHRhYmxlQ29tcG9uZW50OiBUYWJsZUNvbXBvbmVudCkge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoYXJnOiBhbnkpIHtcbiAgICBsZXQgY29sdW1uczogQ29sdW1uQ29uZmlnW10gPSB0aGlzLmNvbHVtbnNOb3RWaXNpYmxlSW5UYWJsZSgpO1xuICAgIC8vIHRoaXMuaXRlbXMgPSB0aGlzLnRhYmxlQ29tcG9uZW50LmNvbHVtbnNGb3JBZGRpbmdGbihvcHRpb25zKTtcbiAgICB0aGlzLml0ZW1zID0gdGhpcy5jYXRlZ29yaXplQ29sdW1ucyhjb2x1bW5zKTtcbiAgfVxuXG4gIG9uU2VsZWN0ZWQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICghdmFsdWUpIHsgcmV0dXJuOyB9XG4gICAgdGhpcy5zZWxlY3RlZC5lbWl0KHt2YWx1ZX0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgfSwgMCk7XG4gIH1cblxuICBjb2x1bW5zTm90VmlzaWJsZUluVGFibGUoKTogQ29sdW1uQ29uZmlnW10ge1xuICAgIGxldCBpdGVtczogQ29sdW1uQ29uZmlnW10gPSBbXTtcbiAgICB0aGlzLnRhYmxlQ29tcG9uZW50LmNvbHVtbnNDb25maWcuZm9yRWFjaCgoY29sdW1uQ29uZmlnOiBDb2x1bW5Db25maWcpID0+IHtcbiAgICAgIGlmICh0aGlzLnZpc2libGVDb2x1bW5zLmluZGV4T2YoY29sdW1uQ29uZmlnLmlkKSA9PT0gLTEpIHtcbiAgICAgICAgY29sdW1uQ29uZmlnLnRleHQgPSBjb2x1bW5Db25maWcudGV4dCB8fCBjb2x1bW5Db25maWcuaWQ7XG4gICAgICAgIGl0ZW1zLnB1c2goY29sdW1uQ29uZmlnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gaXRlbXM7XG4gIH1cblxuICBjYXRlZ29yaXplQ29sdW1ucyhjb2x1bW5zOiBDb2x1bW5Db25maWdbXSk6IFNlbGVjdDJPcHRpb25bXSB7XG4gICAgbGV0IGl0ZW1zV2l0aENhdGVnb3J5ID0gY29sdW1ucy5maWx0ZXIoKGl0ZW0pID0+IHR5cGVvZiBpdGVtLmNhdGVnb3J5ICE9PSAndW5kZWZpbmVkJyk7XG4gICAgaWYgKGl0ZW1zV2l0aENhdGVnb3J5Lmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gbm8gY2F0ZWdvcmllcyBwcmVzZW50XG4gICAgICByZXR1cm4gPFNlbGVjdDJJdGVtT3B0aW9uW10+Y29sdW1ucztcbiAgICB9XG4gICAgbGV0IGNhdGVnb3J5MkluZGV4OiB7W2NhdGVnb3J5SWQ6IHN0cmluZ106IG51bWJlcn0gPSB7fTtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCBvcHRpb25zOiBTZWxlY3QyQ2F0ZWdvcml6ZWRPcHRpb25bXSA9IFtdO1xuICAgIGNvbHVtbnMuZm9yRWFjaCgoY29sdW1uOiBDb2x1bW5Db25maWcpID0+IHtcbiAgICAgIGxldCBjYXRlZ29yeUlkID0gKGNvbHVtbi5jYXRlZ29yeSAmJiBjb2x1bW4uY2F0ZWdvcnkuaWQpIHx8ICdPdGhlcic7XG4gICAgICBsZXQgY2F0ZWdvcnlJbmRleCA9IGNhdGVnb3J5MkluZGV4W2NhdGVnb3J5SWRdO1xuICAgICAgaWYgKHR5cGVvZiBjYXRlZ29yeUluZGV4ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjYXRlZ29yeTJJbmRleFtjYXRlZ29yeUlkXSA9IGluZGV4Kys7XG4gICAgICAgIGxldCBvcHRpb246IFNlbGVjdDJDYXRlZ29yaXplZE9wdGlvbiA9IHtcbiAgICAgICAgICB0ZXh0OiAoY29sdW1uLmNhdGVnb3J5ICYmIGNvbHVtbi5jYXRlZ29yeS50ZXh0KSB8fCBjYXRlZ29yeUlkLFxuICAgICAgICAgIGNoaWxkcmVuOiBbPFNlbGVjdDJJdGVtT3B0aW9uPmNvbHVtbl1cbiAgICAgICAgfTtcbiAgICAgICAgb3B0aW9ucy5wdXNoKG9wdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvcHRpb25zW2NhdGVnb3J5SW5kZXhdLmNoaWxkcmVuLnB1c2goPFNlbGVjdDJJdGVtT3B0aW9uPmNvbHVtbik7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxufVxuIl19