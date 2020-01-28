/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { I18nService } from './../services/i18n.service';
import { TableInitService } from './table-init.service';
import { TableSortingService } from './table-sorting.service';
import { Component, ElementRef, EventEmitter, Input, Inject, Output, ViewEncapsulation, InjectionToken, } from '@angular/core';
/**
 * @record
 */
export function TableDefaultValues() { }
if (false) {
    /** @type {?} */
    TableDefaultValues.prototype.reorderingEnabled;
    /** @type {?} */
    TableDefaultValues.prototype.rowsSortingMode;
    /** @type {?} */
    TableDefaultValues.prototype.inlineEditingEnabled;
    /** @type {?} */
    TableDefaultValues.prototype.changeColumnVisibility;
    /** @type {?} */
    TableDefaultValues.prototype.language;
}
/** @type {?} */
export var TableDefaults = new InjectionToken('TableDefaults');
/** @type {?} */
export var tableDefaultValues = {
    reorderingEnabled: true,
    rowsSortingMode: 'default',
    inlineEditingEnabled: false,
    changeColumnVisibility: true,
    language: 'en',
};
var TableComponent = /** @class */ (function () {
    function TableComponent(elementRef, tableSortingService, tableInitService, i18nService, defaults) {
        this.elementRef = elementRef;
        this.tableSortingService = tableSortingService;
        this.tableInitService = tableInitService;
        this.i18nService = i18nService;
        this.addColumn = new EventEmitter();
        this.removeColumn = new EventEmitter();
        this.sortColumn = new EventEmitter();
        // @Output() addingColumn: EventEmitter<number> = new EventEmitter<number>();
        this.reorderColumns = new EventEmitter();
        this.rowClick = new EventEmitter();
        this.visibleColumnsChange = new EventEmitter();
        this.editCell = new EventEmitter();
        this.toggleSubfield = new EventEmitter();
        this.customTemplate = false;
        this.reorderingEnabled = defaults.reorderingEnabled;
        this.rowsSortingMode = defaults.rowsSortingMode;
        this.inlineEditingEnabled = defaults.inlineEditingEnabled;
        this.changeColumnVisibility = defaults.changeColumnVisibility;
        this.language = defaults.language;
    }
    Object.defineProperty(TableComponent.prototype, "columnsConfig", {
        get: /**
         * @return {?}
         */
        function () {
            return this._columnsConfig;
        },
        set: /**
         * @param {?} columnsConfig
         * @return {?}
         */
        function (columnsConfig) {
            this._columnsConfig = columnsConfig;
            this.columnsLookup = this.tableInitService.columnsConfig2Lookup(this.columnsConfig);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "visibleColumns", {
        get: /**
         * @return {?}
         */
        function () {
            return this._visibleColumns;
        },
        set: /**
         * @param {?} visibleColumns
         * @return {?}
         */
        function (visibleColumns) {
            this._visibleColumns = visibleColumns;
            this.visibleColumnsChange.emit(this._visibleColumns);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TableComponent.prototype, "language", {
        // @Input() columnsForAddingFn: (availableColumns: ColumnConfig[]) => any[] = (id) => id
        set: 
        // @Input() columnsForAddingFn: (availableColumns: ColumnConfig[]) => any[] = (id) => id
        /**
         * @param {?} language
         * @return {?}
         */
        function (language) {
            this.i18nService.language = language;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} arg
     * @return {?}
     */
    TableComponent.prototype.ngOnChanges = /**
     * @param {?} arg
     * @return {?}
     */
    function (arg) {
        this.initializeDefaults();
        this.initialSort();
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.ngAfterViewInit = /**
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
    /**
     * @param {?} column
     * @param {?} direction
     * @return {?}
     */
    TableComponent.prototype.isSorted = /**
     * @param {?} column
     * @param {?} direction
     * @return {?}
     */
    function (column, direction) {
        if (!column) {
            return;
        }
        /** @type {?} */
        var isSorted = column.config.id === this.sortedColumnName;
        if (!direction) {
            return isSorted;
        }
        else {
            /** @type {?} */
            var directionMatch = column.currentSortDirection === direction;
            return isSorted && directionMatch;
        }
    };
    /**
     * @param {?} rowClickEvent
     * @return {?}
     */
    TableComponent.prototype.onRowClicked = /**
     * @param {?} rowClickEvent
     * @return {?}
     */
    function (rowClickEvent) {
        this.rowClick.emit(rowClickEvent);
    };
    /**
     * @param {?} sortEvent
     * @return {?}
     */
    TableComponent.prototype.onSortColumn = /**
     * @param {?} sortEvent
     * @return {?}
     */
    function (sortEvent) {
        this.sortColumn.emit(sortEvent);
        if (this.rowsSortingMode === 'default') {
            this.sortRows(this.rows, sortEvent);
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    TableComponent.prototype.onAddingColumn = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.addingColumnIndex = index;
        // TODO: this should emit also when adding to the last column!
        // this.addingColumn.emit(index);
    };
    /**
     * @param {?} reorderColumnsEvent
     * @return {?}
     */
    TableComponent.prototype.onReorderColumns = /**
     * @param {?} reorderColumnsEvent
     * @return {?}
     */
    function (reorderColumnsEvent) {
        this.reorderColumns.emit(reorderColumnsEvent);
    };
    /**
     * @param {?} toggleSubfieldEvent
     * @return {?}
     */
    TableComponent.prototype.onToggleSubfield = /**
     * @param {?} toggleSubfieldEvent
     * @return {?}
     */
    function (toggleSubfieldEvent) {
        this.toggleSubfield.emit(toggleSubfieldEvent);
    };
    /**
     * @param {?} rows
     * @param {?} sortEvent
     * @return {?}
     */
    TableComponent.prototype.sortRows = /**
     * @param {?} rows
     * @param {?} sortEvent
     * @return {?}
     */
    function (rows, sortEvent) {
        var column = sortEvent.column, direction = sortEvent.direction;
        this.rows = this.tableSortingService.sort(rows, this.columnsLookup[column]);
        this.sortedColumnName = column;
        return this.rows;
    };
    /**
     * @return {?}
     */
    TableComponent.prototype.initialSort = /**
     * @return {?}
     */
    function () {
        if (!this.initialSortColumn || !this.rows) {
            return;
        }
        /** @type {?} */
        var columnName = this.initialSortColumn.slice(1);
        /** @type {?} */
        var sortDirection = 'asc';
        if (this.initialSortColumn[0] === '+') {
            // pluas at the beginning means 'asc'
            sortDirection = 'asc';
        }
        else if (this.initialSortColumn[0] === '-') {
            // minus at the beginning means 'desc'
            sortDirection = 'desc';
        }
        else {
            // direction sign is optional
            columnName = this.initialSortColumn;
        }
        /** @type {?} */
        var columnState = this.columnsLookup[columnName];
        if (columnState) {
            sortDirection = sortDirection || columnState.initialSortDirection;
            columnState.currentSortDirection = (/** @type {?} */ (sortDirection));
            // initial sort
            if (this.rowsSortingMode === 'default') {
                this.sortRows(this.rows, { column: columnName, direction: sortDirection });
            }
            else {
                this.onSortColumn({ column: columnName, direction: sortDirection });
            }
        }
        else {
            console.warn('Missing configuration for column: ' + columnName);
        }
        this.sortedColumnName = columnName;
        this.initialSortColumn = undefined;
    };
    /**
     * @private
     * @return {?}
     */
    TableComponent.prototype.initializeDefaults = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var isWithoutData = (typeof this.rows === 'undefined' || this.rows.length === 0);
        if (typeof this.columnsConfig === 'undefined' && !isWithoutData) {
            _a = tslib_1.__read(this.tableInitService.detectColumnConfiguration(this.rows), 2), this.columnsLookup = _a[0], this._columnsConfig = _a[1];
        }
        if (typeof this.visibleColumns === 'undefined' && typeof this.columnsLookup !== 'undefined') {
            this.visibleColumns = Object.keys(this.columnsLookup);
        }
    };
    TableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'iw-table',
                    template: "<ng-content></ng-content>\n<table *ngIf=\"!customTemplate\" class=\"results-table table table-bordered table-striped\">\n  <thead\n    iw-thead\n    (addColumn)=\"addColumn.emit($event)\"\n    (removeColumn)=\"removeColumn.emit($event)\"\n    (sortColumn)=\"onSortColumn($event)\"\n    (addingColumn)=\"onAddingColumn($event)\"\n    (reorderColumns)=\"onReorderColumns($event)\"\n    (toggleSubfield)=\"onToggleSubfield($event)\"\n  ></thead>\n  <tbody\n    iw-tbody\n    [addingColumnIndex]=\"addingColumnIndex\"\n    (rowClick)=\"onRowClicked($event)\"\n    (editCell)=\"editCell.emit($event)\"\n  ></tbody>\n</table>\n",
                    // TODO: enable encapsulation again
                    encapsulation: ViewEncapsulation.None,
                    providers: [
                        { provide: TableDefaults, useValue: tableDefaultValues }
                    ],
                    styles: [".results{color:#4d4d4d}.results .panel-header{border-bottom:0}.results .panel-body{padding:0;margin:0 -1px;position:relative}.results .panel-footer{margin-top:-1px}.results .results-table--new-group-layer{position:absolute;top:0;left:0;z-index:2;width:100%;height:100%;background:rgba(255,255,255,.75)}.results-table-wrap{position:relative;overflow-x:visible;min-height:400px}.results-table{margin:0;border-collapse:separate;border-width:1px 0 0 1px;background:#fff;border-top-color:#d3d3d3;border-left-color:app-color(bluegray);box-shadow:none}.results-table thead{background:rgba(252,89,31,.55)}.results-table thead th{padding:.5rem;border-bottom-width:1px;border-color:#d3d3d3;vertical-align:top;background:#f4f4f4;box-shadow:inset 0 1px 0 rgba(255,255,255,.75),inset 1px 0 0 rgba(255,255,255,.5)}.results-table thead th:last-child{border-right-color:app-color(bluegray)}.results-table thead th:hover .col-menu{opacity:1}.results-table .person-link-th{width:20px}.results-table .combo-th{width:1%;padding-right:8px;padding-left:8px}.results-table .drag-column.ui-sortable-helper{opacity:.9;border-color:transparent;transform:translateY(-15px) rotate(1deg);box-shadow:inset 0 0 0 1px #9ab1ab,0 2px 3px rgba(0,0,0,.75);background:#e5e8e7}.results-table .drag-column.ui-sortable-helper .col-label{color:rgba(0,0,0,.95);text-shadow:none}.results-table .drag-column.ui-sortable-helper .btn-group{display:none}.results-table .ui-sortable-placeholder{visibility:visible!important;background:rgba(252,89,31,.85)!important;box-shadow:inset 0 3px 10px rgba(0,0,0,.5)}.results-table tfoot td{border-color:app-color(bluegray);border-width:0 1px 0 0}.results-table td,.results-table th{position:relative;padding-left:.5rem;padding-right:.5rem;border-color:#f0f0f0;border-width:0 1px 1px 0;font-weight:400}.results-table tbody tr{cursor:pointer}.results-table tbody tr:hover{background:#eee}.results-table tbody td{padding-top:.5rem;padding-bottom:.5rem;border-width:0 0 1px;font-size:12px;line-height:1.25}.results-table tbody .combo-td{border-left-width:1px;background-color:rgba(0,116,56,.05)}.results-table tbody td:last-child{border-right:1px solid}.results-table tbody tr:last-child td{border-bottom-color:#d3d3d3}.results-table tbody tr:last-child td:last-child{border-color-right:app-color(bluegray);border-color-bottom:#d3d3d3}.results-table .label{position:relative;top:-1px;padding-bottom:.2em;background:rgba(16,126,100,.75)}.results-table .label-tum{background:#157eaa}.results-table .btn-toggle{margin-top:.25rem}.results-table td.is-sorted{background-color:rgba(212,221,219,.2)}.results-table th.is-sorted{position:relative;border-color:rgba(183,199,195,.75);background-color:#e1eae7;background-image:none}.results-table th.is-sorted:before{content:\"\";position:absolute;top:-1px;right:-1px;left:-1px;height:1px;background:rgba(183,199,195,.4)}.results-table th.is-sorted:after{content:\"\";position:absolute;top:-1px;bottom:-1px;left:-1px;width:1px;background:rgba(183,199,195,.75)}.col-label{position:relative;display:inline-block;padding:5px 0;width:100%;font-size:10px;line-height:18px;font-weight:700;text-transform:uppercase;text-shadow:0 1px 0 rgba(255,255,255,.66);color:rgba(0,0,0,.5);cursor:pointer;transition:color .2s}.is-sorted .col-label{color:rgba(0,0,0,.66)}.col-menu{position:absolute;text-align:right;right:7px;top:9px;opacity:0;transition:opacity .2s;height:1.5rem;width:1.5rem}.col-menu .dropdown-toggle{display:block;width:100%;height:100%;padding:0 1rem .25rem 0;background-color:#1aa0d8;transition:background-color .2s;color:#fff;border:none}.col-menu .dropdown-toggle:disabled{opacity:.65}.col-menu .dropdown-toggle:hover{background-color:#157eaa}.col-menu .dropdown-toggle:after{margin-left:.5rem;margin-right:.55rem}.col-menu.open{opacity:1}.multi-result+.multi-result{margin-top:.5rem}.ico-col-sort{opacity:.45}.ico-col-sort i:nth-child(3){display:block;line-height:18px;font-size:12px;padding-left:.5em}.tbl-msg{padding:24px;font-size:18px;text-align:center;color:#8a8a8a}.tbl-msg p{margin:0}.cell-list{margin-top:-.35rem;margin-bottom:-.3rem;font-size:13px}.cell-list small{font-size:90%}.cell-list-item{padding-top:.5em;padding-bottom:.5em}.cell-list-extended{font-size:0;opacity:0;transform:scaleY(0);transform-origin:0 0;transition:font-size .4s,opacity .4s,transform .4s}.cell-list-extended.is-visible{font-size:13px;opacity:1;transform:scaleY(1)}.cell-list-extended .cell-list-item{border-top:1px dotted rgba(0,0,0,.1)}.cell-list-item--extended{border-top:1px dotted rgba(0,0,0,.1);font-size:0;opacity:0;transform:scaleY(0);transform-origin:0 0;transition:font-size .3s,opacity .3s,transform .3s}.cell-list-items.show-all .cell-list-item--extended{font-size:13px;opacity:1;transform:scaleY(1)}.cell-list-expand-toggle{cursor:pointer}.cell-list-expand-toggle .icon{transform-origin:50% 45%;transition:transform .4s}.cell-list-expand-toggle.is-open .icon{transform:rotate(180deg)}.space-right{margin-right:.5em}.ico-col-sort{position:relative;display:inline-block;opacity:0;color:rgba(0,0,0,.5);text-shadow:0 1px 0 rgba(255,255,255,.66);transition:opacity .2s,color .2s}.ico-col-sort i{display:inline-block;line-height:9px;vertical-align:top;font-style:normal;font-size:8px;font-weight:400;font-family:Verdana,sans-serif}.ico-col-sort i:nth-child(1){position:absolute;top:0;left:0}.ico-col-sort i:nth-child(2){position:absolute;bottom:0;left:0}.is-sorted--asc .ico-col-sort--asc,.is-sorted--desc .ico-col-sort--desc{opacity:.9}"]
                }] }
    ];
    /** @nocollapse */
    TableComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: TableSortingService },
        { type: TableInitService },
        { type: I18nService },
        { type: undefined, decorators: [{ type: Inject, args: [TableDefaults,] }] }
    ]; };
    TableComponent.propDecorators = {
        columnsConfig: [{ type: Input }],
        visibleColumns: [{ type: Input }],
        rows: [{ type: Input }],
        reorderingEnabled: [{ type: Input }],
        changeColumnVisibility: [{ type: Input }],
        rowsSortingMode: [{ type: Input }],
        inlineEditingEnabled: [{ type: Input }],
        language: [{ type: Input }],
        initialSortColumn: [{ type: Input }],
        addColumn: [{ type: Output }],
        removeColumn: [{ type: Output }],
        sortColumn: [{ type: Output }],
        reorderColumns: [{ type: Output }],
        rowClick: [{ type: Output }],
        visibleColumnsChange: [{ type: Output }],
        editCell: [{ type: Output }],
        toggleSubfield: [{ type: Output }]
    };
    return TableComponent;
}());
export { TableComponent };
if (false) {
    /** @type {?} */
    TableComponent.prototype.rows;
    /** @type {?} */
    TableComponent.prototype.reorderingEnabled;
    /** @type {?} */
    TableComponent.prototype.changeColumnVisibility;
    /** @type {?} */
    TableComponent.prototype.rowsSortingMode;
    /** @type {?} */
    TableComponent.prototype.inlineEditingEnabled;
    /** @type {?} */
    TableComponent.prototype.initialSortColumn;
    /** @type {?} */
    TableComponent.prototype.addColumn;
    /** @type {?} */
    TableComponent.prototype.removeColumn;
    /** @type {?} */
    TableComponent.prototype.sortColumn;
    /** @type {?} */
    TableComponent.prototype.reorderColumns;
    /** @type {?} */
    TableComponent.prototype.rowClick;
    /** @type {?} */
    TableComponent.prototype.visibleColumnsChange;
    /** @type {?} */
    TableComponent.prototype.editCell;
    /** @type {?} */
    TableComponent.prototype.toggleSubfield;
    /** @type {?} */
    TableComponent.prototype.columnsLookup;
    /** @type {?} */
    TableComponent.prototype.addingColumnIndex;
    /** @type {?} */
    TableComponent.prototype.customTemplate;
    /** @type {?} */
    TableComponent.prototype.sortedColumnName;
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype._visibleColumns;
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype._columnsConfig;
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype.tableSortingService;
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype.tableInitService;
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype.i18nService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXBhY2svIiwic291cmNlcyI6WyJsaWIvdGFibGUvdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUd0RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUU1RCxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFFTixNQUFNLEVBQ04saUJBQWlCLEVBQ2pCLGNBQWMsR0FDZixNQUFNLGVBQWUsQ0FBQzs7OztBQUl2Qix3Q0FNQzs7O0lBTEMsK0NBQTJCOztJQUMzQiw2Q0FBNkI7O0lBQzdCLGtEQUE4Qjs7SUFDOUIsb0RBQWdDOztJQUNoQyxzQ0FBaUI7OztBQUduQixNQUFNLEtBQU8sYUFBYSxHQUFHLElBQUksY0FBYyxDQUFDLGVBQWUsQ0FBQzs7QUFDaEUsTUFBTSxLQUFPLGtCQUFrQixHQUF1QjtJQUNwRCxpQkFBaUIsRUFBRSxJQUFJO0lBQ3ZCLGVBQWUsRUFBRSxTQUFTO0lBQzFCLG9CQUFvQixFQUFFLEtBQUs7SUFDM0Isc0JBQXNCLEVBQUUsSUFBSTtJQUM1QixRQUFRLEVBQUUsSUFBSTtDQUNmO0FBRUQ7SUFpREUsd0JBQ1UsVUFBc0IsRUFDdEIsbUJBQXdDLEVBQ3hDLGdCQUFrQyxFQUNsQyxXQUF3QixFQUNULFFBQWE7UUFKNUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUF0QnhCLGNBQVMsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztR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c0M7O0lBQ3RDLDhDQUF1Qzs7SUFLdkMsMkNBQStDOztJQUUvQyxtQ0FBdUU7O0lBQ3ZFLHNDQUEwRTs7SUFDMUUsb0NBQTBGOztJQUUxRix3Q0FBZ0Y7O0lBQ2hGLGtDQUFvRjs7SUFDcEYsOENBQXNGOztJQUN0RixrQ0FBb0Y7O0lBQ3BGLHdDQUFzRzs7SUFFdEcsdUNBQTRCOztJQUM1QiwyQ0FBMEI7O0lBQzFCLHdDQUFnQzs7SUFDaEMsMENBQWdDOzs7OztJQUVoQyx5Q0FBa0M7Ozs7O0lBQ2xDLHdDQUF1Qzs7Ozs7SUFHckMsb0NBQThCOzs7OztJQUM5Qiw2Q0FBZ0Q7Ozs7O0lBQ2hELDBDQUEwQzs7Ozs7SUFDMUMscUNBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb2x1bW5TdGF0ZX0gZnJvbSAnLi9jb2x1bW4tc3RhdGUuY2xhc3MnO1xuaW1wb3J0IHtJMThuU2VydmljZX0gZnJvbSAnLi8uLi9zZXJ2aWNlcy9pMThuLnNlcnZpY2UnO1xuaW1wb3J0IHtUYWJsZUluaXRTZXJ2aWNlfSBmcm9tICcuL3RhYmxlLWluaXQuc2VydmljZSc7XG5pbXBvcnQge0NvbHVtbkNvbmZpZywgQ29sdW1uTG9va3VwLCBTb3J0RGlyZWN0aW9uLCBSb3csIFNvcnRpbmdNb2RlfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IEVkaXRDZWxsRXZlbnQsIFJvd0NsaWNrRXZlbnQsIFRvZ2dsZVN1YmZpZWxkRXZlbnQsIFNvcnRDb2x1bW5FdmVudCB9IGZyb20gJy4vZXZlbnRzJztcbmltcG9ydCB7VGFibGVTb3J0aW5nU2VydmljZX0gZnJvbSAnLi90YWJsZS1zb3J0aW5nLnNlcnZpY2UnO1xuXG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIEluamVjdCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBJbmplY3Rpb25Ub2tlbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmRlY2xhcmUgdmFyIGpRdWVyeTogYW55O1xuXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlRGVmYXVsdFZhbHVlcyB7XG4gIHJlb3JkZXJpbmdFbmFibGVkOiBib29sZWFuO1xuICByb3dzU29ydGluZ01vZGU6IFNvcnRpbmdNb2RlO1xuICBpbmxpbmVFZGl0aW5nRW5hYmxlZDogYm9vbGVhbjtcbiAgY2hhbmdlQ29sdW1uVmlzaWJpbGl0eTogYm9vbGVhbjtcbiAgbGFuZ3VhZ2U6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IFRhYmxlRGVmYXVsdHMgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ1RhYmxlRGVmYXVsdHMnKTtcbmV4cG9ydCBjb25zdCB0YWJsZURlZmF1bHRWYWx1ZXM6IFRhYmxlRGVmYXVsdFZhbHVlcyA9IHtcbiAgcmVvcmRlcmluZ0VuYWJsZWQ6IHRydWUsXG4gIHJvd3NTb3J0aW5nTW9kZTogJ2RlZmF1bHQnLFxuICBpbmxpbmVFZGl0aW5nRW5hYmxlZDogZmFsc2UsXG4gIGNoYW5nZUNvbHVtblZpc2liaWxpdHk6IHRydWUsXG4gIGxhbmd1YWdlOiAnZW4nLFxufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaXctdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJ3RhYmxlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGFibGUuY29tcG9uZW50LnNjc3MnXSxcbiAgLy8gVE9ETzogZW5hYmxlIGVuY2Fwc3VsYXRpb24gYWdhaW5cbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge3Byb3ZpZGU6IFRhYmxlRGVmYXVsdHMsIHVzZVZhbHVlOiB0YWJsZURlZmF1bHRWYWx1ZXN9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBzZXQgY29sdW1uc0NvbmZpZyhjb2x1bW5zQ29uZmlnOiBDb2x1bW5Db25maWdbXSkge1xuICAgIHRoaXMuX2NvbHVtbnNDb25maWcgPSBjb2x1bW5zQ29uZmlnO1xuICAgIHRoaXMuY29sdW1uc0xvb2t1cCA9IHRoaXMudGFibGVJbml0U2VydmljZS5jb2x1bW5zQ29uZmlnMkxvb2t1cCh0aGlzLmNvbHVtbnNDb25maWcpO1xuICB9XG4gIEBJbnB1dCgpIHNldCB2aXNpYmxlQ29sdW1ucyh2aXNpYmxlQ29sdW1uczogc3RyaW5nW10pIHtcbiAgICB0aGlzLl92aXNpYmxlQ29sdW1ucyA9IHZpc2libGVDb2x1bW5zO1xuICAgIHRoaXMudmlzaWJsZUNvbHVtbnNDaGFuZ2UuZW1pdCh0aGlzLl92aXNpYmxlQ29sdW1ucyk7XG4gIH1cblxuICBASW5wdXQoKSByb3dzOiBSb3dbXTtcbiAgQElucHV0KCkgcmVvcmRlcmluZ0VuYWJsZWQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNoYW5nZUNvbHVtblZpc2liaWxpdHk6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHJvd3NTb3J0aW5nTW9kZTogU29ydGluZ01vZGU7XG4gIEBJbnB1dCgpIGlubGluZUVkaXRpbmdFbmFibGVkOiBib29sZWFuO1xuICAvLyBASW5wdXQoKSBjb2x1bW5zRm9yQWRkaW5nRm46IChhdmFpbGFibGVDb2x1bW5zOiBDb2x1bW5Db25maWdbXSkgPT4gYW55W10gPSAoaWQpID0+IGlkXG4gIEBJbnB1dCgpIHNldCBsYW5ndWFnZShsYW5ndWFnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5pMThuU2VydmljZS5sYW5ndWFnZSA9IGxhbmd1YWdlO1xuICB9XG4gIEBJbnB1dCgpIGluaXRpYWxTb3J0Q29sdW1uOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbiAgQE91dHB1dCgpIGFkZENvbHVtbjogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHJlbW92ZUNvbHVtbjogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcbiAgQE91dHB1dCgpIHNvcnRDb2x1bW46IEV2ZW50RW1pdHRlcjxTb3J0Q29sdW1uRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxTb3J0Q29sdW1uRXZlbnQ+KCk7XG4gIC8vIEBPdXRwdXQoKSBhZGRpbmdDb2x1bW46IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSByZW9yZGVyQ29sdW1uczogRXZlbnRFbWl0dGVyPHN0cmluZ1tdPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XG4gIEBPdXRwdXQoKSByb3dDbGljazogRXZlbnRFbWl0dGVyPFJvd0NsaWNrRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxSb3dDbGlja0V2ZW50PigpO1xuICBAT3V0cHV0KCkgdmlzaWJsZUNvbHVtbnNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xuICBAT3V0cHV0KCkgZWRpdENlbGw6IEV2ZW50RW1pdHRlcjxFZGl0Q2VsbEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8RWRpdENlbGxFdmVudD4oKTtcbiAgQE91dHB1dCgpIHRvZ2dsZVN1YmZpZWxkOiBFdmVudEVtaXR0ZXI8VG9nZ2xlU3ViZmllbGRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRvZ2dsZVN1YmZpZWxkRXZlbnQ+KCk7XG5cbiAgY29sdW1uc0xvb2t1cDogQ29sdW1uTG9va3VwO1xuICBhZGRpbmdDb2x1bW5JbmRleDogbnVtYmVyO1xuICBjdXN0b21UZW1wbGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuICBzb3J0ZWRDb2x1bW5OYW1lOiBzdHJpbmcgfCBudWxsO1xuXG4gIHByaXZhdGUgX3Zpc2libGVDb2x1bW5zOiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfY29sdW1uc0NvbmZpZzogQ29sdW1uQ29uZmlnW107XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgdGFibGVTb3J0aW5nU2VydmljZTogVGFibGVTb3J0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIHRhYmxlSW5pdFNlcnZpY2U6IFRhYmxlSW5pdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBpMThuU2VydmljZTogSTE4blNlcnZpY2UsXG4gICAgQEluamVjdChUYWJsZURlZmF1bHRzKSBkZWZhdWx0czogYW55LFxuICApIHtcbiAgICB0aGlzLnJlb3JkZXJpbmdFbmFibGVkID0gIGRlZmF1bHRzLnJlb3JkZXJpbmdFbmFibGVkO1xuICAgIHRoaXMucm93c1NvcnRpbmdNb2RlID0gIGRlZmF1bHRzLnJvd3NTb3J0aW5nTW9kZTtcbiAgICB0aGlzLmlubGluZUVkaXRpbmdFbmFibGVkID0gIGRlZmF1bHRzLmlubGluZUVkaXRpbmdFbmFibGVkO1xuICAgIHRoaXMuY2hhbmdlQ29sdW1uVmlzaWJpbGl0eSA9ICBkZWZhdWx0cy5jaGFuZ2VDb2x1bW5WaXNpYmlsaXR5O1xuICAgIHRoaXMubGFuZ3VhZ2UgPSBkZWZhdWx0cy5sYW5ndWFnZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGFyZzogYW55KSB7XG4gICAgdGhpcy5pbml0aWFsaXplRGVmYXVsdHMoKTtcbiAgICB0aGlzLmluaXRpYWxTb3J0KCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmN1c3RvbVRlbXBsYXRlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoICE9PSAxO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IHZpc2libGVDb2x1bW5zKCkge1xuICAgIHJldHVybiB0aGlzLl92aXNpYmxlQ29sdW1ucztcbiAgfVxuXG4gIGdldCBjb2x1bW5zQ29uZmlnKCk6IENvbHVtbkNvbmZpZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fY29sdW1uc0NvbmZpZztcbiAgfVxuXG4gIGlzU29ydGVkKGNvbHVtbjogQ29sdW1uU3RhdGUsIGRpcmVjdGlvbjogc3RyaW5nKSB7XG4gICAgaWYgKCFjb2x1bW4pIHsgcmV0dXJuOyB9XG4gICAgbGV0IGlzU29ydGVkOiBib29sZWFuID0gY29sdW1uLmNvbmZpZy5pZCA9PT0gdGhpcy5zb3J0ZWRDb2x1bW5OYW1lO1xuICAgIGlmICghZGlyZWN0aW9uKSB7XG4gICAgICByZXR1cm4gaXNTb3J0ZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBkaXJlY3Rpb25NYXRjaDogYm9vbGVhbiA9IGNvbHVtbi5jdXJyZW50U29ydERpcmVjdGlvbiA9PT0gZGlyZWN0aW9uO1xuICAgICAgcmV0dXJuIGlzU29ydGVkICYmIGRpcmVjdGlvbk1hdGNoO1xuICAgIH1cbiAgfVxuXG4gIG9uUm93Q2xpY2tlZChyb3dDbGlja0V2ZW50OiBSb3dDbGlja0V2ZW50KSB7XG4gICAgdGhpcy5yb3dDbGljay5lbWl0KHJvd0NsaWNrRXZlbnQpO1xuICB9XG5cbiAgb25Tb3J0Q29sdW1uKHNvcnRFdmVudDogU29ydENvbHVtbkV2ZW50KSB7XG4gICAgdGhpcy5zb3J0Q29sdW1uLmVtaXQoc29ydEV2ZW50KTtcbiAgICBpZiAodGhpcy5yb3dzU29ydGluZ01vZGUgPT09ICdkZWZhdWx0Jykge1xuICAgICAgdGhpcy5zb3J0Um93cyh0aGlzLnJvd3MsIHNvcnRFdmVudCk7XG4gICAgfVxuICB9XG5cbiAgb25BZGRpbmdDb2x1bW4oaW5kZXg6IG51bWJlcikge1xuICAgIHRoaXMuYWRkaW5nQ29sdW1uSW5kZXggPSBpbmRleDtcbiAgICAvLyBUT0RPOiB0aGlzIHNob3VsZCBlbWl0IGFsc28gd2hlbiBhZGRpbmcgdG8gdGhlIGxhc3QgY29sdW1uIVxuICAgIC8vIHRoaXMuYWRkaW5nQ29sdW1uLmVtaXQoaW5kZXgpO1xuICB9XG5cbiAgb25SZW9yZGVyQ29sdW1ucyhyZW9yZGVyQ29sdW1uc0V2ZW50OiBzdHJpbmdbXSkge1xuICAgIHRoaXMucmVvcmRlckNvbHVtbnMuZW1pdChyZW9yZGVyQ29sdW1uc0V2ZW50KTtcbiAgfVxuXG4gIG9uVG9nZ2xlU3ViZmllbGQodG9nZ2xlU3ViZmllbGRFdmVudDogVG9nZ2xlU3ViZmllbGRFdmVudCkge1xuICAgIHRoaXMudG9nZ2xlU3ViZmllbGQuZW1pdCh0b2dnbGVTdWJmaWVsZEV2ZW50KTtcbiAgfVxuXG4gIHNvcnRSb3dzKHJvd3M6IGFueVtdLCBzb3J0RXZlbnQ6IFNvcnRDb2x1bW5FdmVudCk6IFJvd1tdIHtcbiAgICBsZXQge2NvbHVtbiwgZGlyZWN0aW9ufSA9IHNvcnRFdmVudDtcbiAgICB0aGlzLnJvd3MgPSB0aGlzLnRhYmxlU29ydGluZ1NlcnZpY2Uuc29ydChcbiAgICAgIHJvd3MsIHRoaXMuY29sdW1uc0xvb2t1cFtjb2x1bW5dXG4gICAgKTtcbiAgICB0aGlzLnNvcnRlZENvbHVtbk5hbWUgPSBjb2x1bW47XG4gICAgcmV0dXJuIHRoaXMucm93cztcbiAgfVxuXG4gIGluaXRpYWxTb3J0KCkge1xuICAgIGlmICghdGhpcy5pbml0aWFsU29ydENvbHVtbiB8fCAhdGhpcy5yb3dzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBjb2x1bW5OYW1lID0gdGhpcy5pbml0aWFsU29ydENvbHVtbi5zbGljZSgxKTtcbiAgICBsZXQgc29ydERpcmVjdGlvbjogc3RyaW5nID0gJ2FzYyc7XG4gICAgaWYgKHRoaXMuaW5pdGlhbFNvcnRDb2x1bW5bMF0gPT09ICcrJykge1xuICAgICAgLy8gcGx1YXMgYXQgdGhlIGJlZ2lubmluZyBtZWFucyAnYXNjJ1xuICAgICAgc29ydERpcmVjdGlvbiA9ICdhc2MnO1xuXG4gICAgfSBlbHNlIGlmICh0aGlzLmluaXRpYWxTb3J0Q29sdW1uWzBdID09PSAnLScpIHtcbiAgICAgIC8vIG1pbnVzIGF0IHRoZSBiZWdpbm5pbmcgbWVhbnMgJ2Rlc2MnXG4gICAgICBzb3J0RGlyZWN0aW9uID0gJ2Rlc2MnO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBkaXJlY3Rpb24gc2lnbiBpcyBvcHRpb25hbFxuICAgICAgY29sdW1uTmFtZSA9IHRoaXMuaW5pdGlhbFNvcnRDb2x1bW47XG4gICAgfVxuICAgIGxldCBjb2x1bW5TdGF0ZSA9IHRoaXMuY29sdW1uc0xvb2t1cFtjb2x1bW5OYW1lXTtcbiAgICBpZiAoY29sdW1uU3RhdGUpIHtcbiAgICAgIHNvcnREaXJlY3Rpb24gPSBzb3J0RGlyZWN0aW9uIHx8IGNvbHVtblN0YXRlLmluaXRpYWxTb3J0RGlyZWN0aW9uO1xuICAgICAgY29sdW1uU3RhdGUuY3VycmVudFNvcnREaXJlY3Rpb24gPSA8U29ydERpcmVjdGlvbj5zb3J0RGlyZWN0aW9uO1xuICAgICAgLy8gaW5pdGlhbCBzb3J0XG4gICAgICBpZiAodGhpcy5yb3dzU29ydGluZ01vZGUgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICB0aGlzLnNvcnRSb3dzKHRoaXMucm93cywge2NvbHVtbjogY29sdW1uTmFtZSwgZGlyZWN0aW9uOiBzb3J0RGlyZWN0aW9ufSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9uU29ydENvbHVtbih7Y29sdW1uOiBjb2x1bW5OYW1lLCBkaXJlY3Rpb246IHNvcnREaXJlY3Rpb259KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdNaXNzaW5nIGNvbmZpZ3VyYXRpb24gZm9yIGNvbHVtbjogJyArIGNvbHVtbk5hbWUpO1xuICAgIH1cbiAgICB0aGlzLnNvcnRlZENvbHVtbk5hbWUgPSBjb2x1bW5OYW1lO1xuICAgIHRoaXMuaW5pdGlhbFNvcnRDb2x1bW4gPSB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemVEZWZhdWx0cygpIHtcbiAgICBjb25zdCBpc1dpdGhvdXREYXRhID0gKHR5cGVvZiB0aGlzLnJvd3MgPT09ICd1bmRlZmluZWQnIHx8IHRoaXMucm93cy5sZW5ndGggPT09IDApO1xuICAgIGlmICh0eXBlb2YgdGhpcy5jb2x1bW5zQ29uZmlnID09PSAndW5kZWZpbmVkJyAmJiAhaXNXaXRob3V0RGF0YSkge1xuICAgICAgW3RoaXMuY29sdW1uc0xvb2t1cCwgdGhpcy5fY29sdW1uc0NvbmZpZ10gPSB0aGlzLnRhYmxlSW5pdFNlcnZpY2UuZGV0ZWN0Q29sdW1uQ29uZmlndXJhdGlvbih0aGlzLnJvd3MpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRoaXMudmlzaWJsZUNvbHVtbnMgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB0aGlzLmNvbHVtbnNMb29rdXAgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnZpc2libGVDb2x1bW5zID0gT2JqZWN0LmtleXModGhpcy5jb2x1bW5zTG9va3VwKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==