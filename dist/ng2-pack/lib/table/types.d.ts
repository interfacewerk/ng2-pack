import { ColumnState } from './column-state.class';
import { PipeTransform } from '@angular/core';
export declare type SortDirection = 'asc' | 'desc';
export declare type SortingMode = 'default' | 'external' | 'disabled';
export interface ColumnConfig {
    id: string;
    text?: string;
    sortingDisabled?: boolean;
    formatters?: DisplayFormatter[];
    subFields?: SubFieldConfig[];
    category?: {
        id: string;
        text: string;
    };
    sortCompare?: (a: any, b: any) => number;
    sortType?: string;
    initialSortDirection?: SortDirection;
    data?: any;
}
export interface SubFieldConfig {
    id: string;
    text: string;
    isVisible: boolean;
}
export interface ColumnLookup {
    [columnName: string]: ColumnState;
}
export declare type cmpFun = (a: any, b: any) => number;
export interface CompareFunctions {
    [sortType: string]: cmpFun;
}
export interface DisplayFormatter extends PipeTransform {
    arguments?: Array<any>;
}
export interface Row {
    [property: string]: any;
}
