/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/t/t.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { I18nService } from './../../services/i18n.service';
import { Pipe } from '@angular/core';
var TPipe = /** @class */ (function () {
    function TPipe(i18nService) {
        this.i18nService = i18nService;
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    TPipe.prototype.transform = /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    function (value, args) {
        return this.i18nService.get(value);
    };
    TPipe.decorators = [
        { type: Pipe, args: [{
                    name: 't'
                },] }
    ];
    /** @nocollapse */
    TPipe.ctorParameters = function () { return [
        { type: I18nService }
    ]; };
    return TPipe;
}());
export { TPipe };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TPipe.prototype.i18nService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidC5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXBhY2svIiwic291cmNlcyI6WyJsaWIvcGlwZXMvdC90LnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sK0JBQStCLENBQUM7QUFDMUQsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFFcEQ7SUFJRSxlQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFHLENBQUM7Ozs7OztJQUVoRCx5QkFBUzs7Ozs7SUFBVCxVQUFVLEtBQVUsRUFBRSxJQUFVO1FBQzlCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7Z0JBUkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxHQUFHO2lCQUNWOzs7O2dCQUxPLFdBQVc7O0lBYW5CLFlBQUM7Q0FBQSxBQVZELElBVUM7U0FQWSxLQUFLOzs7Ozs7SUFDSiw0QkFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0kxOG5TZXJ2aWNlfSBmcm9tICcuLy4uLy4uL3NlcnZpY2VzL2kxOG4uc2VydmljZSc7XG5pbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ3QnXG59KVxuZXhwb3J0IGNsYXNzIFRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4blNlcnZpY2U6IEkxOG5TZXJ2aWNlKSB7fVxuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBhcmdzPzogYW55KTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5pMThuU2VydmljZS5nZXQodmFsdWUpO1xuICB9XG5cbn1cbiJdfQ==