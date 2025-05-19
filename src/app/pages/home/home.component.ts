import { Component, OnInit, OnDestroy } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { SidebarComponent } from '../../components/menulateral/sidebar.component';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from '../../components/usuario/usuario.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent, SidebarComponent, CommonModule, UsuarioComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  cardStyleHome = { 'width.px': '680', 'height.px': '480' };

  imagens = [
    './img/mustang.png',
    './img/ranger.png',
    './img/territory.png',
    './img/broncoSport.png'
  ];

  imagemAtualIndex = 0;
  intervaloId: any;

  ngOnInit() {
    this.atualizarImagemFundo();
    this.intervaloId = setInterval(() => {
      this.imagemAtualIndex = (this.imagemAtualIndex + 1) % this.imagens.length;
      this.atualizarImagemFundo();
    }, 4000);
  }

  atualizarImagemFundo() {
    const imagem = this.imagens[this.imagemAtualIndex];
    const bgDiv = document.querySelector('.imagem-background') as HTMLElement;
    if (bgDiv) {
      bgDiv.style.backgroundImage = `url("${imagem}")`;
    }
  }

  ngOnDestroy() {
    clearInterval(this.intervaloId);
  }
}
