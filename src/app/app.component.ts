import { TableSortingService } from './../lib/table/table-sorting.service';
import { PaginationComponent } from './../lib/table-extension/pagination/pagination.component';
import {ColumnConfig, SortColumnEvent} from './../lib/table';
import {TableExampleService} from './table-example/table-example.service';

import { Component, ViewChild } from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'iw-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DatePipe, TableExampleService]
})
export class AppComponent {
  title = 'Data Table';
  columnsConfig: ColumnConfig[];
  rows: any[];
  paginatedRows: any[];
  visibleColumns = ['firstName', 'lastName'];
  customizedFields = ['studies'];
  actionList: string[] = [];

  private pageStart = 0;
  private pageEnd = 10;

  constructor(
    private tableExampleService: TableExampleService,
    private tableSortingService: TableSortingService) {
    this.columnsConfig = tableExampleService.columnsConfig;
    this.rows = tableExampleService.rows
      .map((row) => {
        let copy = {
          id: row.id,
          salutation: row.salutation,
          firstName: row.firstName,
          lastName: row.lastName,
          birthday: row.birthday,
          email: row.email,
          phone: row.phone,
          country: row.country,
        };
        return copy;
      });
    this.onPageChange(this.pageStart, this.pageEnd);
  }

  get rowsWithStudies(): any[] {
    return this.tableExampleService.rows;
  }

  onAction(action: string) {
    if (this.actionList.length > 3) {
      this.actionList.shift();
    }
    this.actionList.push(action);
  }

  isCustomField(columnId: string): boolean {
    return this.customizedFields.indexOf(columnId) !== -1;
  }

  onPageChange(pageStart: number, pageEnd: number) {
    this.paginatedRows = this.rows.slice(pageStart, pageEnd);
  }

  onSortColumn(sortColumnEvent: SortColumnEvent) {
    this.tableSortingService.sort(this.rows, sortColumnEvent.columnState);
    this.onPageChange(this.pageStart, this.pageEnd);
  }
}
