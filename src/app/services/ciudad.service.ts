import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  // Datos simulados
  private ciudades = [
    { id: '1', nombre: 'Madrid' },
    { id: '2', nombre: 'Barcelona' },
    { id: '3', nombre: 'Sevilla' }
  ];

  constructor() { }

  // Simula la obtención de todas las ciudades
  fetchCiudad(): Observable<any[]> {
    return of(this.ciudades); // Devuelve las ciudades simuladas
  }

  // Simula la obtención de una ciudad por ID
  fetchCiudadById(id: string): Observable<any> {
    const ciudad = this.ciudades.find(city => city.id === id);
    return of(ciudad); // Devuelve la ciudad encontrada
  }

  // Simula el envío de una nueva ciudad
  postCiudad(ciudad: any): Observable<any> {
    this.ciudades.push(ciudad); // Agrega la nueva ciudad
    return of(ciudad); // Devuelve la ciudad agregada
  }

  // Simula la actualización de una ciudad
  updateCiudad(id_original: string, ciudad: any): Observable<any> {
    const index = this.ciudades.findIndex(city => city.id === id_original);
    if (index !== -1) {
      this.ciudades[index] = { ...this.ciudades[index], ...ciudad }; // Actualiza la ciudad
    }
    return of(this.ciudades[index]); // Devuelve la ciudad actualizada
  }

  // Simula la eliminación de una ciudad
  deleteCiudad(id_ciudad: string): Observable<any> {
    const index = this.ciudades.findIndex(city => city.id === id_ciudad);
    if (index !== -1) {
      this.ciudades.splice(index, 1); // Elimina la ciudad
    }
    return of({ message: 'Ciudad eliminada' }); // Mensaje de éxito
  }
}
