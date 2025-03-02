import { Component } from '@angular/core';
import { DataTableComponent } from '../../../shared/components/data-table/data-table.component';
import { DataTableColumnsConfig } from '../../../shared/components/data-table/data-table.type';

@Component({
  selector: 'app-categories-list',
  imports: [DataTableComponent],
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.scss',
})
export class CategoriesListComponent {
  categoriesDataColumns: DataTableColumnsConfig[] = [
    {
      apiName: 'id',
      displayName: 'Id',
      hasSort: true,
      hasFilter: true,
      sortMode: 'none',
      filterType: 'input-text',
    },

    {
      apiName: 'name',
      displayName: 'Name',
      hasSort: true,
      hasFilter: true,
      sortMode: 'none',
      filterType: 'input-text',
    },

    {
      apiName: 'description',
      displayName: 'Description',
      hasSort: true,
      hasFilter: true,
      sortMode: 'none',
      filterType: 'input-text',
    },

    {
      apiName: 'createDate',
      displayName: 'Creation date',
      hasSort: true,
      hasFilter: true,
      sortMode: 'none',
      filterType: 'input-text',
    },
    {
      apiName: 'lastUpdate',
      displayName: 'Last update',
      hasSort: true,
      hasFilter: true,
      sortMode: 'none',
      filterType: 'input-text',
    },
    {
      apiName: 'user',
      displayName: 'User',
      hasSort: true,
      hasFilter: true,
      sortMode: 'none',
      filterType: 'input-text',
    },
  ];

  categoriesData: any[] = [
    {
      id: '893214218321',
      name: 'Animals',
      description: 'Animals',
      createDate: new Date().toISOString(),
      lastUpdate: new Date().toISOString(),
      User: 'John Walczi',
    },
    {
      id: '8932142183214',
      name: 'Cities',
      description: 'Cities',
      createDate: new Date().toISOString(),
      lastUpdate: new Date().toISOString(),
      User: 'Arturito Platynov',
    },
    {
      id: '893214218325',
      name: 'Technology',
      description: 'Technology',
      createDate: new Date().toISOString(),
      lastUpdate: new Date().toISOString(),
      User: 'John Walczi',
    },
    {
      id: '893214218323',
      name: 'Cars',
      description: 'Cars',
      createDate: new Date().toISOString(),
      lastUpdate: new Date().toISOString(),
      User: 'John Walczi',
    },
    {
      id: '893214218326',
      name: 'Animals',
      description: 'Animals',
      createDate: new Date().toISOString(),
      lastUpdate: new Date().toISOString(),
      User: 'John Walczi',
    },
  ];
}
