import { Component } from '@angular/core';
import { PensamentoService } from '../../services/pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from '../../validators/minusculoValidator';

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
      conteudo: ['', Validators.compose([
        Validators.required,
        Validators.pattern(/(,|\s)*\S(.|\s)*/),
        Validators.minLength(3),
      ])],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(/(,|\s)*\S(.|\s)*/),
        minusculoValidator
      ])],
      modelo: ['modelo1', [Validators.required]]
    });
  }

  get habilitarBotao(): string {
    if (this.formulario.valid) return 'botao';
    return 'botao__desabilitado';
  }

  salvarPensamento() {
    if (this.formulario.valid) {
      this.service.criar(this.formulario.value).subscribe(() => this.router.navigate(['/listar']));
    }
  }

  cancelar() {
    this.router.navigate(['/listar'])
  }


  
}
