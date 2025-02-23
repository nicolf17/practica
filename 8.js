let placaIngresada= "YMK90D"
let tipoArreglo= "cambio de llantas"
let nombreIngresado= "Bibiana"
let documentoIngresado= "41942652"
let nombreBd= "Bibiana"
let documentoBd= "41942652"

if(nombreIngresado == nombreBd && documentoIngresado == documentoBd){
    console.log(`Bienvenid@ ${nombreBd}, su servicio de ${tipoArreglo} esta hecho, puede pasar por su vehiculo`)
}else{
    console.log("Su arreglo no se ha realizado o no ha pedidio ningun servicio");
}
