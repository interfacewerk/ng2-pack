/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/th/th.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ColumnState } from './../column-state.class';
import { TableComponent } from './../table.component';
import { Component, EventEmitter, Input, Output, Optional, } from '@angular/core';
var ThComponent = /** @class */ (function () {
    // TODO: some properties could be taken from thead component, same for add-column.component
    function ThComponent(tableComponent) {
        this.changeVisibility = true;
        this.removeColumn = new EventEmitter();
        this.sortColumn = new EventEmitter();
        this.addCombobox = new EventEmitter();
        this.toggleSubfield = new EventEmitter();
        this.tableComponent = tableComponent;
    }
    Object.defineProperty(ThComponent.prototype, "rowsSortingMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._rowsSortingMode || this.delegateInput('rowsSortingMode', (/** @type {?} */ ('default')));
        },
        set: /**
         * @param {?} rowsSortingMode
         * @return {?}
         */
        function (rowsSortingMode) {
            this._rowsSortingMode = rowsSortingMode;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ThComponent.prototype, "visibleColumns", {
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
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ThComponent.prototype, "columnsConfig", {
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
            this._columnsConfig = columnsConfig;
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * @return {?}
     */
    ThComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    Object.defineProperty(ThComponent.prototype, "hasAllColumnsVisble", {
        get: /**
         * @return {?}
         */
        function () {
            return this.visibleColumns.length === this.columnsConfig.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ThComponent.prototype, "isLastColumn", {
        get: /**
         * @return {?}
         */
        function () {
            return this.visibleColumns.length !== 1;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} column
     * @return {?}
     */
    ThComponent.prototype.isSortingDisabled = /**
     * @param {?} column
     * @return {?}
     */
    function (column) {
        if (!column) {
            return;
        }
        return this.rowsSortingMode === 'disabled' || column.config.sortingDisabled;
    };
    /**
     * @param {?} column
     * @param {?} sortType
     * @param {?} direction
     * @return {?}
     */
    ThComponent.prototype.showSortIcon = /**
     * @param {?} column
     * @param {?} sortType
     * @param {?} direction
     * @return {?}
     */
    function (column, sortType, direction) {
        if (!column) {
            return false;
        }
        if (this.isSortingDisabled(column)) {
            return false;
        }
        return (column.config.sortType === sortType && column.currentSortDirection === direction);
    };
    /**
     * @param {?} column
     * @param {?=} direction
     * @return {?}
     */
    ThComponent.prototype.onSortColumn = /**
     * @param {?} column
     * @param {?=} direction
     * @return {?}
     */
    function (column, direction) {
        if (this.isSortingDisabled(column)) {
            return;
        }
        if (!direction) {
            direction = column.toggleDirection();
        }
        else {
            column.currentSortDirection = (/** @type {?} */ (direction));
        }
        this.sortColumn.emit({
            column: column.config.id,
            direction: direction
        });
    };
    /**
     * @param {?} columnName
     * @return {?}
     */
    ThComponent.prototype.onRemoveColumn = /**
     * @param {?} columnName
     * @return {?}
     */
    function (columnName) {
        /** @type {?} */
        var columnIndex = this.visibleColumns.indexOf(columnName);
        this.visibleColumns = tslib_1.__spread(this.visibleColumns.slice(0, columnIndex), this.visibleColumns.slice(columnIndex + 1));
        this.removeColumn.emit(columnName);
    };
    /**
     * @param {?} column
     * @param {?} subfieldName
     * @return {?}
     */
    ThComponent.prototype.onToggleSubfield = /**
     * @param {?} column
     * @param {?} subfieldName
     * @return {?}
     */
    function (column, subfieldName) {
        /** @type {?} */
        var subfieldIndex = column.activeFields.indexOf(subfieldName);
        if (subfieldIndex === -1) {
            // it was not active, therefore it needs to be actived
            column.activeFields.push(subfieldName);
        }
        else {
            // it was active, therefore disable it
            column.activeFields.splice(subfieldIndex, 1);
        }
        this.toggleSubfield.emit({
            column: column.config.id,
            activeSubfields: column.activeFields,
            toggleSubfield: subfieldName
        });
    };
    /**
     * @private
     * @template T
     * @param {?} propertyName
     * @param {?} defaultValue
     * @return {?}
     */
    ThComponent.prototype.delegateInput = /**
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
    ThComponent.decorators = [
        { type: Component, args: [{
                    selector: '[iw-th]',
                    template: "<div>\n\n  <!-- NOTE: do not use pointer cursor when sorting is disabled -->\n  <span class=\"col-label\" (click)=\"onSortColumn(column)\" >\n    {{ column?.config.text || column?.config.id  }}\n    <i *ngIf=\"showSortIcon(column, 'string', 'asc')\" class=\"ico-col-sort ico-col-sort--asc\"><i>A</i><i>Z</i><i>\u2193</i></i>\n    <i *ngIf=\"showSortIcon(column, 'string', 'desc')\" class=\"ico-col-sort ico-col-sort--desc\"><i>Z</i><i>A</i><i>\u2193</i></i>\n    <i *ngIf=\"showSortIcon(column, 'number', 'asc')\" class=\"ico-col-sort ico-col-sort--asc\"><i>0</i><i>9</i><i>\u2193</i></i>\n    <i *ngIf=\"showSortIcon(column, 'number', 'desc')\" class=\"ico-col-sort ico-col-sort--desc\"><i>9</i><i>0</i><i>\u2193</i></i>\n  </span>\n\n  <div class=\"btn-group col-menu\" dropdown>\n    <a\n      dropdown-open\n      class=\"btn btn-sm btn-secondary dropdown-toggle\"\n      [id]=\"column?.config.id + '-dropdown'\">\n    </a>\n\n    <ul class=\"dropdown-menu dropdown-menu-right\" dropdownMenu attr.aria-labelledby=\"{{column?.config.id}}-dropdown\">\n\n      <li *ngIf=\"!isSortingDisabled(column)\">\n        <a class=\"dropdown-item\" (click)=\"onSortColumn(column, 'asc')\">\n          {{ 'table.sort' | t}}\n          <span *ngIf=\"column?.config.sortType === 'number'\">0&rarr;9</span>\n          <span *ngIf=\"column?.config.sortType !== 'number'\">A&rarr;Z</span>\n        </a>\n      </li>\n\n      <li *ngIf=\"!isSortingDisabled(column)\">\n        <a class=\"dropdown-item\" (click)=\"onSortColumn(column, 'desc')\">\n          {{ 'table.sort' | t}}\n          <span *ngIf=\"column?.config.sortType === 'number'\">9&rarr;0</span>\n          <span *ngIf=\"column?.config.sortType !== 'number'\">Z&rarr;A</span>\n        </a>\n      </li>\n\n      <!-- NOTE: do not display divider when adding columns is disabled -->\n      <li *ngIf=\"!isSortingDisabled(column) && changeVisibility\" class=\"divider dropdown-divider\"></li>\n      <!-- NOTE: should it be disabled when there are no columns to add  -->\n      <li *ngIf=\"changeVisibility\">\n        <a [class.disabled]=\"hasAllColumnsVisble\" class=\"dropdown-item\" (click)=\"!hasAllColumnsVisble && addCombobox.emit(0)\">\n          {{ 'table.addLeft' | t}}\n        </a>\n      </li>\n\n      <li *ngIf=\"changeVisibility\">\n        <a [class.disabled]=\"hasAllColumnsVisble\" class=\"dropdown-item\" (click)=\"!hasAllColumnsVisble && addCombobox.emit(1)\">\n          {{ 'table.addRight' | t}}\n        </a>\n      </li>\n\n      <li *ngIf=\"column?.config.subFields\" class=\"divider dropdown-divider\"></li>\n      <li *ngIf=\"column?.config.subFields\" class=\"dropdown-item-group\" dropdown-not-closable-zone>\n        <span class=\"dropdown-header\">{{ 'table.subFields' | t}}</span>\n\n        <div *ngFor=\"let subfield of column?.config.subFields\">\n          <label class=\"dropdown-item c-input c-checkbox\">\n            <input type=\"checkbox\"\n                (change)=\"onToggleSubfield(column, subfield.id)\"\n                [checked]=\"subfield.isVisible\"\n            >\n            <span class=\"c-indicator\"></span>\n            {{subfield.text || subfield.id }}\n          </label>\n        </div>\n      </li>\n\n      <li *ngIf=\"changeVisibility\" class=\"divider dropdown-divider\"></li>\n      <li *ngIf=\"changeVisibility\">\n        <!-- disable removing column if it's the last one  -->\n        <!-- NOTE: is there a better way how to indicate that -->\n        <a\n        [class.disabled]=\"visibleColumns.length === 1\"\n        class=\"dropdown-item\"\n        (click)=\"isLastColumn && onRemoveColumn(column?.config.id)\">\n          {{ 'table.removeColumn' | t}}\n        </a>\n      </li>\n\n    </ul>\n  </div>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ThComponent.ctorParameters = function () { return [
        { type: TableComponent, decorators: [{ type: Optional }] }
    ]; };
    ThComponent.propDecorators = {
        column: [{ type: Input }],
        changeVisibility: [{ type: Input }],
        rowsSortingMode: [{ type: Input }],
        visibleColumns: [{ type: Input }],
        columnsConfig: [{ type: Input }],
        removeColumn: [{ type: Output }],
        sortColumn: [{ type: Output }],
        addCombobox: [{ type: Output }],
        toggleSubfield: [{ type: Output }]
    };
    return ThComponent;
}());
export { ThComponent };
if (false) {
    /** @type {?} */
    ThComponent.prototype.column;
    /** @type {?} */
    ThComponent.prototype.changeVisibility;
    /** @type {?} */
    ThComponent.prototype.removeColumn;
    /** @type {?} */
    ThComponent.prototype.sortColumn;
    /** @type {?} */
    ThComponent.prototype.addCombobox;
    /** @type {?} */
    ThComponent.prototype.toggleSubfield;
    /**
     * @type {?}
     * @private
     */
    ThComponent.prototype._rowsSortingMode;
    /**
     * @type {?}
     * @private
     */
    ThComponent.prototype._visibleColumns;
    /**
     * @type {?}
     * @private
     */
    ThComponent.prototype._columnsConfig;
    /**
     * @type {?}
     * @private
     */
    ThComponent.prototype.tableComponent;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXBhY2svIiwic291cmNlcyI6WyJsaWIvdGFibGUvdGgvdGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUVwRCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFcEQsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7QUFFdkI7SUFpQ0UsMkZBQTJGO0lBQzNGLHFCQUF3QixjQUE4QjtRQTNCN0MscUJBQWdCLEdBQVksSUFBSSxDQUFDO1FBZ0JoQyxpQkFBWSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBQ2hFLGVBQVUsR0FBa0MsSUFBSSxZQUFZLEVBQW1CLENBQUM7UUFDaEYsZ0JBQVcsR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUMvRCxtQkFBYyxHQUFzQyxJQUFJLFlBQVksRUFBdUIsQ0FBQztRQVNwRyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztJQUN2QyxDQUFDO0lBNUJELHNCQUFhLHdDQUFlOzs7O1FBaUM1QjtZQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsaUJBQWlCLEVBQUUsbUJBQWEsU0FBUyxFQUFBLENBQUMsQ0FBQztRQUNoRyxDQUFDOzs7OztRQW5DRCxVQUE2QixlQUE0QjtZQUN2RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsZUFBZSxDQUFDO1FBQzFDLENBQUM7OztPQUFBO0lBQUEsQ0FBQztJQUNGLHNCQUFhLHVDQUFjOzs7O1FBa0MzQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzFF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SUFDMUYsa0NBQXlFOztJQUN6RSxxQ0FBc0c7Ozs7O0lBRXRHLHVDQUFzQzs7Ozs7SUFDdEMsc0NBQWtDOzs7OztJQUNsQyxxQ0FBdUM7Ozs7O0lBQ3ZDLHFDQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29sdW1uQ29uZmlnLCBTb3J0RGlyZWN0aW9uLCBTb3J0aW5nTW9kZX0gZnJvbSAnLi8uLi90eXBlcyc7XG5pbXBvcnQge0NvbHVtblN0YXRlfSBmcm9tICcuLy4uL2NvbHVtbi1zdGF0ZS5jbGFzcyc7XG5pbXBvcnQge1NvcnRDb2x1bW5FdmVudCwgVG9nZ2xlU3ViZmllbGRFdmVudH0gZnJvbSAnLi4vZXZlbnRzJztcbmltcG9ydCB7VGFibGVDb21wb25lbnR9IGZyb20gJy4vLi4vdGFibGUuY29tcG9uZW50JztcblxuaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgT3B0aW9uYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbaXctdGhdJyxcbiAgdGVtcGxhdGVVcmw6ICd0aC5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RoLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGNvbHVtbjogQ29sdW1uU3RhdGU7XG4gIEBJbnB1dCgpIGNoYW5nZVZpc2liaWxpdHk6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBzZXQgcm93c1NvcnRpbmdNb2RlKHJvd3NTb3J0aW5nTW9kZTogU29ydGluZ01vZGUpIHtcbiAgICB0aGlzLl9yb3dzU29ydGluZ01vZGUgPSByb3dzU29ydGluZ01vZGU7XG4gIH07XG4gIEBJbnB1dCgpIHNldCB2aXNpYmxlQ29sdW1ucyh2aXNpYmxlQ29sdW1uczogc3RyaW5nW10pIHtcbiAgICBpZiAodGhpcy50YWJsZUNvbXBvbmVudCkge1xuICAgICAgdGhpcy50YWJsZUNvbXBvbmVudC52aXNpYmxlQ29sdW1ucyA9IHZpc2libGVDb2x1bW5zO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl92aXNpYmxlQ29sdW1ucyA9IHZpc2libGVDb2x1bW5zO1xuICAgIH1cbiAgfTtcblxuICBASW5wdXQoKSBzZXQgY29sdW1uc0NvbmZpZyhjb2x1bW5zQ29uZmlnOiBDb2x1bW5Db25maWdbXSkge1xuICAgIHRoaXMuX2NvbHVtbnNDb25maWcgPSBjb2x1bW5zQ29uZmlnO1xuICB9O1xuXG4gIEBPdXRwdXQoKSByZW1vdmVDb2x1bW46IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSBzb3J0Q29sdW1uOiBFdmVudEVtaXR0ZXI8U29ydENvbHVtbkV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8U29ydENvbHVtbkV2ZW50PigpO1xuICBAT3V0cHV0KCkgYWRkQ29tYm9ib3g6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBPdXRwdXQoKSB0b2dnbGVTdWJmaWVsZDogRXZlbnRFbWl0dGVyPFRvZ2dsZVN1YmZpZWxkRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUb2dnbGVTdWJmaWVsZEV2ZW50PigpO1xuXG4gIHByaXZhdGUgX3Jvd3NTb3J0aW5nTW9kZTogU29ydGluZ01vZGU7XG4gIHByaXZhdGUgX3Zpc2libGVDb2x1bW5zOiBzdHJpbmdbXTtcbiAgcHJpdmF0ZSBfY29sdW1uc0NvbmZpZzogQ29sdW1uQ29uZmlnW107XG4gIHByaXZhdGUgdGFibGVDb21wb25lbnQ6IFRhYmxlQ29tcG9uZW50IHwgdW5kZWZpbmVkO1xuXG4gIC8vIFRPRE86IHNvbWUgcHJvcGVydGllcyBjb3VsZCBiZSB0YWtlbiBmcm9tIHRoZWFkIGNvbXBvbmVudCwgc2FtZSBmb3IgYWRkLWNvbHVtbi5jb21wb25lbnRcbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgdGFibGVDb21wb25lbnQ6IFRhYmxlQ29tcG9uZW50KSB7XG4gICAgdGhpcy50YWJsZUNvbXBvbmVudCA9IHRhYmxlQ29tcG9uZW50O1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBnZXQgcm93c1NvcnRpbmdNb2RlKCk6IFNvcnRpbmdNb2RlIHtcbiAgICByZXR1cm4gdGhpcy5fcm93c1NvcnRpbmdNb2RlIHx8IHRoaXMuZGVsZWdhdGVJbnB1dCgncm93c1NvcnRpbmdNb2RlJywgPFNvcnRpbmdNb2RlPidkZWZhdWx0Jyk7XG4gIH1cblxuICBnZXQgdmlzaWJsZUNvbHVtbnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl92aXNpYmxlQ29sdW1ucyB8fCB0aGlzLmRlbGVnYXRlSW5wdXQoJ3Zpc2libGVDb2x1bW5zJywgW10pO1xuICB9XG5cbiAgZ2V0IGNvbHVtbnNDb25maWcoKTogQ29sdW1uQ29uZmlnW10ge1xuICAgIHJldHVybiB0aGlzLl9jb2x1bW5zQ29uZmlnIHx8IHRoaXMuZGVsZWdhdGVJbnB1dCgnY29sdW1uc0NvbmZpZycsIFtdKTtcbiAgfVxuXG4gIGdldCBoYXNBbGxDb2x1bW5zVmlzYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpc2libGVDb2x1bW5zLmxlbmd0aCA9PT0gdGhpcy5jb2x1bW5zQ29uZmlnLmxlbmd0aDtcbiAgfVxuXG4gIGdldCBpc0xhc3RDb2x1bW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmlzaWJsZUNvbHVtbnMubGVuZ3RoICE9PSAxO1xuICB9XG5cbiAgaXNTb3J0aW5nRGlzYWJsZWQoY29sdW1uOiBDb2x1bW5TdGF0ZSkge1xuICAgIGlmICghY29sdW1uKSB7IHJldHVybjsgfVxuICAgIHJldHVybiB0aGlzLnJvd3NTb3J0aW5nTW9kZSA9PT0gJ2Rpc2FibGVkJyB8fCBjb2x1bW4uY29uZmlnLnNvcnRpbmdEaXNhYmxlZDtcbiAgfVxuXG4gIHNob3dTb3J0SWNvbiAoY29sdW1uOiBDb2x1bW5TdGF0ZSwgc29ydFR5cGU6IHN0cmluZywgZGlyZWN0aW9uOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIWNvbHVtbikgeyByZXR1cm4gZmFsc2U7IH1cbiAgICBpZiAodGhpcy5pc1NvcnRpbmdEaXNhYmxlZChjb2x1bW4pKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIHJldHVybiAoY29sdW1uLmNvbmZpZy5zb3J0VHlwZSA9PT0gc29ydFR5cGUgJiYgY29sdW1uLmN1cnJlbnRTb3J0RGlyZWN0aW9uID09PSBkaXJlY3Rpb24pO1xuICB9XG5cbiAgb25Tb3J0Q29sdW1uIChjb2x1bW46IENvbHVtblN0YXRlLCBkaXJlY3Rpb24/OiBzdHJpbmcpIHtcbiAgICBpZiAodGhpcy5pc1NvcnRpbmdEaXNhYmxlZChjb2x1bW4pKSB7IHJldHVybjsgfVxuICAgIGlmICghZGlyZWN0aW9uKSB7XG4gICAgICBkaXJlY3Rpb24gPSBjb2x1bW4udG9nZ2xlRGlyZWN0aW9uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbHVtbi5jdXJyZW50U29ydERpcmVjdGlvbiA9IDxTb3J0RGlyZWN0aW9uPmRpcmVjdGlvbjtcbiAgICB9XG5cbiAgICB0aGlzLnNvcnRDb2x1bW4uZW1pdCh7XG4gICAgICBjb2x1bW46IGNvbHVtbi5jb25maWcuaWQsXG4gICAgICBkaXJlY3Rpb25cbiAgICB9KTtcbiAgfVxuXG4gIG9uUmVtb3ZlQ29sdW1uKGNvbHVtbk5hbWU6IHN0cmluZykge1xuICAgIGxldCBjb2x1bW5JbmRleCA9IHRoaXMudmlzaWJsZUNvbHVtbnMuaW5kZXhPZihjb2x1bW5OYW1lKTtcbiAgICB0aGlzLnZpc2libGVDb2x1bW5zID0gW1xuICAgICAgLi4udGhpcy52aXNpYmxlQ29sdW1ucy5zbGljZSgwLCBjb2x1bW5JbmRleCksXG4gICAgICAuLi50aGlzLnZpc2libGVDb2x1bW5zLnNsaWNlKGNvbHVtbkluZGV4ICsgMSksXG4gICAgXTtcbiAgICB0aGlzLnJlbW92ZUNvbHVtbi5lbWl0KGNvbHVtbk5hbWUpO1xuICB9XG5cbiAgb25Ub2dnbGVTdWJmaWVsZChjb2x1bW46IENvbHVtblN0YXRlLCBzdWJmaWVsZE5hbWU6IHN0cmluZykge1xuICAgIGxldCBzdWJmaWVsZEluZGV4ID0gY29sdW1uLmFjdGl2ZUZpZWxkcy5pbmRleE9mKHN1YmZpZWxkTmFtZSk7XG4gICAgaWYgKHN1YmZpZWxkSW5kZXggPT09IC0xKSB7XG4gICAgICAvLyBpdCB3YXMgbm90IGFjdGl2ZSwgdGhlcmVmb3JlIGl0IG5lZWRzIHRvIGJlIGFjdGl2ZWRcbiAgICAgIGNvbHVtbi5hY3RpdmVGaWVsZHMucHVzaChzdWJmaWVsZE5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpdCB3YXMgYWN0aXZlLCB0aGVyZWZvcmUgZGlzYWJsZSBpdFxuICAgICAgY29sdW1uLmFjdGl2ZUZpZWxkcy5zcGxpY2Uoc3ViZmllbGRJbmRleCwgMSk7XG4gICAgfVxuICAgIHRoaXMudG9nZ2xlU3ViZmllbGQuZW1pdCh7XG4gICAgICBjb2x1bW46IGNvbHVtbi5jb25maWcuaWQsXG4gICAgICBhY3RpdmVTdWJmaWVsZHM6IGNvbHVtbi5hY3RpdmVGaWVsZHMsXG4gICAgICB0b2dnbGVTdWJmaWVsZDogc3ViZmllbGROYW1lXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGRlbGVnYXRlSW5wdXQ8VD4ocHJvcGVydHlOYW1lOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogVCk6IFQge1xuICAgIGlmICghdGhpcy50YWJsZUNvbXBvbmVudCkge1xuICAgICAgLy8gY29uc29sZS53YXJuKCdUaGVhZENvbXBvbmVudDogTm8gcGFyZW50IFwidGFibGVDb21wb25lbnRcIiB3YXMgZm91bmQuJyArXG4gICAgICAvLyAgICdJbnB1dCBcIicgKyBwcm9wZXJ0eU5hbWUgKyAnXCIgd2FzIGFsc28gbm90IHByb3ZpZGVkLicpO1xuICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gKDxhbnk+dGhpcy50YWJsZUNvbXBvbmVudClbcHJvcGVydHlOYW1lXSBhcyBUO1xuICB9XG59XG4iXX0=