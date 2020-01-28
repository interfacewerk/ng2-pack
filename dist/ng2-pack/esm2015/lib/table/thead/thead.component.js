/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/thead/thead.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TableComponent } from './../table.component';
import { TableInitService } from '../table-init.service';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Optional, } from '@angular/core';
export class TheadComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} tableInitService
     * @param {?} tableComponent
     */
    constructor(elementRef, changeDetectorRef, // needed to trigger change detection on jquery ui's callbacks
    tableInitService, tableComponent) {
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.tableInitService = tableInitService;
        this.addColumn = new EventEmitter();
        this.removeColumn = new EventEmitter();
        this.sortColumn = new EventEmitter();
        this.addingColumn = new EventEmitter();
        this.reorderColumns = new EventEmitter();
        this.toggleSubfield = new EventEmitter();
        this.lastColumnComboboxActive = false;
        this.customTemplate = false;
        this.tableComponent = tableComponent;
    }
    /**
     * @param {?} columnsConfig
     * @return {?}
     */
    set columnsConfig(columnsConfig) {
        if (this.tableComponent) {
            this.tableComponent.columnsConfig = columnsConfig;
        }
        else {
            this._columnsConfig = columnsConfig;
        }
    }
    /**
     * @param {?} visibleColumns
     * @return {?}
     */
    set visibleColumns(visibleColumns) {
        if (this.tableComponent) {
            this.tableComponent.visibleColumns = visibleColumns;
        }
        else {
            this._visibleColumns = visibleColumns;
            // NOTE: what about output events?
        }
    }
    /**
     * @return {?}
     */
    get changeColumnVisibility() {
        if (!this.tableComponent) {
            return false;
        }
        return this.tableComponent.changeColumnVisibility;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.reorderingEnabled) {
            this.initializeSortable();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.customTemplate = this.elementRef.nativeElement.children.length !== 1;
        }));
    }
    /**
     * @return {?}
     */
    get columnsConfig() {
        return this._columnsConfig || this.delegateInput('columnsConfig', []);
    }
    /**
     * @return {?}
     */
    get columnsLookup() {
        /** @type {?} */
        let columnsLookup = this._columnsLookup ||
            (this.tableComponent && this.tableComponent.columnsLookup);
        if (typeof columnsLookup === 'undefined') {
            columnsLookup = this.tableInitService.columnsConfig2Lookup(this.columnsConfig);
            this._columnsLookup = columnsLookup;
        }
        return columnsLookup;
    }
    /**
     * @return {?}
     */
    get visibleColumns() {
        return this._visibleColumns || this.delegateInput('visibleColumns', []);
    }
    /**
     * @return {?}
     */
    get reorderingEnabled() {
        return this._reorderingEnabled || this.delegateInput('reorderingEnabled', false);
    }
    /**
     * @return {?}
     */
    get isLastAddingColumnVisible() {
        return this.lastColumnComboboxActive || this.addingColumnIndex === this.visibleColumns.length;
    }
    /**
     * @param {?} column
     * @param {?} direction
     * @return {?}
     */
    isSorted(column, direction) {
        if (!this.tableComponent) {
            return false;
        }
        return this.tableComponent.isSorted(column, direction);
    }
    /**
     * @param {?} columnName
     * @return {?}
     */
    column(columnName) {
        return this.columnsLookup[columnName];
    }
    /**
     * @param {?} item
     * @param {?} atPosition
     * @return {?}
     */
    selectNewColumn(item, atPosition) {
        this.addingColumnIndex = null;
        this.lastColumnComboboxActive = false;
        if (typeof atPosition !== 'undefined') {
            // the order changed
            this.visibleColumns = [
                ...this.visibleColumns.slice(0, atPosition),
                item.value,
                ...this.visibleColumns.slice(atPosition),
            ];
        }
        else {
            this.visibleColumns = [...this.visibleColumns, item.value];
        }
        this.addColumn.emit(item.value);
        // this.visibleColumnsOutput.emit(this.visibleColumns);
    }
    /**
     * @return {?}
     */
    toggleCombobox() {
        this.lastColumnComboboxActive = !this.lastColumnComboboxActive;
        if (!this.lastColumnComboboxActive) {
            return;
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            jQuery(this.elementRef.nativeElement).scrollLeft(99999);
        }), 0);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    onAddCombobox(index) {
        this.lastColumnComboboxActive = false;
        this.addingColumnIndex = index;
        this.addingColumn.emit(index);
    }
    /**
     * @param {?} sortEvent
     * @return {?}
     */
    onSortColumn(sortEvent) {
        if (this.tableComponent) {
            this.tableComponent.sortedColumnName = sortEvent.column;
        }
        this.sortColumn.emit(sortEvent);
    }
    /**
     * @param {?} toggleSubfieldEvent
     * @return {?}
     */
    onToggleSubfield(toggleSubfieldEvent) {
        this.toggleSubfield.emit(toggleSubfieldEvent);
    }
    /**
     * @private
     * @return {?}
     */
    initializeSortable() {
        jQuery(this.elementRef.nativeElement).sortable({
            cursor: 'move',
            axis: 'x',
            tolerance: 'pointer',
            items: '.drag-column',
            handle: '.col-label',
            update: (/**
             * @return {?}
             */
            () => {
                this.draggedColumnId = '';
                /** @type {?} */
                let sortedIDs = jQuery(this.elementRef.nativeElement)
                    .sortable('toArray', {
                    attribute: 'data-col-ref'
                });
                this.visibleColumns = sortedIDs;
                this.reorderColumns.emit(sortedIDs);
                this.changeDetectorRef.detectChanges();
            }),
        });
        jQuery(this.elementRef.nativeElement).disableSelection();
    }
    /**
     * @private
     * @template T
     * @param {?} propertyName
     * @param {?} defaultValue
     * @return {?}
     */
    delegateInput(propertyName, defaultValue) {
        if (!this.tableComponent) {
            // console.warn('TheadComponent: No parent "tableComponent" was found.' +
            //   'Input "' + propertyName + '" was also not provided.');
            return defaultValue;
        }
        return (/** @type {?} */ (((/** @type {?} */ (this.tableComponent)))[propertyName]));
    }
}
TheadComponent.decorators = [
    { type: Component, args: [{
                selector: '[iw-thead]',
                template: "<ng-content></ng-content>\n\n<tr *ngIf=\"!customTemplate\">\n  <ng-template  ngFor let-columnName [ngForOf]=\"visibleColumns\" let-columnIndex=\"index\">\n    <th *ngIf=\"addingColumnIndex == columnIndex\" class=\"combo-th\">\n      <div class=\"add-column combobox is-active\">\n        <iw-add-column\n          [visibleColumns]=\"visibleColumns\"\n          (close)=\"onAddCombobox(undefined)\"\n          (selected)=\"selectNewColumn($event, columnIndex)\"\n          attr.id=\"combobox-{{columnIndex}}\">\n        </iw-add-column>\n      </div>\n    </th>\n    <th\n      iw-th\n      [column]=\"column(columnName)\"\n      [changeVisibility]=\"changeColumnVisibility\"\n      (removeColumn)=\"removeColumn.emit($event)\"\n      (sortColumn)=\"onSortColumn($event)\"\n      (addCombobox)=\"onAddCombobox($event + columnIndex)\"\n      (toggleSubfield)=\"onToggleSubfield($event)\"\n      class=\"drag-column\"\n      attr.data-col-ref=\"{{ column(columnName)?.config.id }}\"\n      attr.id=\"col-id-{{ column(columnName)?.config.id }}\"\n      [class.is-sorted]=\"isSorted(column(columnName), undefined)\"\n      [class.is-sorted--asc]=\"isSorted(column(columnName), 'asc')\"\n      [class.is-sorted--desc]=\"isSorted(column(columnName), 'desc')\">\n    </th>\n  </ng-template>\n  <th *ngIf=\"changeColumnVisibility\" class=\"combo-th\">\n    <div class=\"add-column combobox\" [ngClass]=\"lastColumnComboboxActive ? 'is-active' : 'is-inactive'\">\n      <iw-add-column\n        *ngIf=\"lastColumnComboboxActive\"\n        [visibleColumns]=\"visibleColumns\"\n        (close)=\"toggleCombobox()\"\n        (selected)=\"selectNewColumn($event, undefined)\"\n      ></iw-add-column>\n      <span\n        *ngIf=\"!lastColumnComboboxActive\"\n        (click)=\"toggleCombobox()\"\n        class=\"add-column-button combo-toggle btn btn-sm btn-success\"\n      >+</span>\n    </div>\n  </th>\n</tr>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
TheadComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: TableInitService },
    { type: TableComponent, decorators: [{ type: Optional }] }
];
TheadComponent.propDecorators = {
    columnsConfig: [{ type: Input }],
    visibleColumns: [{ type: Input }],
    addColumn: [{ type: Output }],
    removeColumn: [{ type: Output }],
    sortColumn: [{ type: Output }],
    addingColumn: [{ type: Output }],
    reorderColumns: [{ type: Output }],
    toggleSubfield: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TheadComponent.prototype.addColumn;
    /** @type {?} */
    TheadComponent.prototype.removeColumn;
    /** @type {?} */
    TheadComponent.prototype.sortColumn;
    /** @type {?} */
    TheadComponent.prototype.addingColumn;
    /** @type {?} */
    TheadComponent.prototype.reorderColumns;
    /** @type {?} */
    TheadComponent.prototype.toggleSubfield;
    /** @type {?} */
    TheadComponent.prototype.lastColumnComboboxActive;
    /** @type {?} */
    TheadComponent.prototype.addingColumnIndex;
    /** @type {?} */
    TheadComponent.prototype.draggedColumnId;
    /** @type {?} */
    TheadComponent.prototype.customTemplate;
    /**
     * @type {?}
     * @private
     */
    TheadComponent.prototype._columnsConfig;
    /**
     * @type {?}
     * @private
     */
    TheadComponent.prototype._visibleColumns;
    /**
     * @type {?}
     * @private
     */
    TheadComponent.prototype._reorderingEnabled;
    /**
     * @type {?}
     * @private
     */
    TheadComponent.prototype._columnsLookup;
    /**
     * @type {?}
     * @private
     */
    TheadComponent.prototype.tableComponent;
    /**
     * @type {?}
     * @private
     */
    TheadComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    TheadComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    TheadComponent.prototype.tableInitService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXBhY2svIiwic291cmNlcyI6WyJsaWIvdGFibGUvdGhlYWQvdGhlYWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBRXZELE9BQU8sRUFFTCxpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFTdkIsTUFBTSxPQUFPLGNBQWM7Ozs7Ozs7SUFtQ3pCLFlBQ1UsVUFBc0IsRUFDdEIsaUJBQW9DLEVBQUUsOERBQThEO0lBQ3BHLGdCQUFrQyxFQUM5QixjQUE4QjtRQUhsQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQXJCbEMsY0FBUyxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQzdELGlCQUFZLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFDaEUsZUFBVSxHQUFrQyxJQUFJLFlBQVksRUFBbUIsQ0FBQztRQUNoRixpQkFBWSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ2hFLG1CQUFjLEdBQTJCLElBQUksWUFBWSxFQUFZLENBQUM7UUFDdEUsbUJBQWMsR0FBc0MsSUFBSSxZQUFZLEVBQXVCLENBQUM7UUFFdEcsNkJBQXdCLEdBQVksS0FBSyxDQUFDO1FBRzFDLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBYzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBQ3ZDLENBQUM7Ozs7O0lBekNELElBQWEsYUFBYSxDQUFDLGFBQWE7UUFDdEMsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztTQUNuRDthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7U0FDckM7SUFDSCxDQUFDOzs7OztJQUNELElBQWEsY0FBYyxDQUFDLGNBQXdCO1FBQ2xELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7U0FDckQ7YUFBTTtZQUNMLElBQUksQ0FBQyxlQUFlLEdBQUcsY0FBYyxDQUFDO1lBQ3RDLGtDQUFrQztTQUNuQztJQUNILENBQUM7Ozs7SUE2QkQsSUFBSSxzQkFBc0I7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFBRSxPQUFPLEtBQUssQ0FBQztTQUFFO1FBQzNDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQztJQUNwRCxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQzFCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1FBQzVFLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVELElBQUksYUFBYTtRQUNmLE9BQU8sSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7O0lBRUQsSUFBSSxhQUFhOztZQUNYLGFBQWEsR0FBRyxJQUFJLENBQUMsY0FBYztZQUNyQyxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUM7UUFDNUQsSUFBSSxPQUFPLGFBQWEsS0FBSyxXQUFXLEVBQUU7WUFDeEMsYUFBYSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDL0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7U0FDckM7UUFDRCxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFFLENBQUM7Ozs7SUFFRCxJQUFJLGlCQUFpQjtRQUNuQixPQUFPLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25GLENBQUM7Ozs7SUFFRCxJQUFJLHlCQUF5QjtRQUMzQixPQUFPLElBQUksQ0FBQyx3QkFBd0IsSUFBSSxJQUFJLENBQUMsaUJBQWlCLEtBQUssSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7SUFDaEcsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLE1BQW1CLEVBQUUsU0FBaUI7UUFDN0MsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFBRSxPQUFPLEtBQUssQ0FBQztTQUFFO1FBQzNDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLFVBQWtCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7Ozs7SUFFRCxlQUFlLENBQUMsSUFBcUIsRUFBRSxVQUFrQjtRQUN2RCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyx3QkFBd0IsR0FBRyxLQUFLLENBQUM7UUFFdEMsSUFBSSxPQUFPLFVBQVUsS0FBSyxXQUFXLEVBQUU7WUFDckMsb0JBQW9CO1lBQ3BCLElBQUksQ0FBQyxjQUFjLEdBQUc7Z0JBQ3BCLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLEtBQUs7Z0JBQ1YsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUM7YUFDekMsQ0FBQztTQUNIO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUM1RDtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyx1REFBdUQ7SUFDekQsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsd0JBQXdCLEdBQUcsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUM7UUFDL0QsSUFBSSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRTtZQUFFLE9BQU87U0FBRTtRQUMvQyxVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUQsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxhQUFhLENBQUMsS0FBYTtRQUN6QixJQUFJLENBQUMsd0JBQXdCLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsU0FBMEI7UUFDckMsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDO1NBQUU7UUFDckYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxtQkFBd0M7UUFDdkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNoRCxDQUFDOzs7OztJQUVPLGtCQUFrQjtRQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDN0MsTUFBTSxFQUFFLE1BQU07WUFDZCxJQUFJLEVBQUUsR0FBRztZQUNULFNBQVMsRUFBRSxTQUFTO1lBQ3BCLEtBQUssRUFBRSxjQUFjO1lBQ3JCLE1BQU0sRUFBRSxZQUFZO1lBQ3BCLE1BQU07OztZQUFFLEdBQUcsRUFBRTtnQkFDWCxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQzs7b0JBQ3RCLFNBQVMsR0FBRyxNQUFNLENBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUU7cUJBQ3BELFFBQVEsQ0FBRSxTQUFTLEVBQUU7b0JBQ3BCLFNBQVMsRUFBRSxjQUFjO2lCQUMxQixDQUFDO2dCQUNKLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3pDLENBQUMsQ0FBQTtTQVVGLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDM0QsQ0FBQzs7Ozs7Ozs7SUFFTyxhQUFhLENBQUksWUFBb0IsRUFBRSxZQUFlO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3hCLHlFQUF5RTtZQUN6RSw0REFBNEQ7WUFDNUQsT0FBTyxZQUFZLENBQUM7U0FDckI7UUFFRCxPQUFPLG1CQUFBLENBQUMsbUJBQUssSUFBSSxDQUFDLGNBQWMsRUFBQSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUssQ0FBQztJQUN2RCxDQUFDOzs7WUFwTEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0Qix5M0RBQW1DOzthQUVwQzs7OztZQWRDLFVBQVU7WUFGVixpQkFBaUI7WUFKWCxnQkFBZ0I7WUFEaEIsY0FBYyx1QkE2RGpCLFFBQVE7Ozs0QkF0Q1YsS0FBSzs2QkFPTCxLQUFLO3dCQVNMLE1BQU07MkJBQ04sTUFBTTt5QkFDTixNQUFNOzJCQUNOLE1BQU07NkJBQ04sTUFBTTs2QkFDTixNQUFNOzs7O0lBTFAsbUNBQXVFOztJQUN2RSxzQ0FBMEU7O0lBQzFFLG9DQUEwRjs7SUFDMUYsc0NBQTBFOztJQUMxRSx3Q0FBZ0Y7O0lBQ2hGLHdDQUFzRzs7SUFFdEcsa0RBQTBDOztJQUMxQywyQ0FBaUM7O0lBQ2pDLHlDQUErQjs7SUFDL0Isd0NBQWdDOzs7OztJQUVoQyx3Q0FBdUM7Ozs7O0lBQ3ZDLHlDQUFrQzs7Ozs7SUFDbEMsNENBQW9DOzs7OztJQUNwQyx3Q0FBcUM7Ozs7O0lBQ3JDLHdDQUFtRDs7Ozs7SUFHakQsb0NBQThCOzs7OztJQUM5QiwyQ0FBNEM7Ozs7O0lBQzVDLDBDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29sdW1uQ29uZmlnLCBDb2x1bW5Mb29rdXB9IGZyb20gJy4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgU29ydENvbHVtbkV2ZW50LCBUb2dnbGVTdWJmaWVsZEV2ZW50fSBmcm9tICcuLi9ldmVudHMnO1xuaW1wb3J0IHtDb2x1bW5TdGF0ZX0gZnJvbSAnLi8uLi9jb2x1bW4tc3RhdGUuY2xhc3MnO1xuaW1wb3J0IHtUYWJsZUNvbXBvbmVudH0gZnJvbSAnLi8uLi90YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHtUYWJsZUluaXRTZXJ2aWNlfSBmcm9tICcuLi90YWJsZS1pbml0LnNlcnZpY2UnO1xuXG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgT3B0aW9uYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5kZWNsYXJlIHZhciBqUXVlcnk6IGFueTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2l3LXRoZWFkXScsXG4gIHRlbXBsYXRlVXJsOiAndGhlYWQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90aGVhZC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGhlYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBzZXQgY29sdW1uc0NvbmZpZyhjb2x1bW5zQ29uZmlnKSB7XG4gICAgaWYgKHRoaXMudGFibGVDb21wb25lbnQpIHtcbiAgICAgIHRoaXMudGFibGVDb21wb25lbnQuY29sdW1uc0NvbmZpZyA9IGNvbHVtbnNDb25maWc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NvbHVtbnNDb25maWcgPSBjb2x1bW5zQ29uZmlnO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKSBzZXQgdmlzaWJsZUNvbHVtbnModmlzaWJsZUNvbHVtbnM6IHN0cmluZ1tdKSB7XG4gICAgaWYgKHRoaXMudGFibGVDb21wb25lbnQpIHtcbiAgICAgIHRoaXMudGFibGVDb21wb25lbnQudmlzaWJsZUNvbHVtbnMgPSB2aXNpYmxlQ29sdW1ucztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdmlzaWJsZUNvbHVtbnMgPSB2aXNpYmxlQ29sdW1ucztcbiAgICAgIC8vIE5PVEU6IHdoYXQgYWJvdXQgb3V0cHV0IGV2ZW50cz9cbiAgICB9XG4gIH1cblxuICBAT3V0cHV0KCkgYWRkQ29sdW1uOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgcmVtb3ZlQ29sdW1uOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICBAT3V0cHV0KCkgc29ydENvbHVtbjogRXZlbnRFbWl0dGVyPFNvcnRDb2x1bW5FdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFNvcnRDb2x1bW5FdmVudD4oKTtcbiAgQE91dHB1dCgpIGFkZGluZ0NvbHVtbjogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcbiAgQE91dHB1dCgpIHJlb3JkZXJDb2x1bW5zOiBFdmVudEVtaXR0ZXI8c3RyaW5nW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcbiAgQE91dHB1dCgpIHRvZ2dsZVN1YmZpZWxkOiBFdmVudEVtaXR0ZXI8VG9nZ2xlU3ViZmllbGRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRvZ2dsZVN1YmZpZWxkRXZlbnQ+KCk7XG5cbiAgbGFzdENvbHVtbkNvbWJvYm94QWN0aXZlOiBib29sZWFuID0gZmFsc2U7XG4gIGFkZGluZ0NvbHVtbkluZGV4OiBudW1iZXIgfCBudWxsO1xuICBkcmFnZ2VkQ29sdW1uSWQ6IHN0cmluZyB8IG51bGw7XG4gIGN1c3RvbVRlbXBsYXRlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfY29sdW1uc0NvbmZpZzogQ29sdW1uQ29uZmlnW107XG4gIHByaXZhdGUgX3Zpc2libGVDb2x1bW5zOiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfcmVvcmRlcmluZ0VuYWJsZWQ6IGJvb2xlYW47XG4gIHByaXZhdGUgX2NvbHVtbnNMb29rdXA6IENvbHVtbkxvb2t1cDtcbiAgcHJpdmF0ZSB0YWJsZUNvbXBvbmVudDogVGFibGVDb21wb25lbnQgfCB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLCAvLyBuZWVkZWQgdG8gdHJpZ2dlciBjaGFuZ2UgZGV0ZWN0aW9uIG9uIGpxdWVyeSB1aSdzIGNhbGxiYWNrc1xuICAgIHByaXZhdGUgdGFibGVJbml0U2VydmljZTogVGFibGVJbml0U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSB0YWJsZUNvbXBvbmVudDogVGFibGVDb21wb25lbnRcbiAgKSB7XG4gICAgdGhpcy50YWJsZUNvbXBvbmVudCA9IHRhYmxlQ29tcG9uZW50O1xuICB9XG5cbiAgZ2V0IGNoYW5nZUNvbHVtblZpc2liaWxpdHkoKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLnRhYmxlQ29tcG9uZW50KSB7IHJldHVybiBmYWxzZTsgfVxuICAgIHJldHVybiB0aGlzLnRhYmxlQ29tcG9uZW50LmNoYW5nZUNvbHVtblZpc2liaWxpdHk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5yZW9yZGVyaW5nRW5hYmxlZCkge1xuICAgICAgdGhpcy5pbml0aWFsaXplU29ydGFibGUoKTtcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmN1c3RvbVRlbXBsYXRlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoICE9PSAxO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGNvbHVtbnNDb25maWcoKTogQ29sdW1uQ29uZmlnW10ge1xuICAgIHJldHVybiB0aGlzLl9jb2x1bW5zQ29uZmlnIHx8IHRoaXMuZGVsZWdhdGVJbnB1dCgnY29sdW1uc0NvbmZpZycsIFtdKTtcbiAgfVxuXG4gIGdldCBjb2x1bW5zTG9va3VwKCk6IENvbHVtbkxvb2t1cCB7XG4gICAgbGV0IGNvbHVtbnNMb29rdXAgPSB0aGlzLl9jb2x1bW5zTG9va3VwIHx8XG4gICAgICAodGhpcy50YWJsZUNvbXBvbmVudCAmJiB0aGlzLnRhYmxlQ29tcG9uZW50LmNvbHVtbnNMb29rdXApO1xuICAgIGlmICh0eXBlb2YgY29sdW1uc0xvb2t1cCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbHVtbnNMb29rdXAgPSB0aGlzLnRhYmxlSW5pdFNlcnZpY2UuY29sdW1uc0NvbmZpZzJMb29rdXAodGhpcy5jb2x1bW5zQ29uZmlnKTtcbiAgICAgIHRoaXMuX2NvbHVtbnNMb29rdXAgPSBjb2x1bW5zTG9va3VwO1xuICAgIH1cbiAgICByZXR1cm4gY29sdW1uc0xvb2t1cDtcbiAgfVxuXG4gIGdldCB2aXNpYmxlQ29sdW1ucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3Zpc2libGVDb2x1bW5zIHx8IHRoaXMuZGVsZWdhdGVJbnB1dCgndmlzaWJsZUNvbHVtbnMnLCBbXSk7XG4gIH1cblxuICBnZXQgcmVvcmRlcmluZ0VuYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Jlb3JkZXJpbmdFbmFibGVkIHx8IHRoaXMuZGVsZWdhdGVJbnB1dCgncmVvcmRlcmluZ0VuYWJsZWQnLCBmYWxzZSk7XG4gIH1cblxuICBnZXQgaXNMYXN0QWRkaW5nQ29sdW1uVmlzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5sYXN0Q29sdW1uQ29tYm9ib3hBY3RpdmUgfHwgdGhpcy5hZGRpbmdDb2x1bW5JbmRleCA9PT0gdGhpcy52aXNpYmxlQ29sdW1ucy5sZW5ndGg7XG4gIH1cblxuICBpc1NvcnRlZChjb2x1bW46IENvbHVtblN0YXRlLCBkaXJlY3Rpb246IHN0cmluZykge1xuICAgIGlmICghdGhpcy50YWJsZUNvbXBvbmVudCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICByZXR1cm4gdGhpcy50YWJsZUNvbXBvbmVudC5pc1NvcnRlZChjb2x1bW4sIGRpcmVjdGlvbik7XG4gIH1cblxuICBjb2x1bW4oY29sdW1uTmFtZTogc3RyaW5nKTogQ29sdW1uU3RhdGUge1xuICAgIHJldHVybiB0aGlzLmNvbHVtbnNMb29rdXBbY29sdW1uTmFtZV07XG4gIH1cblxuICBzZWxlY3ROZXdDb2x1bW4oaXRlbToge3ZhbHVlOiBzdHJpbmd9LCBhdFBvc2l0aW9uOiBudW1iZXIpIHtcbiAgICB0aGlzLmFkZGluZ0NvbHVtbkluZGV4ID0gbnVsbDtcbiAgICB0aGlzLmxhc3RDb2x1bW5Db21ib2JveEFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgaWYgKHR5cGVvZiBhdFBvc2l0aW9uICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gdGhlIG9yZGVyIGNoYW5nZWRcbiAgICAgIHRoaXMudmlzaWJsZUNvbHVtbnMgPSBbXG4gICAgICAgIC4uLnRoaXMudmlzaWJsZUNvbHVtbnMuc2xpY2UoMCwgYXRQb3NpdGlvbiksXG4gICAgICAgIGl0ZW0udmFsdWUsXG4gICAgICAgIC4uLnRoaXMudmlzaWJsZUNvbHVtbnMuc2xpY2UoYXRQb3NpdGlvbiksXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZpc2libGVDb2x1bW5zID0gWy4uLnRoaXMudmlzaWJsZUNvbHVtbnMsIGl0ZW0udmFsdWVdO1xuICAgIH1cbiAgICB0aGlzLmFkZENvbHVtbi5lbWl0KGl0ZW0udmFsdWUpO1xuICAgIC8vIHRoaXMudmlzaWJsZUNvbHVtbnNPdXRwdXQuZW1pdCh0aGlzLnZpc2libGVDb2x1bW5zKTtcbiAgfVxuXG4gIHRvZ2dsZUNvbWJvYm94KCkge1xuICAgIHRoaXMubGFzdENvbHVtbkNvbWJvYm94QWN0aXZlID0gIXRoaXMubGFzdENvbHVtbkNvbWJvYm94QWN0aXZlO1xuICAgIGlmICghdGhpcy5sYXN0Q29sdW1uQ29tYm9ib3hBY3RpdmUpIHsgcmV0dXJuOyB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBqUXVlcnkodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLnNjcm9sbExlZnQoOTk5OTkpO1xuICAgIH0sIDApO1xuICB9XG5cbiAgb25BZGRDb21ib2JveChpbmRleDogbnVtYmVyKSB7XG4gICAgdGhpcy5sYXN0Q29sdW1uQ29tYm9ib3hBY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmFkZGluZ0NvbHVtbkluZGV4ID0gaW5kZXg7XG4gICAgdGhpcy5hZGRpbmdDb2x1bW4uZW1pdChpbmRleCk7XG4gIH1cblxuICBvblNvcnRDb2x1bW4oc29ydEV2ZW50OiBTb3J0Q29sdW1uRXZlbnQpIHtcbiAgICBpZiAodGhpcy50YWJsZUNvbXBvbmVudCkgeyB0aGlzLnRhYmxlQ29tcG9uZW50LnNvcnRlZENvbHVtbk5hbWUgPSBzb3J0RXZlbnQuY29sdW1uOyB9XG4gICAgdGhpcy5zb3J0Q29sdW1uLmVtaXQoc29ydEV2ZW50KTtcbiAgfVxuXG4gIG9uVG9nZ2xlU3ViZmllbGQodG9nZ2xlU3ViZmllbGRFdmVudDogVG9nZ2xlU3ViZmllbGRFdmVudCkge1xuICAgIHRoaXMudG9nZ2xlU3ViZmllbGQuZW1pdCh0b2dnbGVTdWJmaWVsZEV2ZW50KTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhbGl6ZVNvcnRhYmxlKCkge1xuICAgIGpRdWVyeSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuc29ydGFibGUoe1xuICAgICAgY3Vyc29yOiAnbW92ZScsXG4gICAgICBheGlzOiAneCcsXG4gICAgICB0b2xlcmFuY2U6ICdwb2ludGVyJyxcbiAgICAgIGl0ZW1zOiAnLmRyYWctY29sdW1uJyxcbiAgICAgIGhhbmRsZTogJy5jb2wtbGFiZWwnLFxuICAgICAgdXBkYXRlOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuZHJhZ2dlZENvbHVtbklkID0gJyc7XG4gICAgICAgIGxldCBzb3J0ZWRJRHMgPSBqUXVlcnkoIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50IClcbiAgICAgICAgICAuc29ydGFibGUoICd0b0FycmF5Jywge1xuICAgICAgICAgICAgYXR0cmlidXRlOiAnZGF0YS1jb2wtcmVmJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB0aGlzLnZpc2libGVDb2x1bW5zID0gc29ydGVkSURzO1xuICAgICAgICB0aGlzLnJlb3JkZXJDb2x1bW5zLmVtaXQoc29ydGVkSURzKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICB9LFxuICAgICAgLy8gTk9URTogcHJvdmlkZSBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIGFib3V0IGRyYWdnaW5nXG4gICAgICAvLyB3aGVuIGRyYWdnaW5nIGlzIHN0YXJ0ZWRcbiAgICAgIC8vIGFjdGl2YXRlOiAoZXZlbnQ6IGFueSwgdWk6IGFueSkgPT4ge1xuICAgICAgLy8gICB0aGlzLmRyYWdnZWRDb2x1bW5JZCA9IHVpLml0ZW0uYXR0cignZGF0YS1jb2wtcmVmJyk7XG4gICAgICAvLyB9LFxuICAgICAgLy8gc3RvcDogKCkgPT4ge1xuICAgICAgLy8gICB0aGlzLmRyYWdnZWRDb2x1bW5JZCA9ICcnO1xuICAgICAgLy8gICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIC8vIH1cbiAgICB9KTtcbiAgICBqUXVlcnkodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmRpc2FibGVTZWxlY3Rpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgZGVsZWdhdGVJbnB1dDxUPihwcm9wZXJ0eU5hbWU6IHN0cmluZywgZGVmYXVsdFZhbHVlOiBUKTogVCB7XG4gICAgaWYgKCF0aGlzLnRhYmxlQ29tcG9uZW50KSB7XG4gICAgICAvLyBjb25zb2xlLndhcm4oJ1RoZWFkQ29tcG9uZW50OiBObyBwYXJlbnQgXCJ0YWJsZUNvbXBvbmVudFwiIHdhcyBmb3VuZC4nICtcbiAgICAgIC8vICAgJ0lucHV0IFwiJyArIHByb3BlcnR5TmFtZSArICdcIiB3YXMgYWxzbyBub3QgcHJvdmlkZWQuJyk7XG4gICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiAoPGFueT50aGlzLnRhYmxlQ29tcG9uZW50KVtwcm9wZXJ0eU5hbWVdIGFzIFQ7XG4gIH1cbn1cbiJdfQ==