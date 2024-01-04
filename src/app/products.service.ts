import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts(limit: number = 24, skip: number = 0): Observable<any> {
    let url = environment.baseurl + 'products?limit=' + limit + '&skip=' + skip;
    const data = this.http.get<any>(url);
    return data;
  }

  getProductById(id: string | null) {
    let url = environment.baseurl + 'products/' + id;
    const data = this.http.get<any>(url);
    return data;
  }

  getProductCategories() {
    let url = environment.baseurl + 'products/categories';
    const data = this.http.get<any>(url);
    return data;
  }
}
