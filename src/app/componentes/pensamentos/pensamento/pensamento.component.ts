import { Component, Input } from '@angular/core';
import { Pensamento } from '../../../models/Pensamento.model';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {
  
  @Input() pensamento!: Pensamento;
}
