import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CriarPensamentoComponent } from './pensamentos/pages/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './pensamentos/pages/listar-pensamento/listar-pensamento.component';
import { PensamentoComponent } from './pensamentos/componentes/pensamento/pensamento.component';
import { SharedModule } from './shared/shared.module';
import { PensamentosModule } from './pensamentos/pensamentos.module';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PensamentosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
