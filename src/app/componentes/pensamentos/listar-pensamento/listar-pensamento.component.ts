import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent {

  listaPensamentos = [
    {
      conteudo: 'I love Angular',
      autoria: 'Dev',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Só sei que nada sei',
      autoria: 'Sócrates',
      modelo: 'modelo3'
    }
  ];

}
