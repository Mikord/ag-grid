// Type definitions for ag-grid-community v19.1.1
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { GridPanel } from "../gridPanel/gridPanel";
import { Column } from "../entities/column";
import { RowNode } from "../entities/rowNode";
import { CellComp } from "./cellComp";
import { LoggerFactory } from "../logger";
import { GridCell, GridCellDef } from "../entities/gridCell";
import { BeanStub } from "../context/beanStub";
import { FlashCellsParams, GetCellRendererInstancesParams, RefreshCellsParams } from "../gridApi";
import { ICellRendererComp } from "./cellRenderers/iCellRenderer";
import { ICellEditorComp } from "./cellEditors/iCellEditor";
export declare class RowRenderer extends BeanStub {
    private paginationProxy;
    private columnController;
    private gridOptionsWrapper;
    private gridCore;
    private $scope;
    private expressionService;
    private templateService;
    private valueService;
    private eventService;
    private pinnedRowModel;
    private context;
    private loggerFactory;
    private focusedCellController;
    private cellNavigationService;
    private columnApi;
    private gridApi;
    private beans;
    private heightScaler;
    private animationFrameService;
    private rangeController;
    private gridPanel;
    private firstRenderedRow;
    private lastRenderedRow;
    private rowCompsByIndex;
    private floatingTopRowComps;
    private floatingBottomRowComps;
    private rowContainers;
    private pinningLeft;
    private pinningRight;
    private refreshInProgress;
    private logger;
    private printLayout;
    private embedFullWidthRows;
    agWire(loggerFactory: LoggerFactory): void;
    registerGridComp(gridPanel: GridPanel): void;
    private onDomLayoutChanged;
    private onPageLoaded;
    getAllCellsForColumn(column: Column): HTMLElement[];
    refreshFloatingRowComps(): void;
    private refreshFloatingRows;
    private onPinnedRowDataChanged;
    private onModelUpdated;
    private getRenderedIndexesForRowNodes;
    redrawRows(rowNodes: RowNode[]): void;
    private getCellToRestoreFocusToAfterRefresh;
    redrawAfterModelUpdate(params?: RefreshViewParams): void;
    private scrollToTopIfNewData;
    private sizeContainerToPageHeight;
    private getLockOnRefresh;
    private releaseLockOnRefresh;
    private restoreFocusedCell;
    stopEditing(cancel?: boolean): void;
    forEachCellComp(callback: (cellComp: CellComp) => void): void;
    private forEachRowComp;
    addRenderedRowListener(eventName: string, rowIndex: number, callback: Function): void;
    flashCells(params?: FlashCellsParams): void;
    refreshCells(params?: RefreshCellsParams): void;
    getCellRendererInstances(params: GetCellRendererInstancesParams): ICellRendererComp[];
    getCellEditorInstances(params: GetCellRendererInstancesParams): ICellEditorComp[];
    getEditingCells(): GridCellDef[];
    private forEachCellCompFiltered;
    destroy(): void;
    private binRowComps;
    private removeRowComps;
    redrawAfterScroll(): void;
    private removeRowCompsNotToDraw;
    private calculateIndexesToDraw;
    private redraw;
    private flushContainers;
    private onDisplayedColumnsChanged;
    private redrawFullWidthEmbeddedRows;
    refreshFullWidthRows(): void;
    private createOrUpdateRowComp;
    private destroyRowComps;
    private checkAngularCompile;
    private workOutFirstAndLastRowsToRender;
    getFirstVirtualRenderedRow(): number;
    getLastVirtualRenderedRow(): number;
    private keepRowBecauseEditing;
    private createRowComp;
    getRenderedNodes(): RowNode[];
    navigateToNextCell(event: KeyboardEvent, key: number, previousCell: GridCell, allowUserOverride: boolean): void;
    ensureCellVisible(gridCell: GridCell): void;
    startEditingCell(gridCell: GridCell, keyPress: number, charPress: string): void;
    private getComponentForCell;
    onTabKeyDown(previousRenderedCell: CellComp, keyboardEvent: KeyboardEvent): void;
    tabToNextCell(backwards: boolean): boolean;
    private moveToCellAfter;
    private moveToNextEditingCell;
    private moveToNextEditingRow;
    private moveToNextCellNotEditing;
    private moveEditToNextCellOrRow;
    private findNextCellToFocusOn;
    private lookupRowNodeForCell;
}
export interface RefreshViewParams {
    recycleRows?: boolean;
    animate?: boolean;
    suppressKeepFocus?: boolean;
    onlyBody?: boolean;
    newData?: boolean;
    newPage?: boolean;
}
//# sourceMappingURL=rowRenderer.d.ts.map