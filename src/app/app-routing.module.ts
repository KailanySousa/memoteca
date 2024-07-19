import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './pensamentos/pages/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './pensamentos/pages/listar-pensamento/listar-pensamento.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'listar' },
  { path: 'criar', component: CriarPensamentoComponent },
  { path: 'listar', component: ListarPensamentoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
