/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/table.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { TableComponent } from './table.component';
import { TheadComponent } from './thead/thead.component';
import { TbodyComponent } from './tbody/tbody.component';
import { AddColumnComponent } from './add-column/add-column.component';
import { Select2Component } from './../select2/select2.component';
import { TdComponent } from './td/td.component';
import { ThComponent } from './th/th.component';
import { PipesModule } from './../pipes/';
import { DefaultValuePipe } from './../pipes/default-value/default-value.pipe';
import { FormatColumnPipe } from './pipes/format-column.pipe';
import { I18nService } from './../services/i18n.service';
import { TableSortingService } from './table-sorting.service';
import { TableInitService } from './table-init.service';
import { DropdownModule } from 'ngx-dropdown';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
export class TableModule {
}
TableModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    PipesModule,
                    CommonModule,
                    FormsModule,
                    DropdownModule
                ],
                declarations: [
                    TableComponent,
                    TheadComponent,
                    TbodyComponent,
                    AddColumnComponent,
                    Select2Component,
                    TdComponent,
                    ThComponent,
                    FormatColumnPipe,
                ],
                exports: [
                    TableComponent,
                    TheadComponent,
                    TbodyComponent,
                    AddColumnComponent,
                    Select2Component,
                    TdComponent,
                    ThComponent,
                    FormatColumnPipe,
                ],
                providers: [
                    TableSortingService,
                    TableInitService,
                    I18nService,
                    DefaultValuePipe
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXBhY2svIiwic291cmNlcyI6WyJsaWIvdGFibGUvdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDaEUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sYUFBYSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDZDQUE2QyxDQUFDO0FBQzdFLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUV2RCxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUM1RCxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsY0FBYyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBRTdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQW9DN0MsTUFBTSxPQUFPLFdBQVc7OztZQWxDdkIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxXQUFXO29CQUNYLFlBQVk7b0JBQ1osV0FBVztvQkFDWCxjQUFjO2lCQUNmO2dCQUNELFlBQVksRUFBRTtvQkFDWixjQUFjO29CQUNkLGNBQWM7b0JBQ2QsY0FBYztvQkFDZCxrQkFBa0I7b0JBQ2xCLGdCQUFnQjtvQkFDaEIsV0FBVztvQkFDWCxXQUFXO29CQUNYLGdCQUFnQjtpQkFDakI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLGNBQWM7b0JBQ2QsY0FBYztvQkFDZCxjQUFjO29CQUNkLGtCQUFrQjtvQkFDbEIsZ0JBQWdCO29CQUNoQixXQUFXO29CQUNYLFdBQVc7b0JBQ1gsZ0JBQWdCO2lCQUNqQjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1QsbUJBQW1CO29CQUNuQixnQkFBZ0I7b0JBQ2hCLFdBQVc7b0JBQ1gsZ0JBQWdCO2lCQUNqQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUYWJsZUNvbXBvbmVudH0gZnJvbSAnLi90YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHtUaGVhZENvbXBvbmVudH0gZnJvbSAnLi90aGVhZC90aGVhZC5jb21wb25lbnQnO1xuaW1wb3J0IHtUYm9keUNvbXBvbmVudH0gZnJvbSAnLi90Ym9keS90Ym9keS5jb21wb25lbnQnO1xuaW1wb3J0IHtBZGRDb2x1bW5Db21wb25lbnR9IGZyb20gJy4vYWRkLWNvbHVtbi9hZGQtY29sdW1uLmNvbXBvbmVudCc7XG5pbXBvcnQge1NlbGVjdDJDb21wb25lbnR9IGZyb20gJy4vLi4vc2VsZWN0Mi9zZWxlY3QyLmNvbXBvbmVudCc7XG5pbXBvcnQge1RkQ29tcG9uZW50fSBmcm9tICcuL3RkL3RkLmNvbXBvbmVudCc7XG5pbXBvcnQge1RoQ29tcG9uZW50fSBmcm9tICcuL3RoL3RoLmNvbXBvbmVudCc7XG5pbXBvcnQge1BpcGVzTW9kdWxlfSBmcm9tICcuLy4uL3BpcGVzLyc7XG5pbXBvcnQge0RlZmF1bHRWYWx1ZVBpcGV9IGZyb20gJy4vLi4vcGlwZXMvZGVmYXVsdC12YWx1ZS9kZWZhdWx0LXZhbHVlLnBpcGUnO1xuaW1wb3J0IHtGb3JtYXRDb2x1bW5QaXBlfSBmcm9tICcuL3BpcGVzL2Zvcm1hdC1jb2x1bW4ucGlwZSc7XG5pbXBvcnQge0kxOG5TZXJ2aWNlfSBmcm9tICcuLy4uL3NlcnZpY2VzL2kxOG4uc2VydmljZSc7XG5cbmltcG9ydCB7VGFibGVTb3J0aW5nU2VydmljZX0gZnJvbSAnLi90YWJsZS1zb3J0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHtUYWJsZUluaXRTZXJ2aWNlfSBmcm9tICcuL3RhYmxlLWluaXQuc2VydmljZSc7XG5cbmltcG9ydCB7IERyb3Bkb3duTW9kdWxlfSBmcm9tICduZ3gtZHJvcGRvd24nO1xuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgUGlwZXNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEZvcm1zTW9kdWxlLFxuICAgIERyb3Bkb3duTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRhYmxlQ29tcG9uZW50LFxuICAgIFRoZWFkQ29tcG9uZW50LFxuICAgIFRib2R5Q29tcG9uZW50LFxuICAgIEFkZENvbHVtbkNvbXBvbmVudCxcbiAgICBTZWxlY3QyQ29tcG9uZW50LFxuICAgIFRkQ29tcG9uZW50LFxuICAgIFRoQ29tcG9uZW50LFxuICAgIEZvcm1hdENvbHVtblBpcGUsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUYWJsZUNvbXBvbmVudCxcbiAgICBUaGVhZENvbXBvbmVudCxcbiAgICBUYm9keUNvbXBvbmVudCxcbiAgICBBZGRDb2x1bW5Db21wb25lbnQsXG4gICAgU2VsZWN0MkNvbXBvbmVudCxcbiAgICBUZENvbXBvbmVudCxcbiAgICBUaENvbXBvbmVudCxcbiAgICBGb3JtYXRDb2x1bW5QaXBlLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBUYWJsZVNvcnRpbmdTZXJ2aWNlLFxuICAgIFRhYmxlSW5pdFNlcnZpY2UsXG4gICAgSTE4blNlcnZpY2UsXG4gICAgRGVmYXVsdFZhbHVlUGlwZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRhYmxlTW9kdWxlIHsgfVxuIl19