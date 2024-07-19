import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';



@NgModule({
  declarations: [
    CabecalhoComponent,
    RodapeComponent
  ],
  exports: [
    CabecalhoComponent,
    RodapeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
