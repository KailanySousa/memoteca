import { Component } from '@angular/core';
import { Pensamento } from '../../interfaces/Pensamento.model';
import { PensamentoService } from '../../services/pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from '../../validators/minusculoValidator';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrl: './editar-pensamento.component.css'
})
export class EditarPensamentoComponent {

  pensamento: Pensamento = {
    id: '',
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(id!).subscribe((pensamento) => {
      this.formulario = this.formBuilder.group({
        conteudo: [pensamento.conteudo, Validators.compose([
          Validators.required,
          Validators.pattern(/(,|\s)*\S(.|\s)*/),
          Validators.minLength(3),
        ])],
        autoria: [pensamento.autoria, Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.pattern(/(,|\s)*\S(.|\s)*/),
          minusculoValidator
        ])],
        modelo: [pensamento.modelo, [Validators.required]]
      });
    })
  }

  get habilitarBotao(): string {
    if (this.formulario.valid) return "botao";
    return "botao__desabilitado"
  }


  editarPensamento() {
    this.service.editar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listar'])
    })

  }

  cancelar() {
    this.router.navigate(['/listar'])
  }
  
}
