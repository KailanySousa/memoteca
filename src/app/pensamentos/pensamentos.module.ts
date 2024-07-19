import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarPensamentoComponent } from './pages/listar-pensamento/listar-pensamento.component';
import { CriarPensamentoComponent } from './pages/criar-pensamento/criar-pensamento.component';
import { PensamentoComponent } from './componentes/pensamento/pensamento.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { ExcluirPensamentoComponent } from './excluir-pensamento/excluir-pensamento.component';



@NgModule({
  declarations: [
    ListarPensamentoComponent,
    CriarPensamentoComponent,
    PensamentoComponent,
    ExcluirPensamentoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [provideHttpClient()]
})
export class PensamentosModule { }
