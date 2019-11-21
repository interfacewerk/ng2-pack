/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/table-sorting.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * @record
 */
export function Sorting() { }
if (false) {
    /**
     * @param {?} rows
     * @param {?} columnState
     * @return {?}
     */
    Sorting.prototype.sort = function (rows, columnState) { };
}
var ɵ0 = /**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function (a, b) { return a - b; }, ɵ1 = /**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function (a, b) {
    if (typeof a === 'undefined') {
        return -1;
    }
    return a.localeCompare(b);
}, ɵ2 = /**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function (a, b) {
    if (a > b) {
        return 1;
    }
    if (b > a) {
        return -1;
    }
    return 0;
};
/** @type {?} */
export var sortingCompare = {
    number: (ɵ0),
    string: (ɵ1),
    other: (ɵ2)
};
var TableSortingService = /** @class */ (function () {
    function TableSortingService() {
    }
    /**
     * @param {?} rows
     * @param {?} columnState
     * @return {?}
     */
    TableSortingService.prototype.sort = /**
     * @param {?} rows
     * @param {?} columnState
     * @return {?}
     */
    function (rows, columnState) {
        /** @type {?} */
        var sortType = columnState.config.sortType || 'other';
        /** @type {?} */
        var cmpFn = columnState.config.sortCompare || sortingCompare[sortType];
        if (!cmpFn) {
            console.warn("Unsupported sorting type '" + sortType + "' was used. " +
                'Using comparison operators: greater, less and equal (>, <, ===)');
            cmpFn = sortingCompare['other'];
        }
        rows.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        function (a, b) { return cmpFn(a[columnState.config.id], b[columnState.config.id]); }));
        if (columnState.currentSortDirection === 'desc') {
            rows.reverse();
        }
        return rows;
    };
    TableSortingService.decorators = [
        { type: Injectable }
    ];
    return TableSortingService;
}());
export { TableSortingService };
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtc29ydGluZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXBhY2svIiwic291cmNlcyI6WyJsaWIvdGFibGUvdGFibGUtc29ydGluZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7OztBQUV6Qyw2QkFFQzs7Ozs7OztJQURDLDBEQUFtRDs7Ozs7OztBQUkzQyxVQUFDLENBQVMsRUFBRSxDQUFTLElBQWEsT0FBQSxDQUFDLEdBQUcsQ0FBQyxFQUFMLENBQUs7Ozs7O0FBQ3ZDLFVBQUMsQ0FBUyxFQUFFLENBQVM7SUFDM0IsSUFBSSxPQUFPLENBQUMsS0FBSyxXQUFXLEVBQUU7UUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO0tBQUU7SUFDNUMsT0FBTyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzVCLENBQUM7Ozs7O0FBQ00sVUFBQyxDQUFNLEVBQUUsQ0FBTTtJQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFBRSxPQUFPLENBQUMsQ0FBQztLQUFFO0lBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtRQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7S0FBRTtJQUN6QixPQUFPLENBQUMsQ0FBQztBQUNYLENBQUM7O0FBVkgsTUFBTSxLQUFPLGNBQWMsR0FBcUI7SUFDOUMsTUFBTSxNQUF5QztJQUMvQyxNQUFNLE1BR0w7SUFDRCxLQUFLLE1BSUo7Q0FDRjtBQUVEO0lBQUE7SUFrQkEsQ0FBQzs7Ozs7O0lBaEJDLGtDQUFJOzs7OztJQUFKLFVBQUssSUFBVyxFQUFFLFdBQXdCOztZQUNwQyxRQUFRLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksT0FBTzs7WUFDakQsS0FBSyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUM7UUFDdEUsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNWLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0JBQTZCLFFBQVEsaUJBQWM7Z0JBQzlELGlFQUFpRSxDQUNsRSxDQUFDO1lBQ0YsS0FBSyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNqQztRQUNELElBQUksQ0FBQyxJQUFJOzs7OztRQUFDLFVBQUMsQ0FBTSxFQUFFLENBQU0sSUFBSyxPQUFBLEtBQUssQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUF6RCxDQUF5RCxFQUFDLENBQUM7UUFDekYsSUFBSSxXQUFXLENBQUMsb0JBQW9CLEtBQUssTUFBTSxFQUFFO1lBQy9DLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Z0JBakJGLFVBQVU7O0lBa0JYLDBCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FqQlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb2x1bW5TdGF0ZX0gZnJvbSAnLi9jb2x1bW4tc3RhdGUuY2xhc3MnO1xuaW1wb3J0IHtDb21wYXJlRnVuY3Rpb25zLCBSb3d9IGZyb20gJy4vdHlwZXMnO1xuXG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNvcnRpbmcge1xuICBzb3J0KHJvd3M6IFJvd1tdLCBjb2x1bW5TdGF0ZTogQ29sdW1uU3RhdGUpOiBhbnlbXTtcbn1cblxuZXhwb3J0IGNvbnN0IHNvcnRpbmdDb21wYXJlOiBDb21wYXJlRnVuY3Rpb25zID0ge1xuICBudW1iZXI6IChhOiBudW1iZXIsIGI6IG51bWJlcik6IG51bWJlciA9PiBhIC0gYixcbiAgc3RyaW5nOiAoYTogc3RyaW5nLCBiOiBzdHJpbmcpOiBudW1iZXIgPT4ge1xuICAgIGlmICh0eXBlb2YgYSA9PT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIC0xOyB9XG4gICAgcmV0dXJuIGEubG9jYWxlQ29tcGFyZShiKTtcbiAgfSxcbiAgb3RoZXI6IChhOiBhbnksIGI6IGFueSk6IG51bWJlciA9PiB7XG4gICAgaWYgKGEgPiBiKSB7IHJldHVybiAxOyB9XG4gICAgaWYgKGIgPiBhKSB7IHJldHVybiAtMTsgfVxuICAgIHJldHVybiAwO1xuICB9XG59O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGFibGVTb3J0aW5nU2VydmljZSB7XG4gIHNvcnQocm93czogUm93W10sIGNvbHVtblN0YXRlOiBDb2x1bW5TdGF0ZSkge1xuICAgIGxldCBzb3J0VHlwZSA9IGNvbHVtblN0YXRlLmNvbmZpZy5zb3J0VHlwZSB8fCAnb3RoZXInO1xuICAgIGxldCBjbXBGbiA9IGNvbHVtblN0YXRlLmNvbmZpZy5zb3J0Q29tcGFyZSB8fCBzb3J0aW5nQ29tcGFyZVtzb3J0VHlwZV07XG4gICAgaWYgKCFjbXBGbikge1xuICAgICAgY29uc29sZS53YXJuKGBVbnN1cHBvcnRlZCBzb3J0aW5nIHR5cGUgJyR7c29ydFR5cGV9JyB3YXMgdXNlZC4gYCArXG4gICAgICAgICdVc2luZyBjb21wYXJpc29uIG9wZXJhdG9yczogZ3JlYXRlciwgbGVzcyBhbmQgZXF1YWwgKD4sIDwsID09PSknXG4gICAgICApO1xuICAgICAgY21wRm4gPSBzb3J0aW5nQ29tcGFyZVsnb3RoZXInXTtcbiAgICB9XG4gICAgcm93cy5zb3J0KChhOiBhbnksIGI6IGFueSkgPT4gY21wRm4oYVtjb2x1bW5TdGF0ZS5jb25maWcuaWRdLCBiW2NvbHVtblN0YXRlLmNvbmZpZy5pZF0pKTtcbiAgICBpZiAoY29sdW1uU3RhdGUuY3VycmVudFNvcnREaXJlY3Rpb24gPT09ICdkZXNjJykge1xuICAgICAgcm93cy5yZXZlcnNlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJvd3M7XG4gIH1cbn1cbiJdfQ==