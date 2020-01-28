(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/ng2-pack/src/lib/select2/select2.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng2-pack/src/lib/select2/select2.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<div>\n  <select style=\"width: 200px\" #selector></select>\n</div>-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/ng2-pack/src/lib/table/add-column/add-column.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng2-pack/src/lib/table/add-column/add-column.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- NOTE: indicate no columns to add in a better way  -->\n<div class=\"combo-input-wrap\">\n  <iw-select2\n    [placeholder]=\"'table.typeToSearch' | t\"\n    [items]=\"items\"\n    [(ngModel)]=\"value\"\n    [open]=\"open\"\n    (close)=\"close.emit($event)\"\n    (ngModelChange)=\"onSelected($event)\">\n  </iw-select2>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/ng2-pack/src/lib/table/table.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng2-pack/src/lib/table/table.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-content></ng-content>\n<table *ngIf=\"!customTemplate\" class=\"results-table table table-bordered table-striped\">\n  <thead\n    iw-thead\n    (addColumn)=\"addColumn.emit($event)\"\n    (removeColumn)=\"removeColumn.emit($event)\"\n    (sortColumn)=\"onSortColumn($event)\"\n    (addingColumn)=\"onAddingColumn($event)\"\n    (reorderColumns)=\"onReorderColumns($event)\"\n    (toggleSubfield)=\"onToggleSubfield($event)\"\n  ></thead>\n  <tbody\n    iw-tbody\n    [addingColumnIndex]=\"addingColumnIndex\"\n    (rowClick)=\"onRowClicked($event)\"\n    (editCell)=\"editCell.emit($event)\"\n  ></tbody>\n</table>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/ng2-pack/src/lib/table/tbody/tbody.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng2-pack/src/lib/table/tbody/tbody.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-content></ng-content>\n\n<ng-template [ngIf]=\"!customTemplate\">\n  <tr *ngFor=\"let row of rows; let rowIndex = index\" (click)=\"onRowClicked(rowIndex, row)\" >\n    <ng-template ngFor let-columnName [ngForOf]=\"visibleColumns\" let-index=\"index\">\n      <td *ngIf=\"addingColumnIndex == index\" class=\"combo-td\"></td>\n      <td\n        #tdComponent\n        iw-td\n        [attr.contenteditable]=\"inlineEditingEnabled\"\n        (blur)=\"onEditCell(tdComponent, rowIndex)\"\n        [column]=\"column(columnName)\"\n        [row]=\"row\"\n        [class.is-sorted]=\"isSorted(column(columnName), undefined)\"\n        attr.headers=\"col-id-{{ column(columnName)?.config.id }}\">\n      </td>\n    </ng-template>\n    <td *ngIf=\"changeColumnVisibility\" class=\"combo-td\"> <!-- empty for combobox --> </td>\n  </tr>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/ng2-pack/src/lib/table/td/td.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng2-pack/src/lib/table/td/td.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <div *ngIf=\"!column?.config.subFields\" #contentDiv>\n    {{ cellValue | formatColumn: column }}\n  </div>\n\n  <div *ngIf=\"hasSubfields && cellValue && cellValue.length > 0\">\n\n    <div class=\"cell-list\" [ngSwitch]=\"(column.config.id)\">\n\n      <!-- TODO: default template for columns with subfields  -->\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/ng2-pack/src/lib/table/th/th.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng2-pack/src/lib/table/th/th.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n\n  <!-- NOTE: do not use pointer cursor when sorting is disabled -->\n  <span class=\"col-label\" (click)=\"onSortColumn(column)\" >\n    {{ column?.config.text || column?.config.id  }}\n    <i *ngIf=\"showSortIcon(column, 'string', 'asc')\" class=\"ico-col-sort ico-col-sort--asc\"><i>A</i><i>Z</i><i>↓</i></i>\n    <i *ngIf=\"showSortIcon(column, 'string', 'desc')\" class=\"ico-col-sort ico-col-sort--desc\"><i>Z</i><i>A</i><i>↓</i></i>\n    <i *ngIf=\"showSortIcon(column, 'number', 'asc')\" class=\"ico-col-sort ico-col-sort--asc\"><i>0</i><i>9</i><i>↓</i></i>\n    <i *ngIf=\"showSortIcon(column, 'number', 'desc')\" class=\"ico-col-sort ico-col-sort--desc\"><i>9</i><i>0</i><i>↓</i></i>\n  </span>\n\n  <div class=\"btn-group col-menu\" dropdown>\n    <a\n      dropdown-open\n      class=\"btn btn-sm btn-secondary dropdown-toggle\"\n      [id]=\"column?.config.id + '-dropdown'\">\n    </a>\n\n    <ul class=\"dropdown-menu dropdown-menu-right\" dropdownMenu attr.aria-labelledby=\"{{column?.config.id}}-dropdown\">\n\n      <li *ngIf=\"!isSortingDisabled(column)\">\n        <a class=\"dropdown-item\" (click)=\"onSortColumn(column, 'asc')\">\n          {{ 'table.sort' | t}}\n          <span *ngIf=\"column?.config.sortType === 'number'\">0&rarr;9</span>\n          <span *ngIf=\"column?.config.sortType !== 'number'\">A&rarr;Z</span>\n        </a>\n      </li>\n\n      <li *ngIf=\"!isSortingDisabled(column)\">\n        <a class=\"dropdown-item\" (click)=\"onSortColumn(column, 'desc')\">\n          {{ 'table.sort' | t}}\n          <span *ngIf=\"column?.config.sortType === 'number'\">9&rarr;0</span>\n          <span *ngIf=\"column?.config.sortType !== 'number'\">Z&rarr;A</span>\n        </a>\n      </li>\n\n      <!-- NOTE: do not display divider when adding columns is disabled -->\n      <li *ngIf=\"!isSortingDisabled(column) && changeVisibility\" class=\"divider dropdown-divider\"></li>\n      <!-- NOTE: should it be disabled when there are no columns to add  -->\n      <li *ngIf=\"changeVisibility\">\n        <a [class.disabled]=\"hasAllColumnsVisble\" class=\"dropdown-item\" (click)=\"!hasAllColumnsVisble && addCombobox.emit(0)\">\n          {{ 'table.addLeft' | t}}\n        </a>\n      </li>\n\n      <li *ngIf=\"changeVisibility\">\n        <a [class.disabled]=\"hasAllColumnsVisble\" class=\"dropdown-item\" (click)=\"!hasAllColumnsVisble && addCombobox.emit(1)\">\n          {{ 'table.addRight' | t}}\n        </a>\n      </li>\n\n      <li *ngIf=\"column?.config.subFields\" class=\"divider dropdown-divider\"></li>\n      <li *ngIf=\"column?.config.subFields\" class=\"dropdown-item-group\" dropdown-not-closable-zone>\n        <span class=\"dropdown-header\">{{ 'table.subFields' | t}}</span>\n\n        <div *ngFor=\"let subfield of column?.config.subFields\">\n          <label class=\"dropdown-item c-input c-checkbox\">\n            <input type=\"checkbox\"\n                (change)=\"onToggleSubfield(column, subfield.id)\"\n                [checked]=\"subfield.isVisible\"\n            >\n            <span class=\"c-indicator\"></span>\n            {{subfield.text || subfield.id }}\n          </label>\n        </div>\n      </li>\n\n      <li *ngIf=\"changeVisibility\" class=\"divider dropdown-divider\"></li>\n      <li *ngIf=\"changeVisibility\">\n        <!-- disable removing column if it's the last one  -->\n        <!-- NOTE: is there a better way how to indicate that -->\n        <a\n        [class.disabled]=\"visibleColumns.length === 1\"\n        class=\"dropdown-item\"\n        (click)=\"isLastColumn && onRemoveColumn(column?.config.id)\">\n          {{ 'table.removeColumn' | t}}\n        </a>\n      </li>\n\n    </ul>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./projects/ng2-pack/src/lib/table/thead/thead.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./projects/ng2-pack/src/lib/table/thead/thead.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-content></ng-content>\n\n<tr *ngIf=\"!customTemplate\">\n  <ng-template  ngFor let-columnName [ngForOf]=\"visibleColumns\" let-columnIndex=\"index\">\n    <th *ngIf=\"addingColumnIndex == columnIndex\" class=\"combo-th\">\n      <div class=\"add-column combobox is-active\">\n        <iw-add-column\n          [visibleColumns]=\"visibleColumns\"\n          (close)=\"onAddCombobox(undefined)\"\n          (selected)=\"selectNewColumn($event, columnIndex)\"\n          attr.id=\"combobox-{{columnIndex}}\">\n        </iw-add-column>\n      </div>\n    </th>\n    <th\n      iw-th\n      [column]=\"column(columnName)\"\n      [changeVisibility]=\"changeColumnVisibility\"\n      (removeColumn)=\"removeColumn.emit($event)\"\n      (sortColumn)=\"onSortColumn($event)\"\n      (addCombobox)=\"onAddCombobox($event + columnIndex)\"\n      (toggleSubfield)=\"onToggleSubfield($event)\"\n      class=\"drag-column\"\n      attr.data-col-ref=\"{{ column(columnName)?.config.id }}\"\n      attr.id=\"col-id-{{ column(columnName)?.config.id }}\"\n      [class.is-sorted]=\"isSorted(column(columnName), undefined)\"\n      [class.is-sorted--asc]=\"isSorted(column(columnName), 'asc')\"\n      [class.is-sorted--desc]=\"isSorted(column(columnName), 'desc')\">\n    </th>\n  </ng-template>\n  <th *ngIf=\"changeColumnVisibility\" class=\"combo-th\">\n    <div class=\"add-column combobox\" [ngClass]=\"lastColumnComboboxActive ? 'is-active' : 'is-inactive'\">\n      <iw-add-column\n        *ngIf=\"lastColumnComboboxActive\"\n        [visibleColumns]=\"visibleColumns\"\n        (close)=\"toggleCombobox()\"\n        (selected)=\"selectNewColumn($event, undefined)\"\n      ></iw-add-column>\n      <span\n        *ngIf=\"!lastColumnComboboxActive\"\n        (click)=\"toggleCombobox()\"\n        class=\"add-column-button combo-toggle btn btn-sm btn-success\"\n      >+</span>\n    </div>\n  </th>\n</tr>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- TODO: show code snippets with the description-->\n<h1>\n  Data table component\n</h1>\n\n<h3>1. Convention over configuration</h3>\n<p>There is only one required input &mdash; rows data attribute. All other attributes have default values. For example, columns configuration is initialized according to row keys and values. All keys are visible by default.</p>\n<iw-table [rows]=\"rows\"></iw-table>\n\n<!-- NOTE: language should be set with token -->\n<h3>2. Customization with all available inputs and outputs</h3>\n<p>\n  Default values can be overwritten. Here is a list of all inputs and outputs. In this case, the inline editing is enabled, and language is changed to German.\n</p>\n<div>\n  <p *ngFor=\"let action of actionList\">{{action}}</p>\n</div>\n<iw-table\n  [rows]=\"rows\"\n  [columnsConfig]=\"columnsConfig\"\n  [visibleColumns]=\"visibleColumns\"\n  reorderingEnabled=\"true\"\n  inlineEditingEnabled=\"true\"\n  rowsSortingMode=\"external\"\n  changeColumnVisibility=\"true\"\n  language=\"de\"\n  initialSortColumn=\"firstName\"\n  (rowClick)=\"onAction('Row nr.' + $event.rowIndex  + ' was clicked!')\"\n  (sortColumn)=\"onAction('Column ' + $event[0] + ' was sorted in the direction `' + $event[1] + '`!')\"\n  (addColumn)=\"onAction('Column ' + $event + ' was added!')\"\n  (removeColumn)=\"onAction('Column ' + $event + ' was removed!')\"\n  (visibleColumnsChange)=\"onAction('Visible columns changed to: ' + $event)\"\n  (reorderColumns)=\"onAction('The order of columns changed to: ' + $event)\"\n  (editCell)=\"onAction('The cell in row ' + $event[3] + ' and column ' + $event[2] + ' was edited to value ' + $event[0])\"\n  >\n</iw-table>\n\n\n<h3>3.A Custom template (customized table footer)</h3>\nYou can provide a component template inside a iw-table element, where smaller composite directives can be used for not customized parts of the template. We use subcomponents 'iw-theader' and 'iw-tbody' to render table header and body.\n<iw-table [rows]=\"rows\" [columnsConfig]=\"columnsConfig\">\n  <table class=\"results-table table table-bordered table-striped\">\n    <thead iw-thead></thead>\n    <tbody iw-tbody></tbody>\n    <!-- customized table footer  -->\n  </table>\n</iw-table>\n\n<h3>3.B Custom template (Customized body cells)</h3>\n<p>\n  In this example, display of some cells is customized. We are using a public API of table component to get visibleColumns and get column state for specific a field.\n</p>\n<iw-table\n  [columnsConfig]=\"columnsConfig\"\n  [rows]=\"rowsWithStudies\"\n  [visibleColumns]=\"['firstName', 'email', 'studies']\"\n  #tableComponent>\n  <table class=\"results-table table table-bordered table-striped\">\n    <thead iw-thead></thead>\n    <tbody>\n      <tr *ngFor=\"let row of rowsWithStudies; let rowIndex = index\">\n        <ng-template ngFor let-columnName [ngForOf]=\"tableComponent.visibleColumns\">\n          <td\n            [class]=\"isCustomField(columnName)\"\n            *ngIf=\"!isCustomField(columnName)\"\n            iw-td\n            [column]=\"tableComponent.columnsLookup[columnName]\"\n            [row]=\"rowsWithStudies[rowIndex]\">\n          </td>\n          <td *ngIf=\"isCustomField(columnName)\">\n            <iw-studies-cell\n             [row]=\"row\"\n             [col]=\"tableComponent.columnsLookup['studies']\">\n           </iw-studies-cell>\n          </td>\n        </ng-template>\n        <td></td>\n      </tr>\n    </tbody>\n  </table>\n</iw-table>\n\n\n<!-- TODO: example for sortable utility -->\n<!--\n  <table class=\"table rows-reordering\">\n  <tr>\n    <th>Salutation</th>\n    <th>First name</th>\n    <th>Last name</th>\n    <th>ID</th>\n  </tr>\n  <ng-template ngFor let-person [ngForOf]=\"rows\" let-index=\"index\">\n    <tr iwSortableItem dropArea=\"rows\">\n      <td>{{index}}</td>\n      <td>{{person.salutation}}</td>\n      <td>{{person.firstName}}</td>\n      <td>{{person.lastName}}</td>\n      <td>{{person.id}}</td>\n    </tr>\n  </ng-template>\n</table>\n-->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/table-example/studies-cell.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/table-example/studies-cell.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cell-list-items\" #cellListItems [class.show-all]=\"cellListItems.showAll\">\n\n  <ng-template ngFor let-subrow [ngForOf]=\"row[col.config.id]\" let-itemIndex=\"index\">\n    <div class=\"cell-list-item\" [class.cell-list-item--extended]=\"itemIndex > 0\">\n\n      <strong *ngIf=\"isSubColumnVisible('faculty')\">\n        {{ subrow.faculty | defaultValue }}\n      </strong>\n\n      <strong *ngIf=\"isSubColumnVisible('university')\">\n        {{ subrow.university | defaultValue }}\n      </strong>\n\n      <div *ngIf=\"isSubColumnVisible('country')\">\n        {{ subrow.country | defaultValue }}\n      </div>\n\n      <span *ngIf=\"allSubfieldsHidden\">\n        No subfields enabled.\n      </span>\n    </div>\n  </ng-template>\n  <span *ngIf=\"!row[col.config.id] || row[col.config.id].length === 0\">No Studies</span>\n</div>\n\n<ng-template [ngIf]=\"row[col.config.id] && row[col.config.id].length > 1\">\n  <a class=\"cell-list-expand-toggle\" [class.is-open]=\"cellListItems.showAll\" (click)=\"cellListItems.showAll = !cellListItems.showAll; $event.stopPropagation()\">\n    <span class=\"icon icon-triangle-down\"></span>{{ cellListItems.showAll ? 'verstecken' : ((row[col.config.id].length - 1) + ' weitere') }}\n  </a>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./projects/ng2-pack/src/lib/inline-editable/index.ts":
/*!************************************************************!*\
  !*** ./projects/ng2-pack/src/lib/inline-editable/index.ts ***!
  \************************************************************/
/*! exports provided: InlineEditableDirective, InlineEditableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _inline_editable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inline-editable.directive */ "./projects/ng2-pack/src/lib/inline-editable/inline-editable.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InlineEditableDirective", function() { return _inline_editable_directive__WEBPACK_IMPORTED_MODULE_1__["InlineEditableDirective"]; });

