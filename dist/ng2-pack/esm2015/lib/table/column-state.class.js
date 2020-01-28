/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/column-state.class.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class ColumnState {
    // config is read-only, state is stored in other properties
    /**
     * @param {?} config
     * @param {?=} _currentSortDirection
     * @param {?=} activeFields
     */
    constructor(config, _currentSortDirection, activeFields = []) {
        this.config = config;
        this._currentSortDirection = _currentSortDirection;
        this.activeFields = activeFields;
    }
    /**
     * @return {?}
     */
    get initialSortDirection() {
        return this.config.initialSortDirection || 'asc';
    }
    /**
     * @return {?}
     */
    get currentSortDirection() {
        return this._currentSortDirection || 'asc';
    }
    /**
     * @param {?} direction
     * @return {?}
     */
    set currentSortDirection(direction) {
        this._currentSortDirection = direction;
    }
    /**
     * @return {?}
     */
    toggleDirection() {
        if (!this._currentSortDirection) {
            this.currentSortDirection = this.initialSortDirection;
        }
        else {
            this.currentSortDirection = this.currentSortDirection === 'desc' ? 'asc' : 'desc';
        }
        return this.currentSortDirection;
    }
}
if (false) {
    /** @type {?} */
    ColumnState.prototype.config;
    /**
     * @type {?}
     * @private
     */
    ColumnState.prototype._currentSortDirection;
    /** @type {?} */
    ColumnState.prototype.activeFields;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXN0YXRlLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXBhY2svIiwic291cmNlcyI6WyJsaWIvdGFibGUvY29sdW1uLXN0YXRlLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxPQUFPLFdBQVc7Ozs7Ozs7SUFFdEIsWUFDa0IsTUFBb0IsRUFDNUIscUJBQXFDLEVBQ3RDLGVBQXlCLEVBQUU7UUFGbEIsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUM1QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQWdCO1FBQ3RDLGlCQUFZLEdBQVosWUFBWSxDQUFlO0lBQ2pDLENBQUM7Ozs7SUFFSixJQUFJLG9CQUFvQjtRQUN0QixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLElBQUksS0FBSyxDQUFDO0lBQ25ELENBQUM7Ozs7SUFFRCxJQUFJLG9CQUFvQjtRQUN0QixPQUFPLElBQUksQ0FBQyxxQkFBcUIsSUFBSSxLQUFLLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFFRCxJQUFJLG9CQUFvQixDQUFDLFNBQXdCO1FBQy9DLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxTQUFTLENBQUM7SUFDekMsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQy9CLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUM7U0FDdkQ7YUFBTTtZQUNMLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsb0JBQW9CLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztTQUNuRjtRQUNELE9BQU8sSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQ25DLENBQUM7Q0FFRjs7O0lBMUJHLDZCQUFvQzs7Ozs7SUFDcEMsNENBQTZDOztJQUM3QyxtQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbHVtbkNvbmZpZywgU29ydERpcmVjdGlvbn0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBDb2x1bW5TdGF0ZSB7XG4gIC8vIGNvbmZpZyBpcyByZWFkLW9ubHksIHN0YXRlIGlzIHN0b3JlZCBpbiBvdGhlciBwcm9wZXJ0aWVzXG4gIGNvbnN0cnVjdG9yIChcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29uZmlnOiBDb2x1bW5Db25maWcsXG4gICAgcHJpdmF0ZSBfY3VycmVudFNvcnREaXJlY3Rpb24/OiBTb3J0RGlyZWN0aW9uLFxuICAgIHB1YmxpYyBhY3RpdmVGaWVsZHM6IHN0cmluZ1tdID0gW11cbiAgKSB7fVxuXG4gIGdldCBpbml0aWFsU29ydERpcmVjdGlvbigpOiBTb3J0RGlyZWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuaW5pdGlhbFNvcnREaXJlY3Rpb24gfHwgJ2FzYyc7XG4gIH1cblxuICBnZXQgY3VycmVudFNvcnREaXJlY3Rpb24oKTogU29ydERpcmVjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRTb3J0RGlyZWN0aW9uIHx8ICdhc2MnO1xuICB9XG5cbiAgc2V0IGN1cnJlbnRTb3J0RGlyZWN0aW9uKGRpcmVjdGlvbjogU29ydERpcmVjdGlvbikge1xuICAgIHRoaXMuX2N1cnJlbnRTb3J0RGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICB9XG5cbiAgdG9nZ2xlRGlyZWN0aW9uKCkge1xuICAgIGlmICghdGhpcy5fY3VycmVudFNvcnREaXJlY3Rpb24pIHtcbiAgICAgIHRoaXMuY3VycmVudFNvcnREaXJlY3Rpb24gPSB0aGlzLmluaXRpYWxTb3J0RGlyZWN0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRTb3J0RGlyZWN0aW9uID0gdGhpcy5jdXJyZW50U29ydERpcmVjdGlvbiA9PT0gJ2Rlc2MnID8gJ2FzYycgOiAnZGVzYyc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRTb3J0RGlyZWN0aW9uO1xuICB9XG5cbn1cbiJdfQ==