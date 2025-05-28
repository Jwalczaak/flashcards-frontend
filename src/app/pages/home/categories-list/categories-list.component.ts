import { Component, inject, ResourceStatus } from '@angular/core';
import { BadgeTextComponent } from '../../../shared/components/badge-text/badge-text.component';
import { DataTableComponent } from '../../../shared/components/data-table/data-table.component';
import { DataTableColumnsConfig } from '../../../shared/components/data-table/data-table.type';
import { DropdownComponent } from '../../../shared/components/dropdown/dropdown.component';
import { InputComponent } from '../../../shared/components/input/input.component';
import { SharedButtonComponent } from '../../../shared/components/shared-button/shared-button.component';
import { Item } from '../../../shared/types/item.type';
import { CategoriesListService } from './categories-list.service';

@Component({
  selector: 'app-categories-list',
  imports: [DataTableComponent, InputComponent, SharedButtonComponent, BadgeTextComponent, DropdownComponent],
  templateUrl: './categories-list.component.html',
  styleUrl: './categories-list.component.scss',
})
export class CategoriesListComponent {
  private categoriesService = inject(CategoriesListService);

  categoriesDataColumns: DataTableColumnsConfig[] = [
    {
      apiName: '_id',
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
      apiName: 'createdAt',
      displayName: 'Creation date',
      hasSort: true,
      hasFilter: true,
      sortMode: 'none',
      filterType: 'input-text',
    },
    {
      apiName: 'updatedAt',
      displayName: 'Last update',
      hasSort: true,
      hasFilter: true,
      sortMode: 'none',
      filterType: 'input-text',
    },
    {
      apiName: 'userId',
      displayName: 'User',
      hasSort: true,
      hasFilter: true,
      sortMode: 'none',
      filterType: 'input-text',
    },
  ];
  status = ResourceStatus;
  categoriesData = this.categoriesService.categories;
  categoriesAvailableStatuses: Item[] = [
    {
      name: 'To do',
      value: 'To do',
    },
    {
      name: 'In progress',
      value: 'In progress',
    },
    {
      name: 'Idle',
      value: 'Idle',
    },
    {
      name: 'Finished',
      value: 'Finished',
    },
  ];

  // categoriesData: any[] = [
  //   {
  //     id: '893214218321',
  //     name: 'Animals',
  //     description: 'Animals',
  //     createDate: new Date().toISOString(),
  //     lastUpdate: new Date().toISOString(),
  //     user: 'John Walczi',
  //   },
  //   {
  //     id: '893214218321',
  //     name: 'Animals',
  //     description: 'Animals',
  //     createDate: new Date().toISOString(),
  //     lastUpdate: new Date().toISOString(),
  //     user: 'John Walczi',
  //   },
  //   {
  //     id: '8932142183214',
  //     name: 'Cities',
  //     description: 'Cities',
  //     createDate: new Date().toISOString(),
  //     lastUpdate: new Date().toISOString(),
  //     user: 'Arturito Platynov',
  //   },
  //   {
  //     id: '893214218325',
  //     name: 'Technology',
  //     description: 'Technology',
  //     createDate: new Date().toISOString(),
  //     lastUpdate: new Date().toISOString(),
  //     user: 'John Walczi',
  //   },
  //   {
  //     id: '893214218323',
  //     name: 'Cars',
  //     description: 'Cars',
  //     createDate: new Date().toISOString(),
  //     lastUpdate: new Date().toISOString(),
  //     user: 'John Walczi',
  //   },
  //   {
  //     id: '893214218326',
  //     name: 'Animals',
  //     description: 'Animals',
  //     createDate: new Date().toISOString(),
  //     lastUpdate: new Date().toISOString(),
  //     user: 'John Walczi',
  //   },
  // ];
}
