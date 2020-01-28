import { ColumnState } from './column-state.class';
import { CompareFunctions, Row } from './types';
export interface Sorting {
    sort(rows: Row[], columnState: ColumnState): any[];
}
export declare const sortingCompare: CompareFunctions;
export declare class TableSortingService {
    sort(rows: Row[], columnState: ColumnState): Row[];
}
