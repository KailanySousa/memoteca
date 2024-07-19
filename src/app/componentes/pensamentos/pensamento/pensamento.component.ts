import { Component, Input } from '@angular/core';
import { Pensamento } from '../interfaces/Pensamento.model';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {
  
  @Input() pensamento!: Pensamento;

  get larguraPensamento(): string {
      return this.pensamento.conteudo.length >= 255 ? 'pensamento-g' : 'pensamento-p';
  }
}