/* harmony import */ var _inline_editable_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inline-editable.module */ "./projects/ng2-pack/src/lib/inline-editable/inline-editable.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InlineEditableModule", function() { return _inline_editable_module__WEBPACK_IMPORTED_MODULE_2__["InlineEditableModule"]; });






/***/ }),

/***/ "./projects/ng2-pack/src/lib/inline-editable/inline-editable.directive.ts":
/*!********************************************************************************!*\
  !*** ./projects/ng2-pack/src/lib/inline-editable/inline-editable.directive.ts ***!
  \********************************************************************************/
/*! exports provided: InlineEditableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InlineEditableDirective", function() { return InlineEditableDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


var KeyCodes;
(function (KeyCodes) {
    KeyCodes[KeyCodes["Enter"] = 13] = "Enter";
    KeyCodes[KeyCodes["Escape"] = 27] = "Escape";
})(KeyCodes || (KeyCodes = {}));
let InlineEditableDirective = class InlineEditableDirective {
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
        this.onEnter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.contentEditable = true;
    }
    set iwInlineEditable(isEnabled) {
        this.contentEditable = isEnabled;
    }
    ;
    startEditing() {
        this.originalContent = this.content;
    }
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
    get isChanged() {
        return this.originalContent !== this.content;
    }
    get content() {
        return this.element.nativeElement.textContent.trim();
    }
    set content(content) {
        this.renderer.setElementProperty(this.element, 'innerText', content);
    }
    cancelEditing() {
        this.content = this.originalContent;
    }
};
InlineEditableDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('iwInlineEditable')
], InlineEditableDirective.prototype, "iwInlineEditable", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], InlineEditableDirective.prototype, "onEnter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.contenteditable')
], InlineEditableDirective.prototype, "contentEditable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('focus')
], InlineEditableDirective.prototype, "startEditing", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event'])
], InlineEditableDirective.prototype, "keyPressed", null);
InlineEditableDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[iwInlineEditable]'
    })
], InlineEditableDirective);



/***/ }),

/***/ "./projects/ng2-pack/src/lib/inline-editable/inline-editable.module.ts":
/*!*****************************************************************************!*\
  !*** ./projects/ng2-pack/src/lib/inline-editable/inline-editable.module.ts ***!
  \*****************************************************************************/
/*! exports provided: InlineEditableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InlineEditableModule", function() { return InlineEditableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _inline_editable_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inline-editable.directive */ "./projects/ng2-pack/src/lib/inline-editable/inline-editable.directive.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let InlineEditableModule = class InlineEditableModule {
};
InlineEditableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _inline_editable_directive__WEBPACK_IMPORTED_MODULE_1__["InlineEditableDirective"]
        ],
        exports: [
            _inline_editable_directive__WEBPACK_IMPORTED_MODULE_1__["InlineEditableDirective"],
        ]
    })
], InlineEditableModule);



/***/ }),

/***/ "./projects/ng2-pack/src/lib/locales/de.ts":
/*!*************************************************!*\
  !*** ./projects/ng2-pack/src/lib/locales/de.ts ***!
  \*************************************************/
/*! exports provided: de */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "de", function() { return de; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const de = {
    table: {
        sort: 'Sortieren',
        addLeft: 'Spalte links hinzufügen',
        addRight: 'Spalte rechts hinzufügen',
        subFields: 'Felder in der Spalte',
        removeColumn: 'Diese Spalte entfernen',
        typeToSearch: 'Tippen zum Suchen',
    }
};


/***/ }),

/***/ "./projects/ng2-pack/src/lib/locales/en.ts":
/*!*************************************************!*\
  !*** ./projects/ng2-pack/src/lib/locales/en.ts ***!
  \*************************************************/
/*! exports provided: en */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "en", function() { return en; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const en = {
    table: {
        sort: 'Sort',
        addLeft: 'Add column to the left',
        addRight: 'Add column to the right',
        subFields: 'Subfields in the column',
        removeColumn: 'Remove this column',
        typeToSearch: 'Type to search',
    }
};


/***/ }),

/***/ "./projects/ng2-pack/src/lib/locales/index.ts":
/*!****************************************************!*\
  !*** ./projects/ng2-pack/src/lib/locales/index.ts ***!
  \****************************************************/
/*! exports provided: en, de */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _en__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en */ "./projects/ng2-pack/src/lib/locales/en.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "en", function() { return _en__WEBPACK_IMPORTED_MODULE_1__["en"]; });

/* harmony import */ var _de__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./de */ "./projects/ng2-pack/src/lib/locales/de.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "de", function() { return _de__WEBPACK_IMPORTED_MODULE_2__["de"]; });






/***/ }),

/***/ "./projects/ng2-pack/src/lib/pipes/default-value/default-value.pipe.ts":
/*!*****************************************************************************!*\
  !*** ./projects/ng2-pack/src/lib/pipes/default-value/default-value.pipe.ts ***!
  \*****************************************************************************/
/*! exports provided: DefaultValuePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultValuePipe", function() { return DefaultValuePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DefaultValuePipe = class DefaultValuePipe {
    transform(value, defaultValue = '—', args) {
        if (typeof value !== 'undefined' && !this.isEmptyString(value)) {
            return value;
        }
        return defaultValue;
    }
    isEmptyString(value) {
        return typeof value === 'string' && value.trim() === '';
    }
};
DefaultValuePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'defaultValue'
    })
], DefaultValuePipe);



/***/ }),

/***/ "./projects/ng2-pack/src/lib/pipes/index.ts":
/*!**************************************************!*\
  !*** ./projects/ng2-pack/src/lib/pipes/index.ts ***!
  \**************************************************/
/*! exports provided: PipesModule, DefaultValuePipe, TPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pipes_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes.module */ "./projects/ng2-pack/src/lib/pipes/pipes.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return _pipes_module__WEBPACK_IMPORTED_MODULE_1__["PipesModule"]; });

/* harmony import */ var _default_value_default_value_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./default-value/default-value.pipe */ "./projects/ng2-pack/src/lib/pipes/default-value/default-value.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultValuePipe", function() { return _default_value_default_value_pipe__WEBPACK_IMPORTED_MODULE_2__["DefaultValuePipe"]; });

/* harmony import */ var _t_t_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./t/t.pipe */ "./projects/ng2-pack/src/lib/pipes/t/t.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TPipe", function() { return _t_t_pipe__WEBPACK_IMPORTED_MODULE_3__["TPipe"]; });







/***/ }),

/***/ "./projects/ng2-pack/src/lib/pipes/pipes.module.ts":
/*!*********************************************************!*\
  !*** ./projects/ng2-pack/src/lib/pipes/pipes.module.ts ***!
  \*********************************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _default_value_default_value_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-value/default-value.pipe */ "./projects/ng2-pack/src/lib/pipes/default-value/default-value.pipe.ts");
/* harmony import */ var _t_t_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./t/t.pipe */ "./projects/ng2-pack/src/lib/pipes/t/t.pipe.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let PipesModule = class PipesModule {
};
PipesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _default_value_default_value_pipe__WEBPACK_IMPORTED_MODULE_1__["DefaultValuePipe"],
            _t_t_pipe__WEBPACK_IMPORTED_MODULE_2__["TPipe"],
        ],
        exports: [
            _default_value_default_value_pipe__WEBPACK_IMPORTED_MODULE_1__["DefaultValuePipe"],
            _t_t_pipe__WEBPACK_IMPORTED_MODULE_2__["TPipe"],
        ]
    })
], PipesModule);



/***/ }),

/***/ "./projects/ng2-pack/src/lib/pipes/t/t.pipe.ts":
/*!*****************************************************!*\
  !*** ./projects/ng2-pack/src/lib/pipes/t/t.pipe.ts ***!
  \*****************************************************/
/*! exports provided: TPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TPipe", function() { return TPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_i18n_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/i18n.service */ "./projects/ng2-pack/src/lib/services/i18n.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let TPipe = class TPipe {
    constructor(i18nService) {
        this.i18nService = i18nService;
    }
    transform(value, args) {
        return this.i18nService.get(value);
    }
};
TPipe.ctorParameters = () => [
    { type: _services_i18n_service__WEBPACK_IMPORTED_MODULE_1__["I18nService"] }
];
TPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({
        name: 't'
    })
], TPipe);



/***/ }),

/***/ "./projects/ng2-pack/src/lib/select2/select2.component.css":
/*!*****************************************************************!*\
  !*** ./projects/ng2-pack/src/lib/select2/select2.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZzItcGFjay9zcmMvbGliL3NlbGVjdDIvc2VsZWN0Mi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./projects/ng2-pack/src/lib/select2/select2.component.ts":
/*!****************************************************************!*\
  !*** ./projects/ng2-pack/src/lib/select2/select2.component.ts ***!
  \****************************************************************/
/*! exports provided: CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, Select2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select2Component", function() { return Select2Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => Select2Component),
    multi: true
};
let Select2Component = class Select2Component {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.placeholder = '';
        this.open = false;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onChange = (v) => { };
        this.onTouched = () => { };
    }
    ngOnInit() {
        this.updateData();
    }
    ngOnChanges(arg) {
        this.updateData();
    }
    ngOnDestroy() {
        this.removeSelect2();
    }
    // implements ControlValueAccessor
    // write model value into view
    writeValue(v) {
        this.currentValue = v;
        if (!this.element) {
            return;
        }
        this.element.val(v).trigger('change');
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) { this.onTouched = fn; }
    onClose(e) {
        this.close.emit(e);
    }
    removeSelect2() {
        if (this.element) {
            this.element.off('select2:select');
            this.element.select2('destroy');
            this.element.remove();
            this.element = null;
        }
    }
    updateData() {
        this.removeSelect2();
        // replace a select as a work-around for data not replacing correctly, it was always appending more data
        this.element = jQuery('<select></select>').attr('style', 'width:200px');
        this.element.on('select2:select', (e) => {
            this.currentValue = this.element.val();
            this.onChange(this.currentValue);
        });
        this.element.on('select2:close', (e) => {
            this.onClose(e);
        });
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
};
Select2Component.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], Select2Component.prototype, "items", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], Select2Component.prototype, "tags", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], Select2Component.prototype, "multiple", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], Select2Component.prototype, "placeholder", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], Select2Component.prototype, "open", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], Select2Component.prototype, "close", void 0);
Select2Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'iw-select2',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./select2.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/ng2-pack/src/lib/select2/select2.component.html")).default,
        providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./select2.component.css */ "./projects/ng2-pack/src/lib/select2/select2.component.css")).default]
    })
], Select2Component);



/***/ }),

/***/ "./projects/ng2-pack/src/lib/services/i18n.service.ts":
/*!************************************************************!*\
  !*** ./projects/ng2-pack/src/lib/services/i18n.service.ts ***!
  \************************************************************/
/*! exports provided: I18nService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nService", function() { return I18nService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _locales__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../locales */ "./projects/ng2-pack/src/lib/locales/index.ts");



let I18nService = class I18nService {
    constructor() {
        this.language = 'en';
        this.translations = {
            en: _locales__WEBPACK_IMPORTED_MODULE_2__["en"],
            de: _locales__WEBPACK_IMPORTED_MODULE_2__["de"]
        };
    }
    get(nestedKey, language = this.language) {
        if (!this.translations) {
            console.error('I18nService is used without initialization with translations');
            return '';
        }
        let keys = nestedKey.split('.');
        let translation = '';
        try {
            translation = keys
                .reduce((translationTree, key) => {
                return translationTree[key];
            }, this.translations[language]);
        }
        catch (err) {
            console.error(`Unknown key "${nestedKey}" was used!`);
        }
        return translation;
    }
};
I18nService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], I18nService);



/***/ }),

/***/ "./projects/ng2-pack/src/lib/sortable/index.ts":
/*!*****************************************************!*\
  !*** ./projects/ng2-pack/src/lib/sortable/index.ts ***!
  \*****************************************************/
/*! exports provided: SortableModule, SortableItemDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sortable_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sortable.module */ "./projects/ng2-pack/src/lib/sortable/sortable.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortableModule", function() { return _sortable_module__WEBPACK_IMPORTED_MODULE_1__["SortableModule"]; });

/* harmony import */ var _sortable_item_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sortable-item.directive */ "./projects/ng2-pack/src/lib/sortable/sortable-item.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortableItemDirective", function() { return _sortable_item_directive__WEBPACK_IMPORTED_MODULE_2__["SortableItemDirective"]; });






/***/ }),

/***/ "./projects/ng2-pack/src/lib/sortable/sortable-item.directive.ts":
/*!***********************************************************************!*\
  !*** ./projects/ng2-pack/src/lib/sortable/sortable-item.directive.ts ***!
  \***********************************************************************/
/*! exports provided: SortableItemDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableItemDirective", function() { return SortableItemDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let dragSource;
let originalNextSibling;
let SortableItemDirective = class SortableItemDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.draggable = true;
        this.droppable = true;
        this.dropArea = 'defaultDropArea';
        this.lastEvent = '';
        this.updateElements = (dragged, droppedOn) => {
            let parent = droppedOn.elementRef.nativeElement.parentNode;
            let draggedEl = dragged.elementRef.nativeElement;
            let dropEl = droppedOn.elementRef.nativeElement;
            let draggedIndex = Array.prototype.indexOf.call(parent.children, draggedEl);
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
        };
    }
    // draggable
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
    onDragEnter(dragEvent) {
        this.lastEvent = 'dragenter';
        dragEvent.preventDefault();
        if (dragSource !== this && dragSource.dropArea === this.dropArea) {
            // updating is only preview, it is undone if it is not finished by the drop event
            this.updateElements(dragSource, this);
        }
    }
    onDragOver(dragOverEvent) {
        // necessary for drop event to be triggered
        dragOverEvent.preventDefault();
    }
    // droppable
    onDragEnd(dragEvent) {
        if (this.lastEvent === 'drop') {
            return;
        }
        if (dragSource.dropArea === this.dropArea && typeof originalNextSibling !== 'undefined') {
            originalNextSibling.parentNode.insertBefore(dragSource.elementRef.nativeElement, originalNextSibling);
            originalNextSibling = undefined;
        }
    }
    // droppable
    onDrop(dropEvent) {
        this.lastEvent = 'drop';
        dropEvent.stopPropagation();
        if (this === dragSource) {
            return;
        }
        // this.updateElements(dragSource, this);
        originalNextSibling = undefined;
    }
};
SortableItemDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.draggable')
], SortableItemDirective.prototype, "draggable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('attr.droppable')
], SortableItemDirective.prototype, "droppable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SortableItemDirective.prototype, "dropArea", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragstart', ['$event'])
], SortableItemDirective.prototype, "onDragStart", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragenter', ['$event'])
], SortableItemDirective.prototype, "onDragEnter", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragover', ['$event'])
], SortableItemDirective.prototype, "onDragOver", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragend', ['$event'])
], SortableItemDirective.prototype, "onDragEnd", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event'])
], SortableItemDirective.prototype, "onDrop", null);
SortableItemDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[iwSortableItem]'
    })
], SortableItemDirective);



/***/ }),

/***/ "./projects/ng2-pack/src/lib/sortable/sortable.module.ts":
/*!***************************************************************!*\
  !*** ./projects/ng2-pack/src/lib/sortable/sortable.module.ts ***!
  \***************************************************************/
/*! exports provided: SortableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableModule", function() { return SortableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _sortable_item_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sortable-item.directive */ "./projects/ng2-pack/src/lib/sortable/sortable-item.directive.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let SortableModule = class SortableModule {
};
SortableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _sortable_item_directive__WEBPACK_IMPORTED_MODULE_1__["SortableItemDirective"]
        ],
        exports: [
            _sortable_item_directive__WEBPACK_IMPORTED_MODULE_1__["SortableItemDirective"]
        ]
    })
], SortableModule);



/***/ }),

