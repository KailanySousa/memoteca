import { Component } from '@angular/core';
import { Pensamento } from '../../../models/Pensamento.model';
import Modelo from '../../../enums/Modelo.enum';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent {

  listaPensamentos: Pensamento[] = [
    {
      conteudo: 'I love Angular',
      autoria: 'Dev',
      modelo: Modelo.MODELO1
    },
    {
      conteudo: 'Só sei que nada sei',
      autoria: 'Sócrates',
      modelo: Modelo.MODELO2
    }
  ];

}
