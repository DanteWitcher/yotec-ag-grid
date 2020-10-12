import { Component } from '@angular/core';

@Component({
  selector: 'app-total-records',
  templateUrl: './total-records.component.html',
  styleUrls: ['./total-records.component.scss']
})
export class TotalRecordsComponent {
    public params: any;

    public agInit(params: any): void {
        this.params = params;
    }

    public getCount(): number {
        return this.params.api.getDisplayedRowCount();
    }
}
