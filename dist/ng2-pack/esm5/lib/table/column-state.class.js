/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/column-state.class.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ColumnState = /** @class */ (function () {
    // config is read-only, state is stored in other properties
    function ColumnState(config, _currentSortDirection, activeFields) {
        if (activeFields === void 0) { activeFields = []; }
        this.config = config;
        this._currentSortDirection = _currentSortDirection;
        this.activeFields = activeFields;
    }
    Object.defineProperty(ColumnState.prototype, "initialSortDirection", {
        get: /**
         * @return {?}
         */
        function () {
            return this.config.initialSortDirection || 'asc';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ColumnState.prototype, "currentSortDirection", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentSortDirection || 'asc';
        },
        set: /**
         * @param {?} direction
         * @return {?}
         */
        function (direction) {
            this._currentSortDirection = direction;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ColumnState.prototype.toggleDirection = /**
     * @return {?}
     */
    function () {
        if (!this._currentSortDirection) {
            this.currentSortDirection = this.initialSortDirection;
        }
        else {
            this.currentSortDirection = this.currentSortDirection === 'desc' ? 'asc' : 'desc';
        }
        return this.currentSortDirection;
    };
    return ColumnState;
}());
export { ColumnState };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sdW1uLXN0YXRlLmNsYXNzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXBhY2svIiwic291cmNlcyI6WyJsaWIvdGFibGUvY29sdW1uLXN0YXRlLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUE7SUFDRSwyREFBMkQ7SUFDM0QscUJBQ2tCLE1BQW9CLEVBQzVCLHFCQUFxQyxFQUN0QyxZQUEyQjtRQUEzQiw2QkFBQSxFQUFBLGlCQUEyQjtRQUZsQixXQUFNLEdBQU4sTUFBTSxDQUFjO1FBQzVCLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBZ0I7UUFDdEMsaUJBQVksR0FBWixZQUFZLENBQWU7SUFDakMsQ0FBQztJQUVKLHNCQUFJLDZDQUFvQjs7OztRQUF4QjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxvQkFBb0IsSUFBSSxLQUFLLENBQUM7UUFDbkQsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw2Q0FBb0I7Ozs7UUFBeEI7WUFDRSxPQUFPLElBQUksQ0FBQyxxQkFBcUIsSUFBSSxLQUFLLENBQUM7UUFDN0MsQ0FBQzs7Ozs7UUFFRCxVQUF5QixTQUF3QjtZQUMvQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsU0FBUyxDQUFDO1FBQ3pDLENBQUM7OztPQUpBOzs7O0lBTUQscUNBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsRUFBRTtZQUMvQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1NBQ3ZEO2FBQU07WUFDTCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7U0FDbkY7UUFDRCxPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztJQUNuQyxDQUFDO0lBRUgsa0JBQUM7QUFBRCxDQUFDLEFBN0JELElBNkJDOzs7O0lBMUJHLDZCQUFvQzs7Ozs7SUFDcEMsNENBQTZDOztJQUM3QyxtQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbHVtbkNvbmZpZywgU29ydERpcmVjdGlvbn0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBjbGFzcyBDb2x1bW5TdGF0ZSB7XG4gIC8vIGNvbmZpZyBpcyByZWFkLW9ubHksIHN0YXRlIGlzIHN0b3JlZCBpbiBvdGhlciBwcm9wZXJ0aWVzXG4gIGNvbnN0cnVjdG9yIChcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29uZmlnOiBDb2x1bW5Db25maWcsXG4gICAgcHJpdmF0ZSBfY3VycmVudFNvcnREaXJlY3Rpb24/OiBTb3J0RGlyZWN0aW9uLFxuICAgIHB1YmxpYyBhY3RpdmVGaWVsZHM6IHN0cmluZ1tdID0gW11cbiAgKSB7fVxuXG4gIGdldCBpbml0aWFsU29ydERpcmVjdGlvbigpOiBTb3J0RGlyZWN0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuaW5pdGlhbFNvcnREaXJlY3Rpb24gfHwgJ2FzYyc7XG4gIH1cblxuICBnZXQgY3VycmVudFNvcnREaXJlY3Rpb24oKTogU29ydERpcmVjdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRTb3J0RGlyZWN0aW9uIHx8ICdhc2MnO1xuICB9XG5cbiAgc2V0IGN1cnJlbnRTb3J0RGlyZWN0aW9uKGRpcmVjdGlvbjogU29ydERpcmVjdGlvbikge1xuICAgIHRoaXMuX2N1cnJlbnRTb3J0RGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICB9XG5cbiAgdG9nZ2xlRGlyZWN0aW9uKCkge1xuICAgIGlmICghdGhpcy5fY3VycmVudFNvcnREaXJlY3Rpb24pIHtcbiAgICAgIHRoaXMuY3VycmVudFNvcnREaXJlY3Rpb24gPSB0aGlzLmluaXRpYWxTb3J0RGlyZWN0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnRTb3J0RGlyZWN0aW9uID0gdGhpcy5jdXJyZW50U29ydERpcmVjdGlvbiA9PT0gJ2Rlc2MnID8gJ2FzYycgOiAnZGVzYyc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRTb3J0RGlyZWN0aW9uO1xuICB9XG5cbn1cbiJdfQ==