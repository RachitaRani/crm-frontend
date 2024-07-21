import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sales } from '../models/sales';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  private apiUrl = 'http://localhost:8080/api/auth/sales';

  constructor(private http: HttpClient) {}

  getSales(): Observable<Sales[]> {
    return this.http.get<Sales[]>(this.apiUrl);
  }

  getSalesById(id: number): Observable<Sales> {
    return this.http.get<Sales>(`${this.apiUrl}/${id}`);
  }

  createSales(sales: Sales): Observable<Sales> {
    return this.http.post<Sales>(this.apiUrl, sales);
  }

  updateSales(id: number, sales: Sales): Observable<Sales> {
    return this.http.put<Sales>(`${this.apiUrl}/${id}`, sales);
  }

  deleteSales(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
