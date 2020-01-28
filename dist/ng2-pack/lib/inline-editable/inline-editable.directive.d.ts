import { ElementRef, EventEmitter, Renderer } from '@angular/core';
export declare class InlineEditableDirective {
    private element;
    private renderer;
    iwInlineEditable: boolean;
    onEnter: EventEmitter<string>;
    contentEditable: boolean;
    originalContent: string;
    startEditing(): void;
    keyPressed(event: KeyboardEvent): void;
    constructor(element: ElementRef, renderer: Renderer);
    readonly isChanged: boolean;
    content: string;
    cancelEditing(): void;
}
