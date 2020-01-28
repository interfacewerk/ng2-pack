/**
 * @fileoverview added by tsickle
 * Generated from: lib/sortable/sortable-item.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ElementRef, Directive, HostBinding, HostListener, Input } from '@angular/core';
/** @type {?} */
let dragSource;
/** @type {?} */
let originalNextSibling;
export class SortableItemDirective {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
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
        (dragged, droppedOn) => {
            /** @type {?} */
            let parent = droppedOn.elementRef.nativeElement.parentNode;
            /** @type {?} */
            let draggedEl = dragged.elementRef.nativeElement;
            /** @type {?} */
            let dropEl = droppedOn.elementRef.nativeElement;
            /** @type {?} */
            let draggedIndex = Array.prototype.indexOf.call(parent.children, draggedEl);
            /** @type {?} */
            let dropIndex = Array.prototype.indexOf.call(parent.children, dropEl);
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
    /**
     * @param {?} dragEvent
     * @return {?}
     */
    onDragStart(dragEvent) {
        if (!dragEvent.dataTransfer) {
            console.warn('no data transfer');
            return;
        }
        dragEvent.dataTransfer.effectAllowed = 'move';
        dragSource = this;
        originalNextSibling = this.elementRef.nativeElement.nextSibling;
    }
    // droppable
    /**
     * @param {?} dragEvent
     * @return {?}
     */
    onDragEnter(dragEvent) {
        this.lastEvent = 'dragenter';
        dragEvent.preventDefault();
        if (dragSource !== this && dragSource.dropArea === this.dropArea) {
            // updating is only preview, it is undone if it is not finished by the drop event
            this.updateElements(dragSource, this);
        }
    }
    /**
     * @param {?} dragOverEvent
     * @return {?}
     */
    onDragOver(dragOverEvent) {
        // necessary for drop event to be triggered
        dragOverEvent.preventDefault();
    }
    // droppable
    /**
     * @param {?} dragEvent
     * @return {?}
     */
    onDragEnd(dragEvent) {
        if (this.lastEvent === 'drop') {
            return;
        }
        if (dragSource.dropArea === this.dropArea && typeof originalNextSibling !== 'undefined') {
            (/** @type {?} */ (originalNextSibling.parentNode)).insertBefore(dragSource.elementRef.nativeElement, originalNextSibling);
            originalNextSibling = undefined;
        }
    }
    // droppable
    /**
     * @param {?} dropEvent
     * @return {?}
     */
    onDrop(dropEvent) {
        this.lastEvent = 'drop';
        dropEvent.stopPropagation();
        if (this === dragSource) {
            return;
        }
        // this.updateElements(dragSource, this);
        originalNextSibling = undefined;
    }
}
SortableItemDirective.decorators = [
    { type: Directive, args: [{
                selector: '[iwSortableItem]'
            },] }
];
/** @nocollapse */
SortableItemDirective.ctorParameters = () => [
    { type: ElementRef }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGFibGUtaXRlbS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZzItcGFjay8iLCJzb3VyY2VzIjpbImxpYi9zb3J0YWJsZS9zb3J0YWJsZS1pdGVtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUNOLE1BQU0sZUFBZSxDQUFDOztJQUVuQixVQUFpQzs7SUFDakMsbUJBQXdDO0FBSzVDLE1BQU0sT0FBTyxxQkFBcUI7Ozs7SUFPaEMsWUFBbUIsVUFBc0I7UUFBdEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQU5WLGNBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsY0FBUyxHQUFZLElBQUksQ0FBQztRQUNoRCxhQUFRLEdBQVcsaUJBQWlCLENBQUM7UUFFdEMsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQXdEdkIsbUJBQWM7Ozs7O1FBQUcsQ0FBQyxPQUE4QixFQUFFLFNBQWdDLEVBQUUsRUFBRTs7Z0JBQ3hGLE1BQU0sR0FBWSxTQUFTLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxVQUFVOztnQkFDL0QsU0FBUyxHQUFZLE9BQU8sQ0FBQyxVQUFVLENBQUMsYUFBYTs7Z0JBQ3JELE1BQU0sR0FBWSxTQUFTLENBQUMsVUFBVSxDQUFDLGFBQWE7O2dCQUNwRCxZQUFZLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDOztnQkFDdkUsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQztZQUNyRSxJQUFJLFlBQVksS0FBSyxTQUFTLEVBQUU7Z0JBQzlCLGFBQWE7YUFDZDtpQkFBTSxJQUFJLFlBQVksR0FBRyxTQUFTLEVBQUU7Z0JBQ25DLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxXQUFXLElBQUksTUFBTSxDQUFDLENBQUM7YUFDOUQ7aUJBQU07Z0JBQ0wsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLGVBQWUsSUFBSSxNQUFNLENBQUMsQ0FBQzthQUNsRTtRQUNILENBQUMsRUFBQTtJQWxFRCxDQUFDOzs7Ozs7SUFJRCxXQUFXLENBQUMsU0FBb0I7UUFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUU7WUFDM0IsT0FBTyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ2pDLE9BQU87U0FDUjtRQUNELFNBQVMsQ0FBQyxZQUFZLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQztRQUM5QyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLG1CQUFtQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUNsRSxDQUFDOzs7Ozs7SUFJRCxXQUFXLENBQUMsU0FBb0I7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLENBQUM7UUFDN0IsU0FBUyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzNCLElBQUksVUFBVSxLQUFLLElBQUksSUFBSSxVQUFVLENBQUMsUUFBUSxLQUFLLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDaEUsaUZBQWlGO1lBQ2pGLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3ZDO0lBQ0gsQ0FBQzs7Ozs7SUFHRCxVQUFVLENBQUMsYUFBd0I7UUFDakMsMkNBQTJDO1FBQzNDLGFBQWEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7Ozs7SUFJRCxTQUFTLENBQUMsU0FBb0I7UUFDNUIsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLE1BQU0sRUFBRTtZQUFFLE9BQU87U0FBRTtRQUMxQyxJQUFJLFVBQVUsQ0FBQyxRQUFRLEtBQUssSUFBSSxDQUFDLFFBQVEsSUFBSSxPQUFPLG1CQUFtQixLQUFLLFdBQVcsRUFBRTtZQUN2RixtQkFBQSxtQkFBbUIsQ0FBQyxVQUFVLEVBQUMsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztZQUN2RyxtQkFBbUIsR0FBRyxTQUFTLENBQUM7U0FDakM7SUFDSCxDQUFDOzs7Ozs7SUFJRCxNQUFNLENBQUMsU0FBb0I7UUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDeEIsU0FBUyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzVCLElBQUksSUFBSSxLQUFLLFVBQVUsRUFBRTtZQUN2QixPQUFPO1NBQ1I7UUFDRCx5Q0FBeUM7UUFDekMsbUJBQW1CLEdBQUcsU0FBUyxDQUFDO0lBQ2xDLENBQUM7OztZQTlERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjthQUM3Qjs7OztZQVpDLFVBQVU7Ozt3QkFjVCxXQUFXLFNBQUMsZ0JBQWdCO3dCQUM1QixXQUFXLFNBQUMsZ0JBQWdCO3VCQUM1QixLQUFLOzBCQVFMLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7MEJBWXBDLFlBQVksU0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUM7eUJBVXBDLFlBQVksU0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUM7d0JBT25DLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7cUJBVWxDLFlBQVksU0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFqRGhDLDBDQUF5RDs7SUFDekQsMENBQXlEOztJQUN6RCx5Q0FBOEM7Ozs7O0lBRTlDLDBDQUErQjs7Ozs7SUF3RC9CLCtDQWFDOztJQW5FVywyQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBFbGVtZW50UmVmLFxuICBEaXJlY3RpdmUsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5sZXQgZHJhZ1NvdXJjZTogU29ydGFibGVJdGVtRGlyZWN0aXZlO1xubGV0IG9yaWdpbmFsTmV4dFNpYmxpbmc6IEVsZW1lbnQgfCB1bmRlZmluZWQ7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tpd1NvcnRhYmxlSXRlbV0nXG59KVxuZXhwb3J0IGNsYXNzIFNvcnRhYmxlSXRlbURpcmVjdGl2ZSB7XG4gIEBIb3N0QmluZGluZygnYXR0ci5kcmFnZ2FibGUnKSBkcmFnZ2FibGU6IGJvb2xlYW4gPSB0cnVlO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuZHJvcHBhYmxlJykgZHJvcHBhYmxlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgZHJvcEFyZWE6IHN0cmluZyA9ICdkZWZhdWx0RHJvcEFyZWEnO1xuXG4gIHByaXZhdGUgbGFzdEV2ZW50OiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xuICB9XG5cbiAgLy8gZHJhZ2dhYmxlXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdzdGFydCcsIFsnJGV2ZW50J10pXG4gIG9uRHJhZ1N0YXJ0KGRyYWdFdmVudDogRHJhZ0V2ZW50KSB7XG4gICAgaWYgKCFkcmFnRXZlbnQuZGF0YVRyYW5zZmVyKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ25vIGRhdGEgdHJhbnNmZXInKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhZ0V2ZW50LmRhdGFUcmFuc2Zlci5lZmZlY3RBbGxvd2VkID0gJ21vdmUnO1xuICAgIGRyYWdTb3VyY2UgPSB0aGlzO1xuICAgIG9yaWdpbmFsTmV4dFNpYmxpbmcgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5uZXh0U2libGluZztcbiAgfVxuXG4gIC8vIGRyb3BwYWJsZVxuICBASG9zdExpc3RlbmVyKCdkcmFnZW50ZXInLCBbJyRldmVudCddKVxuICBvbkRyYWdFbnRlcihkcmFnRXZlbnQ6IERyYWdFdmVudCkge1xuICAgIHRoaXMubGFzdEV2ZW50ID0gJ2RyYWdlbnRlcic7XG4gICAgZHJhZ0V2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGRyYWdTb3VyY2UgIT09IHRoaXMgJiYgZHJhZ1NvdXJjZS5kcm9wQXJlYSA9PT0gdGhpcy5kcm9wQXJlYSkge1xuICAgICAgLy8gdXBkYXRpbmcgaXMgb25seSBwcmV2aWV3LCBpdCBpcyB1bmRvbmUgaWYgaXQgaXMgbm90IGZpbmlzaGVkIGJ5IHRoZSBkcm9wIGV2ZW50XG4gICAgICB0aGlzLnVwZGF0ZUVsZW1lbnRzKGRyYWdTb3VyY2UsIHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdvdmVyJywgWyckZXZlbnQnXSlcbiAgb25EcmFnT3ZlcihkcmFnT3ZlckV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICAvLyBuZWNlc3NhcnkgZm9yIGRyb3AgZXZlbnQgdG8gYmUgdHJpZ2dlcmVkXG4gICAgZHJhZ092ZXJFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgLy8gZHJvcHBhYmxlXG4gIEBIb3N0TGlzdGVuZXIoJ2RyYWdlbmQnLCBbJyRldmVudCddKVxuICBvbkRyYWdFbmQoZHJhZ0V2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICBpZiAodGhpcy5sYXN0RXZlbnQgPT09ICdkcm9wJykgeyByZXR1cm47IH1cbiAgICBpZiAoZHJhZ1NvdXJjZS5kcm9wQXJlYSA9PT0gdGhpcy5kcm9wQXJlYSAmJiB0eXBlb2Ygb3JpZ2luYWxOZXh0U2libGluZyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG9yaWdpbmFsTmV4dFNpYmxpbmcucGFyZW50Tm9kZSEuaW5zZXJ0QmVmb3JlKGRyYWdTb3VyY2UuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBvcmlnaW5hbE5leHRTaWJsaW5nKTtcbiAgICAgIG9yaWdpbmFsTmV4dFNpYmxpbmcgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgLy8gZHJvcHBhYmxlXG4gIEBIb3N0TGlzdGVuZXIoJ2Ryb3AnLCBbJyRldmVudCddKVxuICBvbkRyb3AoZHJvcEV2ZW50OiBEcmFnRXZlbnQpIHtcbiAgICB0aGlzLmxhc3RFdmVudCA9ICdkcm9wJztcbiAgICBkcm9wRXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMgPT09IGRyYWdTb3VyY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gdGhpcy51cGRhdGVFbGVtZW50cyhkcmFnU291cmNlLCB0aGlzKTtcbiAgICBvcmlnaW5hbE5leHRTaWJsaW5nID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVFbGVtZW50cyA9IChkcmFnZ2VkOiBTb3J0YWJsZUl0ZW1EaXJlY3RpdmUsIGRyb3BwZWRPbjogU29ydGFibGVJdGVtRGlyZWN0aXZlKSA9PiB7XG4gICAgbGV0IHBhcmVudDogRWxlbWVudCA9IGRyb3BwZWRPbi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICBsZXQgZHJhZ2dlZEVsOiBFbGVtZW50ID0gZHJhZ2dlZC5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgbGV0IGRyb3BFbDogRWxlbWVudCA9IGRyb3BwZWRPbi5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgbGV0IGRyYWdnZWRJbmRleCA9IEFycmF5LnByb3RvdHlwZS5pbmRleE9mLmNhbGwocGFyZW50LmNoaWxkcmVuLCBkcmFnZ2VkRWwpO1xuICAgIGxldCBkcm9wSW5kZXggPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHBhcmVudC5jaGlsZHJlbiwgZHJvcEVsKTtcbiAgICBpZiAoZHJhZ2dlZEluZGV4ID09PSBkcm9wSW5kZXgpIHtcbiAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9IGVsc2UgaWYgKGRyYWdnZWRJbmRleCA8IGRyb3BJbmRleCkge1xuICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShkcmFnZ2VkRWwsIGRyb3BFbC5uZXh0U2libGluZyB8fCBkcm9wRWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGRyYWdnZWRFbCwgZHJvcEVsLnByZXZpb3VzU2libGluZyB8fCBkcm9wRWwpO1xuICAgIH1cbiAgfVxufVxuIl19