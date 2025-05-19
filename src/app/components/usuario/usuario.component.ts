import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioDTO } from '../../../utils/models/usuario/usuario.dto';
import { SessionStorageService } from '../../services/localstorage/sessionstorage.service';

@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  
  router!: Router;

  constructor(router: Router){
    this.router = router;
  }

  usuarioToggle: boolean = false;
  balloonOnScreen = {"top":"15px"};
  balloonOffScreen = {"top":"-999px"};
  usuarioContentBallon = this.balloonOffScreen;
  storage!: SessionStorageService;
  usuarioInfo!: UsuarioDTO;

  changeUsuarioToggle(){
    this.usuarioToggle = !this.usuarioToggle;
    if (this.usuarioToggle){
      this.usuarioContentBallon = this.balloonOnScreen;
    } else {
      this.usuarioContentBallon = this.balloonOffScreen;
    }
  }

  logoff(){
    window.localStorage.clear();
    window.sessionStorage.clear();
    this.router.navigate(['login']);
  }

  ngOnInit(){

    if (window.localStorage.length > 0){
      this.storage = new SessionStorageService(window.localStorage)
    } else {
      this.storage = new SessionStorageService(window.sessionStorage)
    }

    this.usuarioInfo = JSON.parse(this.storage.get("usuario"))

  }

}
