/**
 * @fileoverview added by tsickle
 * Generated from: lib/inline-editable/inline-editable.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ElementRef, EventEmitter, Directive, Input, Output, HostBinding, HostListener, Renderer, } from '@angular/core';
/** @enum {number} */
const KeyCodes = {
    Enter: 13,
    Escape: 27,
};
KeyCodes[KeyCodes.Enter] = 'Enter';
KeyCodes[KeyCodes.Escape] = 'Escape';
export class InlineEditableDirective {
    /**
     * @param {?} element
     * @param {?} renderer
     */
    constructor(element, renderer) {
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
    /**
     * @param {?} isEnabled
     * @return {?}
     */
    set iwInlineEditable(isEnabled) {
        this.contentEditable = isEnabled;
    }
    ;
    /**
     * @return {?}
     */
    startEditing() {
        this.originalContent = this.content;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyPressed(event) {
        switch (event.keyCode) {
            case KeyCodes.Enter:
                event.stopPropagation();
                this.onEnter.emit(this.content);
                break;
            case KeyCodes.Escape:
                this.cancelEditing();
                break;
        }
    }
    /**
     * @return {?}
     */
    get isChanged() {
        return this.originalContent !== this.content;
    }
    /**
     * @return {?}
     */
    get content() {
        return this.element.nativeElement.textContent.trim();
    }
    /**
     * @param {?} content
     * @return {?}
     */
    set content(content) {
        this.renderer.setElementProperty(this.element, 'innerText', content);
    }
    /**
     * @return {?}
     */
    cancelEditing() {
        this.content = this.originalContent;
    }
}
InlineEditableDirective.decorators = [
    { type: Directive, args: [{
                selector: '[iwInlineEditable]'
            },] }
];
/** @nocollapse */
InlineEditableDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer }
];
InlineEditableDirective.propDecorators = {
    iwInlineEditable: [{ type: Input, args: ['iwInlineEditable',] }],
    onEnter: [{ type: Output }],
    contentEditable: [{ type: HostBinding, args: ['attr.contenteditable',] }],
    startEditing: [{ type: HostListener, args: ['focus',] }],
    keyPressed: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5saW5lLWVkaXRhYmxlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nMi1wYWNrLyIsInNvdXJjZXMiOlsibGliL2lubGluZS1lZGl0YWJsZS9pbmxpbmUtZWRpdGFibGUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFVBQVUsRUFDVixZQUFZLEVBQ1osU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFlBQVksRUFDWixRQUFRLEdBQ1QsTUFBTSxlQUFlLENBQUM7O0FBRXZCLE1BQUssUUFBUTtJQUNYLEtBQUssSUFBSztJQUNWLE1BQU0sSUFBSztFQUNaOzs7QUFLRCxNQUFNLE9BQU8sdUJBQXVCOzs7OztJQXNDbEMsWUFDVSxPQUFtQixFQUNuQixRQUFrQjtRQURsQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25CLGFBQVEsR0FBUixRQUFRLENBQVU7Ozs7Ozs7Ozs7UUF6QmxCLFlBQU8sR0FBeUIsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUVoQyxvQkFBZSxHQUFZLElBQUksQ0FBQztJQXdCakUsQ0FBQzs7Ozs7SUF4Q0wsSUFBK0IsZ0JBQWdCLENBQUMsU0FBa0I7UUFDaEUsSUFBSSxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7SUFDbkMsQ0FBQztJQUFBLENBQUM7Ozs7SUFrQnFCLFlBQVk7UUFDakMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRW9DLFVBQVUsQ0FBQyxLQUFvQjtRQUNsRSxRQUFRLEtBQUssQ0FBQyxPQUFPLEVBQUU7WUFDckIsS0FBSyxRQUFRLENBQUMsS0FBSztnQkFDakIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLE1BQU07WUFFUixLQUFLLFFBQVEsQ0FBQyxNQUFNO2dCQUNsQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3JCLE1BQU07U0FDVDtJQUNILENBQUM7Ozs7SUFPRCxJQUFJLFNBQVM7UUFDWCxPQUFPLElBQUksQ0FBQyxlQUFlLEtBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUMvQyxDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDdkQsQ0FBQzs7Ozs7SUFFRCxJQUFJLE9BQU8sQ0FBQyxPQUFlO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkUsQ0FBQzs7OztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDdEMsQ0FBQzs7O1lBNURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2FBQy9COzs7O1lBakJDLFVBQVU7WUFPVixRQUFROzs7K0JBWVAsS0FBSyxTQUFDLGtCQUFrQjtzQkFjeEIsTUFBTTs4QkFFTixXQUFXLFNBQUMsc0JBQXNCOzJCQUlsQyxZQUFZLFNBQUMsT0FBTzt5QkFJcEIsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQVZuQywwQ0FBcUU7O0lBRXJFLGtEQUFxRTs7SUFFckUsa0RBQXdCOzs7OztJQW9CdEIsMENBQTJCOzs7OztJQUMzQiwyQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgUmVuZGVyZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5lbnVtIEtleUNvZGVzIHtcbiAgRW50ZXIgPSAxMyxcbiAgRXNjYXBlID0gMjdcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2l3SW5saW5lRWRpdGFibGVdJ1xufSlcbmV4cG9ydCBjbGFzcyBJbmxpbmVFZGl0YWJsZURpcmVjdGl2ZSB7XG4gIEBJbnB1dCgnaXdJbmxpbmVFZGl0YWJsZScpIHNldCBpd0lubGluZUVkaXRhYmxlKGlzRW5hYmxlZDogYm9vbGVhbikge1xuICAgIHRoaXMuY29udGVudEVkaXRhYmxlID0gaXNFbmFibGVkO1xuICB9O1xuXG4gIC8vIEBJbnB1dCgpIHNldCB0cmlnZ2VyRXZlbnQodHJpZ2dlckV2ZW50OiBzdHJpbmcpIHtcbiAgLy8gICBpZiAoIXRoaXMuZWxlbWVudCkge1xuICAvLyAgICAgcmV0dXJuO1xuICAvLyAgIH1cbiAgLy8gICBjb25zb2xlLmxvZyh0cmlnZ2VyRXZlbnQsIHRoaXMuZWxlbWVudCk7XG4gIC8vICAgdGhpcy5yZW5kZXJlci5saXN0ZW4odGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRyaWdnZXJFdmVudCwgKCkgPT4ge1xuICAvLyAgICAgdGhpcy5jb250ZW50RWRpdGFibGUgPSB0cnVlO1xuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgQE91dHB1dCgpIG9uRW50ZXI6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmNvbnRlbnRlZGl0YWJsZScpIGNvbnRlbnRFZGl0YWJsZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgb3JpZ2luYWxDb250ZW50OiBzdHJpbmc7XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKSBzdGFydEVkaXRpbmcoKSB7XG4gICAgdGhpcy5vcmlnaW5hbENvbnRlbnQgPSB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSkga2V5UHJlc3NlZChldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuICAgICAgY2FzZSBLZXlDb2Rlcy5FbnRlcjpcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIHRoaXMub25FbnRlci5lbWl0KHRoaXMuY29udGVudCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEtleUNvZGVzLkVzY2FwZTpcbiAgICAgICAgdGhpcy5jYW5jZWxFZGl0aW5nKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlclxuICApIHsgfVxuXG4gIGdldCBpc0NoYW5nZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub3JpZ2luYWxDb250ZW50ICE9PSB0aGlzLmNvbnRlbnQ7XG4gIH1cblxuICBnZXQgY29udGVudCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudC50cmltKCk7XG4gIH1cblxuICBzZXQgY29udGVudChjb250ZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldEVsZW1lbnRQcm9wZXJ0eSh0aGlzLmVsZW1lbnQsICdpbm5lclRleHQnLCBjb250ZW50KTtcbiAgfVxuXG4gIGNhbmNlbEVkaXRpbmcoKSB7XG4gICAgdGhpcy5jb250ZW50ID0gdGhpcy5vcmlnaW5hbENvbnRlbnQ7XG4gIH1cbn1cbiJdfQ==