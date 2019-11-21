/**
 * ag-grid-community - Advanced Data Grid / Data Table supporting Javascript / React / AngularJS / Web Components
 * @version v20.0.2-cg
 * @link http://www.ag-grid.com/
 * @license MIT
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** The base frameworks, eg React & Angular 2, override this bean with implementations specific to their requirement. */
var BaseFrameworkFactory = /** @class */ (function () {
    function BaseFrameworkFactory() {
    }
    BaseFrameworkFactory.prototype.dateComponent = function (gridOptions) {
        return gridOptions.dateComponent;
    };
    BaseFrameworkFactory.prototype.colDefFloatingCellRenderer = function (colDef) {
        return colDef.pinnedRowCellRenderer;
    };
    BaseFrameworkFactory.prototype.colDefCellRenderer = function (colDef) {
        return colDef.cellRenderer;
    };
    BaseFrameworkFactory.prototype.colDefCellEditor = function (colDef) {
        return colDef.cellEditor;
    };
    BaseFrameworkFactory.prototype.colDefFilter = function (colDef) {
        return colDef.filter;
    };
    BaseFrameworkFactory.prototype.gridOptionsFullWidthCellRenderer = function (gridOptions) {
        return gridOptions.fullWidthCellRenderer;
    };
    BaseFrameworkFactory.prototype.gridOptionsGroupRowRenderer = function (gridOptions) {
        return gridOptions.groupRowRenderer;
    };
    BaseFrameworkFactory.prototype.gridOptionsGroupRowInnerRenderer = function (gridOptions) {
        return gridOptions.groupRowInnerRenderer;
    };
    BaseFrameworkFactory.prototype.setTimeout = function (action, timeout) {
        window.setTimeout(action, timeout);
    };
    return BaseFrameworkFactory;
}());
exports.BaseFrameworkFactory = BaseFrameworkFactory;
