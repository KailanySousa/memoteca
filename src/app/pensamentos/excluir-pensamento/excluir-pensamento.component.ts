import { Component } from '@angular/core';
import { PensamentoService } from '../services/pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Pensamento } from '../interfaces/Pensamento.model';

@Component({
  selector: 'app-excluir-pensamento',
  templateUrl: './excluir-pensamento.component.html',
  styleUrl: './excluir-pensamento.component.css'
})
export class ExcluirPensamentoComponent {

   pensamento: Pensamento = {
    id: '',
    conteudo: '',
    autoria: '',
     modelo: '',
    favorito: false
  }

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(id!).subscribe((pensamento) => {
      this.pensamento = pensamento
    })
  }

  excluirPensamento() {
    if(this.pensamento.id) {
      this.service.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listar'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listar'])
  }

}
