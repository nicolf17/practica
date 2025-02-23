let tipoVuelo= ""
if(tipoVuelo=="Normal"){
    console.log(`Su tipo de vuelo pertenece a la clase ${tipoVuelo}, espere en la sala de espera hasta el segundo llamado`)
}else if(tipoVuelo=="VIP"){
    console.log(`Su tipo de vuelo pertenece a la clase ${tipoVuelo}, puede pasar a esperar en el avion`)
}else{
    console.log("Su ticket es invalido o ha caducado, reviselo o pregunte en servicio al cliente")
}