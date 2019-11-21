import { EventEmitter, ElementRef, OnChanges, OnInit, OnDestroy } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare type Select2Option = Select2ItemOption | Select2CategorizedOption;
export interface Select2ItemOption {
    text: string;
    id: string;
}
export interface Select2CategorizedOption {
    text: string;
    children: Select2ItemOption[];
}
export declare const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any;
export declare class Select2Component implements OnInit, OnChanges, ControlValueAccessor, OnDestroy {
    private elementRef;
    items: Array<Select2Option>;
    tags: boolean;
    multiple: boolean;
    placeholder: string;
    open: boolean;
    close: EventEmitter<any>;
    currentValue: string;
    private element;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    ngOnChanges(arg: any): void;
    ngOnDestroy(): void;
    writeValue(v: string): void;
    onChange: (v: string) => void;
    registerOnChange(fn: (v: string) => {}): void;
    onTouched: () => void;
    registerOnTouched(fn: () => {}): void;
    onClose(e: Event): void;
    removeSelect2(): void;
    updateData(): void;
}
