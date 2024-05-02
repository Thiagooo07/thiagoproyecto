//actividad1
/*
let producidos = parseInt(prompt("ingrese la cantidad de tornillos producidos"))
let defectuosos = parseInt(prompt("ingrese la cantidad de tornillos defectuosos"))

if (defectuosos > 200 && producidos < 1000) {
    alert("es de grado 5")
} else {
    if (defectuosos < 200 && producidos < 1000) {
        alert("es de grado 6")
    } else {
        if (defectuosos > 200 && producidos > 1000) {
            alert("es de grado 7")
        } else {
            alert("es de grado 8")
        }
    }
}
*/

//actividad 2
/*
let numkilos=parseFloat=(prompt("ingrese el numero de kilos comprados"))
if (numkilos<2) {
    alert("no habra descuento")
} else {
    if (numkilos>=2.01 && numkilos<=5) {
        alert("tendra un descuento del 10%")
    } else {
        if (numkilos>=5.01 && numkilos<=10) {
            alert("tiene un descuento del 15%")
        } else {
            if (numkilos<=10.01) {
                alert("tiene un descuento del 20%")
            }
        }
    }
}
*/
//actividad3 
/*
let pNota=parseInt(prompt("ingrese la nota del primer trimestre"))
let sNota=parseInt(prompt("ingrese la nota del segundo trimestre"))
let tNota=parseInt(prompt("ingrese la nota del trecer trimestre"))
let promedio=(pNota+sNota+tNota/3)
if (promedio<5) {
    alert("Usted esta suspenso")
} else {
   if ( promedio<=7) {
    alert("usted esta aprobado")
   } else {
    if (promedio>7) {
        alert("tiene una calificacion notable")
    }
   }
}
*/
//Actividad4
/*
let edad = parseInt(prompt("ingrese la edad del paciente"))
let hemoglobina = parseInt(prompt("ingrese el nivel de hemoglobina"))

if (edad < 0.08 && hemoglobina >= 13 && hemoglobina <= 16) {

} else {
    alert("tiene anemia")
  }if (edad <= 0.5 && hemoglobina >= 10 && hemoglobina <= 18) {

    } else {
        alert("tiene anemia")
    } if (edad<=5 && hemoglobina>=11 && hemoglobina<=15) {
        
    } else {
        
    }
    */
//actividad5
/*
    let kilometro= parseInt(prompt("ingrese monto"))
let pagar=0
if (kilometro<=300) {
    pagar=300000
} else {
    if (kilometro=1000) {
        pagar=(3000000+(kilometro-300)*15000)
    } else {
        pagar=(3000000+1500000+((kilometro-100)*10000))

    }
    alert("el total a pagar con iva es de "+(pagar*1.21))
}
*/
//actividad 6
/*
let hora=parseint(prompt("ingrese las horas trabajadas"))
let tarifa=parseint(prompt("ingree la tarifa mensual"))
if (hora<0 || tarifa<0) {
   alert("valor no valido") 
} else {
    let basico=0, extras=0
    if (hora>40) {
        basico=tarifa*40
        extras=(hora-40)*tarifa*1.5
    
    } else {
    basico=hora*tarifa    
    }
    alert("su sueldo es de "+(basico+extras))
}
*/
//actividad7
/*
let sueldo = parseInt = (prompt("ingrese su sueldo"))
let descuento = 0
if (sueldo <= 1000) {
    descuento = sueldo * 0.10

} else {
    if (sueldo <= 2000) {
        descuento = sueldo * 0.15

    } else {
        descuento = sueldo * 0.18


    }
}
alert("el sueldo neto sera de " + (sueldo - descuento))

*/