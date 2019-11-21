import { ElementRef } from '@angular/core';
export declare class SortableItemDirective {
    elementRef: ElementRef;
    draggable: boolean;
    droppable: boolean;
    dropArea: string;
    private lastEvent;
    constructor(elementRef: ElementRef);
    onDragStart(dragEvent: DragEvent): void;
    onDragEnter(dragEvent: DragEvent): void;
    onDragOver(dragOverEvent: DragEvent): void;
    onDragEnd(dragEvent: DragEvent): void;
    onDrop(dropEvent: DragEvent): void;
    private updateElements;
}
