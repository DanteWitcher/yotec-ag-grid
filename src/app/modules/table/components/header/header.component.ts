import { Component, OnDestroy } from '@angular/core';
import { IHeaderAngularComp } from 'ag-grid-angular';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements IHeaderAngularComp, OnDestroy {
  public checked: boolean;
  public params: any;
  private subscription: Subscription;

  public agInit(params: any): void {
    this.params = params;
    this.subscription = fromEvent(params.api, 'selectionChanged').subscribe(() =>
        this.checked = this.params.api.getSelectedRows().length === this.params.api.getDisplayedRowCount()
    );
  }

  public changed(checked: boolean): void {
    if (!checked) {
        this.params.api.deselectAll();
    } else {
        this.params.api.selectAll();
    }

    this.params.api.refreshCells();
  }

  public refresh(): boolean {
    return false;
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
