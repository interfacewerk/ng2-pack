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
import { PipesModule } from './../pipes/pipes.module';
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
                    FormatColumnPipe
                ],
                exports: [
                    TableComponent,
                    TheadComponent,
                    TbodyComponent,
                    AddColumnComponent,
                    Select2Component,
                    TdComponent,
                    ThComponent,
                    FormatColumnPipe
                ],
                providers: [
                    TableSortingService,
                    TableInitService,
                    I18nService,
                    DefaultValuePipe
                ]
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmcyLXBhY2svIiwic291cmNlcyI6WyJsaWIvdGFibGUvdGFibGUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsY0FBYyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUNBQW1DLENBQUM7QUFDckUsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sZ0NBQWdDLENBQUM7QUFDaEUsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzlDLE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQUM5QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDcEQsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNkNBQTZDLENBQUM7QUFDN0UsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFDNUQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBRXZELE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBRXRELE9BQU8sRUFBRSxjQUFjLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBcUM3QyxNQUFNLE9BQU8sV0FBVzs7O1lBbEN2QixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFdBQVc7b0JBQ1gsWUFBWTtvQkFDWixXQUFXO29CQUNYLGNBQWM7aUJBQ2Y7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLGNBQWM7b0JBQ2QsY0FBYztvQkFDZCxjQUFjO29CQUNkLGtCQUFrQjtvQkFDbEIsZ0JBQWdCO29CQUNoQixXQUFXO29CQUNYLFdBQVc7b0JBQ1gsZ0JBQWdCO2lCQUNqQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsY0FBYztvQkFDZCxjQUFjO29CQUNkLGNBQWM7b0JBQ2Qsa0JBQWtCO29CQUNsQixnQkFBZ0I7b0JBQ2hCLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxnQkFBZ0I7aUJBQ2pCO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxtQkFBbUI7b0JBQ25CLGdCQUFnQjtvQkFDaEIsV0FBVztvQkFDWCxnQkFBZ0I7aUJBQ2pCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1RhYmxlQ29tcG9uZW50fSBmcm9tICcuL3RhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQge1RoZWFkQ29tcG9uZW50fSBmcm9tICcuL3RoZWFkL3RoZWFkLmNvbXBvbmVudCc7XG5pbXBvcnQge1Rib2R5Q29tcG9uZW50fSBmcm9tICcuL3Rib2R5L3Rib2R5LmNvbXBvbmVudCc7XG5pbXBvcnQge0FkZENvbHVtbkNvbXBvbmVudH0gZnJvbSAnLi9hZGQtY29sdW1uL2FkZC1jb2x1bW4uY29tcG9uZW50JztcbmltcG9ydCB7U2VsZWN0MkNvbXBvbmVudH0gZnJvbSAnLi8uLi9zZWxlY3QyL3NlbGVjdDIuY29tcG9uZW50JztcbmltcG9ydCB7VGRDb21wb25lbnR9IGZyb20gJy4vdGQvdGQuY29tcG9uZW50JztcbmltcG9ydCB7VGhDb21wb25lbnR9IGZyb20gJy4vdGgvdGguY29tcG9uZW50JztcbmltcG9ydCB7UGlwZXNNb2R1bGV9IGZyb20gJy4vLi4vcGlwZXMvcGlwZXMubW9kdWxlJztcbmltcG9ydCB7RGVmYXVsdFZhbHVlUGlwZX0gZnJvbSAnLi8uLi9waXBlcy9kZWZhdWx0LXZhbHVlL2RlZmF1bHQtdmFsdWUucGlwZSc7XG5pbXBvcnQge0Zvcm1hdENvbHVtblBpcGV9IGZyb20gJy4vcGlwZXMvZm9ybWF0LWNvbHVtbi5waXBlJztcbmltcG9ydCB7STE4blNlcnZpY2V9IGZyb20gJy4vLi4vc2VydmljZXMvaTE4bi5zZXJ2aWNlJztcblxuaW1wb3J0IHtUYWJsZVNvcnRpbmdTZXJ2aWNlfSBmcm9tICcuL3RhYmxlLXNvcnRpbmcuc2VydmljZSc7XG5pbXBvcnQge1RhYmxlSW5pdFNlcnZpY2V9IGZyb20gJy4vdGFibGUtaW5pdC5zZXJ2aWNlJztcblxuaW1wb3J0IHsgRHJvcGRvd25Nb2R1bGV9IGZyb20gJ25neC1kcm9wZG93bic7XG5cbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFBpcGVzTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBEcm9wZG93bk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUYWJsZUNvbXBvbmVudCxcbiAgICBUaGVhZENvbXBvbmVudCxcbiAgICBUYm9keUNvbXBvbmVudCxcbiAgICBBZGRDb2x1bW5Db21wb25lbnQsXG4gICAgU2VsZWN0MkNvbXBvbmVudCxcbiAgICBUZENvbXBvbmVudCxcbiAgICBUaENvbXBvbmVudCxcbiAgICBGb3JtYXRDb2x1bW5QaXBlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUYWJsZUNvbXBvbmVudCxcbiAgICBUaGVhZENvbXBvbmVudCxcbiAgICBUYm9keUNvbXBvbmVudCxcbiAgICBBZGRDb2x1bW5Db21wb25lbnQsXG4gICAgU2VsZWN0MkNvbXBvbmVudCxcbiAgICBUZENvbXBvbmVudCxcbiAgICBUaENvbXBvbmVudCxcbiAgICBGb3JtYXRDb2x1bW5QaXBlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFRhYmxlU29ydGluZ1NlcnZpY2UsXG4gICAgVGFibGVJbml0U2VydmljZSxcbiAgICBJMThuU2VydmljZSxcbiAgICBEZWZhdWx0VmFsdWVQaXBlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGFibGVNb2R1bGUgeyB9XG4iXX0=