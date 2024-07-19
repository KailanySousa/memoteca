import { Component } from '@angular/core';
import { Pensamento } from '../../interfaces/Pensamento.model';
import { PensamentoService } from '../../services/pensamento.service';
import Modelo from '../../enums/Modelo.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: Modelo.MODELO1
  };

  constructor(
    private service: PensamentoService,
    private router: Router
  ) { }

  salvarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => this.router.navigate(['/listar']));
  }

  cancelar() {
    this.router.navigate(['/listar'])
  }


  
}
