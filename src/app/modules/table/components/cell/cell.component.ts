import { Component, OnDestroy } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements ICellRendererAngularComp, OnDestroy {
  private subscription: Subscription;
  public checked: boolean;
  public params: any;

  public agInit(params: any): void {
    this.params = params;
    this.checked = this.params.node.isSelected();
    this.subscription = fromEvent(params.api, 'selectionChanged').subscribe(() =>
      this.checked = this.params.node.isSelected()
    );
  }

  public changed(value: boolean): void {
    this.params.node.setSelected(value);
  }

  public refresh(): boolean {
    return false;
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
