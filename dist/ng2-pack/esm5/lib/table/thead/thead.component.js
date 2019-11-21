/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/thead/thead.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { TableComponent } from './../table.component';
import { TableInitService } from '../table-init.service';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Optional, } from '@angular/core';
var TheadComponent = /** @class */ (function () {
    function TheadComponent(elementRef, changeDetectorRef, // needed to trigger change detection on jquery ui's callbacks
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
    Object.defineProperty(TheadComponent.prototype, "columnsConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this._columnsConfig || this.delegateInput('columnsConfig', []);
        },
        set: /**
         * @param {?} columnsConfig
         * @return {?}
         */
        function (columnsConfig) {
            if (this.tableComponent) {
                this.tableComponent.columnsConfig = columnsConfig;
            }
            else {
                this._columnsConfig = columnsConfig;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TheadComponent.prototype, "visibleColumns", {
        get: /**
         * @return {?}
         */
        function () {
            return this._visibleColumns || this.delegateInput('visibleColumns', []);
        },
        set: /**
         * @param {?} visibleColumns
         * @return {?}
         */
        function (visibleColumns) {
            if (this.tableComponent) {
                this.tableComponent.visibleColumns = visibleColumns;
            }
            else {
                this._visibleColumns = visibleColumns;
                // NOTE: what about output events?
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TheadComponent.prototype, "changeColumnVisibility", {
        get: /**
         * @return {?}
         */
        function () {
            if (!this.tableComponent) {
                return false;
            }
            return this.tableComponent.changeColumnVisibility;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TheadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.reorderingEnabled) {
            this.initializeSortable();
        }
    };
    /**
     * @return {?}
     */
    TheadComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.customTemplate = _this.elementRef.nativeElement.children.length !== 1;
        }));
    };
    Object.defineProperty(TheadComponent.prototype, "columnsLookup", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var columnsLookup = this._columnsLookup ||
                (this.tableComponent && this.tableComponent.columnsLookup);
            if (typeof columnsLookup === 'undefined') {
                columnsLookup = this.tableInitService.columnsConfig2Lookup(this.columnsConfig);
                this._columnsLookup = columnsLookup;
            }
            return columnsLookup;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TheadComponent.prototype, "reorderingEnabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._reorderingEnabled || this.delegateInput('reorderingEnabled', false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TheadComponent.prototype, "isLastAddingColumnVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this.lastColumnComboboxActive || this.addingColumnIndex === this.visibleColumns.length;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} column
     * @param {?} direction
     * @return {?}
     */
    TheadComponent.prototype.isSorted = /**
     * @param {?} column
     * @param {?} direction
     * @return {?}
     */
    function (column, direction) {
        if (!this.tableComponent) {
            return false;
        }
        return this.tableComponent.isSorted(column, direction);
    };
    /**
     * @param {?} columnName
     * @return {?}
     */
    TheadComponent.prototype.column = /**
     * @param {?} columnName
     * @return {?}
     */
    function (columnName) {
        return this.columnsLookup[columnName];
    };
    /**
     * @param {?} item
     * @param {?} atPosition
     * @return {?}
     */
    TheadComponent.prototype.selectNewColumn = /**
     * @param {?} item
     * @param {?} atPosition
     * @return {?}
     */
    function (item, atPosition) {
        this.addingColumnIndex = null;
        this.lastColumnComboboxActive = false;
        if (typeof atPosition !== 'undefined') {
            // the order changed
            this.visibleColumns = tslib_1.__spread(this.visibleColumns.slice(0, atPosition), [
                item.value
            ], this.visibleColumns.slice(atPosition));
        }
        else {
            this.visibleColumns = tslib_1.__spread(this.visibleColumns, [item.value]);
        }
        this.addColumn.emit(item.value);
        // this.visibleColumnsOutput.emit(this.visibleColumns);
    };
    /**
     * @return {?}
     */
    TheadComponent.prototype.toggleCombobox = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.lastColumnComboboxActive = !this.lastColumnComboboxActive;
        if (!this.lastColumnComboboxActive) {
            return;
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
            jQuery(_this.elementRef.nativeElement).scrollLeft(99999);
        }), 0);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    TheadComponent.prototype.onAddCombobox = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.lastColumnComboboxActive = false;
        this.addingColumnIndex = index;
        this.addingColumn.emit(index);
    };
    /**
     * @param {?} sortEvent
     * @return {?}
     */
    TheadComponent.prototype.onSortColumn = /**
     * @param {?} sortEvent
     * @return {?}
     */
    function (sortEvent) {
        if (this.tableComponent) {
            this.tableComponent.sortedColumnName = sortEvent.column;
        }
        this.sortColumn.emit(sortEvent);
    };
    /**
     * @param {?} toggleSubfieldEvent
     * @return {?}
     */
    TheadComponent.prototype.onToggleSubfield = /**
     * @param {?} toggleSubfieldEvent
     * @return {?}
     */
    function (toggleSubfieldEvent) {
        this.toggleSubfield.emit(toggleSubfieldEvent);
    };
    /**
     * @private
     * @return {?}
     */
    TheadComponent.prototype.initializeSortable = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        jQuery(this.elementRef.nativeElement).sortable({
            cursor: 'move',
            axis: 'x',
            tolerance: 'pointer',
            items: '.drag-column',
            handle: '.col-label',
            update: (/**
             * @return {?}
             */
            function () {
                _this.draggedColumnId = '';
                /** @type {?} */
                var sortedIDs = jQuery(_this.elementRef.nativeElement)
                    .sortable('toArray', {
                    attribute: 'data-col-ref'
                });
                _this.visibleColumns = sortedIDs;
                _this.reorderColumns.emit(sortedIDs);
                _this.changeDetectorRef.detectChanges();
            }),
        });
        jQuery(this.elementRef.nativeElement).disableSelection();
    };
    /**
     * @private
     * @template T
     * @param {?} propertyName
     * @param {?} defaultValue
     * @return {?}
     */
    TheadComponent.prototype.delegateInput = /**
     * @private
     * @template T
     * @param {?} propertyName
     * @param {?} defaultValue
     * @return {?}
     */
    function (propertyName, defaultValue) {
        if (!this.tableComponent) {
            // console.warn('TheadComponent: No parent "tableComponent" was found.' +
            //   'Input "' + propertyName + '" was also not provided.');
            return defaultValue;
        }
        return (/** @type {?} */ (((/** @type {?} */ (this.tableComponent)))[propertyName]));
    };
    TheadComponent.decorators = [
        { type: Component, args: [{
                    selector: '[iw-thead]',
                    template: "<ng-content></ng-content>\n\n<tr *ngIf=\"!customTemplate\">\n  <ng-template  ngFor let-columnName [ngForOf]=\"visibleColumns\" let-columnIndex=\"index\">\n    <th *ngIf=\"addingColumnIndex == columnIndex\" class=\"combo-th\">\n      <div class=\"add-column combobox is-active\">\n        <iw-add-column\n          [visibleColumns]=\"visibleColumns\"\n          (close)=\"onAddCombobox(undefined)\"\n          (selected)=\"selectNewColumn($event, columnIndex)\"\n          attr.id=\"combobox-{{columnIndex}}\">\n        </iw-add-column>\n      </div>\n    </th>\n    <th\n      iw-th\n      [column]=\"column(columnName)\"\n      [changeVisibility]=\"changeColumnVisibility\"\n      (removeColumn)=\"removeColumn.emit($event)\"\n      (sortColumn)=\"onSortColumn($event)\"\n      (addCombobox)=\"onAddCombobox($event + columnIndex)\"\n      (toggleSubfield)=\"onToggleSubfield($event)\"\n      class=\"drag-column\"\n      attr.data-col-ref=\"{{ column(columnName)?.config.id }}\"\n      attr.id=\"col-id-{{ column(columnName)?.config.id }}\"\n      [class.is-sorted]=\"isSorted(column(columnName), undefined)\"\n      [class.is-sorted--asc]=\"isSorted(column(columnName), 'asc')\"\n      [class.is-sorted--desc]=\"isSorted(column(columnName), 'desc')\">\n    </th>\n  </ng-template>\n  <th *ngIf=\"changeColumnVisibility\" class=\"combo-th\">\n    <div class=\"add-column combobox\" [ngClass]=\"lastColumnComboboxActive ? 'is-active' : 'is-inactive'\">\n      <iw-add-column\n        *ngIf=\"lastColumnComboboxActive\"\n        [visibleColumns]=\"visibleColumns\"\n        (close)=\"toggleCombobox()\"\n        (selected)=\"selectNewColumn($event, undefined)\"\n      ></iw-add-column>\n      <span\n        *ngIf=\"!lastColumnComboboxActive\"\n        (click)=\"toggleCombobox()\"\n        class=\"add-column-button combo-toggle btn btn-sm btn-success\"\n      >+</span>\n    </div>\n  </th>\n</tr>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    TheadComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: TableInitService },
        { type: TableComponent, decorators: [{ type: Optional }] }
    ]; };
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
    return TheadComponent;
}());
export { TheadComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXBhY2svIiwic291cmNlcyI6WyJsaWIvdGFibGUvdGhlYWQvdGhlYWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUdBLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUV2RCxPQUFPLEVBRUwsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBSXZCO0lBd0NFLHdCQUNVLFVBQXNCLEVBQ3RCLGlCQUFvQyxFQUFFLDhEQUE4RDtJQUNwRyxnQkFBa0MsRUFDOUIsY0FBOEI7UUFIbEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFyQmxDLGNBQVMsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUM3RCxpQkFBWSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ2hFLGVBQVUsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDaEYsaUJBQVksR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUNoRSxtQkFBYyxHQUEyQixJQUFJLFlBQVksRUFBWSxDQUFDO1FBQ3RFLG1CQUFjLEdBQXNDLElBQUksWUFBWSxFQUF1QixDQUFDO1FBRXRHLDZCQUF3QixHQUFZLEtBQUssQ0FBQztRQUcxQyxtQkFBYyxHQUFZLEtBQUssQ0FBQztRQWM5QixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztJQUN2QyxDQUFDO0lBekNELHNCQUFhLHlDQUFhOzs7O1FBNEQxQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENB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QkFBZ0IsRUFBRSxDQUFDO0lBQzNELENBQUM7Ozs7Ozs7O0lBRU8sc0NBQWE7Ozs7Ozs7SUFBckIsVUFBeUIsWUFBb0IsRUFBRSxZQUFlO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3hCLHlFQUF5RTtZQUN6RSw0REFBNEQ7WUFDNUQsT0FBTyxZQUFZLENBQUM7U0FDckI7UUFFRCxPQUFPLG1CQUFBLENBQUMsbUJBQUssSUFBSSxDQUFDLGNBQWMsRUFBQSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUssQ0FBQztJQUN2RCxDQUFDOztnQkFwTEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0Qix5M0RBQW1DOztpQkFFcEM7Ozs7Z0JBZEMsVUFBVTtnQkFGVixpQkFBaUI7Z0JBSlgsZ0JBQWdCO2dCQURoQixjQUFjLHVCQTZEakIsUUFBUTs7O2dDQXRDVixLQUFLO2lDQU9MLEtBQUs7NEJBU0wsTUFBTTsrQkFDTixNQUFNOzZCQUNOLE1BQU07K0JBQ04sTUFBTTtpQ0FDTixNQUFNO2lDQUNOLE1BQU07O0lBMEpULHFCQUFDO0NBQUEsQUFyTEQsSUFxTEM7U0FoTFksY0FBYzs7O0lBaUJ6QixtQ0FBdUU7O0lBQ3ZFLHNDQUEwRTs7SUFDMUUsb0NBQTBGOztJQUMxRixzQ0FBMEU7O0lBQzFFLHdDQUFnRjs7SUFDaEYsd0NBQXNHOztJQUV0RyxrREFBMEM7O0lBQzFDLDJDQUFpQzs7SUFDakMseUNBQStCOztJQUMvQix3Q0FBZ0M7Ozs7O0lBRWhDLHdDQUF1Qzs7Ozs7SUFDdkMseUNBQWtDOzs7OztJQUNsQyw0Q0FBb0M7Ozs7O0lBQ3BDLHdDQUFxQzs7Ozs7SUFDckMsd0NBQW1EOzs7OztJQUdqRCxvQ0FBOEI7Ozs7O0lBQzlCLDJDQUE0Qzs7Ozs7SUFDNUMsMENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb2x1bW5Db25maWcsIENvbHVtbkxvb2t1cH0gZnJvbSAnLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBTb3J0Q29sdW1uRXZlbnQsIFRvZ2dsZVN1YmZpZWxkRXZlbnR9IGZyb20gJy4uL2V2ZW50cyc7XG5pbXBvcnQge0NvbHVtblN0YXRlfSBmcm9tICcuLy4uL2NvbHVtbi1zdGF0ZS5jbGFzcyc7XG5pbXBvcnQge1RhYmxlQ29tcG9uZW50fSBmcm9tICcuLy4uL3RhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQge1RhYmxlSW5pdFNlcnZpY2V9IGZyb20gJy4uL3RhYmxlLWluaXQuc2VydmljZSc7XG5cbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBPcHRpb25hbCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbaXctdGhlYWRdJyxcbiAgdGVtcGxhdGVVcmw6ICd0aGVhZC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RoZWFkLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUaGVhZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIHNldCBjb2x1bW5zQ29uZmlnKGNvbHVtbnNDb25maWcpIHtcbiAgICBpZiAodGhpcy50YWJsZUNvbXBvbmVudCkge1xuICAgICAgdGhpcy50YWJsZUNvbXBvbmVudC5jb2x1bW5zQ29uZmlnID0gY29sdW1uc0NvbmZpZztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY29sdW1uc0NvbmZpZyA9IGNvbHVtbnNDb25maWc7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpIHNldCB2aXNpYmxlQ29sdW1ucyh2aXNpYmxlQ29sdW1uczogc3RyaW5nW10pIHtcbiAgICBpZiAodGhpcy50YWJsZUNvbXBvbmVudCkge1xuICAgICAgdGhpcy50YWJsZUNvbXBvbmVudC52aXNpYmxlQ29sdW1ucyA9IHZpc2libGVDb2x1bW5zO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl92aXNpYmxlQ29sdW1ucyA9IHZpc2libGVDb2x1bW5zO1xuICAgICAgLy8gTk9URTogd2hhdCBhYm91dCBvdXRwdXQgZXZlbnRzP1xuICAgIH1cbiAgfVxuXG4gIEBPdXRwdXQoKSBhZGRDb2x1bW46IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSByZW1vdmVDb2x1bW46IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBzb3J0Q29sdW1uOiBFdmVudEVtaXR0ZXI8U29ydENvbHVtbkV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8U29ydENvbHVtbkV2ZW50PigpO1xuICBAT3V0cHV0KCkgYWRkaW5nQ29sdW1uOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAT3V0cHV0KCkgcmVvcmRlckNvbHVtbnM6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xuICBAT3V0cHV0KCkgdG9nZ2xlU3ViZmllbGQ6IEV2ZW50RW1pdHRlcjxUb2dnbGVTdWJmaWVsZEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VG9nZ2xlU3ViZmllbGRFdmVudD4oKTtcblxuICBsYXN0Q29sdW1uQ29tYm9ib3hBY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgYWRkaW5nQ29sdW1uSW5kZXg6IG51bWJlciB8IG51bGw7XG4gIGRyYWdnZWRDb2x1bW5JZDogc3RyaW5nIHwgbnVsbDtcbiAgY3VzdG9tVGVtcGxhdGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIF9jb2x1bW5zQ29uZmlnOiBDb2x1bW5Db25maWdbXTtcbiAgcHJpdmF0ZSBfdmlzaWJsZUNvbHVtbnM6IHN0cmluZ1tdO1xuICBwcml2YXRlIF9yZW9yZGVyaW5nRW5hYmxlZDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfY29sdW1uc0xvb2t1cDogQ29sdW1uTG9va3VwO1xuICBwcml2YXRlIHRhYmxlQ29tcG9uZW50OiBUYWJsZUNvbXBvbmVudCB8IHVuZGVmaW5lZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsIC8vIG5lZWRlZCB0byB0cmlnZ2VyIGNoYW5nZSBkZXRlY3Rpb24gb24ganF1ZXJ5IHVpJ3MgY2FsbGJhY2tzXG4gICAgcHJpdmF0ZSB0YWJsZUluaXRTZXJ2aWNlOiBUYWJsZUluaXRTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHRhYmxlQ29tcG9uZW50OiBUYWJsZUNvbXBvbmVudFxuICApIHtcbiAgICB0aGlzLnRhYmxlQ29tcG9uZW50ID0gdGFibGVDb21wb25lbnQ7XG4gIH1cblxuICBnZXQgY2hhbmdlQ29sdW1uVmlzaWJpbGl0eSgpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMudGFibGVDb21wb25lbnQpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgcmV0dXJuIHRoaXMudGFibGVDb21wb25lbnQuY2hhbmdlQ29sdW1uVmlzaWJpbGl0eTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnJlb3JkZXJpbmdFbmFibGVkKSB7XG4gICAgICB0aGlzLmluaXRpYWxpemVTb3J0YWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY3VzdG9tVGVtcGxhdGUgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGggIT09IDE7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgY29sdW1uc0NvbmZpZygpOiBDb2x1bW5Db25maWdbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2NvbHVtbnNDb25maWcgfHwgdGhpcy5kZWxlZ2F0ZUlucHV0KCdjb2x1bW5zQ29uZmlnJywgW10pO1xuICB9XG5cbiAgZ2V0IGNvbHVtbnNMb29rdXAoKTogQ29sdW1uTG9va3VwIHtcbiAgICBsZXQgY29sdW1uc0xvb2t1cCA9IHRoaXMuX2NvbHVtbnNMb29rdXAgfHxcbiAgICAgICh0aGlzLnRhYmxlQ29tcG9uZW50ICYmIHRoaXMudGFibGVDb21wb25lbnQuY29sdW1uc0xvb2t1cCk7XG4gICAgaWYgKHR5cGVvZiBjb2x1bW5zTG9va3VwID09PSAndW5kZWZpbmVkJykge1xuICAgICAgY29sdW1uc0xvb2t1cCA9IHRoaXMudGFibGVJbml0U2VydmljZS5jb2x1bW5zQ29uZmlnMkxvb2t1cCh0aGlzLmNvbHVtbnNDb25maWcpO1xuICAgICAgdGhpcy5fY29sdW1uc0xvb2t1cCA9IGNvbHVtbnNMb29rdXA7XG4gICAgfVxuICAgIHJldHVybiBjb2x1bW5zTG9va3VwO1xuICB9XG5cbiAgZ2V0IHZpc2libGVDb2x1bW5zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fdmlzaWJsZUNvbHVtbnMgfHwgdGhpcy5kZWxlZ2F0ZUlucHV0KCd2aXNpYmxlQ29sdW1ucycsIFtdKTtcbiAgfVxuXG4gIGdldCByZW9yZGVyaW5nRW5hYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fcmVvcmRlcmluZ0VuYWJsZWQgfHwgdGhpcy5kZWxlZ2F0ZUlucHV0KCdyZW9yZGVyaW5nRW5hYmxlZCcsIGZhbHNlKTtcbiAgfVxuXG4gIGdldCBpc0xhc3RBZGRpbmdDb2x1bW5WaXNpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLmxhc3RDb2x1bW5Db21ib2JveEFjdGl2ZSB8fCB0aGlzLmFkZGluZ0NvbHVtbkluZGV4ID09PSB0aGlzLnZpc2libGVDb2x1bW5zLmxlbmd0aDtcbiAgfVxuXG4gIGlzU29ydGVkKGNvbHVtbjogQ29sdW1uU3RhdGUsIGRpcmVjdGlvbjogc3RyaW5nKSB7XG4gICAgaWYgKCF0aGlzLnRhYmxlQ29tcG9uZW50KSB7IHJldHVybiBmYWxzZTsgfVxuICAgIHJldHVybiB0aGlzLnRhYmxlQ29tcG9uZW50LmlzU29ydGVkKGNvbHVtbiwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIGNvbHVtbihjb2x1bW5OYW1lOiBzdHJpbmcpOiBDb2x1bW5TdGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1uc0xvb2t1cFtjb2x1bW5OYW1lXTtcbiAgfVxuXG4gIHNlbGVjdE5ld0NvbHVtbihpdGVtOiB7dmFsdWU6IHN0cmluZ30sIGF0UG9zaXRpb246IG51bWJlcikge1xuICAgIHRoaXMuYWRkaW5nQ29sdW1uSW5kZXggPSBudWxsO1xuICAgIHRoaXMubGFzdENvbHVtbkNvbWJvYm94QWN0aXZlID0gZmFsc2U7XG5cbiAgICBpZiAodHlwZW9mIGF0UG9zaXRpb24gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyB0aGUgb3JkZXIgY2hhbmdlZFxuICAgICAgdGhpcy52aXNpYmxlQ29sdW1ucyA9IFtcbiAgICAgICAgLi4udGhpcy52aXNpYmxlQ29sdW1ucy5zbGljZSgwLCBhdFBvc2l0aW9uKSxcbiAgICAgICAgaXRlbS52YWx1ZSxcbiAgICAgICAgLi4udGhpcy52aXNpYmxlQ29sdW1ucy5zbGljZShhdFBvc2l0aW9uKSxcbiAgICAgIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlzaWJsZUNvbHVtbnMgPSBbLi4udGhpcy52aXNpYmxlQ29sdW1ucywgaXRlbS52YWx1ZV07XG4gICAgfVxuICAgIHRoaXMuYWRkQ29sdW1uLmVtaXQoaXRlbS52YWx1ZSk7XG4gICAgLy8gdGhpcy52aXNpYmxlQ29sdW1uc091dHB1dC5lbWl0KHRoaXMudmlzaWJsZUNvbHVtbnMpO1xuICB9XG5cbiAgdG9nZ2xlQ29tYm9ib3goKSB7XG4gICAgdGhpcy5sYXN0Q29sdW1uQ29tYm9ib3hBY3RpdmUgPSAhdGhpcy5sYXN0Q29sdW1uQ29tYm9ib3hBY3RpdmU7XG4gICAgaWYgKCF0aGlzLmxhc3RDb2x1bW5Db21ib2JveEFjdGl2ZSkgeyByZXR1cm47IH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGpRdWVyeSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuc2Nyb2xsTGVmdCg5OTk5OSk7XG4gICAgfSwgMCk7XG4gIH1cblxuICBvbkFkZENvbWJvYm94KGluZGV4OiBudW1iZXIpIHtcbiAgICB0aGlzLmxhc3RDb2x1bW5Db21ib2JveEFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuYWRkaW5nQ29sdW1uSW5kZXggPSBpbmRleDtcbiAgICB0aGlzLmFkZGluZ0NvbHVtbi5lbWl0KGluZGV4KTtcbiAgfVxuXG4gIG9uU29ydENvbHVtbihzb3J0RXZlbnQ6IFNvcnRDb2x1bW5FdmVudCkge1xuICAgIGlmICh0aGlzLnRhYmxlQ29tcG9uZW50KSB7IHRoaXMudGFibGVDb21wb25lbnQuc29ydGVkQ29sdW1uTmFtZSA9IHNvcnRFdmVudC5jb2x1bW47IH1cbiAgICB0aGlzLnNvcnRDb2x1bW4uZW1pdChzb3J0RXZlbnQpO1xuICB9XG5cbiAgb25Ub2dnbGVTdWJmaWVsZCh0b2dnbGVTdWJmaWVsZEV2ZW50OiBUb2dnbGVTdWJmaWVsZEV2ZW50KSB7XG4gICAgdGhpcy50b2dnbGVTdWJmaWVsZC5lbWl0KHRvZ2dsZVN1YmZpZWxkRXZlbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0aWFsaXplU29ydGFibGUoKSB7XG4gICAgalF1ZXJ5KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5zb3J0YWJsZSh7XG4gICAgICBjdXJzb3I6ICdtb3ZlJyxcbiAgICAgIGF4aXM6ICd4JyxcbiAgICAgIHRvbGVyYW5jZTogJ3BvaW50ZXInLFxuICAgICAgaXRlbXM6ICcuZHJhZy1jb2x1bW4nLFxuICAgICAgaGFuZGxlOiAnLmNvbC1sYWJlbCcsXG4gICAgICB1cGRhdGU6ICgpID0+IHtcbiAgICAgICAgdGhpcy5kcmFnZ2VkQ29sdW1uSWQgPSAnJztcbiAgICAgICAgbGV0IHNvcnRlZElEcyA9IGpRdWVyeSggdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgKVxuICAgICAgICAgIC5zb3J0YWJsZSggJ3RvQXJyYXknLCB7XG4gICAgICAgICAgICBhdHRyaWJ1dGU6ICdkYXRhLWNvbC1yZWYnXG4gICAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudmlzaWJsZUNvbHVtbnMgPSBzb3J0ZWRJRHM7XG4gICAgICAgIHRoaXMucmVvcmRlckNvbHVtbnMuZW1pdChzb3J0ZWRJRHMpO1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH0sXG4gICAgICAvLyBOT1RFOiBwcm92aWRlIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gYWJvdXQgZHJhZ2dpbmdcbiAgICAgIC8vIHdoZW4gZHJhZ2dpbmcgaXMgc3RhcnRlZFxuICAgICAgLy8gYWN0aXZhdGU6IChldmVudDogYW55LCB1aTogYW55KSA9PiB7XG4gICAgICAvLyAgIHRoaXMuZHJhZ2dlZENvbHVtbklkID0gdWkuaXRlbS5hdHRyKCdkYXRhLWNvbC1yZWYnKTtcbiAgICAgIC8vIH0sXG4gICAgICAvLyBzdG9wOiAoKSA9PiB7XG4gICAgICAvLyAgIHRoaXMuZHJhZ2dlZENvbHVtbklkID0gJyc7XG4gICAgICAvLyAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgLy8gfVxuICAgIH0pO1xuICAgIGpRdWVyeSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZGlzYWJsZVNlbGVjdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWxlZ2F0ZUlucHV0PFQ+KHByb3BlcnR5TmFtZTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IFQpOiBUIHtcbiAgICBpZiAoIXRoaXMudGFibGVDb21wb25lbnQpIHtcbiAgICAgIC8vIGNvbnNvbGUud2FybignVGhlYWRDb21wb25lbnQ6IE5vIHBhcmVudCBcInRhYmxlQ29tcG9uZW50XCIgd2FzIGZvdW5kLicgK1xuICAgICAgLy8gICAnSW5wdXQgXCInICsgcHJvcGVydHlOYW1lICsgJ1wiIHdhcyBhbHNvIG5vdCBwcm92aWRlZC4nKTtcbiAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuICg8YW55PnRoaXMudGFibGVDb21wb25lbnQpW3Byb3BlcnR5TmFtZV0gYXMgVDtcbiAgfVxufVxuIl19