/***/ "./projects/ng2-pack/src/lib/table/add-column/add-column.component.css":
/*!*****************************************************************************!*\
  !*** ./projects/ng2-pack/src/lib/table/add-column/add-column.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*:host {\n  display: block;\n  width: 200px;\n}*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25nMi1wYWNrL3NyYy9saWIvdGFibGUvYWRkLWNvbHVtbi9hZGQtY29sdW1uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFIiwiZmlsZSI6InByb2plY3RzL25nMi1wYWNrL3NyYy9saWIvdGFibGUvYWRkLWNvbHVtbi9hZGQtY29sdW1uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAyMDBweDtcbn0qL1xuIl19 */");

/***/ }),

/***/ "./projects/ng2-pack/src/lib/table/add-column/add-column.component.ts":
/*!****************************************************************************!*\
  !*** ./projects/ng2-pack/src/lib/table/add-column/add-column.component.ts ***!
  \****************************************************************************/
/*! exports provided: AddColumnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddColumnComponent", function() { return AddColumnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../table.component */ "./projects/ng2-pack/src/lib/table/table.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let AddColumnComponent = class AddColumnComponent {
    constructor(tableComponent) {
        this.tableComponent = tableComponent;
        this.open = true;
        this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.value = null;
    }
    ngOnChanges(arg) {
        let columns = this.columnsNotVisibleInTable();
        // this.items = this.tableComponent.columnsForAddingFn(options);
        this.items = this.categorizeColumns(columns);
    }
    onSelected(value) {
        if (!value) {
            return;
        }
        this.selected.emit({ value });
        setTimeout(() => {
            this.value = null;
        }, 0);
    }
    columnsNotVisibleInTable() {
        let items = [];
        this.tableComponent.columnsConfig.forEach((columnConfig) => {
            if (this.visibleColumns.indexOf(columnConfig.id) === -1) {
                columnConfig.text = columnConfig.text || columnConfig.id;
                items.push(columnConfig);
            }
        });
        return items;
    }
    categorizeColumns(columns) {
        let itemsWithCategory = columns.filter((item) => typeof item.category !== 'undefined');
        if (itemsWithCategory.length === 0) {
            // no categories present
            return columns;
        }
        let category2Index = {};
        let index = 0;
        let options = [];
        columns.forEach((column) => {
            let categoryId = (column.category && column.category.id) || 'Other';
            let categoryIndex = category2Index[categoryId];
            if (typeof categoryIndex === 'undefined') {
                category2Index[categoryId] = index++;
                let option = {
                    text: (column.category && column.category.text) || categoryId,
                    children: [column]
                };
                options.push(option);
            }
            else {
                options[categoryIndex].children.push(column);
            }
        });
        return options;
    }
};
AddColumnComponent.ctorParameters = () => [
    { type: _table_component__WEBPACK_IMPORTED_MODULE_1__["TableComponent"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], AddColumnComponent.prototype, "visibleColumns", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], AddColumnComponent.prototype, "open", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], AddColumnComponent.prototype, "selected", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], AddColumnComponent.prototype, "close", void 0);
AddColumnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'iw-add-column',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-column.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/ng2-pack/src/lib/table/add-column/add-column.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-column.component.css */ "./projects/ng2-pack/src/lib/table/add-column/add-column.component.css")).default]
    })
], AddColumnComponent);



/***/ }),

/***/ "./projects/ng2-pack/src/lib/table/column-state.class.ts":
/*!***************************************************************!*\
  !*** ./projects/ng2-pack/src/lib/table/column-state.class.ts ***!
  \***************************************************************/
/*! exports provided: ColumnState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnState", function() { return ColumnState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ColumnState {
    // config is read-only, state is stored in other properties
    constructor(config, _currentSortDirection, activeFields = []) {
        this.config = config;
        this._currentSortDirection = _currentSortDirection;
        this.activeFields = activeFields;
    }
    get initialSortDirection() {
        return this.config.initialSortDirection || 'asc';
    }
    get currentSortDirection() {
        return this._currentSortDirection || 'asc';
    }
    set currentSortDirection(direction) {
        this._currentSortDirection = direction;
    }
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


/***/ }),

/***/ "./projects/ng2-pack/src/lib/table/index.ts":
/*!**************************************************!*\
  !*** ./projects/ng2-pack/src/lib/table/index.ts ***!
  \**************************************************/
/*! exports provided: TableDefaults, tableDefaultValues, TableComponent, TbodyComponent, TheadComponent, ThComponent, TdComponent, AddColumnComponent, ColumnState, sortingCompare, TableSortingService, TableInitService, FormatColumnPipe, TableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.component */ "./projects/ng2-pack/src/lib/table/table.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableDefaults", function() { return _table_component__WEBPACK_IMPORTED_MODULE_1__["TableDefaults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tableDefaultValues", function() { return _table_component__WEBPACK_IMPORTED_MODULE_1__["tableDefaultValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return _table_component__WEBPACK_IMPORTED_MODULE_1__["TableComponent"]; });

/* harmony import */ var _tbody_tbody_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tbody/tbody.component */ "./projects/ng2-pack/src/lib/table/tbody/tbody.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TbodyComponent", function() { return _tbody_tbody_component__WEBPACK_IMPORTED_MODULE_2__["TbodyComponent"]; });

/* harmony import */ var _thead_thead_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thead/thead.component */ "./projects/ng2-pack/src/lib/table/thead/thead.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TheadComponent", function() { return _thead_thead_component__WEBPACK_IMPORTED_MODULE_3__["TheadComponent"]; });

/* harmony import */ var _th_th_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./th/th.component */ "./projects/ng2-pack/src/lib/table/th/th.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThComponent", function() { return _th_th_component__WEBPACK_IMPORTED_MODULE_4__["ThComponent"]; });

/* harmony import */ var _td_td_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./td/td.component */ "./projects/ng2-pack/src/lib/table/td/td.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TdComponent", function() { return _td_td_component__WEBPACK_IMPORTED_MODULE_5__["TdComponent"]; });

/* harmony import */ var _add_column_add_column_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-column/add-column.component */ "./projects/ng2-pack/src/lib/table/add-column/add-column.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddColumnComponent", function() { return _add_column_add_column_component__WEBPACK_IMPORTED_MODULE_6__["AddColumnComponent"]; });

/* harmony import */ var _column_state_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./column-state.class */ "./projects/ng2-pack/src/lib/table/column-state.class.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColumnState", function() { return _column_state_class__WEBPACK_IMPORTED_MODULE_7__["ColumnState"]; });

/* harmony import */ var _table_sorting_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./table-sorting.service */ "./projects/ng2-pack/src/lib/table/table-sorting.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortingCompare", function() { return _table_sorting_service__WEBPACK_IMPORTED_MODULE_8__["sortingCompare"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableSortingService", function() { return _table_sorting_service__WEBPACK_IMPORTED_MODULE_8__["TableSortingService"]; });

/* harmony import */ var _table_init_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./table-init.service */ "./projects/ng2-pack/src/lib/table/table-init.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableInitService", function() { return _table_init_service__WEBPACK_IMPORTED_MODULE_9__["TableInitService"]; });

/* harmony import */ var _pipes_format_column_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/format-column.pipe */ "./projects/ng2-pack/src/lib/table/pipes/format-column.pipe.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormatColumnPipe", function() { return _pipes_format_column_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatColumnPipe"]; });

/* harmony import */ var _table_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./table.module */ "./projects/ng2-pack/src/lib/table/table.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableModule", function() { return _table_module__WEBPACK_IMPORTED_MODULE_11__["TableModule"]; });















/***/ }),

/***/ "./projects/ng2-pack/src/lib/table/pipes/format-column.pipe.ts":
/*!*********************************************************************!*\
  !*** ./projects/ng2-pack/src/lib/table/pipes/format-column.pipe.ts ***!
  \*********************************************************************/
/*! exports provided: FormatColumnPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatColumnPipe", function() { return FormatColumnPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pipes_default_value_default_value_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../pipes/default-value/default-value.pipe */ "./projects/ng2-pack/src/lib/pipes/default-value/default-value.pipe.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let FormatColumnPipe = class FormatColumnPipe {
    constructor(defaultValuePipe) {
        this.defaultValuePipe = defaultValuePipe;
    }
    transform(value, column) {
        if (!column) {
            return;
        }
        let formattedValue = this.applyFormatters(value, column.config.formatters);
        return this.defaultValuePipe.transform(formattedValue, '—');
    }
    applyFormatters(value, formatters) {
        if (!formatters) {
            return value;
        }
        return formatters.reduce((currentValue, formatter) => {
            let args = formatter.arguments || [];
            return formatter.transform(currentValue, ...args);
        }, value);
    }
};
FormatColumnPipe.ctorParameters = () => [
    { type: _pipes_default_value_default_value_pipe__WEBPACK_IMPORTED_MODULE_1__["DefaultValuePipe"] }
];
FormatColumnPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Pipe"])({
        name: 'formatColumn'
    })
], FormatColumnPipe);



/***/ }),

/***/ "./projects/ng2-pack/src/lib/table/table-init.service.ts":
/*!***************************************************************!*\
  !*** ./projects/ng2-pack/src/lib/table/table-init.service.ts ***!
  \***************************************************************/
/*! exports provided: TableInitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableInitService", function() { return TableInitService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _column_state_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./column-state.class */ "./projects/ng2-pack/src/lib/table/column-state.class.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let TableInitService = class TableInitService {
    constructor() { }
    detectColumnConfiguration(rows) {
        let columnsLookup = this.detectColumnLookup(rows);
        return [columnsLookup, this.columnsLookup2Config(columnsLookup)];
    }
    detectColumnLookup(rows) {
        let columnsLookup = {};
        rows.forEach(row => {
            Object.keys(row).forEach(key => {
                if (typeof columnsLookup[key] === 'undefined') {
                    let columnConfig = {
                        id: key,
                        sortType: typeof row[key],
                        sortingDisabled: false,
                        initialSortDirection: 'asc'
                    };
                    columnsLookup[key] = new _column_state_class__WEBPACK_IMPORTED_MODULE_1__["ColumnState"](columnConfig);
                }
            });
        });
        return columnsLookup;
    }
    columnsConfig2Lookup(columnsConfig) {
        let columnsLookup = {};
        columnsConfig.forEach((columnConfig) => {
            let activeFields = [];
            if (typeof columnConfig.subFields !== 'undefined') {
                activeFields = columnConfig.subFields
                    .filter((subfield) => subfield.isVisible)
                    .map((subfield) => subfield.id);
            }
            let columnState = new _column_state_class__WEBPACK_IMPORTED_MODULE_1__["ColumnState"](columnConfig);
            columnState.activeFields = activeFields;
            columnsLookup[columnConfig.id] = columnState;
        });
        return columnsLookup;
    }
    columnsLookup2Config(columnsLookup) {
        let columnsConfig = [];
        for (let columnName in columnsLookup) {
            if (columnsLookup.hasOwnProperty(columnName)) {
                columnsConfig.push(columnsLookup[columnName].config);
            }
        }
        return columnsConfig;
    }
};
TableInitService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], TableInitService);



/***/ }),

/***/ "./projects/ng2-pack/src/lib/table/table-sorting.service.ts":
/*!******************************************************************!*\
  !*** ./projects/ng2-pack/src/lib/table/table-sorting.service.ts ***!
  \******************************************************************/
/*! exports provided: sortingCompare, TableSortingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortingCompare", function() { return sortingCompare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableSortingService", function() { return TableSortingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const sortingCompare = {
    number: (a, b) => a - b,
    string: (a, b) => {
        if (typeof a === 'undefined') {
            return -1;
        }
        return a.localeCompare(b);
    },
    other: (a, b) => {
        if (a > b) {
            return 1;
        }
        if (b > a) {
            return -1;
        }
        return 0;
    }
};
let TableSortingService = class TableSortingService {
    sort(rows, columnState) {
        let sortType = columnState.config.sortType || 'other';
        let cmpFn = columnState.config.sortCompare || sortingCompare[sortType];
        if (!cmpFn) {
            console.warn(`Unsupported sorting type '${sortType}' was used. ` +
                'Using comparison operators: greater, less and equal (>, <, ===)');
            cmpFn = sortingCompare['other'];
        }
        rows.sort((a, b) => cmpFn(a[columnState.config.id], b[columnState.config.id]));
        if (columnState.currentSortDirection === 'desc') {
            rows.reverse();
        }
        return rows;
    }
};
TableSortingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TableSortingService);



/***/ }),

