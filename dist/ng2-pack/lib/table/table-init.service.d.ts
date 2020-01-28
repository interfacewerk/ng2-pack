import { ColumnConfig, ColumnLookup, Row } from './types';
export declare class TableInitService {
    constructor();
    detectColumnConfiguration(rows: Row[]): [ColumnLookup, ColumnConfig[]];
    detectColumnLookup(rows: Row[]): ColumnLookup;
    columnsConfig2Lookup(columnsConfig: ColumnConfig[]): ColumnLookup;
    columnsLookup2Config(columnsLookup: ColumnLookup): ColumnConfig[];
}
