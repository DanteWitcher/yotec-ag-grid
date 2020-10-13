import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheckboxComponent } from './components/checkbox/checkbox.component';

@NgModule({
    imports: [CommonModule],
    exports: [CommonModule, CheckboxComponent],
    declarations: [CheckboxComponent],
    providers: [],
})
export class SharedModule { }
