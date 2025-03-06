import { Component, input } from '@angular/core';
import { CheckboxComponent } from '../checkbox/checkbox.component';
import { DataTableColumnsConfig } from './data-table.type';

@Component({
  selector: 'app-data-table',
  imports: [CheckboxComponent],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
})
export class DataTableComponent {
  columns = input.required<DataTableColumnsConfig[]>();
  tableData = input.required<any>();

  constructor() {
    setTimeout(() => {
      console.log(this.columns());
      console.log(this.tableData());
    }, 1000);
  }
}
