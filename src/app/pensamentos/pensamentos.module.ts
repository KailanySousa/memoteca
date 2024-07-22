import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPensamentoComponent } from './pages/listar-pensamento/listar-pensamento.component';
import { CriarPensamentoComponent } from './pages/criar-pensamento/criar-pensamento.component';
import { PensamentoComponent } from './componentes/pensamento/pensamento.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { ExcluirPensamentoComponent } from './excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './editar-pensamento/editar-pensamento.component';



@NgModule({
  declarations: [
    ListarPensamentoComponent,
    CriarPensamentoComponent,
    PensamentoComponent,
    ExcluirPensamentoComponent,
    EditarPensamentoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [provideHttpClient()]
})
export class PensamentosModule { }
