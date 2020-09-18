// Type definitions for ag-grid-community v20.0.3-cg
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { ICellRendererComp, ICellRendererFunc } from "../rendering/cellRenderers/iCellRenderer";
import { ICellEditorParams } from "../rendering/cellEditors/iCellEditor";
export interface IRichCellEditorParams extends ICellEditorParams {
    values: string[];
    cellHeight: number;
    cellRenderer: {
        new (): ICellRendererComp;
    } | ICellRendererFunc | string;
}