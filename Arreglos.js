"use strict"		
         /*
		 1. Construya un algoritmo desarrollado con JavaScript o TypeScript que, dado un arreglo de longitud par con strings o number, determine si el arreglo es simétrico. Un arreglo es simétrico cuando la lectura desde el primer índice (posición) hasta el ultimo es igual a la lectura desde el ultimo índice hasta el primero.
         El arreglo debe estar en una variable y el algoritmo debe evaluarlo e imprimir si es simétrico y cual es la longitud del arreglo.

         Por ejemplo:
         const myArray = [2, 8, 5, 11, 4, 25, 25, 4, 11, 5, 8, 2].
         El arreglo es simétrico y su longitud es 12.
		*/

var arreglo = [1, 2, 3, 4, 5, 6, 6, 5, 4, 3, 2, 1];
var resultado = false;

for(var i=0;i<12/2;i++) {
    if(arreglo[i]==arreglo[12-1-i]) {
		resultado = true;
	}else {
		resultado = false;
	}	
}

	if(resultado==true){
        console.log(arreglo);
        console.log("El arreglo es simétrico y su longitud es " + arreglo.length);
        }else{
        console.log(arreglo);
        console.log("El arreglo NO es simétrico y su longitud es " + arreglo.length);
        } 