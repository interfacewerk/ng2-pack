/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/table-init.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ColumnState } from './column-state.class';
import { Injectable } from '@angular/core';
var TableInitService = /** @class */ (function () {
    function TableInitService() {
    }
    /**
     * @param {?} rows
     * @return {?}
     */
    TableInitService.prototype.detectColumnConfiguration = /**
     * @param {?} rows
     * @return {?}
     */
    function (rows) {
        /** @type {?} */
        var columnsLookup = this.detectColumnLookup(rows);
        return [columnsLookup, this.columnsLookup2Config(columnsLookup)];
    };
    /**
     * @param {?} rows
     * @return {?}
     */
    TableInitService.prototype.detectColumnLookup = /**
     * @param {?} rows
     * @return {?}
     */
    function (rows) {
        /** @type {?} */
        var columnsLookup = {};
        rows.forEach((/**
         * @param {?} row
         * @return {?}
         */
        function (row) {
            Object.keys(row).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                if (typeof columnsLookup[key] === 'undefined') {
                    /** @type {?} */
                    var columnConfig = {
                        id: key,
                        sortType: typeof row[key],
                        sortingDisabled: false,
                        initialSortDirection: 'asc'
                    };
                    columnsLookup[key] = new ColumnState(columnConfig);
                }
            }));
        }));
        return columnsLookup;
    };
    /**
     * @param {?} columnsConfig
     * @return {?}
     */
    TableInitService.prototype.columnsConfig2Lookup = /**
     * @param {?} columnsConfig
     * @return {?}
     */
    function (columnsConfig) {
        /** @type {?} */
        var columnsLookup = {};
        columnsConfig.forEach((/**
         * @param {?} columnConfig
         * @return {?}
         */
        function (columnConfig) {
            /** @type {?} */
            var activeFields = [];
            if (typeof columnConfig.subFields !== 'undefined') {
                activeFields = columnConfig.subFields
                    .filter((/**
                 * @param {?} subfield
                 * @return {?}
                 */
                function (subfield) { return subfield.isVisible; }))
                    .map((/**
                 * @param {?} subfield
                 * @return {?}
                 */
                function (subfield) { return subfield.id; }));
            }
            /** @type {?} */
            var columnState = new ColumnState(columnConfig);
            columnState.activeFields = activeFields;
            columnsLookup[columnConfig.id] = columnState;
        }));
        return columnsLookup;
    };
    /**
     * @param {?} columnsLookup
     * @return {?}
     */
    TableInitService.prototype.columnsLookup2Config = /**
     * @param {?} columnsLookup
     * @return {?}
     */
    function (columnsLookup) {
        /** @type {?} */
        var columnsConfig = [];
        for (var columnName in columnsLookup) {
            if (columnsLookup.hasOwnProperty(columnName)) {
                columnsConfig.push(columnsLookup[columnName].config);
            }
        }
        return columnsConfig;
    };
    TableInitService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TableInitService.ctorParameters = function () { return []; };
    return TableInitService;
}());
export { TableInitService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaW5pdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXBhY2svIiwic291cmNlcyI6WyJsaWIvdGFibGUvdGFibGUtaW5pdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRWpELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0M7SUFHRTtJQUFnQixDQUFDOzs7OztJQUVqQixvREFBeUI7Ozs7SUFBekIsVUFBMEIsSUFBVzs7WUFDL0IsYUFBYSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7UUFDakQsT0FBTyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7OztJQUVELDZDQUFrQjs7OztJQUFsQixVQUFtQixJQUFXOztZQUN4QixhQUFhLEdBQWlCLEVBQUU7UUFDcEMsSUFBSSxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLEdBQUc7WUFDZCxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU87Ozs7WUFBQyxVQUFBLEdBQUc7Z0JBQzFCLElBQUksT0FBTyxhQUFhLENBQUMsR0FBRyxDQUFDLEtBQUssV0FBVyxFQUFFOzt3QkFDekMsWUFBWSxHQUFpQjt3QkFDL0IsRUFBRSxFQUFFLEdBQUc7d0JBQ1AsUUFBUSxFQUFFLE9BQU8sR0FBRyxDQUFDLEdBQUcsQ0FBQzt3QkFDekIsZUFBZSxFQUFFLEtBQUs7d0JBQ3RCLG9CQUFvQixFQUFFLEtBQUs7cUJBQzVCO29CQUNELGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDcEQ7WUFDSCxDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCwrQ0FBb0I7Ozs7SUFBcEIsVUFBcUIsYUFBNkI7O1lBQzVDLGFBQWEsR0FBaUIsRUFBRTtRQUNwQyxhQUFhLENBQUMsT0FBTzs7OztRQUFDLFVBQUMsWUFBWTs7Z0JBQzdCLFlBQVksR0FBYSxFQUFFO1lBQy9CLElBQUksT0FBTyxZQUFZLENBQUMsU0FBUyxLQUFLLFdBQVcsRUFBRTtnQkFDakQsWUFBWSxHQUFHLFlBQVksQ0FBQyxTQUFTO3FCQUNsQyxNQUFNOzs7O2dCQUFDLFVBQUMsUUFBUSxJQUFLLE9BQUEsUUFBUSxDQUFDLFNBQVMsRUFBbEIsQ0FBa0IsRUFBQztxQkFDeEMsR0FBRzs7OztnQkFBQyxVQUFDLFFBQVEsSUFBSyxPQUFBLFFBQVEsQ0FBQyxFQUFFLEVBQVgsQ0FBVyxFQUFDLENBQUM7YUFDbkM7O2dCQUNHLFdBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxZQUFZLENBQUM7WUFDL0MsV0FBVyxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7WUFDeEMsYUFBYSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUM7UUFDL0MsQ0FBQyxFQUFDLENBQUM7UUFFSCxPQUFPLGFBQWEsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVELCtDQUFvQjs7OztJQUFwQixVQUFxQixhQUEyQjs7WUFDMUMsYUFBYSxHQUFtQixFQUFFO1FBQ3RDLEtBQUssSUFBSSxVQUFVLElBQUksYUFBYSxFQUFFO1lBQ3BDLElBQUksYUFBYSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDNUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDdEQ7U0FDRjtRQUVELE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7O2dCQXRERixVQUFVOzs7O0lBdURYLHVCQUFDO0NBQUEsQUF2REQsSUF1REM7U0F0RFksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb2x1bW5TdGF0ZX0gZnJvbSAnLi9jb2x1bW4tc3RhdGUuY2xhc3MnO1xuaW1wb3J0IHtDb2x1bW5Db25maWcsIENvbHVtbkxvb2t1cCwgUm93fSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRhYmxlSW5pdFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgZGV0ZWN0Q29sdW1uQ29uZmlndXJhdGlvbihyb3dzOiBSb3dbXSk6IFtDb2x1bW5Mb29rdXAsIENvbHVtbkNvbmZpZ1tdXSB7XG4gICAgbGV0IGNvbHVtbnNMb29rdXAgPSB0aGlzLmRldGVjdENvbHVtbkxvb2t1cChyb3dzKTtcbiAgICByZXR1cm4gW2NvbHVtbnNMb29rdXAsIHRoaXMuY29sdW1uc0xvb2t1cDJDb25maWcoY29sdW1uc0xvb2t1cCldO1xuICB9XG5cbiAgZGV0ZWN0Q29sdW1uTG9va3VwKHJvd3M6IFJvd1tdKTogQ29sdW1uTG9va3VwIHtcbiAgICBsZXQgY29sdW1uc0xvb2t1cDogQ29sdW1uTG9va3VwID0ge307XG4gICAgcm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhyb3cpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb2x1bW5zTG9va3VwW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgbGV0IGNvbHVtbkNvbmZpZzogQ29sdW1uQ29uZmlnID0ge1xuICAgICAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgICAgIHNvcnRUeXBlOiB0eXBlb2Ygcm93W2tleV0sXG4gICAgICAgICAgICBzb3J0aW5nRGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaW5pdGlhbFNvcnREaXJlY3Rpb246ICdhc2MnXG4gICAgICAgICAgfTtcbiAgICAgICAgICBjb2x1bW5zTG9va3VwW2tleV0gPSBuZXcgQ29sdW1uU3RhdGUoY29sdW1uQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbHVtbnNMb29rdXA7XG4gIH1cblxuICBjb2x1bW5zQ29uZmlnMkxvb2t1cChjb2x1bW5zQ29uZmlnOiBDb2x1bW5Db25maWdbXSk6IENvbHVtbkxvb2t1cCB7XG4gICAgbGV0IGNvbHVtbnNMb29rdXA6IENvbHVtbkxvb2t1cCA9IHt9O1xuICAgIGNvbHVtbnNDb25maWcuZm9yRWFjaCgoY29sdW1uQ29uZmlnKSA9PiB7XG4gICAgICBsZXQgYWN0aXZlRmllbGRzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgaWYgKHR5cGVvZiBjb2x1bW5Db25maWcuc3ViRmllbGRzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBhY3RpdmVGaWVsZHMgPSBjb2x1bW5Db25maWcuc3ViRmllbGRzXG4gICAgICAgICAgLmZpbHRlcigoc3ViZmllbGQpID0+IHN1YmZpZWxkLmlzVmlzaWJsZSlcbiAgICAgICAgICAubWFwKChzdWJmaWVsZCkgPT4gc3ViZmllbGQuaWQpO1xuICAgICAgfVxuICAgICAgbGV0IGNvbHVtblN0YXRlID0gbmV3IENvbHVtblN0YXRlKGNvbHVtbkNvbmZpZyk7XG4gICAgICBjb2x1bW5TdGF0ZS5hY3RpdmVGaWVsZHMgPSBhY3RpdmVGaWVsZHM7XG4gICAgICBjb2x1bW5zTG9va3VwW2NvbHVtbkNvbmZpZy5pZF0gPSBjb2x1bW5TdGF0ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjb2x1bW5zTG9va3VwO1xuICB9XG5cbiAgY29sdW1uc0xvb2t1cDJDb25maWcoY29sdW1uc0xvb2t1cDogQ29sdW1uTG9va3VwKTogQ29sdW1uQ29uZmlnW10ge1xuICAgIGxldCBjb2x1bW5zQ29uZmlnOiBDb2x1bW5Db25maWdbXSA9IFtdO1xuICAgIGZvciAobGV0IGNvbHVtbk5hbWUgaW4gY29sdW1uc0xvb2t1cCkge1xuICAgICAgaWYgKGNvbHVtbnNMb29rdXAuaGFzT3duUHJvcGVydHkoY29sdW1uTmFtZSkpIHtcbiAgICAgICAgY29sdW1uc0NvbmZpZy5wdXNoKGNvbHVtbnNMb29rdXBbY29sdW1uTmFtZV0uY29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29sdW1uc0NvbmZpZztcbiAgfVxufVxuIl19