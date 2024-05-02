import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

//son las encargadas de tener todas las rutas de la pagina
const routes: Routes = [
  //ruta comun -> 1 solo componente
{
  path:"",component:InicioComponent
},
//carga perezosa -> 1 modulo
//loadchildren: indica una ruta hija 
// ()=> import: ruta de donde viene el modulo
//.then promesa/ funcion asincronica

{
  path:"",loadChildren:()=> import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
