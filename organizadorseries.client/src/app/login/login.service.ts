import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  email: string;
  senha: string;
  nome: string;
}

@Injectable({ providedIn: 'root' })
export class LoginService {
  private apiUrl = '/api/user/login';

  constructor(private http: HttpClient) {}

  login(email: string, senha: string): Observable<User> {
    return this.http.post<User>(this.apiUrl, { email, senha });
  }
}
