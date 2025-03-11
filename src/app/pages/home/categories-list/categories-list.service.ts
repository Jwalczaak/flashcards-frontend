import { HttpClient } from '@angular/common/http';
import { effect, inject, Injectable } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { CategoriesResponse, CategoryEntity } from '../../../shared/types/categories.type';
@Injectable({
  providedIn: 'root',
})
export class CategoriesListService {
  private categoriesUrl = `${environment.API_URL}/category`;

  private http = inject(HttpClient);

  categories = rxResource({
    loader: () =>
      this.http.get<CategoriesResponse | undefined>(this.categoriesUrl).pipe(
        map((response) => {
          return response ? response.data : undefined;
        })
      ),
  });

  eff = effect(() => {
    // console.log(ResourceStatus[this.categories.status()]);
    console.log(this.categories.value());
  });

  getCategories(): Observable<CategoryEntity[]> {
    return this.http.get<CategoryEntity[]>(this.categoriesUrl);
  }
}
