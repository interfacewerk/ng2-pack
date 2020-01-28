import { ColumnState } from './../column-state.class';
import { FormatColumnPipe } from './../pipes/format-column.pipe';
import { ElementRef, OnInit } from '@angular/core';
export declare class TdComponent implements OnInit {
    private formatColumnPipe;
    column: ColumnState;
    row: any;
    contentDiv: ElementRef;
    constructor(formatColumnPipe: FormatColumnPipe);
    ngOnInit(): void;
    readonly cellValue: any;
    readonly content: string;
    readonly isChanged: boolean;
    readonly hasSubfields: boolean;
    readonly formattedValue: any;
}
