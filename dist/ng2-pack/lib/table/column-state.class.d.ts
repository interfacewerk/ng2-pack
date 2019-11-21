import { ColumnConfig, SortDirection } from './types';
export declare class ColumnState {
    readonly config: ColumnConfig;
    private _currentSortDirection?;
    activeFields: string[];
    constructor(config: ColumnConfig, _currentSortDirection?: SortDirection, activeFields?: string[]);
    readonly initialSortDirection: SortDirection;
    currentSortDirection: SortDirection;
    toggleDirection(): SortDirection;
}
