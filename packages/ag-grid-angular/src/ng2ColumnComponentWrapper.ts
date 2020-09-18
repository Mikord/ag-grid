import { Injectable } from "@angular/core";
import { BaseComponentWrapper, Bean, FrameworkComponentWrapper, WrapableInterface } from 'ag-grid-community';
import { AgFrameworkComponent } from "./interfaces";

@Injectable()
@Bean("columnComponentWrapper")
export class Ng2ColumnComponentWrapper extends BaseComponentWrapper<WrapableInterface> implements FrameworkComponentWrapper {

  createWrapper(OriginalConstructor: { new(): any }): WrapableInterface {

    class DynamicAgNg2Component implements WrapableInterface {

      protected _params: any;
      protected _eGui: HTMLElement;
      protected _componentRef: any;
      protected _agColumnEditor: any;
      protected _agAwareComponent: AgFrameworkComponent<any>;
      protected _frameworkComponentInstance: any;  // the users component - for accessing methods they create

      init(params: any): void {
        this._params = params;
        this._componentRef = OriginalConstructor;
        this._agColumnEditor = this._componentRef.getEditor ? this._componentRef.getEditor() : this._componentRef;
        this._agAwareComponent = this._agColumnEditor;
        this._frameworkComponentInstance = this._agColumnEditor;
        this._eGui = this._agColumnEditor.el.nativeElement;
        this._agAwareComponent.agInit(this._params);
        this._componentRef.cd.detectChanges();
      }

      public getGui(): HTMLElement {
        return this._eGui;
      }

      public destroy(): void {
        if (this._componentRef) {
          this._componentRef.destroy();
        }
      }

      public getFrameworkComponentInstance(): any {
        return this._frameworkComponentInstance;
      }

      hasMethod(name: string): boolean {
        return wrapper.getFrameworkComponentInstance()[name] != null;
      }

      callMethod(name: string, args: IArguments): void {
        const componentRef = this.getFrameworkComponentInstance();
        return wrapper.getFrameworkComponentInstance()[name].apply(componentRef, args)

      }

      addMethod(name: string, callback: Function): void {
        wrapper[name] = callback
      }
    }

    let wrapper: DynamicAgNg2Component = new DynamicAgNg2Component();
    return wrapper;
  }
}