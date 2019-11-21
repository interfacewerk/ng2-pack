import { ColumnConfig } from '../types';
import { Select2Option } from '../../select2/select2.component';
import { TableComponent } from './../table.component';
import { EventEmitter, OnChanges } from '@angular/core';
export declare class AddColumnComponent implements OnChanges {
    private tableComponent;
    visibleColumns: string[];
    open: boolean;
    selected: EventEmitter<{
        value: string;
    }>;
    close: EventEmitter<any>;
    items: Select2Option[];
    value: string | null;
    constructor(tableComponent: TableComponent);
    ngOnChanges(arg: any): void;
    onSelected(value: string): void;
    columnsNotVisibleInTable(): ColumnConfig[];
    categorizeColumns(columns: ColumnConfig[]): Select2Option[];
}
