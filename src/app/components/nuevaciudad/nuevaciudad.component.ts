import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nuevaciudad',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nuevaciudad.component.html',
  styleUrls: ['./nuevaciudad.component.css']
})
export class NuevaciudadComponent {
  nuevaCiudad: any = {}; // Objeto para el nuevo registro

  crearCiudad() {
    console.log('Datos de la nueva ciudad:', this.nuevaCiudad);
    alert('Ciudad creada exitosamente: ' + JSON.stringify(this.nuevaCiudad));
    this.nuevaCiudad = {}; // Reinicia el formulario
  }
}
