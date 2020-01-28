/**
 * @fileoverview added by tsickle
 * Generated from: lib/sortable/sortable-item.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ElementRef, Directive, HostBinding, HostListener, Input } from '@angular/core';
/** @type {?} */
var dragSource;
/** @type {?} */
var originalNextSibling;
var SortableItemDirective = /** @class */ (function () {
    function SortableItemDirective(elementRef) {
        this.elementRef = elementRef;
        this.draggable = true;
        this.droppable = true;
        this.dropArea = 'defaultDropArea';
        this.lastEvent = '';
        this.updateElements = (/**
         * @param {?} dragged
         * @param {?} droppedOn
         * @return {?}
         */
        function (dragged, droppedOn) {
            /** @type {?} */
            var parent = droppedOn.elementRef.nativeElement.parentNode;
            /** @type {?} */
            var draggedEl = dragged.elementRef.nativeElement;
            /** @type {?} */
            var dropEl = droppedOn.elementRef.nativeElement;
            /** @type {?} */
            var draggedIndex = Array.prototype.indexOf.call(parent.children, draggedEl);
            /** @type {?} */
            var dropIndex = Array.prototype.indexOf.call(parent.children, dropEl);
            if (draggedIndex === dropIndex) {
                // do nothing
            }
            else if (draggedIndex < dropIndex) {
                parent.insertBefore(draggedEl, dropEl.nextSibling || dropEl);
            }
            else {
                parent.insertBefore(draggedEl, dropEl.previousSibling || dropEl);
            }
        });
    }
    // draggable
    // draggable
    /**
     * @param {?} dragEvent
     * @return {?}
     */
    SortableItemDirective.prototype.onDragStart = 
    // draggable
    /**
     * @param {?} dragEvent
     * @return {?}
     */
    function (dragEvent) {
        if (!dragEvent.dataTransfer) {
            console.warn('no data transfer');
            return;
        }
        dragEvent.dataTransfer.effectAllowed = 'move';
        dragSource = this;
        originalNextSibling = this.elementRef.nativeElement.nextSibling;
    };
    // droppable
    // droppable
    /**
     * @param {?} dragEvent
     * @return {?}
     */
    SortableItemDirective.prototype.onDragEnter = 
    // droppable
    /**
     * @param {?} dragEvent
     * @return {?}
     */
    function (dragEvent) {
        this.lastEvent = 'dragenter';
        dragEvent.preventDefault();
        if (dragSource !== this && dragSource.dropArea === this.dropArea) {
            // updating is only preview, it is undone if it is not finished by the drop event
            this.updateElements(dragSource, this);
        }
    };
    /**
     * @param {?} dragOverEvent
     * @return {?}
     */
    SortableItemDirective.prototype.onDragOver = /**
     * @param {?} dragOverEvent
     * @return {?}
     */
    function (dragOverEvent) {
        // necessary for drop event to be triggered
        dragOverEvent.preventDefault();
    };
    // droppable
    // droppable
    /**
     * @param {?} dragEvent
     * @return {?}
     */
    SortableItemDirective.prototype.onDragEnd = 
    // droppable
    /**
     * @param {?} dragEvent
     * @return {?}
     */
    function (dragEvent) {
        if (this.lastEvent === 'drop') {
            return;
        }
        if (dragSource.dropArea === this.dropArea && typeof originalNextSibling !== 'undefined') {
            (/** @type {?} */ (originalNextSibling.parentNode)).insertBefore(dragSource.elementRef.nativeElement, originalNextSibling);
            originalNextSibling = undefined;
        }
    };
    // droppable
    // droppable
    /**
     * @param {?} dropEvent
     * @return {?}
     */
    SortableItemDirective.prototype.onDrop = 
    // droppable
    /**
     * @param {?} dropEvent
     * @return {?}
     */
    function (dropEvent) {
        this.lastEvent = 'drop';
        dropEvent.stopPropagation();
        if (this === dragSource) {
            return;
        }
        // this.updateElements(dragSource, this);
        originalNextSibling = undefined;
    };
    SortableItemDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[iwSortableItem]'
                },] }
    ];
    /** @nocollapse */
    SortableItemDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    SortableItemDirective.propDecorators = {
        draggable: [{ type: HostBinding, args: ['attr.draggable',] }],
        droppable: [{ type: HostBinding, args: ['attr.droppable',] }],
        dropArea: [{ type: Input }],
        onDragStart: [{ type: HostListener, args: ['dragstart', ['$event'],] }],
        onDragEnter: [{ type: HostListener, args: ['dragenter', ['$event'],] }],
        onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
        onDragEnd: [{ type: HostListener, args: ['dragend', ['$event'],] }],
        onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }]
    };
    return SortableItemDirective;
}());
export { SortableItemDirective };
if (false) {
    /** @type {?} */
    SortableItemDirective.prototype.draggable;
    /** @type {?} */
    SortableItemDirective.prototype.droppable;
    /** @type {?} */
    SortableItemDirective.prototype.dropArea;
    /**
     * @type {?}
     * @private
     */
    SortableItemDirective.prototype.lastEvent;
    /**
     * @type {?}
     * @private
     */
    SortableItemDirective.prototype.updateElements;
    /** @type {?} */
    SortableItemDirective.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGFibGUtaXRlbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItcGFjay8iLCJzb3VyY2VzIjpbImxpYi9zb3J0YWJsZS9zb3J0YWJsZS1pdGVtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUNOLE1BQU0sZUFBZSxDQUFDOztJQUVuQixVQUFpQzs7SUFDakMsbUJBQXdDO0FBRTVDO0lBVUUsK0JBQW1CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFOVixjQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFDaEQsYUFBUSxHQUFXLGlCQUFpQixDQUFDO1FBRXRDLGNBQVMsR0FBVyxFQUFFLENBQUM7UUF3RHZCLG1CQUFjOzs7OztRQUFHLFVBQUMsT0FBOEIsRUFBRSxTQUFnQzs7Z0JBQ3BGLE1BQU0sR0FBWSxTQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFVOztnQkFDL0QsU0FBUyxHQUFZLE9BQU8sQ0FBQyxVQUFVLENBQUMsYUFBYTs7Z0JBQ3JELE1BQU0sR0FBWSxTQUFTLENBQUMsVUFBVSxDQUFDLGFBQWE7O2dCQUNwRCxZQUFZLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDOztnQkFDdkUsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztZQUNyRSxJQUFJLFlBQVksS0FBSyxTQUFTLEVBQUU7Z0JBQzlCLGFBQWE7YUFDZDtpQkFBTSxJQUFJLFlBQVksR0FBRyxTQUFTLEVBQUU7Z0JBQ25DLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLE1B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IjpbImltcG9ydCB7XG4gIEVsZW1lbnRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgSG9zdEJpbmRpbmcsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmxldCBkcmFnU291cmNlOiBTb3J0YWJsZUl0ZW1EaXJlY3RpdmU7XG5sZXQgb3JpZ2luYWxOZXh0U2libGluZzogRWxlbWVudCB8IHVuZGVmaW5lZDtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2l3U29ydGFibGVJdGVtXSdcbn0pXG5leHBvcnQgY2xhc3MgU29ydGFibGVJdGVtRGlyZWN0aXZlIHtcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmRyYWdnYWJsZScpIGRyYWdnYWJsZTogYm9vbGVhbiA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnYXR0ci5kcm9wcGFibGUnKSBkcm9wcGFibGU6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBkcm9wQXJlYTogc3RyaW5nID0gJ2RlZmF1bHREcm9wQXJlYSc7XG5cbiAgcHJpdmF0ZSBsYXN0RXZlbnQ6IHN0cmluZyA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICAvLyBkcmFnZ2FibGVcbiAgQEhvc3RMaXN0ZW5lcignZHJhZ3N0YXJ0JywgWyckZXZlbnQnXSlcbiAgb25EcmFnU3RhcnQoZHJhZ0V2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICBpZiAoIWRyYWdFdmVudC5kYXRhVHJhbnNmZXIpIHtcbiAgICAgIGNvbnNvbGUud2Fybignbm8gZGF0YSB0cmFuc2ZlcicpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFnRXZlbnQuZGF0YVRyYW5zZmVyLmVmZmVjdEFsbG93ZWQgPSAnbW92ZSc7XG4gICAgZHJhZ1NvdXJjZSA9IHRoaXM7XG4gICAgb3JpZ2luYWxOZXh0U2libGluZyA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm5leHRTaWJsaW5nO1xuICB9XG5cbiAgLy8gZHJvcHBhYmxlXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdlbnRlcicsIFsnJGV2ZW50J10pXG4gIG9uRHJhZ0VudGVyKGRyYWdFdmVudDogRHJhZ0V2ZW50KSB7XG4gICAgdGhpcy5sYXN0RXZlbnQgPSAnZHJhZ2VudGVyJztcbiAgICBkcmFnRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoZHJhZ1NvdXJjZSAhPT0gdGhpcyAmJiBkcmFnU291cmNlLmRyb3BBcmVhID09PSB0aGlzLmRyb3BBcmVhKSB7XG4gICAgICAvLyB1cGRhdGluZyBpcyBvbmx5IHByZXZpZXcsIGl0IGlzIHVuZG9uZSBpZiBpdCBpcyBub3QgZmluaXNoZWQgYnkgdGhlIGRyb3AgZXZlbnRcbiAgICAgIHRoaXMudXBkYXRlRWxlbWVudHMoZHJhZ1NvdXJjZSwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZHJhZ292ZXInLCBbJyRldmVudCddKVxuICBvbkRyYWdPdmVyKGRyYWdPdmVyRXZlbnQ6IERyYWdFdmVudCkge1xuICAgIC8vIG5lY2Vzc2FyeSBmb3IgZHJvcCBldmVudCB0byBiZSB0cmlnZ2VyZWRcbiAgICBkcmFnT3ZlckV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICAvLyBkcm9wcGFibGVcbiAgQEhvc3RMaXN0ZW5lcignZHJhZ2VuZCcsIFsnJGV2ZW50J10pXG4gIG9uRHJhZ0VuZChkcmFnRXZlbnQ6IERyYWdFdmVudCkge1xuICAgIGlmICh0aGlzLmxhc3RFdmVudCA9PT0gJ2Ryb3AnKSB7IHJldHVybjsgfVxuICAgIGlmIChkcmFnU291cmNlLmRyb3BBcmVhID09PSB0aGlzLmRyb3BBcmVhICYmIHR5cGVvZiBvcmlnaW5hbE5leHRTaWJsaW5nICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgb3JpZ2luYWxOZXh0U2libGluZy5wYXJlbnROb2RlIS5pbnNlcnRCZWZvcmUoZHJhZ1NvdXJjZS5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIG9yaWdpbmFsTmV4dFNpYmxpbmcpO1xuICAgICAgb3JpZ2luYWxOZXh0U2libGluZyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICAvLyBkcm9wcGFibGVcbiAgQEhvc3RMaXN0ZW5lcignZHJvcCcsIFsnJGV2ZW50J10pXG4gIG9uRHJvcChkcm9wRXZlbnQ6IERyYWdFdmVudCkge1xuICAgIHRoaXMubGFzdEV2ZW50ID0gJ2Ryb3AnO1xuICAgIGRyb3BFdmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcyA9PT0gZHJhZ1NvdXJjZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyB0aGlzLnVwZGF0ZUVsZW1lbnRzKGRyYWdTb3VyY2UsIHRoaXMpO1xuICAgIG9yaWdpbmFsTmV4dFNpYmxpbmcgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUVsZW1lbnRzID0gKGRyYWdnZWQ6IFNvcnRhYmxlSXRlbURpcmVjdGl2ZSwgZHJvcHBlZE9uOiBTb3J0YWJsZUl0ZW1EaXJlY3RpdmUpID0+IHtcbiAgICBsZXQgcGFyZW50OiBFbGVtZW50ID0gZHJvcHBlZE9uLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5wYXJlbnROb2RlO1xuICAgIGxldCBkcmFnZ2VkRWw6IEVsZW1lbnQgPSBkcmFnZ2VkLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBsZXQgZHJvcEVsOiBFbGVtZW50ID0gZHJvcHBlZE9uLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBsZXQgZHJhZ2dlZEluZGV4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChwYXJlbnQuY2hpbGRyZW4sIGRyYWdnZWRFbCk7XG4gICAgbGV0IGRyb3BJbmRleCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwocGFyZW50LmNoaWxkcmVuLCBkcm9wRWwpO1xuICAgIGlmIChkcmFnZ2VkSW5kZXggPT09IGRyb3BJbmRleCkge1xuICAgICAgLy8gZG8gbm90aGluZ1xuICAgIH0gZWxzZSBpZiAoZHJhZ2dlZEluZGV4IDwgZHJvcEluZGV4KSB7XG4gICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGRyYWdnZWRFbCwgZHJvcEVsLm5leHRTaWJsaW5nIHx8IGRyb3BFbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoZHJhZ2dlZEVsLCBkcm9wRWwucHJldmlvdXNTaWJsaW5nIHx8IGRyb3BFbCk7XG4gICAgfVxuICB9XG59XG4iXX0=