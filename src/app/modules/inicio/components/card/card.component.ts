import { Component } from '@angular/core';

//IMPORTAMOS NUESTRO CODIGO
import { Pais } from 'src/app/models/pais';

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
        id: "",
        nombre: "",
        edad: 0,
        imagen:"https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg",
        alt:"argentina"
      },
    {
      id: "",
      nombre: "",
      edad: 0,
      imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png",
      alt:"brazil"
    },
    {
      id: "",
      nombre: "",
      edad: 0,
      imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/1200px-Flag_of_Chile.svg.png",
      alt:"chile"
    },    
    ]
   }
}
