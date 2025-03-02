export type DataTableColumns = {
  apiName: string;
  displayName: string;
  config: any;
};

export type DataTableColumnsConfig = {
  apiName: string;
  displayName: string;
  hasSort: boolean;
  hasFilter: boolean;
  sortMode: DataTableSortMode;
  filterType?: DataTableSortType;
  filterValue?: string;
};

export type DataTableSortMode = 'asc' | 'desc' | 'none';

export type DataTableSortType = 'calendar' | 'input-text' | 'input-number' | 'dropdown' | 'multi-select' | 'boolean';
