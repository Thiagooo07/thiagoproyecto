import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './pages/producto/producto.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { BotinesComponent } from './pages/botines/botines.component';
import { MochilasComponent } from './pages/mochilas/mochilas.component';
import { CalzadodeportivoComponent } from './pages/calzadodeportivo/calzadodeportivo.component';
import { CardComponent } from './components/card/card.component';
import { CardBotinesComponent } from './components/card-botines/card-botines.component';
import { CardCalzadodeportivoComponent } from './components/card-calzadodeportivo/card-calzadodeportivo.component';
import { CardIndumentariaComponent } from './components/card-indumentaria/card-indumentaria.component';
import { CardMochilasComponent } from './components/card-mochilas/card-mochilas.component';




@NgModule({
  declarations: [
    ProductoComponent,
    IndumentariaComponent,
    BotinesComponent,
    MochilasComponent,
    CalzadodeportivoComponent,
    CardComponent,
    CardBotinesComponent,
    CardCalzadodeportivoComponent,
    CardIndumentariaComponent,
    CardMochilasComponent,
  
    
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
  ],
  exports:[
    ProductoComponent,
    IndumentariaComponent,
    MochilasComponent,
    CalzadodeportivoComponent,
    BotinesComponent,
    CardComponent,
  
  ]
})
export class ProductoModule { }
