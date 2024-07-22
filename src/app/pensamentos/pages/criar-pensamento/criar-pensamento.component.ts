import { Component } from '@angular/core';
import { Pensamento } from '../../interfaces/Pensamento.model';
import { PensamentoService } from '../../services/pensamento.service';
import Modelo from '../../enums/Modelo.enum';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.css'
})
export class CriarPensamentoComponent {

  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo: [''],
      autoria: [''],
      modelo: ['']
    });
  }

  salvarPensamento() {
    this.service.criar(this.formulario.value).subscribe(() => this.router.navigate(['/listar']));
  }

  cancelar() {
    this.router.navigate(['/listar'])
  }


  
}
