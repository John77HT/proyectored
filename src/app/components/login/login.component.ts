import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private loginService: LoginService, private router: Router) { }

  iniciarSesion() {
    this.loginService.login(this.email, this.password).subscribe(
      (res) => {
        console.log('Inicio de sesión exitoso:', res);
        // Redirigir a la página principal o guardar el estado de inicio de sesión
        this.router.navigate(['/registros']); // Asegúrate de tener esta ruta configurada
      },
      (err) => {
        console.error('Error al iniciar sesión:', err);
        // Puedes mostrar un mensaje de error aquí si las credenciales son incorrectas
      }
    );
  }
}
