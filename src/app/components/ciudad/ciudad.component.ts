import { Component, OnInit } from '@angular/core';
import { CiudadService } from '../../services/ciudad.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ciudad',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ciudad.component.html',
  styleUrl: './ciudad.component.css'
})
export class CiudadComponent implements OnInit {
  ciudad: any[] = []; // Lista de usuarios

  constructor(private ciudadService: CiudadService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerCiudad(); // Cargar usuarios al iniciar el componente
  }

  obtenerCiudad() {
    this.ciudadService.fetchCiudad().subscribe(
      (res: any[]) => {
        this.ciudad = res;
      },
      (err) => {
        console.error('Error al obtener ciudades:', err);
      }
    );
  }

  editarCiudad(id_ciudad: string) {
    this.router.navigate(['/editar-ciudad', id_ciudad]); // Redirige a la ruta con el id_ciudad
  }

  eliminarCiudad(id_ciudad: string) {
    console.log(`Eliminando ciudad con ID: ${id_ciudad}`);
    this.ciudadService.deleteCiudad(id_ciudad).subscribe(
      (res) => {
        console.log('Ciudad eliminada:', res);
        this.obtenerCiudad(); // Actualiza la lista después de eliminar
      },
      (err) => {
        console.error('Error al eliminar el registro ciudad:', err);
      }
    );
  }

  irANuevaCiudad() {
    this.router.navigate(['/nuevaciudad']);
  }
}
