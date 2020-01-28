import { EventEmitter, Directive, ElementRef, Renderer, Input, Output, HostBinding, HostListener, NgModule, Pipe, Injectable, InjectionToken, Component, ViewEncapsulation, Inject, Optional, ChangeDetectorRef, ViewChild, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { DropdownModule } from 'ngx-dropdown';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/inline-editable/inline-editable.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const KeyCodes = {
    Enter: 13,
    Escape: 27,
};
KeyCodes[KeyCodes.Enter] = 'Enter';
KeyCodes[KeyCodes.Escape] = 'Escape';
class InlineEditableDirective {
    /**
     * @param {?} element
     * @param {?} renderer
     */
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        // @Input() set triggerEvent(triggerEvent: string) {
        //   if (!this.element) {
        //     return;
        //   }
        //   console.log(triggerEvent, this.element);
        //   this.renderer.listen(this.element.nativeElement, triggerEvent, () => {
        //     this.contentEditable = true;
        //   });
        // }
        this.onEnter = new EventEmitter();
        this.contentEditable = true;
    }
    /**
     * @param {?} isEnabled
     * @return {?}
     */
    set iwInlineEditable(isEnabled) {
        this.contentEditable = isEnabled;
    }
    ;
    /**
     * @return {?}
     */
    startEditing() {
        this.originalContent = this.content;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyPressed(event) {
        switch (event.keyCode) {
            case KeyCodes.Enter:
                event.stopPropagation();
                this.onEnter.emit(this.content);
                break;
            case KeyCodes.Escape:
                this.cancelEditing();
                break;
        }
    }
    /**
     * @return {?}
     */
    get isChanged() {
        return this.originalContent !== this.content;
    }
    /**
     * @return {?}
     */
    get content() {
        return this.element.nativeElement.textContent.trim();
    }
    /**
     * @param {?} content
     * @return {?}
     */
    set content(content) {
        this.renderer.setElementProperty(this.element, 'innerText', content);
    }
    /**
     * @return {?}
     */
    cancelEditing() {
        this.content = this.originalContent;
    }
}
InlineEditableDirective.decorators = [
    { type: Directive, args: [{
                selector: '[iwInlineEditable]'
            },] }
];
/** @nocollapse */
InlineEditableDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer }
];
InlineEditableDirective.propDecorators = {
    iwInlineEditable: [{ type: Input, args: ['iwInlineEditable',] }],
    onEnter: [{ type: Output }],
    contentEditable: [{ type: HostBinding, args: ['attr.contenteditable',] }],
    startEditing: [{ type: HostListener, args: ['focus',] }],
    keyPressed: [{ type: HostListener, args: ['keydown', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    InlineEditableDirective.prototype.onEnter;
    /** @type {?} */
    InlineEditableDirective.prototype.contentEditable;
    /** @type {?} */
    InlineEditableDirective.prototype.originalContent;
    /**
     * @type {?}
     * @private
     */
    InlineEditableDirective.prototype.element;
    /**
     * @type {?}
     * @private
     */
    InlineEditableDirective.prototype.renderer;
    /* Skipping unhandled member: ;*/
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/inline-editable/inline-editable.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class InlineEditableModule {
}
InlineEditableModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    InlineEditableDirective
                ],
                exports: [
                    InlineEditableDirective,
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/default-value/default-value.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DefaultValuePipe {
    /**
     * @param {?} value
     * @param {?=} defaultValue
     * @param {?=} args
     * @return {?}
     */
    transform(value, defaultValue = '—', args) {
        if (typeof value !== 'undefined' && !this.isEmptyString(value)) {
            return value;
        }
        return defaultValue;
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    isEmptyString(value) {
        return typeof value === 'string' && value.trim() === '';
    }
}
DefaultValuePipe.decorators = [
    { type: Pipe, args: [{
                name: 'defaultValue'
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/locales/en.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const en = (/** @type {?} */ ({
    table: {
        sort: 'Sort',
        addLeft: 'Add column to the left',
        addRight: 'Add column to the right',
        subFields: 'Subfields in the column',
        removeColumn: 'Remove this column',
        typeToSearch: 'Type to search',
    }
}));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/locales/de.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const de = (/** @type {?} */ ({
    table: {
        sort: 'Sortieren',
        addLeft: 'Spalte links hinzufügen',
        addRight: 'Spalte rechts hinzufügen',
        subFields: 'Felder in der Spalte',
        removeColumn: 'Diese Spalte entfernen',
        typeToSearch: 'Tippen zum Suchen',
    }
}));

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/i18n.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function I18nLocales() { }
/**
 * @record
 */
function I18nLocale() { }
class I18nService {
    constructor() {
        this.language = 'en';
        this.translations = {
            en,
            de
        };
    }
    /**
     * @param {?} nestedKey
     * @param {?=} language
     * @return {?}
     */
    get(nestedKey, language = this.language) {
        if (!this.translations) {
            console.error('I18nService is used without initialization with translations');
            return '';
        }
        /** @type {?} */
        let keys = nestedKey.split('.');
        /** @type {?} */
        let translation = '';
        try {
            translation = (/** @type {?} */ (keys
                .reduce((/**
             * @param {?} translationTree
             * @param {?} key
             * @return {?}
             */
            (translationTree, key) => {
                return translationTree[key];
            }), this.translations[language])));
        }
        catch (err) {
            console.error(`Unknown key "${nestedKey}" was used!`);
        }
        return translation;
    }
}
I18nService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
I18nService.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    I18nService.prototype.language;
    /** @type {?} */
    I18nService.prototype.translations;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/t/t.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TPipe {
    /**
     * @param {?} i18nService
     */
    constructor(i18nService) {
        this.i18nService = i18nService;
    }
    /**
     * @param {?} value
     * @param {?=} args
     * @return {?}
     */
    transform(value, args) {
        return this.i18nService.get(value);
    }
}
TPipe.decorators = [
    { type: Pipe, args: [{
                name: 't'
            },] }
];
/** @nocollapse */
TPipe.ctorParameters = () => [
    { type: I18nService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    TPipe.prototype.i18nService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/pipes/pipes.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PipesModule {
}
PipesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    DefaultValuePipe,
                    TPipe,
                ],
                exports: [
                    DefaultValuePipe,
                    TPipe,
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sortable/sortable-item.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
let dragSource;
/** @type {?} */
let originalNextSibling;
class SortableItemDirective {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.draggable = true;
        this.droppable = true;
        this.dropArea = 'defaultDropArea';
        this.lastEvent = '';
        this.updateElements = (/**
         * @param {?} dragged
         * @param {?} droppedOn
         * @return {?}
         */
        (dragged, droppedOn) => {
            /** @type {?} */
            let parent = droppedOn.elementRef.nativeElement.parentNode;
            /** @type {?} */
            let draggedEl = dragged.elementRef.nativeElement;
            /** @type {?} */
            let dropEl = droppedOn.elementRef.nativeElement;
            /** @type {?} */
            let draggedIndex = Array.prototype.indexOf.call(parent.children, draggedEl);
            /** @type {?} */
            let dropIndex = Array.prototype.indexOf.call(parent.children, dropEl);
            if (draggedIndex === dropIndex) {
                // do nothing
            }
            else if (draggedIndex < dropIndex) {
                parent.insertBefore(draggedEl, dropEl.nextSibling || dropEl);
            }
            else {
                parent.insertBefore(draggedEl, dropEl.previousSibling || dropEl);
            }
        });
    }
    // draggable
    /**
     * @param {?} dragEvent
     * @return {?}
     */
    onDragStart(dragEvent) {
        if (!dragEvent.dataTransfer) {
            console.warn('no data transfer');
            return;
        }
        dragEvent.dataTransfer.effectAllowed = 'move';
        dragSource = this;
        originalNextSibling = this.elementRef.nativeElement.nextSibling;
    }
    // droppable
    /**
     * @param {?} dragEvent
     * @return {?}
     */
    onDragEnter(dragEvent) {
        this.lastEvent = 'dragenter';
        dragEvent.preventDefault();
        if (dragSource !== this && dragSource.dropArea === this.dropArea) {
            // updating is only preview, it is undone if it is not finished by the drop event
            this.updateElements(dragSource, this);
        }
    }
    /**
     * @param {?} dragOverEvent
     * @return {?}
     */
    onDragOver(dragOverEvent) {
        // necessary for drop event to be triggered
        dragOverEvent.preventDefault();
    }
    // droppable
    /**
     * @param {?} dragEvent
     * @return {?}
     */
    onDragEnd(dragEvent) {
        if (this.lastEvent === 'drop') {
            return;
        }
        if (dragSource.dropArea === this.dropArea && typeof originalNextSibling !== 'undefined') {
            (/** @type {?} */ (originalNextSibling.parentNode)).insertBefore(dragSource.elementRef.nativeElement, originalNextSibling);
            originalNextSibling = undefined;
        }
    }
    // droppable
    /**
     * @param {?} dropEvent
     * @return {?}
     */
    onDrop(dropEvent) {
        this.lastEvent = 'drop';
        dropEvent.stopPropagation();
        if (this === dragSource) {
            return;
        }
        // this.updateElements(dragSource, this);
        originalNextSibling = undefined;
    }
}
SortableItemDirective.decorators = [
    { type: Directive, args: [{
                selector: '[iwSortableItem]'
            },] }
];
/** @nocollapse */
SortableItemDirective.ctorParameters = () => [
    { type: ElementRef }
];
SortableItemDirective.propDecorators = {
    draggable: [{ type: HostBinding, args: ['attr.draggable',] }],
    droppable: [{ type: HostBinding, args: ['attr.droppable',] }],
    dropArea: [{ type: Input }],
    onDragStart: [{ type: HostListener, args: ['dragstart', ['$event'],] }],
    onDragEnter: [{ type: HostListener, args: ['dragenter', ['$event'],] }],
    onDragOver: [{ type: HostListener, args: ['dragover', ['$event'],] }],
    onDragEnd: [{ type: HostListener, args: ['dragend', ['$event'],] }],
    onDrop: [{ type: HostListener, args: ['drop', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    SortableItemDirective.prototype.draggable;
    /** @type {?} */
    SortableItemDirective.prototype.droppable;
    /** @type {?} */
    SortableItemDirective.prototype.dropArea;
    /**
     * @type {?}
     * @private
     */
    SortableItemDirective.prototype.lastEvent;
    /**
     * @type {?}
     * @private
     */
    SortableItemDirective.prototype.updateElements;
    /** @type {?} */
    SortableItemDirective.prototype.elementRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/sortable/sortable.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class SortableModule {
}
SortableModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SortableItemDirective
                ],
                exports: [
                    SortableItemDirective
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/events.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function EditCellEvent() { }
if (false) {
    /** @type {?} */
    EditCellEvent.prototype.newValue;
    /** @type {?} */
    EditCellEvent.prototype.column;
    /** @type {?} */
    EditCellEvent.prototype.rowObject;
    /** @type {?} */
    EditCellEvent.prototype.rowIndex;
}
;
/**
 * @record
 */
function SortColumnEvent() { }
if (false) {
    /** @type {?} */
    SortColumnEvent.prototype.column;
    /** @type {?} */
    SortColumnEvent.prototype.direction;
}
;
/**
 * @record
 */
function ToggleSubfieldEvent() { }
if (false) {
    /** @type {?} */
    ToggleSubfieldEvent.prototype.column;
    /** @type {?} */
    ToggleSubfieldEvent.prototype.toggleSubfield;
    /** @type {?} */
    ToggleSubfieldEvent.prototype.activeSubfields;
}
;
/**
 * @record
 */
function RowClickEvent() { }
if (false) {
    /** @type {?} */
    RowClickEvent.prototype.rowIndex;
    /** @type {?} */
    RowClickEvent.prototype.rowObject;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/types.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ColumnConfig() { }
if (false) {
    /** @type {?} */
    ColumnConfig.prototype.id;
    /** @type {?|undefined} */
    ColumnConfig.prototype.text;
    /** @type {?|undefined} */
    ColumnConfig.prototype.sortingDisabled;
    /** @type {?|undefined} */
    ColumnConfig.prototype.formatters;
    /** @type {?|undefined} */
    ColumnConfig.prototype.subFields;
    /** @type {?|undefined} */
    ColumnConfig.prototype.category;
    /** @type {?|undefined} */
    ColumnConfig.prototype.sortCompare;
    /** @type {?|undefined} */
    ColumnConfig.prototype.sortType;
    /** @type {?|undefined} */
    ColumnConfig.prototype.initialSortDirection;
    /** @type {?|undefined} */
    ColumnConfig.prototype.data;
}
/**
 * @record
 */
function SubFieldConfig() { }
if (false) {
    /** @type {?} */
    SubFieldConfig.prototype.id;
    /** @type {?} */
    SubFieldConfig.prototype.text;
    /** @type {?} */
    SubFieldConfig.prototype.isVisible;
}
/**
 * @record
 */
function ColumnLookup() { }
/**
 * @record
 */
function CompareFunctions() { }
/**
 * @record
 */
function DisplayFormatter() { }
if (false) {
    /** @type {?|undefined} */
    DisplayFormatter.prototype.arguments;
}
/**
 * @record
 */
function Row() { }

/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/column-state.class.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ColumnState {
    // config is read-only, state is stored in other properties
    /**
     * @param {?} config
     * @param {?=} _currentSortDirection
     * @param {?=} activeFields
     */
    constructor(config, _currentSortDirection, activeFields = []) {
        this.config = config;
        this._currentSortDirection = _currentSortDirection;
        this.activeFields = activeFields;
    }
    /**
     * @return {?}
     */
    get initialSortDirection() {
        return this.config.initialSortDirection || 'asc';
    }
    /**
     * @return {?}
     */
    get currentSortDirection() {
        return this._currentSortDirection || 'asc';
    }
    /**
     * @param {?} direction
     * @return {?}
     */
    set currentSortDirection(direction) {
        this._currentSortDirection = direction;
    }
    /**
     * @return {?}
     */
    toggleDirection() {
        if (!this._currentSortDirection) {
            this.currentSortDirection = this.initialSortDirection;
        }
        else {
            this.currentSortDirection = this.currentSortDirection === 'desc' ? 'asc' : 'desc';
        }
        return this.currentSortDirection;
    }
}
if (false) {
    /** @type {?} */
    ColumnState.prototype.config;
    /**
     * @type {?}
     * @private
     */
    ColumnState.prototype._currentSortDirection;
    /** @type {?} */
    ColumnState.prototype.activeFields;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/table-init.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableInitService {
    constructor() { }
    /**
     * @param {?} rows
     * @return {?}
     */
    detectColumnConfiguration(rows) {
        /** @type {?} */
        let columnsLookup = this.detectColumnLookup(rows);
        return [columnsLookup, this.columnsLookup2Config(columnsLookup)];
    }
    /**
     * @param {?} rows
     * @return {?}
     */
    detectColumnLookup(rows) {
        /** @type {?} */
        let columnsLookup = {};
        rows.forEach((/**
         * @param {?} row
         * @return {?}
         */
        row => {
            Object.keys(row).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => {
                if (typeof columnsLookup[key] === 'undefined') {
                    /** @type {?} */
                    let columnConfig = {
                        id: key,
                        sortType: typeof row[key],
                        sortingDisabled: false,
                        initialSortDirection: 'asc'
                    };
                    columnsLookup[key] = new ColumnState(columnConfig);
                }
            }));
        }));
        return columnsLookup;
    }
    /**
     * @param {?} columnsConfig
     * @return {?}
     */
    columnsConfig2Lookup(columnsConfig) {
        /** @type {?} */
        let columnsLookup = {};
        columnsConfig.forEach((/**
         * @param {?} columnConfig
         * @return {?}
         */
        (columnConfig) => {
            /** @type {?} */
            let activeFields = [];
            if (typeof columnConfig.subFields !== 'undefined') {
                activeFields = columnConfig.subFields
                    .filter((/**
                 * @param {?} subfield
                 * @return {?}
                 */
                (subfield) => subfield.isVisible))
                    .map((/**
                 * @param {?} subfield
                 * @return {?}
                 */
                (subfield) => subfield.id));
            }
            /** @type {?} */
            let columnState = new ColumnState(columnConfig);
            columnState.activeFields = activeFields;
            columnsLookup[columnConfig.id] = columnState;
        }));
        return columnsLookup;
    }
    /**
     * @param {?} columnsLookup
     * @return {?}
     */
    columnsLookup2Config(columnsLookup) {
        /** @type {?} */
        let columnsConfig = [];
        for (let columnName in columnsLookup) {
            if (columnsLookup.hasOwnProperty(columnName)) {
                columnsConfig.push(columnsLookup[columnName].config);
            }
        }
        return columnsConfig;
    }
}
TableInitService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TableInitService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/table-sorting.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Sorting() { }
if (false) {
    /**
     * @param {?} rows
     * @param {?} columnState
     * @return {?}
     */
    Sorting.prototype.sort = function (rows, columnState) { };
}
const ɵ0 = /**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
(a, b) => a - b, ɵ1 = /**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
(a, b) => {
    if (typeof a === 'undefined') {
        return -1;
    }
    return a.localeCompare(b);
}, ɵ2 = /**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
(a, b) => {
    if (a > b) {
        return 1;
    }
    if (b > a) {
        return -1;
    }
    return 0;
};
/** @type {?} */
const sortingCompare = {
    number: (ɵ0),
    string: (ɵ1),
    other: (ɵ2)
};
class TableSortingService {
    /**
     * @param {?} rows
     * @param {?} columnState
     * @return {?}
     */
    sort(rows, columnState) {
        /** @type {?} */
        let sortType = columnState.config.sortType || 'other';
        /** @type {?} */
        let cmpFn = columnState.config.sortCompare || sortingCompare[sortType];
        if (!cmpFn) {
            console.warn(`Unsupported sorting type '${sortType}' was used. ` +
                'Using comparison operators: greater, less and equal (>, <, ===)');
            cmpFn = sortingCompare['other'];
        }
        rows.sort((/**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        (a, b) => cmpFn(a[columnState.config.id], b[columnState.config.id])));
        if (columnState.currentSortDirection === 'desc') {
            rows.reverse();
        }
        return rows;
    }
}
TableSortingService.decorators = [
    { type: Injectable }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/table.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function TableDefaultValues() { }
if (false) {
    /** @type {?} */
    TableDefaultValues.prototype.reorderingEnabled;
    /** @type {?} */
    TableDefaultValues.prototype.rowsSortingMode;
    /** @type {?} */
    TableDefaultValues.prototype.inlineEditingEnabled;
    /** @type {?} */
    TableDefaultValues.prototype.changeColumnVisibility;
    /** @type {?} */
    TableDefaultValues.prototype.language;
}
/** @type {?} */
const TableDefaults = new InjectionToken('TableDefaults');
/** @type {?} */
const tableDefaultValues = {
    reorderingEnabled: true,
    rowsSortingMode: 'default',
    inlineEditingEnabled: false,
    changeColumnVisibility: true,
    language: 'en',
};
class TableComponent {
    /**
     * @param {?} elementRef
     * @param {?} tableSortingService
     * @param {?} tableInitService
     * @param {?} i18nService
     * @param {?} defaults
     */
    constructor(elementRef, tableSortingService, tableInitService, i18nService, defaults) {
        this.elementRef = elementRef;
        this.tableSortingService = tableSortingService;
        this.tableInitService = tableInitService;
        this.i18nService = i18nService;
        this.addColumn = new EventEmitter();
        this.removeColumn = new EventEmitter();
        this.sortColumn = new EventEmitter();
        // @Output() addingColumn: EventEmitter<number> = new EventEmitter<number>();
        this.reorderColumns = new EventEmitter();
        this.rowClick = new EventEmitter();
        this.visibleColumnsChange = new EventEmitter();
        this.editCell = new EventEmitter();
        this.toggleSubfield = new EventEmitter();
        this.customTemplate = false;
        this.reorderingEnabled = defaults.reorderingEnabled;
        this.rowsSortingMode = defaults.rowsSortingMode;
        this.inlineEditingEnabled = defaults.inlineEditingEnabled;
        this.changeColumnVisibility = defaults.changeColumnVisibility;
        this.language = defaults.language;
    }
    /**
     * @param {?} columnsConfig
     * @return {?}
     */
    set columnsConfig(columnsConfig) {
        this._columnsConfig = columnsConfig;
        this.columnsLookup = this.tableInitService.columnsConfig2Lookup(this.columnsConfig);
    }
    /**
     * @param {?} visibleColumns
     * @return {?}
     */
    set visibleColumns(visibleColumns) {
        this._visibleColumns = visibleColumns;
        this.visibleColumnsChange.emit(this._visibleColumns);
    }
    // @Input() columnsForAddingFn: (availableColumns: ColumnConfig[]) => any[] = (id) => id
    /**
     * @param {?} language
     * @return {?}
     */
    set language(language) {
        this.i18nService.language = language;
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    ngOnChanges(arg) {
        this.initializeDefaults();
        this.initialSort();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.customTemplate = this.elementRef.nativeElement.children.length !== 1;
        }));
    }
    /**
     * @return {?}
     */
    get visibleColumns() {
        return this._visibleColumns;
    }
    /**
     * @return {?}
     */
    get columnsConfig() {
        return this._columnsConfig;
    }
    /**
     * @param {?} column
     * @param {?} direction
     * @return {?}
     */
    isSorted(column, direction) {
        if (!column) {
            return;
        }
        /** @type {?} */
        let isSorted = column.config.id === this.sortedColumnName;
        if (!direction) {
            return isSorted;
        }
        else {
            /** @type {?} */
            let directionMatch = column.currentSortDirection === direction;
            return isSorted && directionMatch;
        }
    }
    /**
     * @param {?} rowClickEvent
     * @return {?}
     */
    onRowClicked(rowClickEvent) {
        this.rowClick.emit(rowClickEvent);
    }
    /**
     * @param {?} sortEvent
     * @return {?}
     */
    onSortColumn(sortEvent) {
        this.sortColumn.emit(sortEvent);
        if (this.rowsSortingMode === 'default') {
            this.sortRows(this.rows, sortEvent);
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    onAddingColumn(index) {
        this.addingColumnIndex = index;
        // TODO: this should emit also when adding to the last column!
        // this.addingColumn.emit(index);
    }
    /**
     * @param {?} reorderColumnsEvent
     * @return {?}
     */
    onReorderColumns(reorderColumnsEvent) {
        this.reorderColumns.emit(reorderColumnsEvent);
    }
    /**
     * @param {?} toggleSubfieldEvent
     * @return {?}
     */
    onToggleSubfield(toggleSubfieldEvent) {
        this.toggleSubfield.emit(toggleSubfieldEvent);
    }
    /**
     * @param {?} rows
     * @param {?} sortEvent
     * @return {?}
     */
    sortRows(rows, sortEvent) {
        let { column, direction } = sortEvent;
        this.rows = this.tableSortingService.sort(rows, this.columnsLookup[column]);
        this.sortedColumnName = column;
        return this.rows;
    }
    /**
     * @return {?}
     */
    initialSort() {
        if (!this.initialSortColumn || !this.rows) {
            return;
        }
        /** @type {?} */
        let columnName = this.initialSortColumn.slice(1);
        /** @type {?} */
        let sortDirection = 'asc';
        if (this.initialSortColumn[0] === '+') {
            // pluas at the beginning means 'asc'
            sortDirection = 'asc';
        }
        else if (this.initialSortColumn[0] === '-') {
            // minus at the beginning means 'desc'
            sortDirection = 'desc';
        }
        else {
            // direction sign is optional
            columnName = this.initialSortColumn;
        }
        /** @type {?} */
        let columnState = this.columnsLookup[columnName];
        if (columnState) {
            sortDirection = sortDirection || columnState.initialSortDirection;
            columnState.currentSortDirection = (/** @type {?} */ (sortDirection));
            // initial sort
            if (this.rowsSortingMode === 'default') {
                this.sortRows(this.rows, { column: columnName, direction: sortDirection });
            }
            else {
                this.onSortColumn({ column: columnName, direction: sortDirection });
            }
        }
        else {
            console.warn('Missing configuration for column: ' + columnName);
        }
        this.sortedColumnName = columnName;
        this.initialSortColumn = undefined;
    }
    /**
     * @private
     * @return {?}
     */
    initializeDefaults() {
        /** @type {?} */
        const isWithoutData = (typeof this.rows === 'undefined' || this.rows.length === 0);
        if (typeof this.columnsConfig === 'undefined' && !isWithoutData) {
            [this.columnsLookup, this._columnsConfig] = this.tableInitService.detectColumnConfiguration(this.rows);
        }
        if (typeof this.visibleColumns === 'undefined' && typeof this.columnsLookup !== 'undefined') {
            this.visibleColumns = Object.keys(this.columnsLookup);
        }
    }
}
TableComponent.decorators = [
    { type: Component, args: [{
                selector: 'iw-table',
                template: "<ng-content></ng-content>\n<table *ngIf=\"!customTemplate\" class=\"results-table table table-bordered table-striped\">\n  <thead\n    iw-thead\n    (addColumn)=\"addColumn.emit($event)\"\n    (removeColumn)=\"removeColumn.emit($event)\"\n    (sortColumn)=\"onSortColumn($event)\"\n    (addingColumn)=\"onAddingColumn($event)\"\n    (reorderColumns)=\"onReorderColumns($event)\"\n    (toggleSubfield)=\"onToggleSubfield($event)\"\n  ></thead>\n  <tbody\n    iw-tbody\n    [addingColumnIndex]=\"addingColumnIndex\"\n    (rowClick)=\"onRowClicked($event)\"\n    (editCell)=\"editCell.emit($event)\"\n  ></tbody>\n</table>\n",
                // TODO: enable encapsulation again
                encapsulation: ViewEncapsulation.None,
                providers: [
                    { provide: TableDefaults, useValue: tableDefaultValues }
                ],
                styles: [".results{color:#4d4d4d}.results .panel-header{border-bottom:0}.results .panel-body{padding:0;margin:0 -1px;position:relative}.results .panel-footer{margin-top:-1px}.results .results-table--new-group-layer{position:absolute;top:0;left:0;z-index:2;width:100%;height:100%;background:rgba(255,255,255,.75)}.results-table-wrap{position:relative;overflow-x:visible;min-height:400px}.results-table{margin:0;border-collapse:separate;border-width:1px 0 0 1px;background:#fff;border-top-color:#d3d3d3;border-left-color:app-color(bluegray);box-shadow:none}.results-table thead{background:rgba(252,89,31,.55)}.results-table thead th{padding:.5rem;border-bottom-width:1px;border-color:#d3d3d3;vertical-align:top;background:#f4f4f4;box-shadow:inset 0 1px 0 rgba(255,255,255,.75),inset 1px 0 0 rgba(255,255,255,.5)}.results-table thead th:last-child{border-right-color:app-color(bluegray)}.results-table thead th:hover .col-menu{opacity:1}.results-table .person-link-th{width:20px}.results-table .combo-th{width:1%;padding-right:8px;padding-left:8px}.results-table .drag-column.ui-sortable-helper{opacity:.9;border-color:transparent;transform:translateY(-15px) rotate(1deg);box-shadow:inset 0 0 0 1px #9ab1ab,0 2px 3px rgba(0,0,0,.75);background:#e5e8e7}.results-table .drag-column.ui-sortable-helper .col-label{color:rgba(0,0,0,.95);text-shadow:none}.results-table .drag-column.ui-sortable-helper .btn-group{display:none}.results-table .ui-sortable-placeholder{visibility:visible!important;background:rgba(252,89,31,.85)!important;box-shadow:inset 0 3px 10px rgba(0,0,0,.5)}.results-table tfoot td{border-color:app-color(bluegray);border-width:0 1px 0 0}.results-table td,.results-table th{position:relative;padding-left:.5rem;padding-right:.5rem;border-color:#f0f0f0;border-width:0 1px 1px 0;font-weight:400}.results-table tbody tr{cursor:pointer}.results-table tbody tr:hover{background:#eee}.results-table tbody td{padding-top:.5rem;padding-bottom:.5rem;border-width:0 0 1px;font-size:12px;line-height:1.25}.results-table tbody .combo-td{border-left-width:1px;background-color:rgba(0,116,56,.05)}.results-table tbody td:last-child{border-right:1px solid}.results-table tbody tr:last-child td{border-bottom-color:#d3d3d3}.results-table tbody tr:last-child td:last-child{border-color-right:app-color(bluegray);border-color-bottom:#d3d3d3}.results-table .label{position:relative;top:-1px;padding-bottom:.2em;background:rgba(16,126,100,.75)}.results-table .label-tum{background:#157eaa}.results-table .btn-toggle{margin-top:.25rem}.results-table td.is-sorted{background-color:rgba(212,221,219,.2)}.results-table th.is-sorted{position:relative;border-color:rgba(183,199,195,.75);background-color:#e1eae7;background-image:none}.results-table th.is-sorted:before{content:\"\";position:absolute;top:-1px;right:-1px;left:-1px;height:1px;background:rgba(183,199,195,.4)}.results-table th.is-sorted:after{content:\"\";position:absolute;top:-1px;bottom:-1px;left:-1px;width:1px;background:rgba(183,199,195,.75)}.col-label{position:relative;display:inline-block;padding:5px 0;width:100%;font-size:10px;line-height:18px;font-weight:700;text-transform:uppercase;text-shadow:0 1px 0 rgba(255,255,255,.66);color:rgba(0,0,0,.5);cursor:pointer;transition:color .2s}.is-sorted .col-label{color:rgba(0,0,0,.66)}.col-menu{position:absolute;text-align:right;right:7px;top:9px;opacity:0;transition:opacity .2s;height:1.5rem;width:1.5rem}.col-menu .dropdown-toggle{display:block;width:100%;height:100%;padding:0 1rem .25rem 0;background-color:#1aa0d8;transition:background-color .2s;color:#fff;border:none}.col-menu .dropdown-toggle:disabled{opacity:.65}.col-menu .dropdown-toggle:hover{background-color:#157eaa}.col-menu .dropdown-toggle:after{margin-left:.5rem;margin-right:.55rem}.col-menu.open{opacity:1}.multi-result+.multi-result{margin-top:.5rem}.ico-col-sort{opacity:.45}.ico-col-sort i:nth-child(3){display:block;line-height:18px;font-size:12px;padding-left:.5em}.tbl-msg{padding:24px;font-size:18px;text-align:center;color:#8a8a8a}.tbl-msg p{margin:0}.cell-list{margin-top:-.35rem;margin-bottom:-.3rem;font-size:13px}.cell-list small{font-size:90%}.cell-list-item{padding-top:.5em;padding-bottom:.5em}.cell-list-extended{font-size:0;opacity:0;transform:scaleY(0);transform-origin:0 0;transition:font-size .4s,opacity .4s,transform .4s}.cell-list-extended.is-visible{font-size:13px;opacity:1;transform:scaleY(1)}.cell-list-extended .cell-list-item{border-top:1px dotted rgba(0,0,0,.1)}.cell-list-item--extended{border-top:1px dotted rgba(0,0,0,.1);font-size:0;opacity:0;transform:scaleY(0);transform-origin:0 0;transition:font-size .3s,opacity .3s,transform .3s}.cell-list-items.show-all .cell-list-item--extended{font-size:13px;opacity:1;transform:scaleY(1)}.cell-list-expand-toggle{cursor:pointer}.cell-list-expand-toggle .icon{transform-origin:50% 45%;transition:transform .4s}.cell-list-expand-toggle.is-open .icon{transform:rotate(180deg)}.space-right{margin-right:.5em}.ico-col-sort{position:relative;display:inline-block;opacity:0;color:rgba(0,0,0,.5);text-shadow:0 1px 0 rgba(255,255,255,.66);transition:opacity .2s,color .2s}.ico-col-sort i{display:inline-block;line-height:9px;vertical-align:top;font-style:normal;font-size:8px;font-weight:400;font-family:Verdana,sans-serif}.ico-col-sort i:nth-child(1){position:absolute;top:0;left:0}.ico-col-sort i:nth-child(2){position:absolute;bottom:0;left:0}.is-sorted--asc .ico-col-sort--asc,.is-sorted--desc .ico-col-sort--desc{opacity:.9}"]
            }] }
];
/** @nocollapse */
TableComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: TableSortingService },
    { type: TableInitService },
    { type: I18nService },
    { type: undefined, decorators: [{ type: Inject, args: [TableDefaults,] }] }
];
TableComponent.propDecorators = {
    columnsConfig: [{ type: Input }],
    visibleColumns: [{ type: Input }],
    rows: [{ type: Input }],
    reorderingEnabled: [{ type: Input }],
    changeColumnVisibility: [{ type: Input }],
    rowsSortingMode: [{ type: Input }],
    inlineEditingEnabled: [{ type: Input }],
    language: [{ type: Input }],
    initialSortColumn: [{ type: Input }],
    addColumn: [{ type: Output }],
    removeColumn: [{ type: Output }],
    sortColumn: [{ type: Output }],
    reorderColumns: [{ type: Output }],
    rowClick: [{ type: Output }],
    visibleColumnsChange: [{ type: Output }],
    editCell: [{ type: Output }],
    toggleSubfield: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TableComponent.prototype.rows;
    /** @type {?} */
    TableComponent.prototype.reorderingEnabled;
    /** @type {?} */
    TableComponent.prototype.changeColumnVisibility;
    /** @type {?} */
    TableComponent.prototype.rowsSortingMode;
    /** @type {?} */
    TableComponent.prototype.inlineEditingEnabled;
    /** @type {?} */
    TableComponent.prototype.initialSortColumn;
    /** @type {?} */
    TableComponent.prototype.addColumn;
    /** @type {?} */
    TableComponent.prototype.removeColumn;
    /** @type {?} */
    TableComponent.prototype.sortColumn;
    /** @type {?} */
    TableComponent.prototype.reorderColumns;
    /** @type {?} */
    TableComponent.prototype.rowClick;
    /** @type {?} */
    TableComponent.prototype.visibleColumnsChange;
    /** @type {?} */
    TableComponent.prototype.editCell;
    /** @type {?} */
    TableComponent.prototype.toggleSubfield;
    /** @type {?} */
    TableComponent.prototype.columnsLookup;
    /** @type {?} */
    TableComponent.prototype.addingColumnIndex;
    /** @type {?} */
    TableComponent.prototype.customTemplate;
    /** @type {?} */
    TableComponent.prototype.sortedColumnName;
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype._visibleColumns;
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype._columnsConfig;
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype.tableSortingService;
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype.tableInitService;
    /**
     * @type {?}
     * @private
     */
    TableComponent.prototype.i18nService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/tbody/tbody.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TbodyComponent {
    /**
     * @param {?} elementRef
     * @param {?} tableInitService
     * @param {?} tableComponent
     */
    constructor(elementRef, tableInitService, tableComponent) {
        this.elementRef = elementRef;
        this.tableInitService = tableInitService;
        this.rowClick = new EventEmitter();
        this.editCell = new EventEmitter();
        this.customTemplate = false;
        this.customCells = [];
        this.cellTemplates = {};
        this.tableComponent = tableComponent;
    }
    /**
     * @param {?} isEditable
     * @return {?}
     */
    set inlineEditingEnabled(isEditable) {
        this.isEditable = isEditable;
    }
    ;
    /**
     * @param {?} rows
     * @return {?}
     */
    set rows(rows) {
        this._rows = rows;
    }
    /**
     * @param {?} columnsConfig
     * @return {?}
     */
    set columnsConfig(columnsConfig) {
        this._columnsConfig = columnsConfig;
    }
    /**
     * @param {?} visibleColumns
     * @return {?}
     */
    set visibleColumns(visibleColumns) {
        this._visibleColumns = visibleColumns;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            // In our template we have N elements, where N is number of rows.
            // If there is more elements, they must be projected => custom template is used
            this.customTemplate = this.elementRef.nativeElement.children.length > this.rows.length;
        }));
    }
    /**
     * @return {?}
     */
    get rows() {
        return this._rows || this.delegateInput('rows', []);
    }
    /**
     * @return {?}
     */
    get columnsConfig() {
        return this._columnsConfig || this.delegateInput('columnsConfig', []);
    }
    ;
    /**
     * @return {?}
     */
    get visibleColumns() {
        return this._visibleColumns || this.delegateInput('visibleColumns', []);
    }
    ;
    /**
     * @return {?}
     */
    get inlineEditingEnabled() {
        return this.isEditable || this.delegateInput('inlineEditingEnabled', false);
    }
    /**
     * @return {?}
     */
    get columnsLookup() {
        /** @type {?} */
        let columnsLookup = this._columnsLookup ||
            (this.tableComponent && this.tableComponent.columnsLookup);
        if (!columnsLookup) {
            columnsLookup = this.tableInitService.columnsConfig2Lookup(this.columnsConfig);
            this._columnsLookup = columnsLookup;
        }
        return columnsLookup;
    }
    /**
     * @return {?}
     */
    get changeColumnVisibility() {
        return this.tableComponent.changeColumnVisibility;
    }
    /**
     * @param {?} column
     * @param {?} direction
     * @return {?}
     */
    isSorted(column, direction) {
        return this.tableComponent.isSorted(column, direction);
    }
    /**
     * @param {?} columnName
     * @return {?}
     */
    column(columnName) {
        return this.columnsLookup[columnName];
    }
    /**
     * @param {?} rowIndex
     * @param {?} rowObject
     * @return {?}
     */
    onRowClicked(rowIndex, rowObject) {
        this.rowClick.emit({
            rowIndex,
            rowObject
        });
    }
    /**
     * @param {?} tdComponent
     * @param {?} rowIndex
     * @return {?}
     */
    onEditCell(tdComponent, rowIndex) {
        if (!tdComponent.isChanged || !tdComponent.column) {
            return;
        }
        /** @type {?} */
        let editCellEvent = {
            newValue: tdComponent.content,
            column: tdComponent.column.config.id,
            rowObject: tdComponent.row,
            rowIndex
        };
        this.editCell.emit(editCellEvent);
    }
    /**
     * @private
     * @template T
     * @param {?} propertyName
     * @param {?} defaultValue
     * @return {?}
     */
    delegateInput(propertyName, defaultValue) {
        if (!this.tableComponent) {
            // console.warn('TbodyComponent: No parent "tableComponent" was found.' +
            //   'Input "' + propertyName + '" was also not provided.');
            return defaultValue;
        }
        return (/** @type {?} */ (((/** @type {?} */ (this.tableComponent)))[propertyName]));
    }
}
TbodyComponent.decorators = [
    { type: Component, args: [{
                selector: '[iw-tbody]',
                template: "<ng-content></ng-content>\n\n<ng-template [ngIf]=\"!customTemplate\">\n  <tr *ngFor=\"let row of rows; let rowIndex = index\" (click)=\"onRowClicked(rowIndex, row)\" >\n    <ng-template ngFor let-columnName [ngForOf]=\"visibleColumns\" let-index=\"index\">\n      <td *ngIf=\"addingColumnIndex == index\" class=\"combo-td\"></td>\n      <td\n        #tdComponent\n        iw-td\n        [attr.contenteditable]=\"inlineEditingEnabled\"\n        (blur)=\"onEditCell(tdComponent, rowIndex)\"\n        [column]=\"column(columnName)\"\n        [row]=\"row\"\n        [class.is-sorted]=\"isSorted(column(columnName), undefined)\"\n        attr.headers=\"col-id-{{ column(columnName)?.config.id }}\">\n      </td>\n    </ng-template>\n    <td *ngIf=\"changeColumnVisibility\" class=\"combo-td\"> <!-- empty for combobox --> </td>\n  </tr>\n</ng-template>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
TbodyComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: TableInitService },
    { type: TableComponent, decorators: [{ type: Optional }] }
];
TbodyComponent.propDecorators = {
    addingColumnIndex: [{ type: Input }],
    inlineEditingEnabled: [{ type: Input }],
    rows: [{ type: Input }],
    columnsConfig: [{ type: Input }],
    visibleColumns: [{ type: Input }],
    rowClick: [{ type: Output }],
    editCell: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TbodyComponent.prototype.addingColumnIndex;
    /** @type {?} */
    TbodyComponent.prototype.rowClick;
    /** @type {?} */
    TbodyComponent.prototype.editCell;
    /** @type {?} */
    TbodyComponent.prototype.customTemplate;
    /**
     * @type {?}
     * @private
     */
    TbodyComponent.prototype._columnsConfig;
    /**
     * @type {?}
     * @private
     */
    TbodyComponent.prototype._columnsLookup;
    /**
     * @type {?}
     * @private
     */
    TbodyComponent.prototype._rows;
    /**
     * @type {?}
     * @private
     */
    TbodyComponent.prototype._visibleColumns;
    /**
     * @type {?}
     * @private
     */
    TbodyComponent.prototype.isEditable;
    /**
     * @type {?}
     * @private
     */
    TbodyComponent.prototype.tableComponent;
    /**
     * @type {?}
     * @private
     */
    TbodyComponent.prototype.customCells;
    /**
     * @type {?}
     * @private
     */
    TbodyComponent.prototype.cellTemplates;
    /**
     * @type {?}
     * @private
     */
    TbodyComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    TbodyComponent.prototype.tableInitService;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/thead/thead.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TheadComponent {
    /**
     * @param {?} elementRef
     * @param {?} changeDetectorRef
     * @param {?} tableInitService
     * @param {?} tableComponent
     */
    constructor(elementRef, changeDetectorRef, // needed to trigger change detection on jquery ui's callbacks
    tableInitService, tableComponent) {
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.tableInitService = tableInitService;
        this.addColumn = new EventEmitter();
        this.removeColumn = new EventEmitter();
        this.sortColumn = new EventEmitter();
        this.addingColumn = new EventEmitter();
        this.reorderColumns = new EventEmitter();
        this.toggleSubfield = new EventEmitter();
        this.lastColumnComboboxActive = false;
        this.customTemplate = false;
        this.tableComponent = tableComponent;
    }
    /**
     * @param {?} columnsConfig
     * @return {?}
     */
    set columnsConfig(columnsConfig) {
        if (this.tableComponent) {
            this.tableComponent.columnsConfig = columnsConfig;
        }
        else {
            this._columnsConfig = columnsConfig;
        }
    }
    /**
     * @param {?} visibleColumns
     * @return {?}
     */
    set visibleColumns(visibleColumns) {
        if (this.tableComponent) {
            this.tableComponent.visibleColumns = visibleColumns;
        }
        else {
            this._visibleColumns = visibleColumns;
            // NOTE: what about output events?
        }
    }
    /**
     * @return {?}
     */
    get changeColumnVisibility() {
        if (!this.tableComponent) {
            return false;
        }
        return this.tableComponent.changeColumnVisibility;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.reorderingEnabled) {
            this.initializeSortable();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.customTemplate = this.elementRef.nativeElement.children.length !== 1;
        }));
    }
    /**
     * @return {?}
     */
    get columnsConfig() {
        return this._columnsConfig || this.delegateInput('columnsConfig', []);
    }
    /**
     * @return {?}
     */
    get columnsLookup() {
        /** @type {?} */
        let columnsLookup = this._columnsLookup ||
            (this.tableComponent && this.tableComponent.columnsLookup);
        if (typeof columnsLookup === 'undefined') {
            columnsLookup = this.tableInitService.columnsConfig2Lookup(this.columnsConfig);
            this._columnsLookup = columnsLookup;
        }
        return columnsLookup;
    }
    /**
     * @return {?}
     */
    get visibleColumns() {
        return this._visibleColumns || this.delegateInput('visibleColumns', []);
    }
    /**
     * @return {?}
     */
    get reorderingEnabled() {
        return this._reorderingEnabled || this.delegateInput('reorderingEnabled', false);
    }
    /**
     * @return {?}
     */
    get isLastAddingColumnVisible() {
        return this.lastColumnComboboxActive || this.addingColumnIndex === this.visibleColumns.length;
    }
    /**
     * @param {?} column
     * @param {?} direction
     * @return {?}
     */
    isSorted(column, direction) {
        if (!this.tableComponent) {
            return false;
        }
        return this.tableComponent.isSorted(column, direction);
    }
    /**
     * @param {?} columnName
     * @return {?}
     */
    column(columnName) {
        return this.columnsLookup[columnName];
    }
    /**
     * @param {?} item
     * @param {?} atPosition
     * @return {?}
     */
    selectNewColumn(item, atPosition) {
        this.addingColumnIndex = null;
        this.lastColumnComboboxActive = false;
        if (typeof atPosition !== 'undefined') {
            // the order changed
            this.visibleColumns = [
                ...this.visibleColumns.slice(0, atPosition),
                item.value,
                ...this.visibleColumns.slice(atPosition),
            ];
        }
        else {
            this.visibleColumns = [...this.visibleColumns, item.value];
        }
        this.addColumn.emit(item.value);
        // this.visibleColumnsOutput.emit(this.visibleColumns);
    }
    /**
     * @return {?}
     */
    toggleCombobox() {
        this.lastColumnComboboxActive = !this.lastColumnComboboxActive;
        if (!this.lastColumnComboboxActive) {
            return;
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            jQuery(this.elementRef.nativeElement).scrollLeft(99999);
        }), 0);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    onAddCombobox(index) {
        this.lastColumnComboboxActive = false;
        this.addingColumnIndex = index;
        this.addingColumn.emit(index);
    }
    /**
     * @param {?} sortEvent
     * @return {?}
     */
    onSortColumn(sortEvent) {
        if (this.tableComponent) {
            this.tableComponent.sortedColumnName = sortEvent.column;
        }
        this.sortColumn.emit(sortEvent);
    }
    /**
     * @param {?} toggleSubfieldEvent
     * @return {?}
     */
    onToggleSubfield(toggleSubfieldEvent) {
        this.toggleSubfield.emit(toggleSubfieldEvent);
    }
    /**
     * @private
     * @return {?}
     */
    initializeSortable() {
        jQuery(this.elementRef.nativeElement).sortable({
            cursor: 'move',
            axis: 'x',
            tolerance: 'pointer',
            items: '.drag-column',
            handle: '.col-label',
            update: (/**
             * @return {?}
             */
            () => {
                this.draggedColumnId = '';
                /** @type {?} */
                let sortedIDs = jQuery(this.elementRef.nativeElement)
                    .sortable('toArray', {
                    attribute: 'data-col-ref'
                });
                this.visibleColumns = sortedIDs;
                this.reorderColumns.emit(sortedIDs);
                this.changeDetectorRef.detectChanges();
            }),
        });
        jQuery(this.elementRef.nativeElement).disableSelection();
    }
    /**
     * @private
     * @template T
     * @param {?} propertyName
     * @param {?} defaultValue
     * @return {?}
     */
    delegateInput(propertyName, defaultValue) {
        if (!this.tableComponent) {
            // console.warn('TheadComponent: No parent "tableComponent" was found.' +
            //   'Input "' + propertyName + '" was also not provided.');
            return defaultValue;
        }
        return (/** @type {?} */ (((/** @type {?} */ (this.tableComponent)))[propertyName]));
    }
}
TheadComponent.decorators = [
    { type: Component, args: [{
                selector: '[iw-thead]',
                template: "<ng-content></ng-content>\n\n<tr *ngIf=\"!customTemplate\">\n  <ng-template  ngFor let-columnName [ngForOf]=\"visibleColumns\" let-columnIndex=\"index\">\n    <th *ngIf=\"addingColumnIndex == columnIndex\" class=\"combo-th\">\n      <div class=\"add-column combobox is-active\">\n        <iw-add-column\n          [visibleColumns]=\"visibleColumns\"\n          (close)=\"onAddCombobox(undefined)\"\n          (selected)=\"selectNewColumn($event, columnIndex)\"\n          attr.id=\"combobox-{{columnIndex}}\">\n        </iw-add-column>\n      </div>\n    </th>\n    <th\n      iw-th\n      [column]=\"column(columnName)\"\n      [changeVisibility]=\"changeColumnVisibility\"\n      (removeColumn)=\"removeColumn.emit($event)\"\n      (sortColumn)=\"onSortColumn($event)\"\n      (addCombobox)=\"onAddCombobox($event + columnIndex)\"\n      (toggleSubfield)=\"onToggleSubfield($event)\"\n      class=\"drag-column\"\n      attr.data-col-ref=\"{{ column(columnName)?.config.id }}\"\n      attr.id=\"col-id-{{ column(columnName)?.config.id }}\"\n      [class.is-sorted]=\"isSorted(column(columnName), undefined)\"\n      [class.is-sorted--asc]=\"isSorted(column(columnName), 'asc')\"\n      [class.is-sorted--desc]=\"isSorted(column(columnName), 'desc')\">\n    </th>\n  </ng-template>\n  <th *ngIf=\"changeColumnVisibility\" class=\"combo-th\">\n    <div class=\"add-column combobox\" [ngClass]=\"lastColumnComboboxActive ? 'is-active' : 'is-inactive'\">\n      <iw-add-column\n        *ngIf=\"lastColumnComboboxActive\"\n        [visibleColumns]=\"visibleColumns\"\n        (close)=\"toggleCombobox()\"\n        (selected)=\"selectNewColumn($event, undefined)\"\n      ></iw-add-column>\n      <span\n        *ngIf=\"!lastColumnComboboxActive\"\n        (click)=\"toggleCombobox()\"\n        class=\"add-column-button combo-toggle btn btn-sm btn-success\"\n      >+</span>\n    </div>\n  </th>\n</tr>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
TheadComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: TableInitService },
    { type: TableComponent, decorators: [{ type: Optional }] }
];
TheadComponent.propDecorators = {
    columnsConfig: [{ type: Input }],
    visibleColumns: [{ type: Input }],
    addColumn: [{ type: Output }],
    removeColumn: [{ type: Output }],
    sortColumn: [{ type: Output }],
    addingColumn: [{ type: Output }],
    reorderColumns: [{ type: Output }],
    toggleSubfield: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TheadComponent.prototype.addColumn;
    /** @type {?} */
    TheadComponent.prototype.removeColumn;
    /** @type {?} */
    TheadComponent.prototype.sortColumn;
    /** @type {?} */
    TheadComponent.prototype.addingColumn;
    /** @type {?} */
    TheadComponent.prototype.reorderColumns;
    /** @type {?} */
    TheadComponent.prototype.toggleSubfield;
    /** @type {?} */
    TheadComponent.prototype.lastColumnComboboxActive;
    /** @type {?} */
    TheadComponent.prototype.addingColumnIndex;
    /** @type {?} */
    TheadComponent.prototype.draggedColumnId;
    /** @type {?} */
    TheadComponent.prototype.customTemplate;
    /**
     * @type {?}
     * @private
     */
    TheadComponent.prototype._columnsConfig;
    /**
     * @type {?}
     * @private
     */
    TheadComponent.prototype._visibleColumns;
    /**
     * @type {?}
     * @private
     */
    TheadComponent.prototype._reorderingEnabled;
    /**
     * @type {?}
     * @private
     */
    TheadComponent.prototype._columnsLookup;
    /**
     * @type {?}
     * @private
     */
    TheadComponent.prototype.tableComponent;
    /**
     * @type {?}
     * @private
     */
    TheadComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    TheadComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    TheadComponent.prototype.tableInitService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/th/th.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ThComponent {
    // TODO: some properties could be taken from thead component, same for add-column.component
    /**
     * @param {?} tableComponent
     */
    constructor(tableComponent) {
        this.changeVisibility = true;
        this.removeColumn = new EventEmitter();
        this.sortColumn = new EventEmitter();
        this.addCombobox = new EventEmitter();
        this.toggleSubfield = new EventEmitter();
        this.tableComponent = tableComponent;
    }
    /**
     * @param {?} rowsSortingMode
     * @return {?}
     */
    set rowsSortingMode(rowsSortingMode) {
        this._rowsSortingMode = rowsSortingMode;
    }
    ;
    /**
     * @param {?} visibleColumns
     * @return {?}
     */
    set visibleColumns(visibleColumns) {
        if (this.tableComponent) {
            this.tableComponent.visibleColumns = visibleColumns;
        }
        else {
            this._visibleColumns = visibleColumns;
        }
    }
    ;
    /**
     * @param {?} columnsConfig
     * @return {?}
     */
    set columnsConfig(columnsConfig) {
        this._columnsConfig = columnsConfig;
    }
    ;
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    get rowsSortingMode() {
        return this._rowsSortingMode || this.delegateInput('rowsSortingMode', (/** @type {?} */ ('default')));
    }
    /**
     * @return {?}
     */
    get visibleColumns() {
        return this._visibleColumns || this.delegateInput('visibleColumns', []);
    }
    /**
     * @return {?}
     */
    get columnsConfig() {
        return this._columnsConfig || this.delegateInput('columnsConfig', []);
    }
    /**
     * @return {?}
     */
    get hasAllColumnsVisble() {
        return this.visibleColumns.length === this.columnsConfig.length;
    }
    /**
     * @return {?}
     */
    get isLastColumn() {
        return this.visibleColumns.length !== 1;
    }
    /**
     * @param {?} column
     * @return {?}
     */
    isSortingDisabled(column) {
        if (!column) {
            return;
        }
        return this.rowsSortingMode === 'disabled' || column.config.sortingDisabled;
    }
    /**
     * @param {?} column
     * @param {?} sortType
     * @param {?} direction
     * @return {?}
     */
    showSortIcon(column, sortType, direction) {
        if (!column) {
            return false;
        }
        if (this.isSortingDisabled(column)) {
            return false;
        }
        return (column.config.sortType === sortType && column.currentSortDirection === direction);
    }
    /**
     * @param {?} column
     * @param {?=} direction
     * @return {?}
     */
    onSortColumn(column, direction) {
        if (this.isSortingDisabled(column)) {
            return;
        }
        if (!direction) {
            direction = column.toggleDirection();
        }
        else {
            column.currentSortDirection = (/** @type {?} */ (direction));
        }
        this.sortColumn.emit({
            column: column.config.id,
            direction
        });
    }
    /**
     * @param {?} columnName
     * @return {?}
     */
    onRemoveColumn(columnName) {
        /** @type {?} */
        let columnIndex = this.visibleColumns.indexOf(columnName);
        this.visibleColumns = [
            ...this.visibleColumns.slice(0, columnIndex),
            ...this.visibleColumns.slice(columnIndex + 1),
        ];
        this.removeColumn.emit(columnName);
    }
    /**
     * @param {?} column
     * @param {?} subfieldName
     * @return {?}
     */
    onToggleSubfield(column, subfieldName) {
        /** @type {?} */
        let subfieldIndex = column.activeFields.indexOf(subfieldName);
        if (subfieldIndex === -1) {
            // it was not active, therefore it needs to be actived
            column.activeFields.push(subfieldName);
        }
        else {
            // it was active, therefore disable it
            column.activeFields.splice(subfieldIndex, 1);
        }
        this.toggleSubfield.emit({
            column: column.config.id,
            activeSubfields: column.activeFields,
            toggleSubfield: subfieldName
        });
    }
    /**
     * @private
     * @template T
     * @param {?} propertyName
     * @param {?} defaultValue
     * @return {?}
     */
    delegateInput(propertyName, defaultValue) {
        if (!this.tableComponent) {
            // console.warn('TheadComponent: No parent "tableComponent" was found.' +
            //   'Input "' + propertyName + '" was also not provided.');
            return defaultValue;
        }
        return (/** @type {?} */ (((/** @type {?} */ (this.tableComponent)))[propertyName]));
    }
}
ThComponent.decorators = [
    { type: Component, args: [{
                selector: '[iw-th]',
                template: "<div>\n\n  <!-- NOTE: do not use pointer cursor when sorting is disabled -->\n  <span class=\"col-label\" (click)=\"onSortColumn(column)\" >\n    {{ column?.config.text || column?.config.id  }}\n    <i *ngIf=\"showSortIcon(column, 'string', 'asc')\" class=\"ico-col-sort ico-col-sort--asc\"><i>A</i><i>Z</i><i>\u2193</i></i>\n    <i *ngIf=\"showSortIcon(column, 'string', 'desc')\" class=\"ico-col-sort ico-col-sort--desc\"><i>Z</i><i>A</i><i>\u2193</i></i>\n    <i *ngIf=\"showSortIcon(column, 'number', 'asc')\" class=\"ico-col-sort ico-col-sort--asc\"><i>0</i><i>9</i><i>\u2193</i></i>\n    <i *ngIf=\"showSortIcon(column, 'number', 'desc')\" class=\"ico-col-sort ico-col-sort--desc\"><i>9</i><i>0</i><i>\u2193</i></i>\n  </span>\n\n  <div class=\"btn-group col-menu\" dropdown>\n    <a\n      dropdown-open\n      class=\"btn btn-sm btn-secondary dropdown-toggle\"\n      [id]=\"column?.config.id + '-dropdown'\">\n    </a>\n\n    <ul class=\"dropdown-menu dropdown-menu-right\" dropdownMenu attr.aria-labelledby=\"{{column?.config.id}}-dropdown\">\n\n      <li *ngIf=\"!isSortingDisabled(column)\">\n        <a class=\"dropdown-item\" (click)=\"onSortColumn(column, 'asc')\">\n          {{ 'table.sort' | t}}\n          <span *ngIf=\"column?.config.sortType === 'number'\">0&rarr;9</span>\n          <span *ngIf=\"column?.config.sortType !== 'number'\">A&rarr;Z</span>\n        </a>\n      </li>\n\n      <li *ngIf=\"!isSortingDisabled(column)\">\n        <a class=\"dropdown-item\" (click)=\"onSortColumn(column, 'desc')\">\n          {{ 'table.sort' | t}}\n          <span *ngIf=\"column?.config.sortType === 'number'\">9&rarr;0</span>\n          <span *ngIf=\"column?.config.sortType !== 'number'\">Z&rarr;A</span>\n        </a>\n      </li>\n\n      <!-- NOTE: do not display divider when adding columns is disabled -->\n      <li *ngIf=\"!isSortingDisabled(column) && changeVisibility\" class=\"divider dropdown-divider\"></li>\n      <!-- NOTE: should it be disabled when there are no columns to add  -->\n      <li *ngIf=\"changeVisibility\">\n        <a [class.disabled]=\"hasAllColumnsVisble\" class=\"dropdown-item\" (click)=\"!hasAllColumnsVisble && addCombobox.emit(0)\">\n          {{ 'table.addLeft' | t}}\n        </a>\n      </li>\n\n      <li *ngIf=\"changeVisibility\">\n        <a [class.disabled]=\"hasAllColumnsVisble\" class=\"dropdown-item\" (click)=\"!hasAllColumnsVisble && addCombobox.emit(1)\">\n          {{ 'table.addRight' | t}}\n        </a>\n      </li>\n\n      <li *ngIf=\"column?.config.subFields\" class=\"divider dropdown-divider\"></li>\n      <li *ngIf=\"column?.config.subFields\" class=\"dropdown-item-group\" dropdown-not-closable-zone>\n        <span class=\"dropdown-header\">{{ 'table.subFields' | t}}</span>\n\n        <div *ngFor=\"let subfield of column?.config.subFields\">\n          <label class=\"dropdown-item c-input c-checkbox\">\n            <input type=\"checkbox\"\n                (change)=\"onToggleSubfield(column, subfield.id)\"\n                [checked]=\"subfield.isVisible\"\n            >\n            <span class=\"c-indicator\"></span>\n            {{subfield.text || subfield.id }}\n          </label>\n        </div>\n      </li>\n\n      <li *ngIf=\"changeVisibility\" class=\"divider dropdown-divider\"></li>\n      <li *ngIf=\"changeVisibility\">\n        <!-- disable removing column if it's the last one  -->\n        <!-- NOTE: is there a better way how to indicate that -->\n        <a\n        [class.disabled]=\"visibleColumns.length === 1\"\n        class=\"dropdown-item\"\n        (click)=\"isLastColumn && onRemoveColumn(column?.config.id)\">\n          {{ 'table.removeColumn' | t}}\n        </a>\n      </li>\n\n    </ul>\n  </div>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
ThComponent.ctorParameters = () => [
    { type: TableComponent, decorators: [{ type: Optional }] }
];
ThComponent.propDecorators = {
    column: [{ type: Input }],
    changeVisibility: [{ type: Input }],
    rowsSortingMode: [{ type: Input }],
    visibleColumns: [{ type: Input }],
    columnsConfig: [{ type: Input }],
    removeColumn: [{ type: Output }],
    sortColumn: [{ type: Output }],
    addCombobox: [{ type: Output }],
    toggleSubfield: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ThComponent.prototype.column;
    /** @type {?} */
    ThComponent.prototype.changeVisibility;
    /** @type {?} */
    ThComponent.prototype.removeColumn;
    /** @type {?} */
    ThComponent.prototype.sortColumn;
    /** @type {?} */
    ThComponent.prototype.addCombobox;
    /** @type {?} */
    ThComponent.prototype.toggleSubfield;
    /**
     * @type {?}
     * @private
     */
    ThComponent.prototype._rowsSortingMode;
    /**
     * @type {?}
     * @private
     */
    ThComponent.prototype._visibleColumns;
    /**
     * @type {?}
     * @private
     */
    ThComponent.prototype._columnsConfig;
    /**
     * @type {?}
     * @private
     */
    ThComponent.prototype.tableComponent;
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
    /* Skipping unhandled member: ;*/
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/pipes/format-column.pipe.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class FormatColumnPipe {
    /**
     * @param {?} defaultValuePipe
     */
    constructor(defaultValuePipe) {
        this.defaultValuePipe = defaultValuePipe;
    }
    /**
     * @param {?} value
     * @param {?} column
     * @return {?}
     */
    transform(value, column) {
        if (!column) {
            return;
        }
        /** @type {?} */
        let formattedValue = this.applyFormatters(value, column.config.formatters);
        return this.defaultValuePipe.transform(formattedValue, '—');
    }
    /**
     * @param {?} value
     * @param {?} formatters
     * @return {?}
     */
    applyFormatters(value, formatters) {
        if (!formatters) {
            return value;
        }
        return formatters.reduce((/**
         * @param {?} currentValue
         * @param {?} formatter
         * @return {?}
         */
        (currentValue, formatter) => {
            /** @type {?} */
            let args = formatter.arguments || [];
            return formatter.transform(currentValue, ...args);
        }), value);
    }
}
FormatColumnPipe.decorators = [
    { type: Pipe, args: [{
                name: 'formatColumn'
            },] }
];
/** @nocollapse */
FormatColumnPipe.ctorParameters = () => [
    { type: DefaultValuePipe }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    FormatColumnPipe.prototype.defaultValuePipe;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/td/td.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdComponent {
    /**
     * @param {?} formatColumnPipe
     */
    constructor(formatColumnPipe) {
        this.formatColumnPipe = formatColumnPipe;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    get cellValue() {
        if (!this.column) {
            return;
        }
        return this.row[this.column.config.id];
    }
    /**
     * @return {?}
     */
    get content() {
        return this.contentDiv.nativeElement.textContent;
    }
    /**
     * @return {?}
     */
    get isChanged() {
        return this.contentDiv.nativeElement.textContent.trim() !== this.formattedValue;
    }
    /**
     * @return {?}
     */
    get hasSubfields() {
        if (!this.column) {
            return;
        }
        return this.column.config.subFields && this.column.config.subFields.length > 0;
    }
    /**
     * @return {?}
     */
    get formattedValue() {
        if (!this.column) {
            return;
        }
        return this.formatColumnPipe.transform(this.cellValue, this.column);
    }
}
TdComponent.decorators = [
    { type: Component, args: [{
                selector: '[iw-td]',
                template: "<div>\n  <div *ngIf=\"!column?.config.subFields\" #contentDiv>\n    {{ cellValue | formatColumn: column }}\n  </div>\n\n  <div *ngIf=\"hasSubfields && cellValue && cellValue.length > 0\">\n\n    <div class=\"cell-list\" [ngSwitch]=\"(column.config.id)\">\n\n      <!-- TODO: default template for columns with subfields  -->\n    </div>\n  </div>\n</div>\n",
                providers: [FormatColumnPipe],
                styles: [""]
            }] }
];
/** @nocollapse */
TdComponent.ctorParameters = () => [
    { type: FormatColumnPipe }
];
TdComponent.propDecorators = {
    column: [{ type: Input }],
    row: [{ type: Input }],
    contentDiv: [{ type: ViewChild, args: ['contentDiv', { static: false },] }]
};
if (false) {
    /** @type {?} */
    TdComponent.prototype.column;
    /** @type {?} */
    TdComponent.prototype.row;
    /** @type {?} */
    TdComponent.prototype.contentDiv;
    /**
     * @type {?}
     * @private
     */
    TdComponent.prototype.formatColumnPipe;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/add-column/add-column.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AddColumnComponent {
    /**
     * @param {?} tableComponent
     */
    constructor(tableComponent) {
        this.tableComponent = tableComponent;
        this.open = true;
        this.selected = new EventEmitter();
        this.close = new EventEmitter();
        this.value = null;
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    ngOnChanges(arg) {
        /** @type {?} */
        let columns = this.columnsNotVisibleInTable();
        // this.items = this.tableComponent.columnsForAddingFn(options);
        this.items = this.categorizeColumns(columns);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onSelected(value) {
        if (!value) {
            return;
        }
        this.selected.emit({ value });
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.value = null;
        }), 0);
    }
    /**
     * @return {?}
     */
    columnsNotVisibleInTable() {
        /** @type {?} */
        let items = [];
        this.tableComponent.columnsConfig.forEach((/**
         * @param {?} columnConfig
         * @return {?}
         */
        (columnConfig) => {
            if (this.visibleColumns.indexOf(columnConfig.id) === -1) {
                columnConfig.text = columnConfig.text || columnConfig.id;
                items.push(columnConfig);
            }
        }));
        return items;
    }
    /**
     * @param {?} columns
     * @return {?}
     */
    categorizeColumns(columns) {
        /** @type {?} */
        let itemsWithCategory = columns.filter((/**
         * @param {?} item
         * @return {?}
         */
        (item) => typeof item.category !== 'undefined'));
        if (itemsWithCategory.length === 0) {
            // no categories present
            return (/** @type {?} */ (columns));
        }
        /** @type {?} */
        let category2Index = {};
        /** @type {?} */
        let index = 0;
        /** @type {?} */
        let options = [];
        columns.forEach((/**
         * @param {?} column
         * @return {?}
         */
        (column) => {
            /** @type {?} */
            let categoryId = (column.category && column.category.id) || 'Other';
            /** @type {?} */
            let categoryIndex = category2Index[categoryId];
            if (typeof categoryIndex === 'undefined') {
                category2Index[categoryId] = index++;
                /** @type {?} */
                let option = {
                    text: (column.category && column.category.text) || categoryId,
                    children: [(/** @type {?} */ (column))]
                };
                options.push(option);
            }
            else {
                options[categoryIndex].children.push((/** @type {?} */ (column)));
            }
        }));
        return options;
    }
}
AddColumnComponent.decorators = [
    { type: Component, args: [{
                selector: 'iw-add-column',
                template: "<!-- NOTE: indicate no columns to add in a better way  -->\n<div class=\"combo-input-wrap\">\n  <iw-select2\n    [placeholder]=\"'table.typeToSearch' | t\"\n    [items]=\"items\"\n    [(ngModel)]=\"value\"\n    [open]=\"open\"\n    (close)=\"close.emit($event)\"\n    (ngModelChange)=\"onSelected($event)\">\n  </iw-select2>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
AddColumnComponent.ctorParameters = () => [
    { type: TableComponent }
];
AddColumnComponent.propDecorators = {
    visibleColumns: [{ type: Input }],
    open: [{ type: Input }],
    selected: [{ type: Output }],
    close: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    AddColumnComponent.prototype.visibleColumns;
    /** @type {?} */
    AddColumnComponent.prototype.open;
    /** @type {?} */
    AddColumnComponent.prototype.selected;
    /** @type {?} */
    AddColumnComponent.prototype.close;
    /** @type {?} */
    AddColumnComponent.prototype.items;
    /** @type {?} */
    AddColumnComponent.prototype.value;
    /**
     * @type {?}
     * @private
     */
    AddColumnComponent.prototype.tableComponent;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/select2/select2.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function Select2ItemOption() { }
if (false) {
    /** @type {?} */
    Select2ItemOption.prototype.text;
    /** @type {?} */
    Select2ItemOption.prototype.id;
}
/**
 * @record
 */
function Select2CategorizedOption() { }
if (false) {
    /** @type {?} */
    Select2CategorizedOption.prototype.text;
    /** @type {?} */
    Select2CategorizedOption.prototype.children;
}
/** @type {?} */
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => Select2Component)),
    multi: true
};
class Select2Component {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.placeholder = '';
        this.open = false;
        this.close = new EventEmitter();
        this.onChange = (/**
         * @param {?} v
         * @return {?}
         */
        (v) => { });
        this.onTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateData();
    }
    /**
     * @param {?} arg
     * @return {?}
     */
    ngOnChanges(arg) {
        this.updateData();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeSelect2();
    }
    // implements ControlValueAccessor
    // write model value into view
    /**
     * @param {?} v
     * @return {?}
     */
    writeValue(v) {
        this.currentValue = v;
        if (!this.element) {
            return;
        }
        this.element.val(v).trigger('change');
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { this.onTouched = fn; }
    /**
     * @param {?} e
     * @return {?}
     */
    onClose(e) {
        this.close.emit(e);
    }
    /**
     * @return {?}
     */
    removeSelect2() {
        if (this.element) {
            this.element.off('select2:select');
            this.element.select2('destroy');
            this.element.remove();
            this.element = null;
        }
    }
    /**
     * @return {?}
     */
    updateData() {
        this.removeSelect2();
        // replace a select as a work-around for data not replacing correctly, it was always appending more data
        this.element = jQuery('<select></select>').attr('style', 'width:200px');
        this.element.on('select2:select', (/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            this.currentValue = this.element.val();
            this.onChange(this.currentValue);
        }));
        this.element.on('select2:close', (/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            this.onClose(e);
        }));
        this.elementRef.nativeElement.appendChild(this.element.get(0));
        this.element.select2({
            data: this.items || [],
            // allowClear: true,
            placeholder: this.placeholder,
            multiple: this.multiple,
            tags: this.tags
        });
        this.element.val(this.currentValue).trigger('change');
        if (this.open) {
            this.element.select2('open');
        }
    }
}
Select2Component.decorators = [
    { type: Component, args: [{
                selector: 'iw-select2',
                template: "<!--<div>\n  <select style=\"width: 200px\" #selector></select>\n</div>-->\n",
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
                styles: [""]
            }] }
];
/** @nocollapse */
Select2Component.ctorParameters = () => [
    { type: ElementRef }
];
Select2Component.propDecorators = {
    items: [{ type: Input }],
    tags: [{ type: Input }],
    multiple: [{ type: Input }],
    placeholder: [{ type: Input }],
    open: [{ type: Input }],
    close: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    Select2Component.prototype.items;
    /** @type {?} */
    Select2Component.prototype.tags;
    /** @type {?} */
    Select2Component.prototype.multiple;
    /** @type {?} */
    Select2Component.prototype.placeholder;
    /** @type {?} */
    Select2Component.prototype.open;
    /** @type {?} */
    Select2Component.prototype.close;
    /** @type {?} */
    Select2Component.prototype.currentValue;
    /**
     * @type {?}
     * @private
     */
    Select2Component.prototype.element;
    /** @type {?} */
    Select2Component.prototype.onChange;
    /** @type {?} */
    Select2Component.prototype.onTouched;
    /**
     * @type {?}
     * @private
     */
    Select2Component.prototype.elementRef;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/table/table.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TableModule {
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

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ng2-pack.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { AddColumnComponent, ColumnState, DefaultValuePipe, FormatColumnPipe, InlineEditableDirective, InlineEditableModule, PipesModule, SortableItemDirective, SortableModule, TPipe, TableComponent, TableDefaults, TableInitService, TableModule, TableSortingService, TbodyComponent, TdComponent, ThComponent, TheadComponent, sortingCompare, tableDefaultValues, I18nService as ɵa, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR as ɵb, Select2Component as ɵc };
//# sourceMappingURL=ng2-pack.js.map