/***/ "./projects/ng2-pack/src/lib/table/table.component.scss":
/*!**************************************************************!*\
  !*** ./projects/ng2-pack/src/lib/table/table.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".results {\n  color: #4d4d4d;\n}\n.results .panel-header {\n  border-bottom: 0;\n}\n.results .panel-body {\n  padding: 0;\n  margin: 0 -1px;\n}\n.results .panel-footer {\n  margin-top: -1px;\n}\n.results .panel-body {\n  position: relative;\n}\n.results .results-table--new-group-layer {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.75);\n}\n.results-table-wrap {\n  position: relative;\n  overflow-x: visible;\n  min-height: 400px;\n}\n.results-table {\n  margin: 0;\n  border-collapse: separate;\n  border-width: 1px 0 0 1px;\n  background: #fff;\n  border-top-color: #d3d3d3;\n  border-left-color: app-color(bluegray);\n  box-shadow: none;\n}\n.results-table thead {\n  background: rgba(252, 89, 31, 0.55);\n}\n.results-table thead th {\n  padding: 0.5rem 0.5rem;\n  border-bottom-width: 1px;\n  border-color: #d3d3d3;\n  vertical-align: top;\n  background: #f4f4f4;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.75), inset 1px 0 0 rgba(255, 255, 255, 0.5);\n}\n.results-table thead th:last-child {\n  border-right-color: app-color(bluegray);\n}\n.results-table thead th:hover .col-menu {\n  opacity: 1;\n}\n.results-table .person-link-th {\n  width: 20px;\n}\n.results-table .combo-th {\n  width: 1%;\n  padding-right: 8px;\n  padding-left: 8px;\n}\n.results-table .drag-column.ui-sortable-helper {\n  opacity: 0.9;\n  border-color: transparent;\n  transform: translateY(-15px) rotate(1deg);\n  box-shadow: inset 0 0 0 1px #9ab1ab, 0 2px 3px rgba(0, 0, 0, 0.75);\n  background: #e5e8e7;\n}\n.results-table .drag-column.ui-sortable-helper .col-label {\n  color: rgba(0, 0, 0, 0.95);\n  text-shadow: none;\n}\n.results-table .drag-column.ui-sortable-helper .btn-group {\n  display: none;\n}\n.results-table .ui-sortable-placeholder {\n  visibility: visible !important;\n  background: rgba(252, 89, 31, 0.85) !important;\n  box-shadow: inset 0 3px 10px rgba(0, 0, 0, 0.5);\n}\n.results-table tfoot td {\n  border-color: app-color(bluegray);\n  border-width: 0 1px 0 0;\n}\n.results-table td,\n.results-table th {\n  position: relative;\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n  border-color: #f0f0f0;\n  border-width: 0 1px 1px 0;\n  font-weight: normal;\n}\n.results-table tbody tr {\n  cursor: pointer;\n}\n.results-table tbody tr:hover {\n  background: #eee;\n}\n.results-table tbody td {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  border-width: 0 0 1px 0;\n  font-size: 12px;\n  line-height: 1.25;\n}\n.results-table tbody .combo-td {\n  border-left-width: 1px;\n  background-color: rgba(0, 116, 56, 0.05);\n}\n.results-table tbody td:last-child {\n  border-right: 1px solid app-color(bluegray);\n}\n.results-table tbody tr:last-child td {\n  border-bottom-color: #d3d3d3;\n}\n.results-table tbody tr:last-child td:last-child {\n  border-color-right: app-color(bluegray);\n  border-color-bottom: #d3d3d3;\n}\n.results-table .label {\n  position: relative;\n  top: -1px;\n  padding-bottom: 0.2em;\n  background: rgba(16, 126, 100, 0.75);\n}\n.results-table .label-tum {\n  background: #157eaa;\n}\n.results-table .btn-toggle {\n  margin-top: 0.25rem;\n}\n.results-table td.is-sorted {\n  background-color: rgba(212, 221, 219, 0.2);\n}\n.results-table th.is-sorted {\n  position: relative;\n  border-color: rgba(183, 199, 195, 0.75);\n  background-color: #e1eae7;\n  background-image: none;\n}\n.results-table th.is-sorted:before {\n  content: \"\";\n  position: absolute;\n  top: -1px;\n  right: -1px;\n  left: -1px;\n  height: 1px;\n  background: rgba(183, 199, 195, 0.4);\n}\n.results-table th.is-sorted:after {\n  content: \"\";\n  position: absolute;\n  top: -1px;\n  bottom: -1px;\n  left: -1px;\n  width: 1px;\n  background: rgba(183, 199, 195, 0.75);\n}\n.col-label {\n  position: relative;\n  display: inline-block;\n  padding: 5px 0px 5px 0;\n  width: 100%;\n  font-size: 10px;\n  line-height: 18px;\n  font-weight: bold;\n  text-transform: uppercase;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.66);\n  color: rgba(0, 0, 0, 0.5);\n  cursor: pointer;\n  transition: color 0.2s;\n}\n.is-sorted .col-label {\n  color: rgba(0, 0, 0, 0.66);\n}\n.col-menu {\n  position: absolute;\n  text-align: right;\n  right: 7px;\n  top: 9px;\n  opacity: 0;\n  transition: opacity 0.2s;\n  height: 1.5rem;\n  width: 1.5rem;\n}\n.col-menu .dropdown-toggle {\n  display: block;\n  width: 100%;\n  height: 100%;\n  padding: 0 1rem 0.25rem 0;\n  background-color: #1aa0d8;\n  transition: background-color 0.2s;\n  color: white;\n  border: none;\n}\n.col-menu .dropdown-toggle:disabled {\n  opacity: 0.65;\n}\n.col-menu .dropdown-toggle:hover {\n  background-color: #157eaa;\n}\n.col-menu .dropdown-toggle:after {\n  margin-left: 0.5rem;\n  margin-right: 0.55rem;\n}\n.col-menu.open {\n  opacity: 1;\n}\n.multi-result + .multi-result {\n  margin-top: 0.5rem;\n}\n.ico-col-sort {\n  position: relative;\n  display: inline-block;\n  opacity: 0.45;\n  color: #000;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.66);\n  transition: opacity 0.2s;\n}\n.ico-col-sort i {\n  display: inline-block;\n  font-family: Verdana, sans-serif;\n  font-size: 8px;\n  line-height: 9px;\n  font-weight: normal;\n  font-style: normal;\n  vertical-align: top;\n}\n.ico-col-sort i:nth-child(1) {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.ico-col-sort i:nth-child(2) {\n  position: absolute;\n  bottom: -1px;\n  left: 0;\n}\n.ico-col-sort i:nth-child(3) {\n  display: block;\n  font-size: 12px;\n  line-height: 18px;\n  padding-left: 0.5em;\n}\n.tbl-msg {\n  padding: 24px;\n  font-size: 18px;\n  text-align: center;\n  color: #8a8a8a;\n}\n.tbl-msg p {\n  margin: 0;\n}\n.cell-list {\n  margin-top: -0.35rem;\n  margin-bottom: -0.3rem;\n  font-size: 13px;\n}\n.cell-list small {\n  font-size: 90%;\n}\n.cell-list-item {\n  padding-top: 0.5em;\n  padding-bottom: 0.5em;\n}\n.cell-list-extended {\n  font-size: 0;\n  opacity: 0;\n  transform: scaleY(0);\n  transform-origin: 0 0;\n  transition: font-size 0.4s, opacity 0.4s, transform 0.4s;\n}\n.cell-list-extended.is-visible {\n  font-size: 13px;\n  opacity: 1;\n  transform: scaleY(1);\n}\n.cell-list-extended .cell-list-item {\n  border-top: 1px dotted rgba(0, 0, 0, 0.1);\n}\n.cell-list-item--extended {\n  border-top: 1px dotted rgba(0, 0, 0, 0.1);\n  font-size: 0;\n  opacity: 0;\n  transform: scaleY(0);\n  transform-origin: 0 0;\n  transition: font-size 0.3s, opacity 0.3s, transform 0.3s;\n}\n.cell-list-items.show-all .cell-list-item--extended {\n  font-size: 13px;\n  opacity: 1;\n  transform: scaleY(1);\n}\n.cell-list-expand-toggle {\n  cursor: pointer;\n}\n.cell-list-expand-toggle .icon {\n  transform-origin: 50% 45%;\n  transition: transform 0.4s;\n}\n.cell-list-expand-toggle.is-open .icon {\n  transform: rotate(180deg);\n}\n.space-right {\n  margin-right: 0.5em;\n}\n.ico-col-sort {\n  position: relative;\n  display: inline-block;\n  opacity: 0;\n  color: rgba(0, 0, 0, 0.5);\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.66);\n  transition: opacity 0.2s, color 0.2s;\n}\n.ico-col-sort i {\n  font-style: normal;\n  font-size: 8px;\n  font-weight: normal;\n  font-family: Verdana, sans-serif;\n}\n.ico-col-sort i:nth-child(1) {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.ico-col-sort i:nth-child(2) {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n.ico-col-sort i:nth-child(3) {\n  font-size: 12px;\n  padding-left: 0.5em;\n}\n.is-sorted--asc .ico-col-sort--asc,\n.is-sorted--desc .ico-col-sort--desc {\n  opacity: 0.9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsL2RldmVsL3R1bS9uZzItcGFjay9wcm9qZWN0cy9uZzItcGFjay9zcmMvbGliL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvbmcyLXBhY2svc3JjL2xpYi90YWJsZS90YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrR0E7RUFDRSxjQUFBO0FDakdGO0FEbUdFO0VBQ0UsZ0JBQUE7QUNqR0o7QURvR0U7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBQ2xHSjtBRHFHRTtFQUNFLGdCQUFBO0FDbkdKO0FEc0dFO0VBQ0Usa0JBQUE7QUNwR0o7QUR1R0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7QUNyR0o7QUR5R0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUN0R0Y7QUR5R0E7RUFDRSxTQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBbkRxQztFQW9EckMsc0NBbkRnQztFQW9EaEMsZ0JBQUE7QUN0R0Y7QUR3R0U7RUFDRSxtQ0FBQTtBQ3RHSjtBRHlHRTtFQUNFLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkE5RG1DO0VBK0RuQyxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkZBQUE7QUN2R0o7QUR5R0k7RUFDRSx1Q0FuRTRCO0FDcENsQztBRDRHTTtFQUNFLFVBQUE7QUMxR1I7QUQrR0U7RUFDRSxXQUFBO0FDN0dKO0FEZ0hFO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUM5R0o7QURpSEU7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGtFQUFBO0VBQ0EsbUJBQUE7QUMvR0o7QURpSEk7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0FDL0dOO0FEa0hJO0VBQ0UsYUFBQTtBQ2hITjtBRG9IRTtFQUNFLDhCQUFBO0VBQ0EsOENBQUE7RUFDQSwrQ0FBQTtBQ2xISjtBRHFIRTtFQUNFLGlDQWhIOEI7RUFpSDlCLHVCQUFBO0FDbkhKO0FEc0hFOztFQUVFLGtCQUFBO0VBQ0Esb0JBM0hhO0VBNEhiLHFCQTVIYTtFQTZIYixxQkEzSDhCO0VBNEg5Qix5QkFBQTtFQUNBLG1CQUFBO0FDcEhKO0FEd0hJO0VBQ0UsZUFBQTtBQ3RITjtBRHdITTtFQUNFLGdCQUFBO0FDdEhSO0FEMEhJO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDeEhOO0FEMkhJO0VBQ0Usc0JBQUE7RUFDQSx3Q0FBQTtBQ3pITjtBRDRISTtFQUNFLDJDQUFBO0FDMUhOO0FEK0hNO0VBQ0UsNEJBNUorQjtBQytCdkM7QURnSU07RUFDRSx1Q0EvSjBCO0VBZ0sxQiw0QkFqSytCO0FDbUN2QztBRG1JRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0Esb0NBQUE7QUNqSUo7QURvSUU7RUFDRSxtQkFBQTtBQ2xJSjtBRHFJRTtFQUNFLG1CQUFBO0FDbklKO0FEc0lFO0VBQ0UsMENBQUE7QUNwSUo7QUR1SUU7RUFDRSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtBQ3JJSjtBRHVJSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtBQ3JJTjtBRHdJSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFVBQUE7RUFDQSxxQ0FBQTtBQ3RJTjtBRDJJQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOENBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQ3hJRjtBRDBJRTtFQUNFLDBCQUFBO0FDeElKO0FENElBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsVUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUN6SUY7QUQySUU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ3pJSjtBRDJJSTtFQUNFLGFBQUE7QUN6SU47QUQ0SUk7RUFDRSx5QkFBQTtBQzFJTjtBRDZJSTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUMzSU47QUQrSUU7RUFDRSxVQUFBO0FDN0lKO0FEb0pFO0VBQ0Usa0JBQUE7QUNqSko7QURzSkE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSw4Q0FBQTtFQUNBLHdCQUFBO0FDbkpGO0FEcUpFO0VBQ0UscUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ25KSjtBRHFKSTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUNuSk47QURzSkk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0FDcEpOO0FEdUpJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDckpOO0FEMkpBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUN4SkY7QUQwSkU7RUFDRSxTQUFBO0FDeEpKO0FENkpBO0VBQ0Usb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUMxSkY7QUQ0SkU7RUFDRSxjQUFBO0FDMUpKO0FEK0pBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQzVKRjtBRCtKQTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdEQUFBO0FDNUpGO0FEOEpFO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQzVKSjtBRCtKRTtFQUNFLHlDQUFBO0FDN0pKO0FEaUtBO0VBQ0UseUNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSx3REFBQTtBQzlKRjtBRGdLRTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7QUM5Sko7QURrS0E7RUFDRSxlQUFBO0FDL0pGO0FEaUtFO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtBQy9KSjtBRG9LSTtFQUNFLHlCQUFBO0FDbEtOO0FEd0tBO0VBQ0UsbUJBQUE7QUNyS0Y7QUQwS0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsOENBQUE7RUFDQSxvQ0FBQTtBQ3ZLRjtBRHlLRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUN2S0o7QUQwS0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FDeEtKO0FEMktFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQ3pLSjtBRDRLRTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQzFLSjtBRDhLQTs7RUFFRSxZQUFBO0FDM0tGIiwiZmlsZSI6InByb2plY3RzL25nMi1wYWNrL3NyYy9saWIvdGFibGUvdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAkX2NvbG9yLWJsdWU6ICMzMDcwYjM7XG5cbiRfY29sb3ItYmx1ZWdyYXktYmFzZTogI2JlYzdjZjtcbiRfY29sb3ItYmx1ZTogcmdiYShkYXJrZW4oc2F0dXJhdGUoJF9jb2xvci1ibHVlZ3JheS1iYXNlLCAxNSUpLCAyMi41JSksIDEpO1xuJF9jb2xvci1ibHVlOiAjMWFhMGQ4O1xuXG4kX2NvbG9yLWRhcmtncmVlbi1iYXNlOiAjMTA3ZTY0O1xuLy8gZGVzYXR1cmF0ZSgkX2NvbG9yLWRhcmtncmVlbi1iYXNlLCA1MCUpO1xuXG4kX2NvbG9yLWJsdWVncmF5LWJhc2U6IGxpZ2h0ZW4oZGVzYXR1cmF0ZSgkX2NvbG9yLWRhcmtncmVlbi1iYXNlLCA1MCUpLCA1NSUpO1xuXG5cbi8vICRfY29sb3Itb3JhbmdlOiAjZTM3MjIyO1xuLy8gJF9jb2xvci1vcmFuZ2U6ICNkMWExNDc7XG4kX2NvbG9yLW9yYW5nZTogI2ZjNTkxZjtcblxuLy8gJF9jb2xvci1ncmVlbjogI2EyYWQwMDtcbiRfY29sb3ItZ3JlZW46ICM4MGFjNmU7XG4kX2NvbG9yLWdyZWVuOiAjMDBhNzUxO1xuXG4vLyAkX2NvbG9yLXJlZDogI0UzNEEyMjtcbiRfY29sb3ItcmVkOiAjYzg1MTY2O1xuXG4kX2NvbG9yLXBpbms6ICNGRUYyRjA7XG5cbiRfY29sb3ItZ3JheS14LWxpZ2h0OiAjZjFmMWYxO1xuJF9jb2xvci1ncmF5LWxpZ2h0OiAjZTZlNmU2O1xuJF9jb2xvci1ncmF5LWJhc2U6ICNiM2IzYjM7XG4kX2NvbG9yLWdyYXktd2FybTogIzhmOGY4ZjtcbiRfY29sb3ItZ3JheS10ZXh0OiAjOGE4YThhO1xuJF9jb2xvci1ncmF5LWRhcms6ICM3MzczNzM7XG4kX2NvbG9yLWdyYXkteC1kYXJrOiAjNGQ0ZDRkO1xuXG5cbiRhcHAtY29sb3JzOiAoXG4gIGJsdWU6IChcbiAgICBsaWdodDogbGlnaHRlbigkX2NvbG9yLWJsdWUsIDEyLjUlKSxcbiAgICBiYXNlOiAkX2NvbG9yLWJsdWUsXG4gICAgZGFyazogZGFya2VuKCRfY29sb3ItYmx1ZSwgMTAlKVxuICApLFxuICBibHVlZ3JheTogKFxuICAgIGxpZ2h0OiBsaWdodGVuKGRlc2F0dXJhdGUoJF9jb2xvci1ibHVlZ3JheS1iYXNlLCAyMCUpLCA3LjUlKSxcbiAgICBiYXNlOiBsaWdodGVuKGRlc2F0dXJhdGUoJF9jb2xvci1ibHVlZ3JheS1iYXNlLCAxNSUpLCAyJSksXG4gICAgbWVkaXVtOiBsaWdodGVuKGRlc2F0dXJhdGUoJF9jb2xvci1kYXJrZ3JlZW4tYmFzZSwgNjAlKSwgMzAlKSxcbiAgICBkYXJrOiBsaWdodGVuKGRlc2F0dXJhdGUoJF9jb2xvci1kYXJrZ3JlZW4tYmFzZSwgNjAlKSwgMjAlKSAvLyM3ODg0OGVcbiAgKSxcbiAgYmx1ZWdyZWVuOiAoXG4gICAgbGlnaHQ6IGxpZ2h0ZW4oJF9jb2xvci1kYXJrZ3JlZW4tYmFzZSwgMTIuNSUpLFxuICAgIGJhc2U6ICRfY29sb3ItZGFya2dyZWVuLWJhc2UsXG4gICAgZGFyazogZGFya2VuKCRfY29sb3ItZGFya2dyZWVuLWJhc2UsIDEwJSlcbiAgKSxcbiAgb3JhbmdlOiAoXG4gICAgbGlnaHQ6IGxpZ2h0ZW4oJF9jb2xvci1vcmFuZ2UsIDEyLjUlKSxcbiAgICBiYXNlOiAkX2NvbG9yLW9yYW5nZSxcbiAgICBkYXJrOiBkYXJrZW4oJF9jb2xvci1vcmFuZ2UsIDEwJSlcbiAgKSxcbiAgZ3JlZW46IChcbiAgICBsaWdodDogbGlnaHRlbigkX2NvbG9yLWdyZWVuLCA3LjUlKSxcbiAgICBiYXNlOiAkX2NvbG9yLWdyZWVuLFxuICAgIGRhcms6IGRhcmtlbigkX2NvbG9yLWdyZWVuLCAxMCUpXG4gICksXG4gIHJlZDogKFxuICAgIGxpZ2h0OiBsaWdodGVuKCRfY29sb3ItcmVkLCAxMi41JSksXG4gICAgYmFzZTogJF9jb2xvci1yZWQsXG4gICAgZGFyazogZGFya2VuKCRfY29sb3ItcmVkLCAxMCUpXG4gICksXG4gIHBpbms6IChcbiAgICBsaWdodDogbGlnaHRlbigkX2NvbG9yLXBpbmssIDEyLjUlKSxcbiAgICBiYXNlOiAkX2NvbG9yLXBpbmssXG4gICAgZGFyazogZGFya2VuKCRfY29sb3ItcGluaywgMTAlKVxuICApLFxuICBncmF5OiAoXG4gICAgeC1saWdodDogJF9jb2xvci1ncmF5LXgtbGlnaHQsXG4gICAgbGlnaHQ6ICRfY29sb3ItZ3JheS1saWdodCxcbiAgICBiYXNlOiAkX2NvbG9yLWdyYXktYmFzZSxcbiAgICB3YXJtOiAkX2NvbG9yLWdyYXktd2FybSxcbiAgICB0ZXh0OiAkX2NvbG9yLWdyYXktdGV4dCxcbiAgICBkYXJrOiAkX2NvbG9yLWdyYXktZGFyayxcbiAgICB4LWRhcms6ICRfY29sb3ItZ3JheS14LWRhcmtcbiAgKSxcbiAgYmxhY2s6IChcbiAgICBiYXNlOiAjMzMzXG4gIClcbik7XG5cblxuJGNlbGwtcGFkZC1ob3J6OiAwLjVyZW07XG5cbiRyZXN1bHQtdGFibGUtYm9yZGVyLWNvbG9yLWlubmVyOiAjZjBmMGYwO1xuJHJlc3VsdC10YWJsZS1ib3JkZXItY29sb3ItaW5uZXItZGFyazogI2QzZDNkMztcbiRyZXN1bHQtdGFibGUtYm9yZGVyLWNvbG9yLW91dGVyOiBhcHAtY29sb3IoYmx1ZWdyYXkpO1xuXG5cbi8vIHNlZTogaHR0cDovL2Vyc2tpbmVkZXNpZ24uY29tL2Jsb2cvZnJpZW5kbGllci1jb2xvdXItbmFtZXMtc2Fzcy1tYXBzL1xuQGZ1bmN0aW9uIGFwcC1jb2xvcigkY29sb3IsICR0b25lOiAnYmFzZScpIHtcbiAgQHJldHVybiBtYXAtZ2V0KG1hcC1nZXQoJGFwcC1jb2xvcnMsICRjb2xvciksICR0b25lKTtcbn1cblxuLnJlc3VsdHMge1xuICBjb2xvcjogYXBwLWNvbG9yKGdyYXksIHgtZGFyayk7XG5cbiAgLnBhbmVsLWhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgfVxuXG4gIC5wYW5lbC1ib2R5IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMCAtMXB4O1xuICB9XG5cbiAgLnBhbmVsLWZvb3RlciB7XG4gICAgbWFyZ2luLXRvcDogLTFweDtcbiAgfVxuXG4gIC5wYW5lbC1ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAucmVzdWx0cy10YWJsZS0tbmV3LWdyb3VwLWxheWVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogcmdiYSgjZmZmLCAwLjc1KTtcbiAgfVxufVxuXG4ucmVzdWx0cy10YWJsZS13cmFwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyAvLyBrZWVwcyBkcmFnZ2FibGUgVEggZWxlbXMgaW4gdGhlIHJpZ2h0IHBsYWNlXG4gIG92ZXJmbG93LXg6IHZpc2libGU7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xufVxuXG4ucmVzdWx0cy10YWJsZSB7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgYm9yZGVyLXdpZHRoOiAxcHggMCAwIDFweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXRvcC1jb2xvcjogJHJlc3VsdC10YWJsZS1ib3JkZXItY29sb3ItaW5uZXItZGFyaztcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICRyZXN1bHQtdGFibGUtYm9yZGVyLWNvbG9yLW91dGVyO1xuICBib3gtc2hhZG93OiBub25lO1xuXG4gIHRoZWFkIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKGFwcC1jb2xvcihvcmFuZ2UpLCAwLjU1KTtcbiAgfVxuXG4gIHRoZWFkIHRoIHtcbiAgICBwYWRkaW5nOiAwLjVyZW0gJGNlbGwtcGFkZC1ob3J6O1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcbiAgICBib3JkZXItY29sb3I6ICRyZXN1bHQtdGFibGUtYm9yZGVyLWNvbG9yLWlubmVyLWRhcms7XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgjZmZmLCAwLjc1KSwgaW5zZXQgMXB4IDAgMCByZ2JhKCNmZmYsIDAuNSk7XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAkcmVzdWx0LXRhYmxlLWJvcmRlci1jb2xvci1vdXRlcjtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcblxuICAgICAgLmNvbC1tZW51IHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucGVyc29uLWxpbmstdGgge1xuICAgIHdpZHRoOiAyMHB4O1xuICB9XG5cbiAgLmNvbWJvLXRoIHtcbiAgICB3aWR0aDogMSU7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xuICAgIHBhZGRpbmctbGVmdDogOHB4O1xuICB9XG5cbiAgLmRyYWctY29sdW1uLnVpLXNvcnRhYmxlLWhlbHBlciB7XG4gICAgb3BhY2l0eTogMC45O1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xNXB4KSByb3RhdGUoMWRlZyk7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHJnYmEoZGFya2VuKGFwcC1jb2xvcihibHVlZ3JheSksIDIwJSksIDEpLCAwIDJweCAzcHggcmdiYShibGFjaywgMC43NSk7XG4gICAgYmFja2dyb3VuZDogYXBwLWNvbG9yKGJsdWVncmF5LCBsaWdodCk7XG5cbiAgICAuY29sLWxhYmVsIHtcbiAgICAgIGNvbG9yOiByZ2JhKGJsYWNrLCAwLjk1KTtcbiAgICAgIHRleHQtc2hhZG93OiBub25lO1xuICAgIH1cblxuICAgIC5idG4tZ3JvdXAge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAudWktc29ydGFibGUtcGxhY2Vob2xkZXIge1xuICAgIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKGFwcC1jb2xvcihvcmFuZ2UpLCAwLjg1KSAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgM3B4IDEwcHggcmdiYShibGFjaywgMC41KTtcbiAgfVxuXG4gIHRmb290IHRkIHtcbiAgICBib3JkZXItY29sb3I6ICRyZXN1bHQtdGFibGUtYm9yZGVyLWNvbG9yLW91dGVyO1xuICAgIGJvcmRlci13aWR0aDogMCAxcHggMCAwO1xuICB9XG5cbiAgdGQsXG4gIHRoIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1sZWZ0OiAkY2VsbC1wYWRkLWhvcno7XG4gICAgcGFkZGluZy1yaWdodDogJGNlbGwtcGFkZC1ob3J6O1xuICAgIGJvcmRlci1jb2xvcjogJHJlc3VsdC10YWJsZS1ib3JkZXItY29sb3ItaW5uZXI7XG4gICAgYm9yZGVyLXdpZHRoOiAwIDFweCAxcHggMDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG5cbiAgdGJvZHkge1xuICAgIHRyIHtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGQge1xuICAgICAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gICAgICBib3JkZXItd2lkdGg6IDAgMCAxcHggMDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICAgIH1cblxuICAgIC5jb21iby10ZCAge1xuICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDFweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoYXBwLWNvbG9yKGdyZWVuLCBkYXJrKSwgMC4wNSk7XG4gICAgfVxuXG4gICAgdGQ6bGFzdC1jaGlsZCAge1xuICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJHJlc3VsdC10YWJsZS1ib3JkZXItY29sb3Itb3V0ZXI7XG4gICAgfVxuXG4gICAgdHI6bGFzdC1jaGlsZCB7XG5cbiAgICAgIHRkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHJlc3VsdC10YWJsZS1ib3JkZXItY29sb3ItaW5uZXItZGFyaztcbiAgICAgIH1cblxuICAgICAgdGQ6bGFzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlci1jb2xvci1yaWdodDogJHJlc3VsdC10YWJsZS1ib3JkZXItY29sb3Itb3V0ZXI7XG4gICAgICAgIGJvcmRlci1jb2xvci1ib3R0b206ICRyZXN1bHQtdGFibGUtYm9yZGVyLWNvbG9yLWlubmVyLWRhcms7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmxhYmVsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtMXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjJlbTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKGFwcC1jb2xvcihibHVlZ3JlZW4pLCAwLjc1KTtcbiAgfVxuXG4gIC5sYWJlbC10dW0ge1xuICAgIGJhY2tncm91bmQ6IGFwcC1jb2xvcihibHVlLCBkYXJrKTtcbiAgfVxuXG4gIC5idG4tdG9nZ2xlIHtcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuICB9XG5cbiAgdGQuaXMtc29ydGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKGFwcC1jb2xvcihibHVlZ3JheSksIDAuMik7XG4gIH1cblxuICB0aC5pcy1zb3J0ZWQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItY29sb3I6IHJnYmEoZGFya2VuKGFwcC1jb2xvcihibHVlZ3JheSksIDEwJSksIDAuNzUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oYXBwLWNvbG9yKGJsdWVncmF5LCBkYXJrKSwgNDIlKTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IC0xcHg7XG4gICAgICByaWdodDogLTFweDtcbiAgICAgIGxlZnQ6IC0xcHg7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoZGFya2VuKGFwcC1jb2xvcihibHVlZ3JheSksIDEwJSksIDAuNCk7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogLTFweDtcbiAgICAgIGJvdHRvbTogLTFweDtcbiAgICAgIGxlZnQ6IC0xcHg7XG4gICAgICB3aWR0aDogMXB4O1xuICAgICAgYmFja2dyb3VuZDogcmdiYShkYXJrZW4oYXBwLWNvbG9yKGJsdWVncmF5KSwgMTAlKSwgMC43NSk7XG4gICAgfVxuICB9XG59XG5cbi5jb2wtbGFiZWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogNXB4IDBweCA1cHggMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKHdoaXRlLCAwLjY2KTtcbiAgY29sb3I6IHJnYmEoYmxhY2ssIDAuNSk7IC8vIE5PVEU6IG1pZ2h0IG5lZWQgdG8gbWFrZSB0aGlzIGEgc29saWQgY29sb3JcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzO1xuXG4gIC5pcy1zb3J0ZWQgJiB7XG4gICAgY29sb3I6IHJnYmEoYmxhY2ssIDAuNjYpO1xuICB9XG59XG5cbi5jb2wtbWVudSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHJpZ2h0OiA3cHg7XG4gIHRvcDogOXB4O1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gIGhlaWdodDogMS41cmVtO1xuICB3aWR0aDogMS41cmVtO1xuXG4gIC5kcm9wZG93bi10b2dnbGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAwIDFyZW0gLjI1cmVtIDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXBwLWNvbG9yKGJsdWUsIGJhc2UpO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiBub25lO1xuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBvcGFjaXR5OiAwLjY1O1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYXBwLWNvbG9yKGJsdWUsIGRhcmspO1xuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgbWFyZ2luLWxlZnQ6IC41cmVtO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAuNTVyZW07XG4gICAgfVxuICB9XG5cbiAgJi5vcGVuIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cblxuLm11bHRpLXJlc3VsdCB7XG5cbiAgJiArIC5tdWx0aS1yZXN1bHQge1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgfVxufVxuXG5cbi5pY28tY29sLXNvcnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3BhY2l0eTogMC40NTtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LDI1NSwyNTUsMC42Nik7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcblxuICBpIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiA4cHg7XG4gICAgbGluZS1oZWlnaHQ6IDlweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuXG4gICAgJjpudGgtY2hpbGQoMSkge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICB9XG5cbiAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IC0xcHg7XG4gICAgICBsZWZ0OiAwO1xuICAgIH1cblxuICAgICY6bnRoLWNoaWxkKDMpIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDAuNWVtO1xuICAgIH1cbiAgfVxufVxuXG5cbi50YmwtbXNnIHtcbiAgcGFkZGluZzogMjRweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjOGE4YThhO1xuXG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG5cbi5jZWxsLWxpc3Qge1xuICBtYXJnaW4tdG9wOiAtMC4zNXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogLTAuM3JlbTtcbiAgZm9udC1zaXplOiAxM3B4O1xuXG4gIHNtYWxsIHtcbiAgICBmb250LXNpemU6IDkwJTtcbiAgfVxufVxuXG4vLyB1c2UgZW1zIGZvciBwYWRkaW5nIHNvIHRoYXQgdGhpcyBiZWNvbWVzICcwJyB3aGVuIHRoZSBlbGVtZW50IGlzIHNjYWxlZFxuLmNlbGwtbGlzdC1pdGVtIHtcbiAgcGFkZGluZy10b3A6IDAuNWVtO1xuICBwYWRkaW5nLWJvdHRvbTogMC41ZW07XG59XG5cbi5jZWxsLWxpc3QtZXh0ZW5kZWQge1xuICBmb250LXNpemU6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDApO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIHRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjRzLCBvcGFjaXR5IDAuNHMsIHRyYW5zZm9ybSAwLjRzO1xuXG4gICYuaXMtdmlzaWJsZSB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG4gIH1cblxuICAuY2VsbC1saXN0LWl0ZW0ge1xuICAgIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgcmdiYShibGFjaywgMC4xKTtcbiAgfVxufVxuXG4uY2VsbC1saXN0LWl0ZW0tLWV4dGVuZGVkIHtcbiAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCByZ2JhKGJsYWNrLCAwLjEpO1xuICBmb250LXNpemU6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDApO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XG4gIHRyYW5zaXRpb246IGZvbnQtc2l6ZSAwLjNzLCBvcGFjaXR5IDAuM3MsIHRyYW5zZm9ybSAwLjNzO1xuXG4gIC5jZWxsLWxpc3QtaXRlbXMuc2hvdy1hbGwgJiB7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG4gIH1cbn1cblxuLmNlbGwtbGlzdC1leHBhbmQtdG9nZ2xlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gIC5pY29uIHtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNDUlO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzO1xuICB9XG5cbiAgJi5pcy1vcGVuIHtcblxuICAgIC5pY29uIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgfVxuICB9XG59XG5cblxuLnNwYWNlLXJpZ2h0IHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbn1cblxuXG5cbi5pY28tY29sLXNvcnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3BhY2l0eTogMDtcbiAgY29sb3I6IHJnYmEoYmxhY2ssIDAuNSk7XG4gIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEod2hpdGUsIDAuNjYpO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMsIGNvbG9yIDAuMnM7XG5cbiAgaSB7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIH1cblxuICBpOm50aC1jaGlsZCgxKSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICB9XG5cbiAgaTpudGgtY2hpbGQoMikge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgfVxuXG4gIGk6bnRoLWNoaWxkKDMpIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcbiAgfVxufVxuXG4uaXMtc29ydGVkLS1hc2MgLmljby1jb2wtc29ydC0tYXNjLFxuLmlzLXNvcnRlZC0tZGVzYyAuaWNvLWNvbC1zb3J0LS1kZXNjIHtcbiAgb3BhY2l0eTogMC45O1xufVxuIiwiLnJlc3VsdHMge1xuICBjb2xvcjogIzRkNGQ0ZDtcbn1cbi5yZXN1bHRzIC5wYW5lbC1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAwO1xufVxuLnJlc3VsdHMgLnBhbmVsLWJvZHkge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgLTFweDtcbn1cbi5yZXN1bHRzIC5wYW5lbC1mb290ZXIge1xuICBtYXJnaW4tdG9wOiAtMXB4O1xufVxuLnJlc3VsdHMgLnBhbmVsLWJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucmVzdWx0cyAucmVzdWx0cy10YWJsZS0tbmV3LWdyb3VwLWxheWVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG59XG5cbi5yZXN1bHRzLXRhYmxlLXdyYXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93LXg6IHZpc2libGU7XG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xufVxuXG4ucmVzdWx0cy10YWJsZSB7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgYm9yZGVyLXdpZHRoOiAxcHggMCAwIDFweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2QzZDNkMztcbiAgYm9yZGVyLWxlZnQtY29sb3I6IGFwcC1jb2xvcihibHVlZ3JheSk7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG4ucmVzdWx0cy10YWJsZSB0aGVhZCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjUyLCA4OSwgMzEsIDAuNTUpO1xufVxuLnJlc3VsdHMtdGFibGUgdGhlYWQgdGgge1xuICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtO1xuICBib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogI2QzZDNkMztcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpLCBpbnNldCAxcHggMCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cbi5yZXN1bHRzLXRhYmxlIHRoZWFkIHRoOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQtY29sb3I6IGFwcC1jb2xvcihibHVlZ3JheSk7XG59XG4ucmVzdWx0cy10YWJsZSB0aGVhZCB0aDpob3ZlciAuY29sLW1lbnUge1xuICBvcGFjaXR5OiAxO1xufVxuLnJlc3VsdHMtdGFibGUgLnBlcnNvbi1saW5rLXRoIHtcbiAgd2lkdGg6IDIwcHg7XG59XG4ucmVzdWx0cy10YWJsZSAuY29tYm8tdGgge1xuICB3aWR0aDogMSU7XG4gIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG4ucmVzdWx0cy10YWJsZSAuZHJhZy1jb2x1bW4udWktc29ydGFibGUtaGVscGVyIHtcbiAgb3BhY2l0eTogMC45O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTE1cHgpIHJvdGF0ZSgxZGVnKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICM5YWIxYWIsIDAgMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBiYWNrZ3JvdW5kOiAjZTVlOGU3O1xufVxuLnJlc3VsdHMtdGFibGUgLmRyYWctY29sdW1uLnVpLXNvcnRhYmxlLWhlbHBlciAuY29sLWxhYmVsIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45NSk7XG4gIHRleHQtc2hhZG93OiBub25lO1xufVxuLnJlc3VsdHMtdGFibGUgLmRyYWctY29sdW1uLnVpLXNvcnRhYmxlLWhlbHBlciAuYnRuLWdyb3VwIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5yZXN1bHRzLXRhYmxlIC51aS1zb3J0YWJsZS1wbGFjZWhvbGRlciB7XG4gIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTIsIDg5LCAzMSwgMC44NSkgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAzcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG4ucmVzdWx0cy10YWJsZSB0Zm9vdCB0ZCB7XG4gIGJvcmRlci1jb2xvcjogYXBwLWNvbG9yKGJsdWVncmF5KTtcbiAgYm9yZGVyLXdpZHRoOiAwIDFweCAwIDA7XG59XG4ucmVzdWx0cy10YWJsZSB0ZCxcbi5yZXN1bHRzLXRhYmxlIHRoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcbiAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICBib3JkZXItY29sb3I6ICNmMGYwZjA7XG4gIGJvcmRlci13aWR0aDogMCAxcHggMXB4IDA7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4ucmVzdWx0cy10YWJsZSB0Ym9keSB0ciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yZXN1bHRzLXRhYmxlIHRib2R5IHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2VlZTtcbn1cbi5yZXN1bHRzLXRhYmxlIHRib2R5IHRkIHtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgYm9yZGVyLXdpZHRoOiAwIDAgMXB4IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG4ucmVzdWx0cy10YWJsZSB0Ym9keSAuY29tYm8tdGQge1xuICBib3JkZXItbGVmdC13aWR0aDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDExNiwgNTYsIDAuMDUpO1xufVxuLnJlc3VsdHMtdGFibGUgdGJvZHkgdGQ6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGFwcC1jb2xvcihibHVlZ3JheSk7XG59XG4ucmVzdWx0cy10YWJsZSB0Ym9keSB0cjpsYXN0LWNoaWxkIHRkIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2QzZDNkMztcbn1cbi5yZXN1bHRzLXRhYmxlIHRib2R5IHRyOmxhc3QtY2hpbGQgdGQ6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1jb2xvci1yaWdodDogYXBwLWNvbG9yKGJsdWVncmF5KTtcbiAgYm9yZGVyLWNvbG9yLWJvdHRvbTogI2QzZDNkMztcbn1cbi5yZXN1bHRzLXRhYmxlIC5sYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMXB4O1xuICBwYWRkaW5nLWJvdHRvbTogMC4yZW07XG4gIGJhY2tncm91bmQ6IHJnYmEoMTYsIDEyNiwgMTAwLCAwLjc1KTtcbn1cbi5yZXN1bHRzLXRhYmxlIC5sYWJlbC10dW0ge1xuICBiYWNrZ3JvdW5kOiAjMTU3ZWFhO1xufVxuLnJlc3VsdHMtdGFibGUgLmJ0bi10b2dnbGUge1xuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xufVxuLnJlc3VsdHMtdGFibGUgdGQuaXMtc29ydGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTIsIDIyMSwgMjE5LCAwLjIpO1xufVxuLnJlc3VsdHMtdGFibGUgdGguaXMtc29ydGVkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItY29sb3I6IHJnYmEoMTgzLCAxOTksIDE5NSwgMC43NSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMWVhZTc7XG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XG59XG4ucmVzdWx0cy10YWJsZSB0aC5pcy1zb3J0ZWQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xcHg7XG4gIHJpZ2h0OiAtMXB4O1xuICBsZWZ0OiAtMXB4O1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxODMsIDE5OSwgMTk1LCAwLjQpO1xufVxuLnJlc3VsdHMtdGFibGUgdGguaXMtc29ydGVkOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xcHg7XG4gIGJvdHRvbTogLTFweDtcbiAgbGVmdDogLTFweDtcbiAgd2lkdGg6IDFweDtcbiAgYmFja2dyb3VuZDogcmdiYSgxODMsIDE5OSwgMTk1LCAwLjc1KTtcbn1cblxuLmNvbC1sYWJlbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA1cHggMHB4IDVweCAwO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42Nik7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycztcbn1cbi5pcy1zb3J0ZWQgLmNvbC1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjYpO1xufVxuXG4uY29sLW1lbnUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICByaWdodDogN3B4O1xuICB0b3A6IDlweDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgd2lkdGg6IDEuNXJlbTtcbn1cbi5jb2wtbWVudSAuZHJvcGRvd24tdG9nZ2xlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMXJlbSAwLjI1cmVtIDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYWEwZDg7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycztcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IG5vbmU7XG59XG4uY29sLW1lbnUgLmRyb3Bkb3duLXRvZ2dsZTpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNjU7XG59XG4uY29sLW1lbnUgLmRyb3Bkb3duLXRvZ2dsZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxNTdlYWE7XG59XG4uY29sLW1lbnUgLmRyb3Bkb3duLXRvZ2dsZTphZnRlciB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gIG1hcmdpbi1yaWdodDogMC41NXJlbTtcbn1cbi5jb2wtbWVudS5vcGVuIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLm11bHRpLXJlc3VsdCArIC5tdWx0aS1yZXN1bHQge1xuICBtYXJnaW4tdG9wOiAwLjVyZW07XG59XG5cbi5pY28tY29sLXNvcnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgb3BhY2l0eTogMC40NTtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42Nik7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcbn1cbi5pY28tY29sLXNvcnQgaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBsaW5lLWhlaWdodDogOXB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG4uaWNvLWNvbC1zb3J0IGk6bnRoLWNoaWxkKDEpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG59XG4uaWNvLWNvbC1zb3J0IGk6bnRoLWNoaWxkKDIpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC0xcHg7XG4gIGxlZnQ6IDA7XG59XG4uaWNvLWNvbC1zb3J0IGk6bnRoLWNoaWxkKDMpIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gIHBhZGRpbmctbGVmdDogMC41ZW07XG59XG5cbi50YmwtbXNnIHtcbiAgcGFkZGluZzogMjRweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjOGE4YThhO1xufVxuLnRibC1tc2cgcCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmNlbGwtbGlzdCB7XG4gIG1hcmdpbi10b3A6IC0wLjM1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAtMC4zcmVtO1xuICBmb250LXNpemU6IDEzcHg7XG59XG4uY2VsbC1saXN0IHNtYWxsIHtcbiAgZm9udC1zaXplOiA5MCU7XG59XG5cbi5jZWxsLWxpc3QtaXRlbSB7XG4gIHBhZGRpbmctdG9wOiAwLjVlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNWVtO1xufVxuXG4uY2VsbC1saXN0LWV4dGVuZGVkIHtcbiAgZm9udC1zaXplOiAwO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2Zvcm06IHNjYWxlWSgwKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xuICB0cmFuc2l0aW9uOiBmb250LXNpemUgMC40cywgb3BhY2l0eSAwLjRzLCB0cmFuc2Zvcm0gMC40cztcbn1cbi5jZWxsLWxpc3QtZXh0ZW5kZWQuaXMtdmlzaWJsZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMSk7XG59XG4uY2VsbC1saXN0LWV4dGVuZGVkIC5jZWxsLWxpc3QtaXRlbSB7XG4gIGJvcmRlci10b3A6IDFweCBkb3R0ZWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uY2VsbC1saXN0LWl0ZW0tLWV4dGVuZGVkIHtcbiAgYm9yZGVyLXRvcDogMXB4IGRvdHRlZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGZvbnQtc2l6ZTogMDtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZVkoMCk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgdHJhbnNpdGlvbjogZm9udC1zaXplIDAuM3MsIG9wYWNpdHkgMC4zcywgdHJhbnNmb3JtIDAuM3M7XG59XG4uY2VsbC1saXN0LWl0ZW1zLnNob3ctYWxsIC5jZWxsLWxpc3QtaXRlbS0tZXh0ZW5kZWQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zZm9ybTogc2NhbGVZKDEpO1xufVxuXG4uY2VsbC1saXN0LWV4cGFuZC10b2dnbGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uY2VsbC1saXN0LWV4cGFuZC10b2dnbGUgLmljb24ge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNDUlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cztcbn1cbi5jZWxsLWxpc3QtZXhwYW5kLXRvZ2dsZS5pcy1vcGVuIC5pY29uIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLnNwYWNlLXJpZ2h0IHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbn1cblxuLmljby1jb2wtc29ydCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBvcGFjaXR5OiAwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjYpO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMsIGNvbG9yIDAuMnM7XG59XG4uaWNvLWNvbC1zb3J0IGkge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LWZhbWlseTogVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cbi5pY28tY29sLXNvcnQgaTpudGgtY2hpbGQoMSkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cbi5pY28tY29sLXNvcnQgaTpudGgtY2hpbGQoMikge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbn1cbi5pY28tY29sLXNvcnQgaTpudGgtY2hpbGQoMykge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmctbGVmdDogMC41ZW07XG59XG5cbi5pcy1zb3J0ZWQtLWFzYyAuaWNvLWNvbC1zb3J0LS1hc2MsXG4uaXMtc29ydGVkLS1kZXNjIC5pY28tY29sLXNvcnQtLWRlc2Mge1xuICBvcGFjaXR5OiAwLjk7XG59Il19 */");

