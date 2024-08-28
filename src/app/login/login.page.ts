import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Aquí iría la lógica de autenticación
    this.router.navigate(['/home'], { state: { username: this.username } });
  }

  goToResetPassword() {
    this.router.navigate(['/reset-password']);
  }
}