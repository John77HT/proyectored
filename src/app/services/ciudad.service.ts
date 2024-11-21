import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  URL = 'http://localhost:3000/api/ciudad/';

  constructor(private http: HttpClient) { }

  fetchCiudad(): Observable<any[]> {
    return this.http.get<any[]>(this.URL);
  }

  fetchCiudadById(id: string): Observable<any> {
    return this.http.get<any>(`${this.URL}${id}`); // Obtener un solo usuario por ID
  }

  postCiudad(user: any): Observable<any> {
    return this.http.post<any>(this.URL, user); // Especifica el tipo de retorno
  }


  /*updateUser(id_original: string, usuario: any) {
    return this.http.put(`${this.URL}${id_original}`, usuario);
  }*/

  updateCiudad(id_original: string, ciudad: any) {
    console.log('Datos a enviar para actualización:', ciudad);
    return this.http.put(`${this.URL}${id_original}`, ciudad);
  }

  deleteCiudad(id_ciudad: string): Observable<any> {
    return this.http.delete<any>(`${this.URL}${id_ciudad}`); // Especifica el tipo de retorno
  }
}
