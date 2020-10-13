import { Component } from '@angular/core';

@Component({
  selector: 'app-selected-records',
  templateUrl: './selected-records.component.html',
  styleUrls: ['./selected-records.component.scss']
})
export class SelectedRecordsComponent {
    public params: any;

    public agInit(params: any): void {
        this.params = params;
    }

    public getCount(): number {
        return this.params.api.getSelectedRows().length;
    }
}
