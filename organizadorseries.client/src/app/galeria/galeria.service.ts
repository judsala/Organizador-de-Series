import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GaleriaService {
  private apiUrl = '/api/serie';

  constructor(private http: HttpClient) {}

  cadastrarSerie(serie: any): Observable<any> {
    return this.http.post(this.apiUrl, serie);
  }

  listarSeriesPorUsuario(userId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/${userId}`);
  }

  editarSerie(id: number, serie: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, serie);
  }

  deletarSerie(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
