import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { BotinesComponent } from './pages/botines/botines.component';
import { MochilasComponent } from './pages/mochilas/mochilas.component';
import { CalzadodeportivoComponent } from './pages/calzadodeportivo/calzadodeportivo.component';


@NgModule({
  declarations: [
    ProductoComponent,
    IndumentariaComponent,
    BotinesComponent,
    MochilasComponent,
    CalzadodeportivoComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  exports:[
    ProductoComponent,
    IndumentariaComponent,
    MochilasComponent,
    CalzadodeportivoComponent,
    BotinesComponent

  ]
})
export class ProductoModule { }
