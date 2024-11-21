/*import { Component } from '@angular/core';

@Component({
  selector: 'app-nuevaciudad',
  standalone: true,
  imports: [],
  templateUrl: './nuevaciudad.component.html',
  styleUrl: './nuevaciudad.component.css'
})
export class NuevaciudadComponent {

}*/
import { Component } from '@angular/core';
import { CiudadService } from '../../services/ciudad.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevousuario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nuevaciudad.component.html',
  styleUrl: './nuevaciudad.component.css'
})
export class NuevaciudadComponent {
  nuevaCiudad: any = {}; // Objeto para el nuevo usuario

  constructor(private ciudadService: CiudadService, private router: Router) { }

  crearCiudad() {
    console.log('Creando nuevo registro:', this.nuevaCiudad);
    this.ciudadService.postCiudad(this.nuevaCiudad).subscribe(
      (res) => {
        console.log('Ciudad creada:', res);
        this.nuevaCiudad = { id_ciudad: '' }; // Reinicia el formulario
        this.router.navigate(['/ciudad']); // Redirige a la lista de registros
      },
      (err) => {
        console.error('Error al crear el registro:', err);
      }
    );
  }

}

