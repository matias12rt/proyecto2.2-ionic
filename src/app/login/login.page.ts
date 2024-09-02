import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  @ViewChild(IonModal, { static: false }) modal!: IonModal;

  email: string = '';
  password: string = '';
  emailError: string = '';
  passwordError: string = '';
  message: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  // Maneja el inicio de sesión
  login() {
    this.emailError = '';
    this.passwordError = '';

    if (!this.isValidEmail(this.email)) {
      this.emailError = 'Correo inválido';
    } else if (this.password.trim() === '') {
      this.passwordError = 'La contraseña es obligatoria';
    } else if (this.email === 'matias@gmail.com' && this.password === 'Orellana1') {
      const navigationExtras: NavigationExtras = {
        state: {
          email: this.email
        }
      };
      this.router.navigate(['/administracion'], navigationExtras);
    } else {
      this.router.navigate(['/tienda']);
    }
  }

  // Función para validar el correo electrónico
  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Función para manejar el cierre del modal
  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  // Función para confirmar la recuperación de contraseña
  confirm() {
    if (this.isValidEmail(this.email)) {
      this.modal.dismiss(this.email, 'confirm');
    }
  }

  // Maneja el evento de cierre del modal
  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `A reset link has been sent to ${ev.detail.data}!`;
    }
  }

  // Navega a la página de registro
  goToRegistro() {
    this.router.navigate(['/registrocli']);
  }
}