/***/ }),

/***/ "./projects/ng2-pack/src/lib/table/table.component.ts":
/*!************************************************************!*\
  !*** ./projects/ng2-pack/src/lib/table/table.component.ts ***!
  \************************************************************/
/*! exports provided: TableDefaults, tableDefaultValues, TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDefaults", function() { return TableDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableDefaultValues", function() { return tableDefaultValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_i18n_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/i18n.service */ "./projects/ng2-pack/src/lib/services/i18n.service.ts");
/* harmony import */ var _table_init_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-init.service */ "./projects/ng2-pack/src/lib/table/table-init.service.ts");
/* harmony import */ var _table_sorting_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table-sorting.service */ "./projects/ng2-pack/src/lib/table/table-sorting.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





const TableDefaults = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('TableDefaults');
const tableDefaultValues = {
    reorderingEnabled: true,
    rowsSortingMode: 'default',
    inlineEditingEnabled: false,
    changeColumnVisibility: true,
    language: 'en',
};
let TableComponent = class TableComponent {
    constructor(elementRef, tableSortingService, tableInitService, i18nService, defaults) {
        this.elementRef = elementRef;
        this.tableSortingService = tableSortingService;
        this.tableInitService = tableInitService;
        this.i18nService = i18nService;
        this.addColumn = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.removeColumn = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.sortColumn = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        // @Output() addingColumn: EventEmitter<number> = new EventEmitter<number>();
        this.reorderColumns = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.rowClick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.visibleColumnsChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.editCell = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.toggleSubfield = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this.customTemplate = false;
        this.reorderingEnabled = defaults.reorderingEnabled;
        this.rowsSortingMode = defaults.rowsSortingMode;
        this.inlineEditingEnabled = defaults.inlineEditingEnabled;
        this.changeColumnVisibility = defaults.changeColumnVisibility;
        this.language = defaults.language;
    }
    set columnsConfig(columnsConfig) {
        this._columnsConfig = columnsConfig;
        this.columnsLookup = this.tableInitService.columnsConfig2Lookup(this.columnsConfig);
    }
    set visibleColumns(visibleColumns) {
        this._visibleColumns = visibleColumns;
        this.visibleColumnsChange.emit(this._visibleColumns);
    }
    // @Input() columnsForAddingFn: (availableColumns: ColumnConfig[]) => any[] = (id) => id
    set language(language) {
        this.i18nService.language = language;
    }
    ngOnChanges(arg) {
        this.initializeDefaults();
        this.initialSort();
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.customTemplate = this.elementRef.nativeElement.children.length !== 1;
        });
    }
    get visibleColumns() {
        return this._visibleColumns;
    }
    get columnsConfig() {
        return this._columnsConfig;
    }
    isSorted(column, direction) {
        if (!column) {
            return;
        }
        let isSorted = column.config.id === this.sortedColumnName;
        if (!direction) {
            return isSorted;
        }
        else {
            let directionMatch = column.currentSortDirection === direction;
            return isSorted && directionMatch;
        }
    }
    onRowClicked(rowClickEvent) {
        this.rowClick.emit(rowClickEvent);
    }
    onSortColumn(sortEvent) {
        this.sortColumn.emit(sortEvent);
        if (this.rowsSortingMode === 'default') {
            this.sortRows(this.rows, sortEvent);
        }
    }
    onAddingColumn(index) {
        this.addingColumnIndex = index;
        // TODO: this should emit also when adding to the last column!
        // this.addingColumn.emit(index);
    }
    onReorderColumns(reorderColumnsEvent) {
        this.reorderColumns.emit(reorderColumnsEvent);
    }
    onToggleSubfield(toggleSubfieldEvent) {
        this.toggleSubfield.emit(toggleSubfieldEvent);
    }
    sortRows(rows, sortEvent) {
        let { column, direction } = sortEvent;
        this.rows = this.tableSortingService.sort(rows, this.columnsLookup[column]);
        this.sortedColumnName = column;
        return this.rows;
    }
    initialSort() {
        if (!this.initialSortColumn || !this.rows) {
            return;
        }
        let columnName = this.initialSortColumn.slice(1);
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
        let columnState = this.columnsLookup[columnName];
        if (columnState) {
            sortDirection = sortDirection || columnState.initialSortDirection;
            columnState.currentSortDirection = sortDirection;
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
    initializeDefaults() {
        const isWithoutData = (typeof this.rows === 'undefined' || this.rows.length === 0);
        if (typeof this.columnsConfig === 'undefined' && !isWithoutData) {
            [this.columnsLookup, this._columnsConfig] = this.tableInitService.detectColumnConfiguration(this.rows);
        }
        if (typeof this.visibleColumns === 'undefined' && typeof this.columnsLookup !== 'undefined') {
            this.visibleColumns = Object.keys(this.columnsLookup);
        }
    }
};
TableComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] },
    { type: _table_sorting_service__WEBPACK_IMPORTED_MODULE_3__["TableSortingService"] },
    { type: _table_init_service__WEBPACK_IMPORTED_MODULE_2__["TableInitService"] },
    { type: _services_i18n_service__WEBPACK_IMPORTED_MODULE_1__["I18nService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"], args: [TableDefaults,] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])()
], TableComponent.prototype, "columnsConfig", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])()
], TableComponent.prototype, "visibleColumns", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])()
], TableComponent.prototype, "rows", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])()
], TableComponent.prototype, "reorderingEnabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])()
], TableComponent.prototype, "changeColumnVisibility", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])()
], TableComponent.prototype, "rowsSortingMode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])()
], TableComponent.prototype, "inlineEditingEnabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])()
], TableComponent.prototype, "language", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"])()
], TableComponent.prototype, "initialSortColumn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])()
], TableComponent.prototype, "addColumn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])()
], TableComponent.prototype, "removeColumn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])()
], TableComponent.prototype, "sortColumn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])()
], TableComponent.prototype, "reorderColumns", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])()
], TableComponent.prototype, "rowClick", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])()
], TableComponent.prototype, "visibleColumnsChange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])()
], TableComponent.prototype, "editCell", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"])()
], TableComponent.prototype, "toggleSubfield", void 0);
TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'iw-table',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/ng2-pack/src/lib/table/table.component.html")).default,
        // TODO: enable encapsulation again
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
        providers: [
            { provide: TableDefaults, useValue: tableDefaultValues }
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./table.component.scss */ "./projects/ng2-pack/src/lib/table/table.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"])(TableDefaults))
], TableComponent);



