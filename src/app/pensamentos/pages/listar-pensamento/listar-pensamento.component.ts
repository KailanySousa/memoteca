import { Component } from '@angular/core';
import { Pensamento } from '../../interfaces/Pensamento.model';
import Modelo from '../../enums/Modelo.enum';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent {

  listaPensamentos: Pensamento[] = [
    {
      id: 1,
      conteudo: 'I love Angular',
      autoria: 'Dev',
      modelo: Modelo.MODELO1
    },
    {
      id: 2,
      conteudo: 'Só sei que nada sei',
      autoria: 'Sócrates',
      modelo: Modelo.MODELO3
    }
  ];

}
