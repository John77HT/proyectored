import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-editar-usuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  usuario: any = { id_usuario: '' }; // Objeto para el usuario a editar
  originalIdUsuario: string = ''; // Para almacenar el ID original antes de editar

  constructor(
    private usuarioService: UsuarioService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.obtenerUsuario(); // Llama a obtenerUsuario al inicializar el componente
  }

  obtenerUsuario() {
    const id_usuario = this.activatedRoute.snapshot.paramMap.get('id_usuario');
    if (id_usuario) {
      this.originalIdUsuario = id_usuario; // Almacena el ID original
      this.usuarioService.fetchUserById(id_usuario).subscribe(
        (res) => {
          this.usuario = res; // Asigna el objeto usuario directamente
        },
        (err) => {
          console.error('Error al obtener el usuario:', err);
        }
      );
    }
  }

  actualizarUsuario() {
    const id_original = this.usuario.id_usuario; // Obtén el ID del usuario que deseas actualizar
    const usuarioActualizado = {
      nombre: this.usuario.nombre,
      apellido: this.usuario.apellido,
      contra: this.usuario.contra,
      direccion: this.usuario.direccion,
      email: this.usuario.email,
      genero: this.usuario.genero,
      id_ciudad: this.usuario.id_ciudad,
      id_tipo: this.usuario.id_tipo,
      telefono: this.usuario.telefono
    };

    console.log('Actualizando usuario:', usuarioActualizado);
    this.usuarioService.updateUser(id_original, usuarioActualizado).subscribe(
      (res) => {
        console.log('Usuario actualizado:', res);
        this.router.navigate(['/registros']); // Redirige a la lista de registros
      },
      (err) => {
        console.error('Error al actualizar el usuario:', err);
      }
    );
  }
}

