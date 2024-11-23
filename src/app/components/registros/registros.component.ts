import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {
  // La lista de usuarios está definida estáticamente
  usuarios = [
    { id_usuario: '1', nombre: 'Juan', apellido: 'Pérez', email: 'juan@example.com', telefono: '123456789' },
    { id_usuario: '2', nombre: 'Ana', apellido: 'González', email: 'ana@example.com', telefono: '987654321' },
    { id_usuario: '3', nombre: 'Luis', apellido: 'Martínez', email: 'luis@example.com', telefono: '123123123' }
  ];

  constructor() { }

  ngOnInit(): void {
    // No es necesario cargar usuarios desde un servicio
  }

  // Las siguientes funciones ya no están siendo utilizadas porque no realizan acciones
  editarUsuario(id_usuario: string) {
    // Esta función ya no hace nada
    console.log(`Intento de editar usuario con ID: ${id_usuario}`);
  }

  eliminarUsuario(id_usuario: string) {
    // Esta función ya no hace nada
    console.log(`Intento de eliminar usuario con ID: ${id_usuario}`);
  }

  irANuevoUsuario() {
    // Esta función ya no hace nada
    console.log('Intento de crear un nuevo usuario');
  }
}
