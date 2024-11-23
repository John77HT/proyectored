import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  // Datos simulados
  private usuarios = [
    { id: '1', nombre: 'Juan', apellido: 'Pérez' },
    { id: '2', nombre: 'Ana', apellido: 'González' },
    { id: '3', nombre: 'Luis', apellido: 'Martínez' }
  ];

  constructor() { }

  // Simula la obtención de todos los usuarios
  fetchUser(): Observable<any[]> {
    return of(this.usuarios); // Devuelve los usuarios simulados
  }

  // Simula la obtención de un usuario por ID
  fetchUserById(id: string): Observable<any> {
    const usuario = this.usuarios.find(user => user.id === id);
    return of(usuario); // Devuelve el usuario encontrado
  }

  // Simula el envío de un nuevo usuario
  postUser(user: any): Observable<any> {
    this.usuarios.push(user); // Agrega el nuevo usuario a la lista
    return of(user); // Devuelve el usuario agregado
  }

  // Simula la actualización de un usuario
  updateUser(id_original: string, usuario: any): Observable<any> {
    const index = this.usuarios.findIndex(user => user.id === id_original);
    if (index !== -1) {
      this.usuarios[index] = { ...this.usuarios[index], ...usuario }; // Actualiza el usuario
    }
    return of(this.usuarios[index]); // Devuelve el usuario actualizado
  }

  // Simula la eliminación de un usuario
  deleteUser(id_usuario: string): Observable<any> {
    const index = this.usuarios.findIndex(user => user.id === id_usuario);
    if (index !== -1) {
      this.usuarios.splice(index, 1); // Elimina el usuario
    }
    return of({ message: 'Usuario eliminado' }); // Mensaje de éxito
  }
}
