import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // private URL = 'http://localhost:3000/api/login'; // Cambia esta URL según tu configuración
  private URL = 'https://back-6s9j.onrender.com'

  constructor(private http: HttpClient) { }

  // Método de autenticación
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.URL, { email, password }).pipe(
      tap((response) => {
        if (response && response.user) {
          // Guarda el usuario autenticado en localStorage
          localStorage.setItem('user', JSON.stringify(response.user));
        }
      })
    );
  }

  // Verifica si el usuario está autenticado
  isAuthenticated(): boolean {
    return localStorage.getItem('user') !== null;
  }

  // Método para cerrar sesión
  logout(): void {
    localStorage.removeItem('user');
  }

  // Obtén el usuario autenticado (si existe)
  getUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
}
