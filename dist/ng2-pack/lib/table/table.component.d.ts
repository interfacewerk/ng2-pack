import { ColumnState } from './column-state.class';
import { I18nService } from './../services/i18n.service';
import { TableInitService } from './table-init.service';
import { ColumnConfig, ColumnLookup, Row, SortingMode } from './types';
import { EditCellEvent, RowClickEvent, ToggleSubfieldEvent, SortColumnEvent } from './events';
import { TableSortingService } from './table-sorting.service';
import { AfterViewInit, ElementRef, EventEmitter, OnChanges, InjectionToken } from '@angular/core';
export interface TableDefaultValues {
    reorderingEnabled: boolean;
    rowsSortingMode: SortingMode;
    inlineEditingEnabled: boolean;
    changeColumnVisibility: boolean;
    language: string;
}
export declare const TableDefaults: InjectionToken<unknown>;
export declare const tableDefaultValues: TableDefaultValues;
export declare class TableComponent implements AfterViewInit, OnChanges {
    private elementRef;
    private tableSortingService;
    private tableInitService;
    private i18nService;
    columnsConfig: ColumnConfig[];
    visibleColumns: string[];
    rows: Row[];
    reorderingEnabled: boolean;
    changeColumnVisibility: boolean;
    rowsSortingMode: SortingMode;
    inlineEditingEnabled: boolean;
    language: string;
    initialSortColumn: string | undefined;
    addColumn: EventEmitter<string>;
    removeColumn: EventEmitter<string>;
    sortColumn: EventEmitter<SortColumnEvent>;
    reorderColumns: EventEmitter<string[]>;
    rowClick: EventEmitter<RowClickEvent>;
    visibleColumnsChange: EventEmitter<string[]>;
    editCell: EventEmitter<EditCellEvent>;
    toggleSubfield: EventEmitter<ToggleSubfieldEvent>;
    columnsLookup: ColumnLookup;
    addingColumnIndex: number;
    customTemplate: boolean;
    sortedColumnName: string | null;
    private _visibleColumns;
    private _columnsConfig;
    constructor(elementRef: ElementRef, tableSortingService: TableSortingService, tableInitService: TableInitService, i18nService: I18nService, defaults: any);
    ngOnChanges(arg: any): void;
    ngAfterViewInit(): void;
    isSorted(column: ColumnState, direction: string): boolean;
    onRowClicked(rowClickEvent: RowClickEvent): void;
    onSortColumn(sortEvent: SortColumnEvent): void;
    onAddingColumn(index: number): void;
    onReorderColumns(reorderColumnsEvent: string[]): void;
    onToggleSubfield(toggleSubfieldEvent: ToggleSubfieldEvent): void;
    sortRows(rows: any[], sortEvent: SortColumnEvent): Row[];
    initialSort(): void;
    private initializeDefaults;
}
