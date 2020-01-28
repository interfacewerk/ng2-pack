/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/tbody/tbody.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TableInitService } from './../table-init.service';
import { TableComponent } from './../table.component';
import { Component, ElementRef, EventEmitter, Input, Optional, Output, } from '@angular/core';
export class TbodyComponent {
    /**
     * @param {?} elementRef
     * @param {?} tableInitService
     * @param {?} tableComponent
     */
    constructor(elementRef, tableInitService, tableComponent) {
        this.elementRef = elementRef;
        this.tableInitService = tableInitService;
        this.rowClick = new EventEmitter();
        this.editCell = new EventEmitter();
        this.customTemplate = false;
        this.customCells = [];
        this.cellTemplates = {};
        this.tableComponent = tableComponent;
    }
    /**
     * @param {?} isEditable
     * @return {?}
     */
    set inlineEditingEnabled(isEditable) {
        this.isEditable = isEditable;
    }
    ;
    /**
     * @param {?} rows
     * @return {?}
     */
    set rows(rows) {
        this._rows = rows;
    }
    /**
     * @param {?} columnsConfig
     * @return {?}
     */
    set columnsConfig(columnsConfig) {
        this._columnsConfig = columnsConfig;
    }
    /**
     * @param {?} visibleColumns
     * @return {?}
     */
    set visibleColumns(visibleColumns) {
        this._visibleColumns = visibleColumns;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            // In our template we have N elements, where N is number of rows.
            // If there is more elements, they must be projected => custom template is used
            this.customTemplate = this.elementRef.nativeElement.children.length > this.rows.length;
        }));
    }
    /**
     * @return {?}
     */
    get rows() {
        return this._rows || this.delegateInput('rows', []);
    }
    /**
     * @return {?}
     */
    get columnsConfig() {
        return this._columnsConfig || this.delegateInput('columnsConfig', []);
    }
    ;
    /**
     * @return {?}
     */
    get visibleColumns() {
        return this._visibleColumns || this.delegateInput('visibleColumns', []);
    }
    ;
    /**
     * @return {?}
     */
    get inlineEditingEnabled() {
        return this.isEditable || this.delegateInput('inlineEditingEnabled', false);
    }
    /**
     * @return {?}
     */
    get columnsLookup() {
        /** @type {?} */
        let columnsLookup = this._columnsLookup ||
            (this.tableComponent && this.tableComponent.columnsLookup);
        if (!columnsLookup) {
            columnsLookup = this.tableInitService.columnsConfig2Lookup(this.columnsConfig);
            this._columnsLookup = columnsLookup;
        }
        return columnsLookup;
    }
    /**
     * @return {?}
     */
    get changeColumnVisibility() {
        return this.tableComponent.changeColumnVisibility;
    }
    /**
     * @param {?} column
     * @param {?} direction
     * @return {?}
     */
    isSorted(column, direction) {
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
     * @param {?} rowIndex
     * @param {?} rowObject
     * @return {?}
     */
    onRowClicked(rowIndex, rowObject) {
        this.rowClick.emit({
            rowIndex,
            rowObject
        });
    }
    /**
     * @param {?} tdComponent
     * @param {?} rowIndex
     * @return {?}
     */
    onEditCell(tdComponent, rowIndex) {
        if (!tdComponent.isChanged || !tdComponent.column) {
            return;
        }
        /** @type {?} */
        let editCellEvent = {
            newValue: tdComponent.content,
            column: tdComponent.column.config.id,
            rowObject: tdComponent.row,
            rowIndex
        };
        this.editCell.emit(editCellEvent);
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
            // console.warn('TbodyComponent: No parent "tableComponent" was found.' +
            //   'Input "' + propertyName + '" was also not provided.');
            return defaultValue;
        }
        return (/** @type {?} */ (((/** @type {?} */ (this.tableComponent)))[propertyName]));
    }
}
TbodyComponent.decorators = [
    { type: Component, args: [{
                selector: '[iw-tbody]',
                template: "<ng-content></ng-content>\n\n<ng-template [ngIf]=\"!customTemplate\">\n  <tr *ngFor=\"let row of rows; let rowIndex = index\" (click)=\"onRowClicked(rowIndex, row)\" >\n    <ng-template ngFor let-columnName [ngForOf]=\"visibleColumns\" let-index=\"index\">\n      <td *ngIf=\"addingColumnIndex == index\" class=\"combo-td\"></td>\n      <td\n        #tdComponent\n        iw-td\n        [attr.contenteditable]=\"inlineEditingEnabled\"\n        (blur)=\"onEditCell(tdComponent, rowIndex)\"\n        [column]=\"column(columnName)\"\n        [row]=\"row\"\n        [class.is-sorted]=\"isSorted(column(columnName), undefined)\"\n        attr.headers=\"col-id-{{ column(columnName)?.config.id }}\">\n      </td>\n    </ng-template>\n    <td *ngIf=\"changeColumnVisibility\" class=\"combo-td\"> <!-- empty for combobox --> </td>\n  </tr>\n</ng-template>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
TbodyComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: TableInitService },
    { type: TableComponent, decorators: [{ type: Optional }] }
];
TbodyComponent.propDecorators = {
    addingColumnIndex: [{ type: Input }],
    inlineEditingEnabled: [{ type: Input }],
    rows: [{ type: Input }],
    columnsConfig: [{ type: Input }],
    visibleColumns: [{ type: Input }],
    rowClick: [{ type: Output }],
    editCell: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGJvZHkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXBhY2svIiwic291cmNlcyI6WyJsaWIvdGFibGUvdGJvZHkvdGJvZHkuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFJekQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRXBELE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsUUFBUSxFQUNSLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQztBQU92QixNQUFNLE9BQU8sY0FBYzs7Ozs7O0lBOEJ6QixZQUNVLFVBQXNCLEVBQ3RCLGdCQUFrQyxFQUM5QixjQUE4QjtRQUZsQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFoQmxDLGFBQVEsR0FBZ0MsSUFBSSxZQUFZLEVBQWlCLENBQUM7UUFDMUUsYUFBUSxHQUFnQyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUVwRixtQkFBYyxHQUFZLEtBQUssQ0FBQztRQVF4QixnQkFBVyxHQUFhLEVBQUUsQ0FBQztRQUMzQixrQkFBYSxHQUEyQyxFQUFFLENBQUM7UUFPakUsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7SUFDdkMsQ0FBQzs7Ozs7SUFqQ0QsSUFBYSxvQkFBb0IsQ0FBQyxVQUFtQjtRQUNuRCxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFDO0lBQUEsQ0FBQzs7Ozs7SUFDRixJQUFhLElBQUksQ0FBQyxJQUFXO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBQ0QsSUFBYSxhQUFhLENBQUMsYUFBNkI7UUFDdEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7SUFDdEMsQ0FB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RUFBeUU7WUFDekUsNERBQTREO1lBQzVELE9BQU8sWUFBWSxDQUFDO1NBQ3JCO1FBRUQsT0FBTyxtQkFBQSxDQUFDLG1CQUFLLElBQUksQ0FBQyxjQUFjLEVBQUEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFLLENBQUM7SUFDdkQsQ0FBQzs7O1lBbkhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsNjFCQUFtQzs7YUFFcEM7Ozs7WUFaQyxVQUFVO1lBVEosZ0JBQWdCO1lBSWhCLGNBQWMsdUJBbURqQixRQUFROzs7Z0NBL0JWLEtBQUs7bUNBQ0wsS0FBSzttQkFHTCxLQUFLOzRCQUdMLEtBQUs7NkJBR0wsS0FBSzt1QkFJTCxNQUFNO3VCQUNOLE1BQU07Ozs7SUFmUCwyQ0FBbUM7O0lBY25DLGtDQUFvRjs7SUFDcEYsa0NBQW9GOztJQUVwRix3Q0FBZ0M7Ozs7O0lBRWhDLHdDQUF1Qzs7Ozs7SUFDdkMsd0NBQXFDOzs7OztJQUNyQywrQkFBcUI7Ozs7O0lBQ3JCLHlDQUFrQzs7Ozs7SUFDbEMsb0NBQTRCOzs7OztJQUM1Qix3Q0FBdUM7Ozs7O0lBQ3ZDLHFDQUFtQzs7Ozs7SUFDbkMsdUNBQW1FOzs7OztJQUdqRSxvQ0FBOEI7Ozs7O0lBQzlCLDBDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7VGRDb21wb25lbnR9IGZyb20gJy4vLi4vdGQvdGQuY29tcG9uZW50JztcbmltcG9ydCB7VGFibGVJbml0U2VydmljZX0gZnJvbSAnLi8uLi90YWJsZS1pbml0LnNlcnZpY2UnO1xuaW1wb3J0IHtDb2x1bW5Db25maWcsIENvbHVtbkxvb2t1cH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHtDb2x1bW5TdGF0ZX0gZnJvbSAnLi8uLi9jb2x1bW4tc3RhdGUuY2xhc3MnO1xuaW1wb3J0IHtFZGl0Q2VsbEV2ZW50LCBSb3dDbGlja0V2ZW50fSBmcm9tICcuLi9ldmVudHMnO1xuaW1wb3J0IHtUYWJsZUNvbXBvbmVudH0gZnJvbSAnLi8uLi90YWJsZS5jb21wb25lbnQnO1xuXG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBPdXRwdXQsXG4gIFRlbXBsYXRlUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2l3LXRib2R5XScsXG4gIHRlbXBsYXRlVXJsOiAndGJvZHkuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90Ym9keS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGJvZHlDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgLy8gTk9URTogbm90IHN1cmUgd2VhdGhlciB0aGlzIHNob3VsZCBiZSBhIHB1YmxpYyBBUElcbiAgQElucHV0KCkgYWRkaW5nQ29sdW1uSW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgc2V0IGlubGluZUVkaXRpbmdFbmFibGVkKGlzRWRpdGFibGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmlzRWRpdGFibGUgPSBpc0VkaXRhYmxlO1xuICB9O1xuICBASW5wdXQoKSBzZXQgcm93cyhyb3dzOiBhbnlbXSkge1xuICAgIHRoaXMuX3Jvd3MgPSByb3dzO1xuICB9XG4gIEBJbnB1dCgpIHNldCBjb2x1bW5zQ29uZmlnKGNvbHVtbnNDb25maWc6IENvbHVtbkNvbmZpZ1tdKSB7XG4gICAgdGhpcy5fY29sdW1uc0NvbmZpZyA9IGNvbHVtbnNDb25maWc7XG4gIH1cbiAgQElucHV0KCkgc2V0IHZpc2libGVDb2x1bW5zKHZpc2libGVDb2x1bW5zOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuX3Zpc2libGVDb2x1bW5zID0gdmlzaWJsZUNvbHVtbnM7XG4gIH1cblxuICBAT3V0cHV0KCkgcm93Q2xpY2s6IEV2ZW50RW1pdHRlcjxSb3dDbGlja0V2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8Um93Q2xpY2tFdmVudD4oKTtcbiAgQE91dHB1dCgpIGVkaXRDZWxsOiBFdmVudEVtaXR0ZXI8RWRpdENlbGxFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEVkaXRDZWxsRXZlbnQ+KCk7XG5cbiAgY3VzdG9tVGVtcGxhdGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIF9jb2x1bW5zQ29uZmlnOiBDb2x1bW5Db25maWdbXTtcbiAgcHJpdmF0ZSBfY29sdW1uc0xvb2t1cDogQ29sdW1uTG9va3VwO1xuICBwcml2YXRlIF9yb3dzOiBhbnlbXTtcbiAgcHJpdmF0ZSBfdmlzaWJsZUNvbHVtbnM6IHN0cmluZ1tdO1xuICBwcml2YXRlIGlzRWRpdGFibGU6IGJvb2xlYW47XG4gIHByaXZhdGUgdGFibGVDb21wb25lbnQ6IFRhYmxlQ29tcG9uZW50O1xuICBwcml2YXRlIGN1c3RvbUNlbGxzOiBzdHJpbmdbXSA9IFtdO1xuICBwcml2YXRlIGNlbGxUZW1wbGF0ZXM6IHtbY29sdW1uSWQ6IHN0cmluZ106IFRlbXBsYXRlUmVmPGFueT59ID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgdGFibGVJbml0U2VydmljZTogVGFibGVJbml0U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSB0YWJsZUNvbXBvbmVudDogVGFibGVDb21wb25lbnRcbiAgKSB7XG4gICAgdGhpcy50YWJsZUNvbXBvbmVudCA9IHRhYmxlQ29tcG9uZW50O1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gSW4gb3VyIHRlbXBsYXRlIHdlIGhhdmUgTiBlbGVtZW50cywgd2hlcmUgTiBpcyBudW1iZXIgb2Ygcm93cy5cbiAgICAgIC8vIElmIHRoZXJlIGlzIG1vcmUgZWxlbWVudHMsIHRoZXkgbXVzdCBiZSBwcm9qZWN0ZWQgPT4gY3VzdG9tIHRlbXBsYXRlIGlzIHVzZWRcbiAgICAgIHRoaXMuY3VzdG9tVGVtcGxhdGUgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jaGlsZHJlbi5sZW5ndGggPiB0aGlzLnJvd3MubGVuZ3RoO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IHJvd3MoKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9yb3dzIHx8IHRoaXMuZGVsZWdhdGVJbnB1dCgncm93cycsIFtdKTtcbiAgfVxuXG4gIGdldCBjb2x1bW5zQ29uZmlnKCk6IENvbHVtbkNvbmZpZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fY29sdW1uc0NvbmZpZyB8fCB0aGlzLmRlbGVnYXRlSW5wdXQoJ2NvbHVtbnNDb25maWcnLCBbXSk7XG4gIH07XG5cbiAgZ2V0IHZpc2libGVDb2x1bW5zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5fdmlzaWJsZUNvbHVtbnMgfHwgdGhpcy5kZWxlZ2F0ZUlucHV0KCd2aXNpYmxlQ29sdW1ucycsIFtdKTtcbiAgfTtcblxuICBnZXQgaW5saW5lRWRpdGluZ0VuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXNFZGl0YWJsZSB8fCB0aGlzLmRlbGVnYXRlSW5wdXQoJ2lubGluZUVkaXRpbmdFbmFibGVkJywgZmFsc2UpO1xuICB9XG5cbiAgZ2V0IGNvbHVtbnNMb29rdXAoKTogQ29sdW1uTG9va3VwIHtcbiAgICBsZXQgY29sdW1uc0xvb2t1cCA9IHRoaXMuX2NvbHVtbnNMb29rdXAgfHxcbiAgICAgICh0aGlzLnRhYmxlQ29tcG9uZW50ICYmIHRoaXMudGFibGVDb21wb25lbnQuY29sdW1uc0xvb2t1cCk7XG4gICAgaWYgKCFjb2x1bW5zTG9va3VwKSB7XG4gICAgICBjb2x1bW5zTG9va3VwID0gdGhpcy50YWJsZUluaXRTZXJ2aWNlLmNvbHVtbnNDb25maWcyTG9va3VwKHRoaXMuY29sdW1uc0NvbmZpZyk7XG4gICAgICB0aGlzLl9jb2x1bW5zTG9va3VwID0gY29sdW1uc0xvb2t1cDtcbiAgICB9XG4gICAgcmV0dXJuIGNvbHVtbnNMb29rdXA7XG4gIH1cblxuICBnZXQgY2hhbmdlQ29sdW1uVmlzaWJpbGl0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy50YWJsZUNvbXBvbmVudC5jaGFuZ2VDb2x1bW5WaXNpYmlsaXR5O1xuICB9XG5cbiAgaXNTb3J0ZWQoY29sdW1uOiBDb2x1bW5TdGF0ZSwgZGlyZWN0aW9uOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy50YWJsZUNvbXBvbmVudC5pc1NvcnRlZChjb2x1bW4sIGRpcmVjdGlvbik7XG4gIH1cblxuICBjb2x1bW4oY29sdW1uTmFtZTogc3RyaW5nKTogQ29sdW1uU3RhdGUge1xuICAgIHJldHVybiB0aGlzLmNvbHVtbnNMb29rdXBbY29sdW1uTmFtZV07XG4gIH1cblxuICBvblJvd0NsaWNrZWQocm93SW5kZXg6IG51bWJlciwgcm93T2JqZWN0OiBhbnkpIHtcbiAgICB0aGlzLnJvd0NsaWNrLmVtaXQoe1xuICAgICAgcm93SW5kZXgsXG4gICAgICByb3dPYmplY3RcbiAgICB9KTtcbiAgfVxuXG4gIG9uRWRpdENlbGwodGRDb21wb25lbnQ6IFRkQ29tcG9uZW50LCByb3dJbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKCF0ZENvbXBvbmVudC5pc0NoYW5nZWQgfHwgIXRkQ29tcG9uZW50LmNvbHVtbikgeyByZXR1cm47IH1cbiAgICBsZXQgZWRpdENlbGxFdmVudDogRWRpdENlbGxFdmVudCA9IHtcbiAgICAgIG5ld1ZhbHVlOiB0ZENvbXBvbmVudC5jb250ZW50LFxuICAgICAgY29sdW1uOiB0ZENvbXBvbmVudC5jb2x1bW4uY29uZmlnLmlkLFxuICAgICAgcm93T2JqZWN0OiB0ZENvbXBvbmVudC5yb3csXG4gICAgICByb3dJbmRleFxuICAgIH07XG4gICAgdGhpcy5lZGl0Q2VsbC5lbWl0KGVkaXRDZWxsRXZlbnQpO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWxlZ2F0ZUlucHV0PFQ+KHByb3BlcnR5TmFtZTogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IFQpOiBUIHtcbiAgICBpZiAoIXRoaXMudGFibGVDb21wb25lbnQpIHtcbiAgICAgIC8vIGNvbnNvbGUud2FybignVGJvZHlDb21wb25lbnQ6IE5vIHBhcmVudCBcInRhYmxlQ29tcG9uZW50XCIgd2FzIGZvdW5kLicgK1xuICAgICAgLy8gICAnSW5wdXQgXCInICsgcHJvcGVydHlOYW1lICsgJ1wiIHdhcyBhbHNvIG5vdCBwcm92aWRlZC4nKTtcbiAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuICg8YW55PnRoaXMudGFibGVDb21wb25lbnQpW3Byb3BlcnR5TmFtZV0gYXMgVDtcbiAgfVxufVxuIl19