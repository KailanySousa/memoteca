import { Component, Input } from '@angular/core';
import { Pensamento } from '../../interfaces/Pensamento.model';
import { PensamentoService } from '../../services/pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {
  
  @Input() pensamento!: Pensamento;

  constructor(
    private service: PensamentoService
  ) {}

  get larguraPensamento(): string {
      return this.pensamento.conteudo.length >= 255 ? 'pensamento-g' : 'pensamento-p';
  }

  get iconeFavorito(): string {
    if (this.pensamento.favorito) return 'ativo';
    return 'inativo';
  }

  atualizarFavorito() {
    this.service.mudarFavorito(this.pensamento).subscribe();
  }
}
