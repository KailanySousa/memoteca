import { Component } from '@angular/core';
import { Pensamento } from '../../interfaces/Pensamento.model';
import Modelo from '../../enums/Modelo.enum';
import { PensamentoService } from '../../services/pensamento.service';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent {

  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  hasMaisPensamentos: boolean = true;
  filtro: string = '';

  constructor(
    private service: PensamentoService
  ) { }

  ngOnInit(): void {
     this.service.listar(++this.paginaAtual)
      .subscribe(listaPensamentos => {
        this.listaPensamentos = listaPensamentos.data;
        this.hasMaisPensamentos = !!listaPensamentos.prev;
      });
  }

  carregarMaisPensamentos() {
    this.service.listar(++this.paginaAtual)
      .subscribe(listaPensamentos => {
        this.listaPensamentos.push(...listaPensamentos.data);
        this.hasMaisPensamentos = !!listaPensamentos.prev;
      });
    
  }

  pesquisarPensamentos() {
    this.hasMaisPensamentos = true;
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro)
      .subscribe(listaPensamentos => {
        this.listaPensamentos = listaPensamentos.data;
        this.hasMaisPensamentos = !!listaPensamentos.prev;
      });
  }
}
