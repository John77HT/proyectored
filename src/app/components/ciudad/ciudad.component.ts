import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ciudad',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.css']
})
export class CiudadComponent implements OnInit {
  ciudad: any[] = [
    { id_ciudad: '1', nombre: 'Madrid' },
    { id_ciudad: '2', nombre: 'Barcelona' },
    { id_ciudad: '3', nombre: 'Sevilla' }
  ]; // Lista de ciudades ficticias

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Aquí no se hace nada porque los datos son estáticos
  }

  editarCiudad(id_ciudad: string) {
    this.router.navigate(['/editar-ciudad', id_ciudad]); // Redirige a la ruta con el id_ciudad
  }

  eliminarCiudad(id_ciudad: string) {
    console.log(`Eliminando ciudad con ID: ${id_ciudad}`);
    this.ciudad = this.ciudad.filter(ciudad => ciudad.id_ciudad !== id_ciudad); // Elimina la ciudad de la lista
  }

  irANuevaCiudad() {
    this.router.navigate(['/nuevaciudad']); // Redirige a la página de crear nueva ciudad
  }
}
