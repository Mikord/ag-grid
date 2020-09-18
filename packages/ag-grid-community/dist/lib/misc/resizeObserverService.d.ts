// Type definitions for ag-grid-community v20.0.3-cg
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
export declare class ResizeObserverService {
    private gridOptionsWrapper;
    private frameworkFactory;
    observeResize(element: HTMLElement, callback: () => void): () => void;
}