/***/ }),

/***/ "./projects/ng2-pack/src/lib/table/table.module.ts":
/*!*********************************************************!*\
  !*** ./projects/ng2-pack/src/lib/table/table.module.ts ***!
  \*********************************************************/
/*! exports provided: TableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableModule", function() { return TableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.component */ "./projects/ng2-pack/src/lib/table/table.component.ts");
/* harmony import */ var _thead_thead_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thead/thead.component */ "./projects/ng2-pack/src/lib/table/thead/thead.component.ts");
/* harmony import */ var _tbody_tbody_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tbody/tbody.component */ "./projects/ng2-pack/src/lib/table/tbody/tbody.component.ts");
/* harmony import */ var _add_column_add_column_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-column/add-column.component */ "./projects/ng2-pack/src/lib/table/add-column/add-column.component.ts");
/* harmony import */ var _select2_select2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../select2/select2.component */ "./projects/ng2-pack/src/lib/select2/select2.component.ts");
/* harmony import */ var _td_td_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./td/td.component */ "./projects/ng2-pack/src/lib/table/td/td.component.ts");
/* harmony import */ var _th_th_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./th/th.component */ "./projects/ng2-pack/src/lib/table/th/th.component.ts");
/* harmony import */ var _pipes___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../pipes/ */ "./projects/ng2-pack/src/lib/pipes/index.ts");
/* harmony import */ var _pipes_default_value_default_value_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../pipes/default-value/default-value.pipe */ "./projects/ng2-pack/src/lib/pipes/default-value/default-value.pipe.ts");
/* harmony import */ var _pipes_format_column_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pipes/format-column.pipe */ "./projects/ng2-pack/src/lib/table/pipes/format-column.pipe.ts");
/* harmony import */ var _services_i18n_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../services/i18n.service */ "./projects/ng2-pack/src/lib/services/i18n.service.ts");
/* harmony import */ var _table_sorting_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./table-sorting.service */ "./projects/ng2-pack/src/lib/table/table-sorting.service.ts");
/* harmony import */ var _table_init_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./table-init.service */ "./projects/ng2-pack/src/lib/table/table-init.service.ts");
/* harmony import */ var ngx_dropdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-dropdown */ "./node_modules/ngx-dropdown/index.js");
/* harmony import */ var ngx_dropdown__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ngx_dropdown__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");


















