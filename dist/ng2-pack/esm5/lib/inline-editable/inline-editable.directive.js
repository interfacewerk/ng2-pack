/**
 * @fileoverview added by tsickle
 * Generated from: lib/inline-editable/inline-editable.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ElementRef, EventEmitter, Directive, Input, Output, HostBinding, HostListener, Renderer, } from '@angular/core';
/** @enum {number} */
var KeyCodes = {
    Enter: 13,
    Escape: 27,
};
KeyCodes[KeyCodes.Enter] = 'Enter';
KeyCodes[KeyCodes.Escape] = 'Escape';
var InlineEditableDirective = /** @class */ (function () {
    function InlineEditableDirective(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        // @Input() set triggerEvent(triggerEvent: string) {
        //   if (!this.element) {
        //     return;
        //   }
        //   console.log(triggerEvent, this.element);
        //   this.renderer.listen(this.element.nativeElement, triggerEvent, () => {
        //     this.contentEditable = true;
        //   });
        // }
        this.onEnter = new EventEmitter();
        this.contentEditable = true;
    }
    Object.defineProperty(InlineEditableDirective.prototype, "iwInlineEditable", {
        set: /**
         * @param {?} isEnabled
         * @return {?}
         */
        function (isEnabled) {
            this.contentEditable = isEnabled;
        },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * @return {?}
     */
    InlineEditableDirective.prototype.startEditing = /**
     * @return {?}
     */
    function () {
        this.originalContent = this.content;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    InlineEditableDirective.prototype.keyPressed = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        switch (event.keyCode) {
            case KeyCodes.Enter:
                event.stopPropagation();
                this.onEnter.emit(this.content);
                break;
            case KeyCodes.Escape:
                this.cancelEditing();
                break;
        }
    };
    Object.defineProperty(InlineEditableDirective.prototype, "isChanged", {
        get: /**
         * @return {?}
         */
        function () {
            return this.originalContent !== this.content;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InlineEditableDirective.prototype, "content", {
        get: /**
         * @return {?}
         */
        function () {
            return this.element.nativeElement.textContent.trim();
        },
        set: /**
         * @param {?} content
         * @return {?}
         */
        function (content) {
            this.renderer.setElementProperty(this.element, 'innerText', content);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    InlineEditableDirective.prototype.cancelEditing = /**
     * @return {?}
     */
    function () {
        this.content = this.originalContent;
    };
    InlineEditableDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[iwInlineEditable]'
                },] }
    ];
    /** @nocollapse */
    InlineEditableDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer }
    ]; };
    InlineEditableDirective.propDecorators = {
        iwInlineEditable: [{ type: Input, args: ['iwInlineEditable',] }],
        onEnter: [{ type: Output }],
        contentEditable: [{ type: HostBinding, args: ['attr.contenteditable',] }],
        startEditing: [{ type: HostListener, args: ['focus',] }],
        keyPressed: [{ type: HostListener, args: ['keydown', ['$event'],] }]
    };
    return InlineEditableDirective;
}());
export { InlineEditableDirective };
if (false) {
    /** @type {?} */
    InlineEditableDirective.prototype.onEnter;
    /** @type {?} */
    InlineEditableDirective.prototype.contentEditable;
    /** @type {?} */
    InlineEditableDirective.prototype.originalContent;
    /**
     * @type {?}
     * @private
     */
    InlineEditableDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    InlineEditableDirective.prototype.renderer;
    /* Skipping unhandled member: ;*/
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLWVkaXRhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1wYWNrLyIsInNvdXJjZXMiOlsibGliL2lubGluZS1lZGl0YWJsZS9pbmxpbmUtZWRpdGFibGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFVBQVUsRUFDVixZQUFZLEVBQ1osU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFlBQVksRUFDWixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7O0FBRXZCLElBQUssUUFBUTtJQUNYLEtBQUssSUFBSztJQUNWLE1BQU0sSUFBSztFQUNaOzs7QUFFRDtJQXlDRSxpQ0FDVSxPQUFtQixFQUNuQixRQUFrQjtRQURsQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQVU7Ozs7Ozs7Ozs7UUF6QmxCLFlBQU8sR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUVoQyxvQkFBZSxHQUFZLElBQUksQ0FBQztJQXdCakUsQ0FBQztJQXhDTCxzQkFBK0IscURBQWdCOzs7OztRQUEvQyxVQUFnRCxTQUFrQjtZQUNoRSxJQUFJLENBQUMsZUFBZSxHQUFHLFNBQVMsQ0FBQztRQUNuQyxDQUFDOzs7T0FBQTtJQUFBLENBQUM7Ozs7SUFrQnFCLDhDQUFZOzs7SUFBbkM7UUFDRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFb0MsNENBQVU7Ozs7SUFBL0MsVUFBZ0QsS0FBb0I7UUFDbEUsUUFBUSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ3JCLEtBQUssUUFBUSxDQUFDLEtBQUs7Z0JBQ2pCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztnQkFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNoQyxNQUFNO1lBRVIsS0FBSyxRQUFRLENBQUMsTUFBTTtnQkFDbEIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUNyQixNQUFNO1NBQ1Q7SUFDSCxDQUFDO0lBT0Qsc0JBQUksOENBQVM7Ozs7UUFBYjtZQUNFLE9BQU8sSUFBSSxDQUFDLGVBQWUsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQy9DLENBQUM7OztPQUFBO0lBRUQsc0JBQUksNENBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZELENBQUM7Ozs7O1FBRUQsVUFBWSxPQUFlO1lBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkUsQ0FBQzs7O09BSkE7Ozs7SUFNRCwrQ0FBYTs7O0lBQWI7UUFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDdEMsQ0FBQzs7Z0JBNURGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2lCQUMvQjs7OztnQkFqQkMsVUFBVTtnQkFPVixRQUFROzs7bUNBWVAsS0FBSyxTQUFDLGtCQUFrQjswQkFjeEIsTUFBTTtrQ0FFTixXQUFXLFNBQUMsc0JBQXNCOytCQUlsQyxZQUFZLFNBQUMsT0FBTzs2QkFJcEIsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7SUFpQ3JDLDhCQUFDO0NBQUEsQUE3REQsSUE2REM7U0ExRFksdUJBQXVCOzs7SUFlbEMsMENBQXFFOztJQUVyRSxrREFBcUU7O0lBRXJFLGtEQUF3Qjs7Ozs7SUFvQnRCLDBDQUEyQjs7Ozs7SUFDM0IsMkNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIFJlbmRlcmVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZW51bSBLZXlDb2RlcyB7XG4gIEVudGVyID0gMTMsXG4gIEVzY2FwZSA9IDI3XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tpd0lubGluZUVkaXRhYmxlXSdcbn0pXG5leHBvcnQgY2xhc3MgSW5saW5lRWRpdGFibGVEaXJlY3RpdmUge1xuICBASW5wdXQoJ2l3SW5saW5lRWRpdGFibGUnKSBzZXQgaXdJbmxpbmVFZGl0YWJsZShpc0VuYWJsZWQ6IGJvb2xlYW4pIHtcbiAgICB0aGlzLmNvbnRlbnRFZGl0YWJsZSA9IGlzRW5hYmxlZDtcbiAgfTtcblxuICAvLyBASW5wdXQoKSBzZXQgdHJpZ2dlckV2ZW50KHRyaWdnZXJFdmVudDogc3RyaW5nKSB7XG4gIC8vICAgaWYgKCF0aGlzLmVsZW1lbnQpIHtcbiAgLy8gICAgIHJldHVybjtcbiAgLy8gICB9XG4gIC8vICAgY29uc29sZS5sb2codHJpZ2dlckV2ZW50LCB0aGlzLmVsZW1lbnQpO1xuICAvLyAgIHRoaXMucmVuZGVyZXIubGlzdGVuKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB0cmlnZ2VyRXZlbnQsICgpID0+IHtcbiAgLy8gICAgIHRoaXMuY29udGVudEVkaXRhYmxlID0gdHJ1ZTtcbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIEBPdXRwdXQoKSBvbkVudGVyOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5jb250ZW50ZWRpdGFibGUnKSBjb250ZW50RWRpdGFibGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIG9yaWdpbmFsQ29udGVudDogc3RyaW5nO1xuXG4gIEBIb3N0TGlzdGVuZXIoJ2ZvY3VzJykgc3RhcnRFZGl0aW5nKCkge1xuICAgIHRoaXMub3JpZ2luYWxDb250ZW50ID0gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pIGtleVByZXNzZWQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcbiAgICAgIGNhc2UgS2V5Q29kZXMuRW50ZXI6XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICB0aGlzLm9uRW50ZXIuZW1pdCh0aGlzLmNvbnRlbnQpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBLZXlDb2Rlcy5Fc2NhcGU6XG4gICAgICAgIHRoaXMuY2FuY2VsRWRpdGluZygpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnQ6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXJcbiAgKSB7IH1cblxuICBnZXQgaXNDaGFuZ2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm9yaWdpbmFsQ29udGVudCAhPT0gdGhpcy5jb250ZW50O1xuICB9XG5cbiAgZ2V0IGNvbnRlbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQudHJpbSgpO1xuICB9XG5cbiAgc2V0IGNvbnRlbnQoY29udGVudDogc3RyaW5nKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRFbGVtZW50UHJvcGVydHkodGhpcy5lbGVtZW50LCAnaW5uZXJUZXh0JywgY29udGVudCk7XG4gIH1cblxuICBjYW5jZWxFZGl0aW5nKCkge1xuICAgIHRoaXMuY29udGVudCA9IHRoaXMub3JpZ2luYWxDb250ZW50O1xuICB9XG59XG4iXX0=