import { Component } from '@angular/core';


//PORTAMOS NUESTRO CODIGO
import { Pais } from 'src/app/models/pais';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/services/crud.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
//PROPIEDAD PUBLICA (TIPO ARRAY)
  public info:Pais[];
  constructor(){
   this.info=[
     {
       id: "Zapatillas Slipstream ADP",
       nombre: "",
       edad: 0,
       imagen:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_480,h_480/global/388992/01/sv01/fnd/ARG/fmt/png",
       alt:"argentina"
     },
   
    {
     id: "Shorts CLASSICS para hombre",
     nombre: "",
     edad: 0,
     imagen:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_480,h_480/global/538067/27/mod01/fnd/ARG/fmt/png",
     alt:"brazil"
   },
   {
     id: "",
     nombre: "",
     edad: 0,
     imagen:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_480,h_480/global/399894/01/sv01/fnd/ARG/fmt/png",
     alt:"chile"
   },    
   ]
  }
}
