/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/table-init.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ColumnState } from './column-state.class';
import { Injectable } from '@angular/core';
export class TableInitService {
    constructor() { }
    /**
     * @param {?} rows
     * @return {?}
     */
    detectColumnConfiguration(rows) {
        /** @type {?} */
        let columnsLookup = this.detectColumnLookup(rows);
        return [columnsLookup, this.columnsLookup2Config(columnsLookup)];
    }
    /**
     * @param {?} rows
     * @return {?}
     */
    detectColumnLookup(rows) {
        /** @type {?} */
        let columnsLookup = {};
        rows.forEach((/**
         * @param {?} row
         * @return {?}
         */
        row => {
            Object.keys(row).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => {
                if (typeof columnsLookup[key] === 'undefined') {
                    /** @type {?} */
                    let columnConfig = {
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
    }
    /**
     * @param {?} columnsConfig
     * @return {?}
     */
    columnsConfig2Lookup(columnsConfig) {
        /** @type {?} */
        let columnsLookup = {};
        columnsConfig.forEach((/**
         * @param {?} columnConfig
         * @return {?}
         */
        (columnConfig) => {
            /** @type {?} */
            let activeFields = [];
            if (typeof columnConfig.subFields !== 'undefined') {
                activeFields = columnConfig.subFields
                    .filter((/**
                 * @param {?} subfield
                 * @return {?}
                 */
                (subfield) => subfield.isVisible))
                    .map((/**
                 * @param {?} subfield
                 * @return {?}
                 */
                (subfield) => subfield.id));
            }
            /** @type {?} */
            let columnState = new ColumnState(columnConfig);
            columnState.activeFields = activeFields;
            columnsLookup[columnConfig.id] = columnState;
        }));
        return columnsLookup;
    }
    /**
     * @param {?} columnsLookup
     * @return {?}
     */
    columnsLookup2Config(columnsLookup) {
        /** @type {?} */
        let columnsConfig = [];
        for (let columnName in columnsLookup) {
            if (columnsLookup.hasOwnProperty(columnName)) {
                columnsConfig.push(columnsLookup[columnName].config);
            }
        }
        return columnsConfig;
    }
}
TableInitService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TableInitService.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtaW5pdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXBhY2svIiwic291cmNlcyI6WyJsaWIvdGFibGUvdGFibGUtaW5pdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRWpELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsTUFBTSxPQUFPLGdCQUFnQjtJQUUzQixnQkFBZ0IsQ0FBQzs7Ozs7SUFFakIseUJBQXlCLENBQUMsSUFBVzs7WUFDL0IsYUFBYSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7UUFDakQsT0FBTyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7OztJQUVELGtCQUFrQixDQUFDLElBQVc7O1lBQ3hCLGFBQWEsR0FBaUIsRUFBRTtRQUNwQyxJQUFJLENBQUMsT0FBTzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTzs7OztZQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM3QixJQUFJLE9BQU8sYUFBYSxDQUFDLEdBQUcsQ0FBQyxLQUFLLFdBQVcsRUFBRTs7d0JBQ3pDLFlBQVksR0FBaUI7d0JBQy9CLEVBQUUsRUFBRSxHQUFHO3dCQUNQLFFBQVEsRUFBRSxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUM7d0JBQ3pCLGVBQWUsRUFBRSxLQUFLO3dCQUN0QixvQkFBb0IsRUFBRSxLQUFLO3FCQUM1QjtvQkFDRCxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7aUJBQ3BEO1lBQ0gsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsb0JBQW9CLENBQUMsYUFBNkI7O1lBQzVDLGFBQWEsR0FBaUIsRUFBRTtRQUNwQyxhQUFhLENBQUMsT0FBTzs7OztRQUFDLENBQUMsWUFBWSxFQUFFLEVBQUU7O2dCQUNqQyxZQUFZLEdBQWEsRUFBRTtZQUMvQixJQUFJLE9BQU8sWUFBWSxDQUFDLFNBQVMsS0FBSyxXQUFXLEVBQUU7Z0JBQ2pELFlBQVksR0FBRyxZQUFZLENBQUMsU0FBUztxQkFDbEMsTUFBTTs7OztnQkFBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBQztxQkFDeEMsR0FBRzs7OztnQkFBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBQyxDQUFDO2FBQ25DOztnQkFDRyxXQUFXLEdBQUcsSUFBSSxXQUFXLENBQUMsWUFBWSxDQUFDO1lBQy9DLFdBQVcsQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1lBQ3hDLGFBQWEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDO1FBQy9DLENBQUMsRUFBQyxDQUFDO1FBRUgsT0FBTyxhQUFhLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxvQkFBb0IsQ0FBQyxhQUEyQjs7WUFDMUMsYUFBYSxHQUFtQixFQUFFO1FBQ3RDLEtBQUssSUFBSSxVQUFVLElBQUksYUFBYSxFQUFFO1lBQ3BDLElBQUksYUFBYSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQkFDNUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDdEQ7U0FDRjtRQUVELE9BQU8sYUFBYSxDQUFDO0lBQ3ZCLENBQUM7OztZQXRERixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb2x1bW5TdGF0ZX0gZnJvbSAnLi9jb2x1bW4tc3RhdGUuY2xhc3MnO1xuaW1wb3J0IHtDb2x1bW5Db25maWcsIENvbHVtbkxvb2t1cCwgUm93fSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRhYmxlSW5pdFNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgZGV0ZWN0Q29sdW1uQ29uZmlndXJhdGlvbihyb3dzOiBSb3dbXSk6IFtDb2x1bW5Mb29rdXAsIENvbHVtbkNvbmZpZ1tdXSB7XG4gICAgbGV0IGNvbHVtbnNMb29rdXAgPSB0aGlzLmRldGVjdENvbHVtbkxvb2t1cChyb3dzKTtcbiAgICByZXR1cm4gW2NvbHVtbnNMb29rdXAsIHRoaXMuY29sdW1uc0xvb2t1cDJDb25maWcoY29sdW1uc0xvb2t1cCldO1xuICB9XG5cbiAgZGV0ZWN0Q29sdW1uTG9va3VwKHJvd3M6IFJvd1tdKTogQ29sdW1uTG9va3VwIHtcbiAgICBsZXQgY29sdW1uc0xvb2t1cDogQ29sdW1uTG9va3VwID0ge307XG4gICAgcm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhyb3cpLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb2x1bW5zTG9va3VwW2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgbGV0IGNvbHVtbkNvbmZpZzogQ29sdW1uQ29uZmlnID0ge1xuICAgICAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgICAgIHNvcnRUeXBlOiB0eXBlb2Ygcm93W2tleV0sXG4gICAgICAgICAgICBzb3J0aW5nRGlzYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgaW5pdGlhbFNvcnREaXJlY3Rpb246ICdhc2MnXG4gICAgICAgICAgfTtcbiAgICAgICAgICBjb2x1bW5zTG9va3VwW2tleV0gPSBuZXcgQ29sdW1uU3RhdGUoY29sdW1uQ29uZmlnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNvbHVtbnNMb29rdXA7XG4gIH1cblxuICBjb2x1bW5zQ29uZmlnMkxvb2t1cChjb2x1bW5zQ29uZmlnOiBDb2x1bW5Db25maWdbXSk6IENvbHVtbkxvb2t1cCB7XG4gICAgbGV0IGNvbHVtbnNMb29rdXA6IENvbHVtbkxvb2t1cCA9IHt9O1xuICAgIGNvbHVtbnNDb25maWcuZm9yRWFjaCgoY29sdW1uQ29uZmlnKSA9PiB7XG4gICAgICBsZXQgYWN0aXZlRmllbGRzOiBzdHJpbmdbXSA9IFtdO1xuICAgICAgaWYgKHR5cGVvZiBjb2x1bW5Db25maWcuc3ViRmllbGRzICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBhY3RpdmVGaWVsZHMgPSBjb2x1bW5Db25maWcuc3ViRmllbGRzXG4gICAgICAgICAgLmZpbHRlcigoc3ViZmllbGQpID0+IHN1YmZpZWxkLmlzVmlzaWJsZSlcbiAgICAgICAgICAubWFwKChzdWJmaWVsZCkgPT4gc3ViZmllbGQuaWQpO1xuICAgICAgfVxuICAgICAgbGV0IGNvbHVtblN0YXRlID0gbmV3IENvbHVtblN0YXRlKGNvbHVtbkNvbmZpZyk7XG4gICAgICBjb2x1bW5TdGF0ZS5hY3RpdmVGaWVsZHMgPSBhY3RpdmVGaWVsZHM7XG4gICAgICBjb2x1bW5zTG9va3VwW2NvbHVtbkNvbmZpZy5pZF0gPSBjb2x1bW5TdGF0ZTtcbiAgICB9KTtcblxuICAgIHJldHVybiBjb2x1bW5zTG9va3VwO1xuICB9XG5cbiAgY29sdW1uc0xvb2t1cDJDb25maWcoY29sdW1uc0xvb2t1cDogQ29sdW1uTG9va3VwKTogQ29sdW1uQ29uZmlnW10ge1xuICAgIGxldCBjb2x1bW5zQ29uZmlnOiBDb2x1bW5Db25maWdbXSA9IFtdO1xuICAgIGZvciAobGV0IGNvbHVtbk5hbWUgaW4gY29sdW1uc0xvb2t1cCkge1xuICAgICAgaWYgKGNvbHVtbnNMb29rdXAuaGFzT3duUHJvcGVydHkoY29sdW1uTmFtZSkpIHtcbiAgICAgICAgY29sdW1uc0NvbmZpZy5wdXNoKGNvbHVtbnNMb29rdXBbY29sdW1uTmFtZV0uY29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gY29sdW1uc0NvbmZpZztcbiAgfVxufVxuIl19