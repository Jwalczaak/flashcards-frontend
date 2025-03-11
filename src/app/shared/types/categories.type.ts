export type CategoriesResponse = {
  data: CategoryEntity[];
};

export type CategoryEntity = {
  name: string;
  isGlobal: boolean;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};
