import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  nome: string;
  email: string;
  senha: string;
}

@Injectable({
  providedIn: 'root'
})
export class CadastroClienteService {

  private apiUrl = '/api/user';

  constructor(private http: HttpClient) { }

  cadastrarCliente(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }
}
