import { Component } from '@angular/core';

@Component({
  selector: 'app-selection-button',
  templateUrl: './selection-button.component.html',
  styleUrls: ['./selection-button.component.scss']
})
export class SelectionButtonComponent {
    public isSelectionMode = false;
    public params: any;

    public agInit(params: any): void {
        this.params = params;
    }

    public showSelectionMode(): void {
        this.isSelectionMode = !this.isSelectionMode;

        this.params.columnApi.setColumnVisible('checkbox', this.isSelectionMode);
    }
}