console.log({
    imports: [
        _pipes___WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
        ngx_dropdown__WEBPACK_IMPORTED_MODULE_14__["DropdownModule"]
    ],
    declarations: [
        _table_component__WEBPACK_IMPORTED_MODULE_1__["TableComponent"],
        _thead_thead_component__WEBPACK_IMPORTED_MODULE_2__["TheadComponent"],
        _tbody_tbody_component__WEBPACK_IMPORTED_MODULE_3__["TbodyComponent"],
        _add_column_add_column_component__WEBPACK_IMPORTED_MODULE_4__["AddColumnComponent"],
        _select2_select2_component__WEBPACK_IMPORTED_MODULE_5__["Select2Component"],
        _td_td_component__WEBPACK_IMPORTED_MODULE_6__["TdComponent"],
        _th_th_component__WEBPACK_IMPORTED_MODULE_7__["ThComponent"],
        _pipes_format_column_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatColumnPipe"]
    ],
    exports: [
        _table_component__WEBPACK_IMPORTED_MODULE_1__["TableComponent"],
        _thead_thead_component__WEBPACK_IMPORTED_MODULE_2__["TheadComponent"],
        _tbody_tbody_component__WEBPACK_IMPORTED_MODULE_3__["TbodyComponent"],
        _add_column_add_column_component__WEBPACK_IMPORTED_MODULE_4__["AddColumnComponent"],
        _select2_select2_component__WEBPACK_IMPORTED_MODULE_5__["Select2Component"],
        _td_td_component__WEBPACK_IMPORTED_MODULE_6__["TdComponent"],
        _th_th_component__WEBPACK_IMPORTED_MODULE_7__["ThComponent"],
        _pipes_format_column_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatColumnPipe"]
    ],
    providers: [
        _table_sorting_service__WEBPACK_IMPORTED_MODULE_12__["TableSortingService"],
        _table_init_service__WEBPACK_IMPORTED_MODULE_13__["TableInitService"],
        _services_i18n_service__WEBPACK_IMPORTED_MODULE_11__["I18nService"],
        _pipes_default_value_default_value_pipe__WEBPACK_IMPORTED_MODULE_9__["DefaultValuePipe"]
    ]
});
let TableModule = class TableModule {
};
TableModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_16__["NgModule"])({
        imports: [
            _pipes___WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
            ngx_dropdown__WEBPACK_IMPORTED_MODULE_14__["DropdownModule"]
        ],
        declarations: [
            _table_component__WEBPACK_IMPORTED_MODULE_1__["TableComponent"],
            _thead_thead_component__WEBPACK_IMPORTED_MODULE_2__["TheadComponent"],
            _tbody_tbody_component__WEBPACK_IMPORTED_MODULE_3__["TbodyComponent"],
            _add_column_add_column_component__WEBPACK_IMPORTED_MODULE_4__["AddColumnComponent"],
            _select2_select2_component__WEBPACK_IMPORTED_MODULE_5__["Select2Component"],
            _td_td_component__WEBPACK_IMPORTED_MODULE_6__["TdComponent"],
            _th_th_component__WEBPACK_IMPORTED_MODULE_7__["ThComponent"],
            _pipes_format_column_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatColumnPipe"]
        ],
        exports: [
            _table_component__WEBPACK_IMPORTED_MODULE_1__["TableComponent"],
            _thead_thead_component__WEBPACK_IMPORTED_MODULE_2__["TheadComponent"],
            _tbody_tbody_component__WEBPACK_IMPORTED_MODULE_3__["TbodyComponent"],
            _add_column_add_column_component__WEBPACK_IMPORTED_MODULE_4__["AddColumnComponent"],
            _select2_select2_component__WEBPACK_IMPORTED_MODULE_5__["Select2Component"],
            _td_td_component__WEBPACK_IMPORTED_MODULE_6__["TdComponent"],
            _th_th_component__WEBPACK_IMPORTED_MODULE_7__["ThComponent"],
            _pipes_format_column_pipe__WEBPACK_IMPORTED_MODULE_10__["FormatColumnPipe"]
        ],
        providers: [
            _table_sorting_service__WEBPACK_IMPORTED_MODULE_12__["TableSortingService"],
            _table_init_service__WEBPACK_IMPORTED_MODULE_13__["TableInitService"],
            _services_i18n_service__WEBPACK_IMPORTED_MODULE_11__["I18nService"],
            _pipes_default_value_default_value_pipe__WEBPACK_IMPORTED_MODULE_9__["DefaultValuePipe"]
        ]
    })
], TableModule);



/***/ }),

/***/ "./projects/ng2-pack/src/lib/table/tbody/tbody.component.css":
/*!*******************************************************************!*\
  !*** ./projects/ng2-pack/src/lib/table/tbody/tbody.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZzItcGFjay9zcmMvbGliL3RhYmxlL3Rib2R5L3Rib2R5LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./projects/ng2-pack/src/lib/table/tbody/tbody.component.ts":
/*!******************************************************************!*\
  !*** ./projects/ng2-pack/src/lib/table/tbody/tbody.component.ts ***!
  \******************************************************************/
/*! exports provided: TbodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TbodyComponent", function() { return TbodyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _table_init_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../table-init.service */ "./projects/ng2-pack/src/lib/table/table-init.service.ts");
/* harmony import */ var _table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../table.component */ "./projects/ng2-pack/src/lib/table/table.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let TbodyComponent = class TbodyComponent {
    constructor(elementRef, tableInitService, tableComponent) {
        this.elementRef = elementRef;
        this.tableInitService = tableInitService;
        this.rowClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.editCell = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.customTemplate = false;
        this.customCells = [];
        this.cellTemplates = {};
        this.tableComponent = tableComponent;
    }
    set inlineEditingEnabled(isEditable) {
        this.isEditable = isEditable;
    }
    ;
    set rows(rows) {
        this._rows = rows;
    }
    set columnsConfig(columnsConfig) {
        this._columnsConfig = columnsConfig;
    }
    set visibleColumns(visibleColumns) {
        this._visibleColumns = visibleColumns;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            // In our template we have N elements, where N is number of rows.
            // If there is more elements, they must be projected => custom template is used
            this.customTemplate = this.elementRef.nativeElement.children.length > this.rows.length;
        });
    }
    get rows() {
        return this._rows || this.delegateInput('rows', []);
    }
    get columnsConfig() {
        return this._columnsConfig || this.delegateInput('columnsConfig', []);
    }
    ;
    get visibleColumns() {
        return this._visibleColumns || this.delegateInput('visibleColumns', []);
    }
    ;
    get inlineEditingEnabled() {
        return this.isEditable || this.delegateInput('inlineEditingEnabled', false);
    }
    get columnsLookup() {
        let columnsLookup = this._columnsLookup ||
            (this.tableComponent && this.tableComponent.columnsLookup);
        if (!columnsLookup) {
            columnsLookup = this.tableInitService.columnsConfig2Lookup(this.columnsConfig);
            this._columnsLookup = columnsLookup;
        }
        return columnsLookup;
    }
    get changeColumnVisibility() {
        return this.tableComponent.changeColumnVisibility;
    }
    isSorted(column, direction) {
        return this.tableComponent.isSorted(column, direction);
    }
    column(columnName) {
        return this.columnsLookup[columnName];
    }
    onRowClicked(rowIndex, rowObject) {
        this.rowClick.emit({
            rowIndex,
            rowObject
        });
    }
    onEditCell(tdComponent, rowIndex) {
        if (!tdComponent.isChanged || !tdComponent.column) {
            return;
        }
        let editCellEvent = {
            newValue: tdComponent.content,
            column: tdComponent.column.config.id,
            rowObject: tdComponent.row,
            rowIndex
        };
        this.editCell.emit(editCellEvent);
    }
    delegateInput(propertyName, defaultValue) {
        if (!this.tableComponent) {
            // console.warn('TbodyComponent: No parent "tableComponent" was found.' +
            //   'Input "' + propertyName + '" was also not provided.');
            return defaultValue;
        }
        return this.tableComponent[propertyName];
    }
};
TbodyComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _table_init_service__WEBPACK_IMPORTED_MODULE_1__["TableInitService"] },
    { type: _table_component__WEBPACK_IMPORTED_MODULE_2__["TableComponent"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
], TbodyComponent.prototype, "addingColumnIndex", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
], TbodyComponent.prototype, "inlineEditingEnabled", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
], TbodyComponent.prototype, "rows", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
], TbodyComponent.prototype, "columnsConfig", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
], TbodyComponent.prototype, "visibleColumns", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()
], TbodyComponent.prototype, "rowClick", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()
], TbodyComponent.prototype, "editCell", void 0);
TbodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: '[iw-tbody]',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tbody.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/ng2-pack/src/lib/table/tbody/tbody.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tbody.component.css */ "./projects/ng2-pack/src/lib/table/tbody/tbody.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])())
], TbodyComponent);



/***/ }),

/***/ "./projects/ng2-pack/src/lib/table/td/td.component.css":
/*!*************************************************************!*\
  !*** ./projects/ng2-pack/src/lib/table/td/td.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZzItcGFjay9zcmMvbGliL3RhYmxlL3RkL3RkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./projects/ng2-pack/src/lib/table/td/td.component.ts":
/*!************************************************************!*\
  !*** ./projects/ng2-pack/src/lib/table/td/td.component.ts ***!
  \************************************************************/
/*! exports provided: TdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TdComponent", function() { return TdComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pipes_format_column_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../pipes/format-column.pipe */ "./projects/ng2-pack/src/lib/table/pipes/format-column.pipe.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let TdComponent = class TdComponent {
    constructor(formatColumnPipe) {
        this.formatColumnPipe = formatColumnPipe;
    }
    ngOnInit() {
    }
    get cellValue() {
        if (!this.column) {
            return;
        }
        return this.row[this.column.config.id];
    }
    get content() {
        return this.contentDiv.nativeElement.textContent;
    }
    get isChanged() {
        return this.contentDiv.nativeElement.textContent.trim() !== this.formattedValue;
    }
    get hasSubfields() {
        if (!this.column) {
            return;
        }
        return this.column.config.subFields && this.column.config.subFields.length > 0;
    }
    get formattedValue() {
        if (!this.column) {
            return;
        }
        return this.formatColumnPipe.transform(this.cellValue, this.column);
    }
};
TdComponent.ctorParameters = () => [
    { type: _pipes_format_column_pipe__WEBPACK_IMPORTED_MODULE_1__["FormatColumnPipe"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], TdComponent.prototype, "column", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], TdComponent.prototype, "row", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('contentDiv', { static: false })
], TdComponent.prototype, "contentDiv", void 0);
TdComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: '[iw-td]',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./td.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/ng2-pack/src/lib/table/td/td.component.html")).default,
        providers: [_pipes_format_column_pipe__WEBPACK_IMPORTED_MODULE_1__["FormatColumnPipe"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./td.component.css */ "./projects/ng2-pack/src/lib/table/td/td.component.css")).default]
    })
], TdComponent);



/***/ }),

/***/ "./projects/ng2-pack/src/lib/table/th/th.component.css":
/*!*************************************************************!*\
  !*** ./projects/ng2-pack/src/lib/table/th/th.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZzItcGFjay9zcmMvbGliL3RhYmxlL3RoL3RoLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./projects/ng2-pack/src/lib/table/th/th.component.ts":
/*!************************************************************!*\
  !*** ./projects/ng2-pack/src/lib/table/th/th.component.ts ***!
  \************************************************************/
/*! exports provided: ThComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThComponent", function() { return ThComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../table.component */ "./projects/ng2-pack/src/lib/table/table.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let ThComponent = class ThComponent {
    // TODO: some properties could be taken from thead component, same for add-column.component
    constructor(tableComponent) {
        this.changeVisibility = true;
        this.removeColumn = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.sortColumn = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.addCombobox = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.toggleSubfield = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.tableComponent = tableComponent;
    }
    set rowsSortingMode(rowsSortingMode) {
        this._rowsSortingMode = rowsSortingMode;
    }
    ;
    set visibleColumns(visibleColumns) {
        if (this.tableComponent) {
            this.tableComponent.visibleColumns = visibleColumns;
        }
        else {
            this._visibleColumns = visibleColumns;
        }
    }
    ;
    set columnsConfig(columnsConfig) {
        this._columnsConfig = columnsConfig;
    }
    ;
    ngOnInit() {
    }
    get rowsSortingMode() {
        return this._rowsSortingMode || this.delegateInput('rowsSortingMode', 'default');
    }
    get visibleColumns() {
        return this._visibleColumns || this.delegateInput('visibleColumns', []);
    }
    get columnsConfig() {
        return this._columnsConfig || this.delegateInput('columnsConfig', []);
    }
    get hasAllColumnsVisble() {
        return this.visibleColumns.length === this.columnsConfig.length;
    }
    get isLastColumn() {
        return this.visibleColumns.length !== 1;
    }
    isSortingDisabled(column) {
        if (!column) {
            return;
        }
        return this.rowsSortingMode === 'disabled' || column.config.sortingDisabled;
    }
    showSortIcon(column, sortType, direction) {
        if (!column) {
            return false;
        }
        if (this.isSortingDisabled(column)) {
            return false;
        }
        return (column.config.sortType === sortType && column.currentSortDirection === direction);
    }
    onSortColumn(column, direction) {
        if (this.isSortingDisabled(column)) {
            return;
        }
        if (!direction) {
            direction = column.toggleDirection();
        }
        else {
            column.currentSortDirection = direction;
        }
        this.sortColumn.emit({
            column: column.config.id,
            direction
        });
    }
    onRemoveColumn(columnName) {
        let columnIndex = this.visibleColumns.indexOf(columnName);
        this.visibleColumns = [
            ...this.visibleColumns.slice(0, columnIndex),
            ...this.visibleColumns.slice(columnIndex + 1),
        ];
        this.removeColumn.emit(columnName);
    }
    onToggleSubfield(column, subfieldName) {
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
    delegateInput(propertyName, defaultValue) {
        if (!this.tableComponent) {
            // console.warn('TheadComponent: No parent "tableComponent" was found.' +
            //   'Input "' + propertyName + '" was also not provided.');
            return defaultValue;
        }
        return this.tableComponent[propertyName];
    }
};
ThComponent.ctorParameters = () => [
    { type: _table_component__WEBPACK_IMPORTED_MODULE_1__["TableComponent"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], ThComponent.prototype, "column", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], ThComponent.prototype, "changeVisibility", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], ThComponent.prototype, "rowsSortingMode", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], ThComponent.prototype, "visibleColumns", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], ThComponent.prototype, "columnsConfig", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], ThComponent.prototype, "removeColumn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], ThComponent.prototype, "sortColumn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], ThComponent.prototype, "addCombobox", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], ThComponent.prototype, "toggleSubfield", void 0);
ThComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: '[iw-th]',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./th.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/ng2-pack/src/lib/table/th/th.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./th.component.css */ "./projects/ng2-pack/src/lib/table/th/th.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])())
], ThComponent);



/***/ }),

/***/ "./projects/ng2-pack/src/lib/table/thead/thead.component.css":
/*!*******************************************************************!*\
  !*** ./projects/ng2-pack/src/lib/table/thead/thead.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZzItcGFjay9zcmMvbGliL3RhYmxlL3RoZWFkL3RoZWFkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./projects/ng2-pack/src/lib/table/thead/thead.component.ts":
/*!******************************************************************!*\
  !*** ./projects/ng2-pack/src/lib/table/thead/thead.component.ts ***!
  \******************************************************************/
/*! exports provided: TheadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TheadComponent", function() { return TheadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../table.component */ "./projects/ng2-pack/src/lib/table/table.component.ts");
/* harmony import */ var _table_init_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../table-init.service */ "./projects/ng2-pack/src/lib/table/table-init.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let TheadComponent = class TheadComponent {
    constructor(elementRef, changeDetectorRef, // needed to trigger change detection on jquery ui's callbacks
    tableInitService, tableComponent) {
        this.elementRef = elementRef;
        this.changeDetectorRef = changeDetectorRef;
        this.tableInitService = tableInitService;
        this.addColumn = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.removeColumn = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.sortColumn = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.addingColumn = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.reorderColumns = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.toggleSubfield = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.lastColumnComboboxActive = false;
        this.customTemplate = false;
        this.tableComponent = tableComponent;
    }
    set columnsConfig(columnsConfig) {
        if (this.tableComponent) {
            this.tableComponent.columnsConfig = columnsConfig;
        }
        else {
            this._columnsConfig = columnsConfig;
        }
    }
    set visibleColumns(visibleColumns) {
        if (this.tableComponent) {
            this.tableComponent.visibleColumns = visibleColumns;
        }
        else {
            this._visibleColumns = visibleColumns;
            // NOTE: what about output events?
        }
    }
    get changeColumnVisibility() {
        if (!this.tableComponent) {
            return false;
        }
        return this.tableComponent.changeColumnVisibility;
    }
    ngOnInit() {
        if (this.reorderingEnabled) {
            this.initializeSortable();
        }
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.customTemplate = this.elementRef.nativeElement.children.length !== 1;
        });
    }
    get columnsConfig() {
        return this._columnsConfig || this.delegateInput('columnsConfig', []);
    }
    get columnsLookup() {
        let columnsLookup = this._columnsLookup ||
            (this.tableComponent && this.tableComponent.columnsLookup);
        if (typeof columnsLookup === 'undefined') {
            columnsLookup = this.tableInitService.columnsConfig2Lookup(this.columnsConfig);
            this._columnsLookup = columnsLookup;
        }
        return columnsLookup;
    }
    get visibleColumns() {
        return this._visibleColumns || this.delegateInput('visibleColumns', []);
    }
    get reorderingEnabled() {
        return this._reorderingEnabled || this.delegateInput('reorderingEnabled', false);
    }
    get isLastAddingColumnVisible() {
        return this.lastColumnComboboxActive || this.addingColumnIndex === this.visibleColumns.length;
    }
    isSorted(column, direction) {
        if (!this.tableComponent) {
            return false;
        }
        return this.tableComponent.isSorted(column, direction);
    }
    column(columnName) {
        return this.columnsLookup[columnName];
    }
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
    toggleCombobox() {
        this.lastColumnComboboxActive = !this.lastColumnComboboxActive;
        if (!this.lastColumnComboboxActive) {
            return;
        }
        setTimeout(() => {
            jQuery(this.elementRef.nativeElement).scrollLeft(99999);
        }, 0);
    }
    onAddCombobox(index) {
        this.lastColumnComboboxActive = false;
        this.addingColumnIndex = index;
        this.addingColumn.emit(index);
    }
    onSortColumn(sortEvent) {
        if (this.tableComponent) {
            this.tableComponent.sortedColumnName = sortEvent.column;
        }
        this.sortColumn.emit(sortEvent);
    }
    onToggleSubfield(toggleSubfieldEvent) {
        this.toggleSubfield.emit(toggleSubfieldEvent);
    }
    initializeSortable() {
        jQuery(this.elementRef.nativeElement).sortable({
            cursor: 'move',
            axis: 'x',
            tolerance: 'pointer',
            items: '.drag-column',
            handle: '.col-label',
            update: () => {
                this.draggedColumnId = '';
                let sortedIDs = jQuery(this.elementRef.nativeElement)
                    .sortable('toArray', {
                    attribute: 'data-col-ref'
                });
                this.visibleColumns = sortedIDs;
                this.reorderColumns.emit(sortedIDs);
                this.changeDetectorRef.detectChanges();
            },
        });
        jQuery(this.elementRef.nativeElement).disableSelection();
    }
    delegateInput(propertyName, defaultValue) {
        if (!this.tableComponent) {
            // console.warn('TheadComponent: No parent "tableComponent" was found.' +
            //   'Input "' + propertyName + '" was also not provided.');
            return defaultValue;
        }
        return this.tableComponent[propertyName];
    }
};
TheadComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _table_init_service__WEBPACK_IMPORTED_MODULE_2__["TableInitService"] },
    { type: _table_component__WEBPACK_IMPORTED_MODULE_1__["TableComponent"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
], TheadComponent.prototype, "columnsConfig", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
], TheadComponent.prototype, "visibleColumns", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()
], TheadComponent.prototype, "addColumn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()
], TheadComponent.prototype, "removeColumn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()
], TheadComponent.prototype, "sortColumn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()
], TheadComponent.prototype, "addingColumn", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()
], TheadComponent.prototype, "reorderColumns", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"])()
], TheadComponent.prototype, "toggleSubfield", void 0);
TheadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: '[iw-thead]',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./thead.component.html */ "./node_modules/raw-loader/dist/cjs.js!./projects/ng2-pack/src/lib/table/thead/thead.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./thead.component.css */ "./projects/ng2-pack/src/lib/table/thead/thead.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"])())
], TheadComponent);



/***/ }),

/***/ "./projects/ng2-pack/src/public-api.ts":
/*!*********************************************!*\
  !*** ./projects/ng2-pack/src/public-api.ts ***!
  \*********************************************/
/*! exports provided: InlineEditableDirective, InlineEditableModule, PipesModule, DefaultValuePipe, TPipe, SortableModule, SortableItemDirective, TableDefaults, tableDefaultValues, TableComponent, TbodyComponent, TheadComponent, ThComponent, TdComponent, AddColumnComponent, ColumnState, sortingCompare, TableSortingService, TableInitService, FormatColumnPipe, TableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _lib_inline_editable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/inline-editable */ "./projects/ng2-pack/src/lib/inline-editable/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InlineEditableDirective", function() { return _lib_inline_editable__WEBPACK_IMPORTED_MODULE_1__["InlineEditableDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InlineEditableModule", function() { return _lib_inline_editable__WEBPACK_IMPORTED_MODULE_1__["InlineEditableModule"]; });

/* harmony import */ var _lib_pipes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/pipes */ "./projects/ng2-pack/src/lib/pipes/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return _lib_pipes__WEBPACK_IMPORTED_MODULE_2__["PipesModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultValuePipe", function() { return _lib_pipes__WEBPACK_IMPORTED_MODULE_2__["DefaultValuePipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TPipe", function() { return _lib_pipes__WEBPACK_IMPORTED_MODULE_2__["TPipe"]; });

/* harmony import */ var _lib_sortable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/sortable */ "./projects/ng2-pack/src/lib/sortable/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortableModule", function() { return _lib_sortable__WEBPACK_IMPORTED_MODULE_3__["SortableModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SortableItemDirective", function() { return _lib_sortable__WEBPACK_IMPORTED_MODULE_3__["SortableItemDirective"]; });

/* harmony import */ var _lib_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/table */ "./projects/ng2-pack/src/lib/table/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableDefaults", function() { return _lib_table__WEBPACK_IMPORTED_MODULE_4__["TableDefaults"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tableDefaultValues", function() { return _lib_table__WEBPACK_IMPORTED_MODULE_4__["tableDefaultValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return _lib_table__WEBPACK_IMPORTED_MODULE_4__["TableComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TbodyComponent", function() { return _lib_table__WEBPACK_IMPORTED_MODULE_4__["TbodyComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TheadComponent", function() { return _lib_table__WEBPACK_IMPORTED_MODULE_4__["TheadComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThComponent", function() { return _lib_table__WEBPACK_IMPORTED_MODULE_4__["ThComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TdComponent", function() { return _lib_table__WEBPACK_IMPORTED_MODULE_4__["TdComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddColumnComponent", function() { return _lib_table__WEBPACK_IMPORTED_MODULE_4__["AddColumnComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColumnState", function() { return _lib_table__WEBPACK_IMPORTED_MODULE_4__["ColumnState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortingCompare", function() { return _lib_table__WEBPACK_IMPORTED_MODULE_4__["sortingCompare"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableSortingService", function() { return _lib_table__WEBPACK_IMPORTED_MODULE_4__["TableSortingService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableInitService", function() { return _lib_table__WEBPACK_IMPORTED_MODULE_4__["TableInitService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormatColumnPipe", function() { return _lib_table__WEBPACK_IMPORTED_MODULE_4__["FormatColumnPipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableModule", function() { return _lib_table__WEBPACK_IMPORTED_MODULE_4__["TableModule"]; });

/*
 * Public API Surface of ng2-pack
 */







/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _table_example_table_example_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-example/table-example.service */ "./src/app/table-example/table-example.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let AppComponent = class AppComponent {
    constructor(tableExampleService) {
        this.tableExampleService = tableExampleService;
        this.title = 'Data Table';
        this.visibleColumns = ['firstName', 'lastName'];
        this.customizedFields = ['studies'];
        this.actionList = [];
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
    }
    get rowsWithStudies() {
        return this.tableExampleService.rows;
    }
    onAction(action) {
        if (this.actionList.length > 3) {
            this.actionList.shift();
        }
        this.actionList.push(action);
    }
    isCustomField(columnId) {
        return this.customizedFields.indexOf(columnId) !== -1;
    }
};
AppComponent.ctorParameters = () => [
    { type: _table_example_table_example_service__WEBPACK_IMPORTED_MODULE_1__["TableExampleService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'iw-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _table_example_table_example_service__WEBPACK_IMPORTED_MODULE_1__["TableExampleService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _table_example_studies_cell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-example/studies-cell.component */ "./src/app/table-example/studies-cell.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _projects_ng2_pack_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../projects/ng2-pack/src/public-api */ "./projects/ng2-pack/src/public-api.ts");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _projects_ng2_pack_src_public_api__WEBPACK_IMPORTED_MODULE_5__["TableModule"],
            _projects_ng2_pack_src_public_api__WEBPACK_IMPORTED_MODULE_5__["InlineEditableModule"],
            _projects_ng2_pack_src_public_api__WEBPACK_IMPORTED_MODULE_5__["PipesModule"]
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            _table_example_studies_cell_component__WEBPACK_IMPORTED_MODULE_1__["StudiesCellComponent"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/table-example/people-mocks.ts":
/*!***********************************************!*\
  !*** ./src/app/table-example/people-mocks.ts ***!
  \***********************************************/
/*! exports provided: generatePeople, people */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generatePeople", function() { return generatePeople; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "people", function() { return people; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

let rand = (minimum, maximum) => {
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};
let randomItem = (arr) => {
    return arr[rand(0, arr.length - 1)];
};
let generatePeople = (numberOfRecords) => {
    let people = [];
    for (let i = 0; i < numberOfRecords; i++) {
        let studies = [];
        let studiesCount = rand(1, 4);
        for (let j = 0; j < studiesCount; j++) {
            let study = {
                studyBegin: faker.date.past(),
                studyEnd: faker.date.past(),
                degree: randomItem(['Bachelor', 'Master', 'Doctor']),
                form: randomItem(['daily', 'remotely']),
                area: faker.name.jobArea(),
                faculty: 'Faculty of ' + faker.name.jobArea(),
                finished: Math.random() >= 0.3 ? true : false,
                university: 'University of ' + faker.name.jobArea()
            };
            studies.push(study);
        }
        let person = {
            id: faker.random.uuid(),
            salutation: randomItem(['Mrs.', 'Mr.', 'Miss', 'Ms', 'Dr.']),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            birthday: new Date(faker.date.past()),
            email: faker.internet.email(),
            phone: faker.phone.phoneNumber(),
            address: {
                street: faker.address.streetAddress(),
                city: faker.address.city(),
            },
            country: faker.address.country(),
            // graduationYear: rand(1970, 2016),
            studies: studies
        };
        people.push(person);
    }
    return people;
};
let people = generatePeople(20);


/***/ }),

/***/ "./src/app/table-example/studies-cell.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/table-example/studies-cell.component.ts ***!
  \*********************************************************/
/*! exports provided: StudiesCellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudiesCellComponent", function() { return StudiesCellComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StudiesCellComponent = class StudiesCellComponent {
    constructor() { }
    isSubColumnVisible(subcolumn) {
        return (this.col.activeFields.indexOf(subcolumn) !== -1);
    }
    get allSubfieldsHidden() {
        return this.col.activeFields.length === 0;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StudiesCellComponent.prototype, "row", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StudiesCellComponent.prototype, "col", void 0);
StudiesCellComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'iw-studies-cell',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./studies-cell.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/table-example/studies-cell.component.html")).default,
    })
], StudiesCellComponent);



/***/ }),

/***/ "./src/app/table-example/table-example.service.ts":
/*!********************************************************!*\
  !*** ./src/app/table-example/table-example.service.ts ***!
  \********************************************************/
/*! exports provided: TableExampleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableExampleService", function() { return TableExampleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _people_mocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./people-mocks */ "./src/app/table-example/people-mocks.ts");




let TableExampleService = class TableExampleService {
    constructor(datePipe) {
        this.datePipe = datePipe;
        this.rows = _people_mocks__WEBPACK_IMPORTED_MODULE_3__["people"];
        this.categories = {
            person: { id: 'person', text: 'Person' },
            contact: { id: 'contact', text: 'Contact' },
        };
        this.columnsConfig = [
            { id: 'salutation', sortType: 'string', category: this.categories.person },
            { id: 'firstName', sortType: 'string', category: this.categories.person },
            { id: 'lastName', sortType: 'string', category: this.categories.person },
            { id: 'email', sortType: 'string', category: this.categories.contact },
            { id: 'phone', sortType: 'string', category: this.categories.contact },
            {
                id: 'address',
                sortingDisabled: true,
                category: this.categories.contact,
                subFields: [
                    { id: 'street', text: 'Street', isVisible: true },
                    { id: 'city', text: 'City', isVisible: true },
                ]
            },
            { id: 'country', sortType: 'string', category: this.categories.contact },
            {
                id: 'studies',
                sortingDisabled: true,
                subFields: [
                    { id: 'university', text: 'University', isVisible: true },
                    { id: 'faculty', text: 'Faculty', isVisible: true },
                ]
            }
        ];
    }
};
TableExampleService.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"] }
];
TableExampleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], TableExampleService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gabriel/devel/tum/ng2-pack/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map