import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './pensamentos/pages/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './pensamentos/pages/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './pensamentos/pages/editar-pensamento/editar-pensamento.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'listar' },
  { path: 'criar', component: CriarPensamentoComponent },
  { path: 'listar', component: ListarPensamentoComponent },
  { path: 'excluir/:id', component: ExcluirPensamentoComponent},
  { path: 'editar/:id', component: EditarPensamentoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
