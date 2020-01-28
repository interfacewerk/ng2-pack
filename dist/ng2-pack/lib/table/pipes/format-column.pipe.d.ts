import { DefaultValuePipe } from './../../pipes/default-value/default-value.pipe';
import { DisplayFormatter } from './../types';
import { ColumnState } from './../column-state.class';
import { PipeTransform } from '@angular/core';
export declare class FormatColumnPipe implements PipeTransform {
    private defaultValuePipe;
    constructor(defaultValuePipe: DefaultValuePipe);
    transform(value: any, column: ColumnState): any;
    applyFormatters(value: any, formatters: undefined | DisplayFormatter[]): any;
}
