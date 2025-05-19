import { Component, inject } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';
import { ApiService } from '../../services/api/api.service';
import { Router } from '@angular/router';
import { SessionStorageService } from '../../services/localstorage/sessionstorage.service';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})

export class LoginComponent {

  private router;
  private AuthService;
  private autologin = false;

  constructor(auth:AuthService, router: Router){
    this.router = router;
    this.AuthService = auth;
  }

  changeAutoLogin(event: boolean){
    this.autologin = event;
    this.AuthService.setAutoLogin(event)
  }

  async login(event: [string, string]){
    const usuario = await ApiService.login(event[0], event[1]);

    if (!usuario){
      return
    }

    this.AuthService.saveLogin(usuario.data);
    this.router.navigate(['home'])
  }
}
