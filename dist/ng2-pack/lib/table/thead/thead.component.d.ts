import { ColumnConfig, ColumnLookup } from './../types';
import { SortColumnEvent, ToggleSubfieldEvent } from '../events';
import { ColumnState } from './../column-state.class';
import { TableComponent } from './../table.component';
import { TableInitService } from '../table-init.service';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnInit } from '@angular/core';
export declare class TheadComponent implements OnInit, AfterViewInit {
    private elementRef;
    private changeDetectorRef;
    private tableInitService;
    columnsConfig: ColumnConfig[];
    visibleColumns: string[];
    addColumn: EventEmitter<string>;
    removeColumn: EventEmitter<string>;
    sortColumn: EventEmitter<SortColumnEvent>;
    addingColumn: EventEmitter<number>;
    reorderColumns: EventEmitter<string[]>;
    toggleSubfield: EventEmitter<ToggleSubfieldEvent>;
    lastColumnComboboxActive: boolean;
    addingColumnIndex: number | null;
    draggedColumnId: string | null;
    customTemplate: boolean;
    private _columnsConfig;
    private _visibleColumns;
    private _reorderingEnabled;
    private _columnsLookup;
    private tableComponent;
    constructor(elementRef: ElementRef, changeDetectorRef: ChangeDetectorRef, // needed to trigger change detection on jquery ui's callbacks
    tableInitService: TableInitService, tableComponent: TableComponent);
    readonly changeColumnVisibility: boolean;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    readonly columnsLookup: ColumnLookup;
    readonly reorderingEnabled: boolean;
    readonly isLastAddingColumnVisible: boolean;
    isSorted(column: ColumnState, direction: string): boolean;
    column(columnName: string): ColumnState;
    selectNewColumn(item: {
        value: string;
    }, atPosition: number): void;
    toggleCombobox(): void;
    onAddCombobox(index: number): void;
    onSortColumn(sortEvent: SortColumnEvent): void;
    onToggleSubfield(toggleSubfieldEvent: ToggleSubfieldEvent): void;
    private initializeSortable;
    private delegateInput;
}
