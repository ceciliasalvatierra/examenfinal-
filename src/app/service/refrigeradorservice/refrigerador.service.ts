import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Refrigerador } from '../../models/refrigeradores/refrigerador';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RefrigeradorService {

  private api : string = 'http://localhost:8080/refrigeradores';

  constructor(private http: HttpClient) { }

  getRefrigeradoresList(): Observable<Refrigerador[]> {
    return this.http.get<Refrigerador[]>(this.api);
  }

  createRefrigerador(refrigerador: Refrigerador): Observable<Refrigerador> {
    return this.http.post<Refrigerador>(this.api, refrigerador);
  }

  deleteRefrigeradorById(id: number): Observable<void> {
  return this.http.delete<void>(`${this.api}/${id}`);
  }


  getRefrigeradorById(id: number): Observable<Refrigerador> {
  return this.http.get<Refrigerador>(`${this.api}/${id}`);
  }

  updateRefrigerador(id: number, refrigerador: Refrigerador): Observable<Refrigerador> {
    return this.http.put<Refrigerador>(`${this.api}/${id}`, refrigerador);
  }

  updateParcialRefrigerador(id: number, updates: any): Observable<Refrigerador> {
    return this.http.patch<Refrigerador>(`${this.api}/${id}`, updates);
  }
}
