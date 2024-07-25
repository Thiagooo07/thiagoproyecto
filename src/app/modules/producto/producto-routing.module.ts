import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './pages/producto/producto.component';
import { BotinesComponent } from './pages/botines/botines.component';
import { CalzadodeportivoComponent } from './pages/calzadodeportivo/calzadodeportivo.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';
import { MochilasComponent } from './pages/mochilas/mochilas.component';

const routes: Routes = [
  {
    path: "producto", component:ProductoComponent
  },
  {
    path: "botines", component:BotinesComponent
  },
  {
    path: "calzadodeportivo", component:CalzadodeportivoComponent
  },
  {
    path: "indumentaria", component:IndumentariaComponent
  },
  {
    path: "mochilas", component:MochilasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
