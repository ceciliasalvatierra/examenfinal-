import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marca } from '../models/marcas/marca';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  private api: string = 'http://localhost:8080/marcas';

  constructor(private http: HttpClient) { }

  getMarcas(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.api);
  }

  getMarcaById(id: number): Observable<Marca> {
    return this.http.get<Marca>(`${this.api}/${id}`);
  }

  createMarca(marca: Marca): Observable<Marca> {
    return this.http.post<Marca>(this.api, marca);
  }

  updateMarca(id: number, marca: Marca): Observable<Marca> {
    return this.http.put<Marca>(`${this.api}/${id}`, marca);
  }

  deleteMarca(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`);
  }
}
