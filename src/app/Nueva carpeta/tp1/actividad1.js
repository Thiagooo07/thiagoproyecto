//ejercicio 1
/*
let num=parseInt(prompt("ingrese un numero"))

if (num%2===0) {
    alert("el numero ingresado es par")
} 
 else {
    alert("el numero ingresado es impar")
}
*/
//ejercicio 2
/*
let num=parseInt(prompt("ingrese un numero"))
if (num >=0) {
    alert("el numero ingresado es positivo")
} else {
    alert ("el numero ingresado es negativo")
}
*/
//ejercicio 3
/*
let dividiendo=parseInt(prompt("ingrese el primer numero"))
let divisor=parseInt(prompt("ingrese el segundo numero"))
if(divisor !=0){
alert(" el resultado es"+(dividiendo/divisor))
}
else {
    alert("ERROR")
}
*/
// ejercicio4 
/*
let letra=prompt("ingrese una letra de las siguiente: A,B,C,D")

if (letra==="A"|| letra === "a") {
    alert("Usted ha acertado")
} else {
    alert("usted se ha equivocado")
}
*/
//actividad 5
/*
let num1=parseInt(prompt("ingrese un numero"))
let num2=parseInt(prompt("ingrese otro numero"))

if (num1>num2) {
    
    alert("la diferencia es "+(num1-num2))
} if (num1<num2) {
    
    alert("la diferencia es de "+(num2-num1))
}
*/
//actividad 6
/*
let pedido=parseInt(prompt("elija que tomar: 1 cerveza,2 vino, 3 refresco,4 agua"))

if (pedido===1||pedido===2) {
    alert("dirijase a la tienda")
} else {
    if (pedido===3||pedido===4) {
        alert("dirijase a la tienda")
    }else
    alert ("ingrese un numero valido")
}
*/

//actividad7
/*
let viaje=parseInt(prompt("elija 1 si va a viajar en tren. elija 2 si va a viajar en colectivo.  elija 3 si va a viajar en bicicleta.   elija 4 si va a viajar en auto"))

if (viaje===1||viaje===2) {
    alert("recuerde llevar dinero para el pasaje :)")
} else {
alert("gracias por elegirnos <3")
}
*/
//actividad 
/*
let d=parseInt(prompt("ingrese la distancia de su recorrido"))
let t=parseInt(prompt("ingrese el tiempo de su recorrido"))
let v=d/t
if (v>=40 && v<=60) {
    
    alert( "paso la prueba")
} else {
    alert("esta descalificado")
}
*/
//actividad 9
/*
let articulos=parseInt(prompt("ingrese la cantidad de articulos"))
let precios=parseInt(prompt("ingrese el precio de los articulos"))
let desc=(precios*15/100)
if (precios>=40 && articulos>10) {

    alert("tiene un descuento del 15%! En total son "+desc)
}
*/
//actividad 10
/*
let pNota=parseInt(prompt("ingrese la nota del primer trimestre"))
let sNota=parseInt(prompt("ingrese la nota del segundo trimestre"))
let tNota=parseInt(prompt("ingrese la nota del trecer trimestre"))
let promedio=(pNota+sNota+tNota/3)
if (promedio<5) {
    alert("Usted esta suspenso")
} else {
   if (promedio>=5 && promedio<=7) {
    alert("usted esta aprobado")
   } else {
    if (promedio>7) {
        alert("tiene una calificacion notable")
    }
   }
}
*/