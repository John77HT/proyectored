import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { CommonModule } from '@angular/common';  // Importar CommonModule para usar ngFor
import {Usuario} from'../../models/usuario';
@Component({
  selector: 'app-users',
  standalone: true,  // Indica que este componente es independiente
  imports: [CommonModule],  // Asegúrate de importar CommonModule
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  usuarios: any[] = [];  // Variable para almacenar los usuarios obtenidos

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.fetchUser().subscribe(
      (res) => {
        this.usuarios = res;  // Almacenar la respuesta en la variable usuarios
      },
      (err) => {
        console.error(err);
      }
    );
  }
}


