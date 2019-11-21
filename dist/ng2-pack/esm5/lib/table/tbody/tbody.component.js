/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/tbody/tbody.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TableInitService } from './../table-init.service';
import { TableComponent } from './../table.component';
import { Component, ElementRef, EventEmitter, Input, Optional, Output, } from '@angular/core';
var TbodyComponent = /** @class */ (function () {
    function TbodyComponent(elementRef, tableInitService, tableComponent) {
        this.elementRef = elementRef;
        this.tableInitService = tableInitService;
        this.rowClick = new EventEmitter();
        this.editCell = new EventEmitter();
        this.customTemplate = false;
        this.customCells = [];
        this.cellTemplates = {};
        this.tableComponent = tableComponent;
    }
    Object.defineProperty(TbodyComponent.prototype, "inlineEditingEnabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this.isEditable || this.delegateInput('inlineEditingEnabled', false);
        },
        set: /**
         * @param {?} isEditable
         * @return {?}
         */
        function (isEditable) {
            this.isEditable = isEditable;
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(TbodyComponent.prototype, "rows", {
        get: /**
         * @return {?}
         */
        function () {
            return this._rows || this.delegateInput('rows', []);
        },
        set: /**
         * @param {?} rows
         * @return {?}
         */
        function (rows) {
            this._rows = rows;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TbodyComponent.prototype, "columnsConfig", {
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
    Object.defineProperty(TbodyComponent.prototype, "visibleColumns", {
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
            this._visibleColumns = visibleColumns;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TbodyComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            // In our template we have N elements, where N is number of rows.
            // If there is more elements, they must be projected => custom template is used
            _this.customTemplate = _this.elementRef.nativeElement.children.length > _this.rows.length;
        }));
    };
    ;
    ;
    Object.defineProperty(TbodyComponent.prototype, "columnsLookup", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var columnsLookup = this._columnsLookup ||
                (this.tableComponent && this.tableComponent.columnsLookup);
            if (!columnsLookup) {
                columnsLookup = this.tableInitService.columnsConfig2Lookup(this.columnsConfig);
                this._columnsLookup = columnsLookup;
            }
            return columnsLookup;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TbodyComponent.prototype, "changeColumnVisibility", {
        get: /**
         * @return {?}
         */
        function () {
            return this.tableComponent.changeColumnVisibility;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} column
     * @param {?} direction
     * @return {?}
     */
    TbodyComponent.prototype.isSorted = /**
     * @param {?} column
     * @param {?} direction
     * @return {?}
     */
    function (column, direction) {
        return this.tableComponent.isSorted(column, direction);
    };
    /**
     * @param {?} columnName
     * @return {?}
     */
    TbodyComponent.prototype.column = /**
     * @param {?} columnName
     * @return {?}
     */
    function (columnName) {
        return this.columnsLookup[columnName];
    };
    /**
     * @param {?} rowIndex
     * @param {?} rowObject
     * @return {?}
     */
    TbodyComponent.prototype.onRowClicked = /**
     * @param {?} rowIndex
     * @param {?} rowObject
     * @return {?}
     */
    function (rowIndex, rowObject) {
        this.rowClick.emit({
            rowIndex: rowIndex,
            rowObject: rowObject
        });
    };
    /**
     * @param {?} tdComponent
     * @param {?} rowIndex
     * @return {?}
     */
    TbodyComponent.prototype.onEditCell = /**
     * @param {?} tdComponent
     * @param {?} rowIndex
     * @return {?}
     */
    function (tdComponent, rowIndex) {
        if (!tdComponent.isChanged || !tdComponent.column) {
            return;
        }
        /** @type {?} */
        var editCellEvent = {
            newValue: tdComponent.content,
            column: tdComponent.column.config.id,
            rowObject: tdComponent.row,
            rowIndex: rowIndex
        };
        this.editCell.emit(editCellEvent);
    };
    /**
     * @private
     * @template T
     * @param {?} propertyName
     * @param {?} defaultValue
     * @return {?}
     */
    TbodyComponent.prototype.delegateInput = /**
     * @private
     * @template T
     * @param {?} propertyName
     * @param {?} defaultValue
     * @return {?}
     */
    function (propertyName, defaultValue) {
        if (!this.tableComponent) {
            // console.warn('TbodyComponent: No parent "tableComponent" was found.' +
            //   'Input "' + propertyName + '" was also not provided.');
            return defaultValue;
        }
        return (/** @type {?} */ (((/** @type {?} */ (this.tableComponent)))[propertyName]));
    };
    TbodyComponent.decorators = [
        { type: Component, args: [{
                    selector: '[iw-tbody]',
                    template: "<ng-content></ng-content>\n\n<ng-template [ngIf]=\"!customTemplate\">\n  <tr *ngFor=\"let row of rows; let rowIndex = index\" (click)=\"onRowClicked(rowIndex, row)\" >\n    <ng-template ngFor let-columnName [ngForOf]=\"visibleColumns\" let-index=\"index\">\n      <td *ngIf=\"addingColumnIndex == index\" class=\"combo-td\"></td>\n      <td\n        #tdComponent\n        iw-td\n        [attr.contenteditable]=\"inlineEditingEnabled\"\n        (blur)=\"onEditCell(tdComponent, rowIndex)\"\n        [column]=\"column(columnName)\"\n        [row]=\"row\"\n        [class.is-sorted]=\"isSorted(column(columnName), undefined)\"\n        attr.headers=\"col-id-{{ column(columnName)?.config.id }}\">\n      </td>\n    </ng-template>\n    <td *ngIf=\"changeColumnVisibility\" class=\"combo-td\"> <!-- empty for combobox --> </td>\n  </tr>\n</ng-template>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    TbodyComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: TableInitService },
        { type: TableComponent, decorators: [{ type: Optional }] }
    ]; };
    TbodyComponent.propDecorators = {
        addingColumnIndex: [{ type: Input }],
        inlineEditingEnabled: [{ type: Input }],
        rows: [{ type: Input }],
        columnsConfig: [{ type: Input }],
        visibleColumns: [{ type: Input }],
        rowClick: [{ type: Output }],
        editCell: [{ type: Output }]
    };
    return TbodyComponent;
}());
export { TbodyComponent };
if (false) {
    /** @type {?} */
    TbodyComponent.prototype.addingColumnIndex;
    /** @type {?} */
    TbodyComponent.prototype.rowClick;
    /** @type {?} */
    TbodyComponent.prototype.editCell;
    /** @type {?} */
    TbodyComponent.prototype.customTemplate;
    /**
     * @type {?}
     * @private
     */
    TbodyComponent.prototype._columnsConfig;
    /**
     * @type {?}
     * @private
     */
    TbodyComponent.prototype._columnsLookup;
    /**
     * @type {?}
     * @private
     */
    TbodyComponent.prototype._rows;
    /**
     * @type {?}
     * @private
     */
    TbodyComponent.prototype._visibleColumns;
    /**
     * @type {?}
     * @private
     */
    TbodyComponent.prototype.isEditable;
    /**
     * @type {?}
     * @private
     */
    TbodyComponent.prototype.tableComponent;
    /**
     * @type {?}
     * @private
     */
    TbodyComponent.prototype.customCells;
    /**
     * @type {?}
     * @private
     */
    TbodyComponent.prototype.cellTemplates;
    /**
     * @type {?}
     * @private
     */
    TbodyComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    TbodyComponent.prototype.tableInitService;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGJvZHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXBhY2svIiwic291cmNlcyI6WyJsaWIvdGFibGUvdGJvZHkvdGJvZHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFJekQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRXBELE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsUUFBUSxFQUNSLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQUV2QjtJQW1DRSx3QkFDVSxVQUFzQixFQUN0QixnQkFBa0MsRUFDOUIsY0FBOEI7UUFGbEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBaEJsQyxhQUFRLEdBQWdDLElBQUksWUFBWSxFQUFpQixDQUFDO1FBQzFFLGFBQVEsR0FBZ0MsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFFcEYsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFReEIsZ0JBQVcsR0FBYSxFQUFFLENBQUM7UUFDM0Isa0JBQWEsR0FBMkMsRUFBRSxDQUFDO1FBT2pFLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0lBQ3ZDLENBQUM7SUFqQ0Qsc0JBQWEsZ0RBQW9COzs7O1FBdURqQztZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlFLENBQUM7Ozs7O1FBekRELFVBQWtDLFVBQW1CO1lBQ25ELElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBQUEsQ0FBQztJQUNGLHNCQUFhLGdDQUFJOzs7O1FBd0NqQjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxJ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Q0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7Ozs7O0lBRU8sc0NBQWE7Ozs7Ozs7SUFBckIsVUFBeUIsWUFBb0IsRUFBRSxZQUFlO1FBQzVELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3hCLHlFQUF5RTtZQUN6RSw0REFBNEQ7WUFDNUQsT0FBTyxZQUFZLENBQUM7U0FDckI7UUFFRCxPQUFPLG1CQUFBLENBQUMsbUJBQUssSUFBSSxDQUFDLGNBQWMsRUFBQSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUssQ0FBQztJQUN2RCxDQUFDOztnQkFuSEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0Qiw2MUJBQW1DOztpQkFFcEM7Ozs7Z0JBWkMsVUFBVTtnQkFUSixnQkFBZ0I7Z0JBSWhCLGNBQWMsdUJBbURqQixRQUFROzs7b0NBL0JWLEtBQUs7dUNBQ0wsS0FBSzt1QkFHTCxLQUFLO2dDQUdMLEtBQUs7aUNBR0wsS0FBSzsyQkFJTCxNQUFNOzJCQUNOLE1BQU07O0lBOEZULHFCQUFDO0NBQUEsQUFwSEQsSUFvSEM7U0EvR1ksY0FBYzs7O0lBRXpCLDJDQUFtQzs7SUFjbkMsa0NBQW9GOztJQUNwRixrQ0FBb0Y7O0lBRXBGLHdDQUFnQzs7Ozs7SUFFaEMsd0NBQXVDOzs7OztJQUN2Qyx3Q0FBcUM7Ozs7O0lBQ3JDLCtCQUFxQjs7Ozs7SUFDckIseUNBQWtDOzs7OztJQUNsQyxvQ0FBNEI7Ozs7O0lBQzVCLHdDQUF1Qzs7Ozs7SUFDdkMscUNBQW1DOzs7OztJQUNuQyx1Q0FBbUU7Ozs7O0lBR2pFLG9DQUE4Qjs7Ozs7SUFDOUIsMENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUZENvbXBvbmVudH0gZnJvbSAnLi8uLi90ZC90ZC5jb21wb25lbnQnO1xuaW1wb3J0IHtUYWJsZUluaXRTZXJ2aWNlfSBmcm9tICcuLy4uL3RhYmxlLWluaXQuc2VydmljZSc7XG5pbXBvcnQge0NvbHVtbkNvbmZpZywgQ29sdW1uTG9va3VwfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQge0NvbHVtblN0YXRlfSBmcm9tICcuLy4uL2NvbHVtbi1zdGF0ZS5jbGFzcyc7XG5pbXBvcnQge0VkaXRDZWxsRXZlbnQsIFJvd0NsaWNrRXZlbnR9IGZyb20gJy4uL2V2ZW50cyc7XG5pbXBvcnQge1RhYmxlQ29tcG9uZW50fSBmcm9tICcuLy4uL3RhYmxlLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbaXctdGJvZHldJyxcbiAgdGVtcGxhdGVVcmw6ICd0Ym9keS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3Rib2R5LmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUYm9keUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICAvLyBOT1RFOiBub3Qgc3VyZSB3ZWF0aGVyIHRoaXMgc2hvdWxkIGJlIGEgcHVibGljIEFQSVxuICBASW5wdXQoKSBhZGRpbmdDb2x1bW5JbmRleDogbnVtYmVyO1xuICBASW5wdXQoKSBzZXQgaW5saW5lRWRpdGluZ0VuYWJsZWQoaXNFZGl0YWJsZTogYm9vbGVhbikge1xuICAgIHRoaXMuaXNFZGl0YWJsZSA9IGlzRWRpdGFibGU7XG4gIH07XG4gIEBJbnB1dCgpIHNldCByb3dzKHJvd3M6IGFueVtdKSB7XG4gICAgdGhpcy5fcm93cyA9IHJvd3M7XG4gIH1cbiAgQElucHV0KCkgc2V0IGNvbHVtbnNDb25maWcoY29sdW1uc0NvbmZpZzogQ29sdW1uQ29uZmlnW10pIHtcbiAgICB0aGlzLl9jb2x1bW5zQ29uZmlnID0gY29sdW1uc0NvbmZpZztcbiAgfVxuICBASW5wdXQoKSBzZXQgdmlzaWJsZUNvbHVtbnModmlzaWJsZUNvbHVtbnM6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5fdmlzaWJsZUNvbHVtbnMgPSB2aXNpYmxlQ29sdW1ucztcbiAgfVxuXG4gIEBPdXRwdXQoKSByb3dDbGljazogRXZlbnRFbWl0dGVyPFJvd0NsaWNrRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxSb3dDbGlja0V2ZW50PigpO1xuICBAT3V0cHV0KCkgZWRpdENlbGw6IEV2ZW50RW1pdHRlcjxFZGl0Q2VsbEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8RWRpdENlbGxFdmVudD4oKTtcblxuICBjdXN0b21UZW1wbGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX2NvbHVtbnNDb25maWc6IENvbHVtbkNvbmZpZ1tdO1xuICBwcml2YXRlIF9jb2x1bW5zTG9va3VwOiBDb2x1bW5Mb29rdXA7XG4gIHByaXZhdGUgX3Jvd3M6IGFueVtdO1xuICBwcml2YXRlIF92aXNpYmxlQ29sdW1uczogc3RyaW5nW107XG4gIHByaXZhdGUgaXNFZGl0YWJsZTogYm9vbGVhbjtcbiAgcHJpdmF0ZSB0YWJsZUNvbXBvbmVudDogVGFibGVDb21wb25lbnQ7XG4gIHByaXZhdGUgY3VzdG9tQ2VsbHM6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgY2VsbFRlbXBsYXRlczoge1tjb2x1bW5JZDogc3RyaW5nXTogVGVtcGxhdGVSZWY8YW55Pn0gPSB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSB0YWJsZUluaXRTZXJ2aWNlOiBUYWJsZUluaXRTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHRhYmxlQ29tcG9uZW50OiBUYWJsZUNvbXBvbmVudFxuICApIHtcbiAgICB0aGlzLnRhYmxlQ29tcG9uZW50ID0gdGFibGVDb21wb25lbnQ7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBJbiBvdXIgdGVtcGxhdGUgd2UgaGF2ZSBOIGVsZW1lbnRzLCB3aGVyZSBOIGlzIG51bWJlciBvZiByb3dzLlxuICAgICAgLy8gSWYgdGhlcmUgaXMgbW9yZSBlbGVtZW50cywgdGhleSBtdXN0IGJlIHByb2plY3RlZCA9PiBjdXN0b20gdGVtcGxhdGUgaXMgdXNlZFxuICAgICAgdGhpcy5jdXN0b21UZW1wbGF0ZSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCA+IHRoaXMucm93cy5sZW5ndGg7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgcm93cygpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jvd3MgfHwgdGhpcy5kZWxlZ2F0ZUlucHV0KCdyb3dzJywgW10pO1xuICB9XG5cbiAgZ2V0IGNvbHVtbnNDb25maWcoKTogQ29sdW1uQ29uZmlnW10ge1xuICAgIHJldHVybiB0aGlzLl9jb2x1bW5zQ29uZmlnIHx8IHRoaXMuZGVsZWdhdGVJbnB1dCgnY29sdW1uc0NvbmZpZycsIFtdKTtcbiAgfTtcblxuICBnZXQgdmlzaWJsZUNvbHVtbnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl92aXNpYmxlQ29sdW1ucyB8fCB0aGlzLmRlbGVnYXRlSW5wdXQoJ3Zpc2libGVDb2x1bW5zJywgW10pO1xuICB9O1xuXG4gIGdldCBpbmxpbmVFZGl0aW5nRW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0VkaXRhYmxlIHx8IHRoaXMuZGVsZWdhdGVJbnB1dCgnaW5saW5lRWRpdGluZ0VuYWJsZWQnLCBmYWxzZSk7XG4gIH1cblxuICBnZXQgY29sdW1uc0xvb2t1cCgpOiBDb2x1bW5Mb29rdXAge1xuICAgIGxldCBjb2x1bW5zTG9va3VwID0gdGhpcy5fY29sdW1uc0xvb2t1cCB8fFxuICAgICAgKHRoaXMudGFibGVDb21wb25lbnQgJiYgdGhpcy50YWJsZUNvbXBvbmVudC5jb2x1bW5zTG9va3VwKTtcbiAgICBpZiAoIWNvbHVtbnNMb29rdXApIHtcbiAgICAgIGNvbHVtbnNMb29rdXAgPSB0aGlzLnRhYmxlSW5pdFNlcnZpY2UuY29sdW1uc0NvbmZpZzJMb29rdXAodGhpcy5jb2x1bW5zQ29uZmlnKTtcbiAgICAgIHRoaXMuX2NvbHVtbnNMb29rdXAgPSBjb2x1bW5zTG9va3VwO1xuICAgIH1cbiAgICByZXR1cm4gY29sdW1uc0xvb2t1cDtcbiAgfVxuXG4gIGdldCBjaGFuZ2VDb2x1bW5WaXNpYmlsaXR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnRhYmxlQ29tcG9uZW50LmNoYW5nZUNvbHVtblZpc2liaWxpdHk7XG4gIH1cblxuICBpc1NvcnRlZChjb2x1bW46IENvbHVtblN0YXRlLCBkaXJlY3Rpb246IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLnRhYmxlQ29tcG9uZW50LmlzU29ydGVkKGNvbHVtbiwgZGlyZWN0aW9uKTtcbiAgfVxuXG4gIGNvbHVtbihjb2x1bW5OYW1lOiBzdHJpbmcpOiBDb2x1bW5TdGF0ZSB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1uc0xvb2t1cFtjb2x1bW5OYW1lXTtcbiAgfVxuXG4gIG9uUm93Q2xpY2tlZChyb3dJbmRleDogbnVtYmVyLCByb3dPYmplY3Q6IGFueSkge1xuICAgIHRoaXMucm93Q2xpY2suZW1pdCh7XG4gICAgICByb3dJbmRleCxcbiAgICAgIHJvd09iamVjdFxuICAgIH0pO1xuICB9XG5cbiAgb25FZGl0Q2VsbCh0ZENvbXBvbmVudDogVGRDb21wb25lbnQsIHJvd0luZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoIXRkQ29tcG9uZW50LmlzQ2hhbmdlZCB8fCAhdGRDb21wb25lbnQuY29sdW1uKSB7IHJldHVybjsgfVxuICAgIGxldCBlZGl0Q2VsbEV2ZW50OiBFZGl0Q2VsbEV2ZW50ID0ge1xuICAgICAgbmV3VmFsdWU6IHRkQ29tcG9uZW50LmNvbnRlbnQsXG4gICAgICBjb2x1bW46IHRkQ29tcG9uZW50LmNvbHVtbi5jb25maWcuaWQsXG4gICAgICByb3dPYmplY3Q6IHRkQ29tcG9uZW50LnJvdyxcbiAgICAgIHJvd0luZGV4XG4gICAgfTtcbiAgICB0aGlzLmVkaXRDZWxsLmVtaXQoZWRpdENlbGxFdmVudCk7XG4gIH1cblxuICBwcml2YXRlIGRlbGVnYXRlSW5wdXQ8VD4ocHJvcGVydHlOYW1lOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogVCk6IFQge1xuICAgIGlmICghdGhpcy50YWJsZUNvbXBvbmVudCkge1xuICAgICAgLy8gY29uc29sZS53YXJuKCdUYm9keUNvbXBvbmVudDogTm8gcGFyZW50IFwidGFibGVDb21wb25lbnRcIiB3YXMgZm91bmQuJyArXG4gICAgICAvLyAgICdJbnB1dCBcIicgKyBwcm9wZXJ0eU5hbWUgKyAnXCIgd2FzIGFsc28gbm90IHByb3ZpZGVkLicpO1xuICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gKDxhbnk+dGhpcy50YWJsZUNvbXBvbmVudClbcHJvcGVydHlOYW1lXSBhcyBUO1xuICB9XG59XG4iXX0=