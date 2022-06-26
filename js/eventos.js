let marcaAuto = document.querySelector("#autoSelection")    
let operacion = document.querySelector("#operacionSelection")    
let formulario = document.querySelector("#formulario")
let btnSubmit = document.querySelector("#submit")
let mensaje = document.querySelector("#mensaje")
let ultimasBusquedas = document.querySelector("#ultimasBusquedas")
let verMas = document.querySelector("#verMas")
                    
                    
                    
                  

btnSubmit.addEventListener("click", ()=> {

    if (infoAutos.find( p => p.marca.toLocaleLowerCase() === marcaAuto.value.toLocaleLowerCase()) && operacion.value.toLocaleLowerCase() == "seguro"){
        let resultado = infoAutos.find( p => p.marca.toLocaleLowerCase() === marcaAuto.value.toLocaleLowerCase())
        let seguro = parseInt(resultado.precio - (resultado.año * 3))
    
        mensaje.innerHTML = `<h2>El seguro del ${resultado.marca} ${resultado.modelo} sale $${seguro} por mes.</h2> `
 
        guardaBusquedaJSON()
     } else if
        (infoAutos.find( p => p.marca.toLocaleLowerCase() === marcaAuto.value.toLocaleLowerCase()) && operacion.value.toLocaleLowerCase() == "precio final"){
        let resultado = infoAutos.find( p => p.marca.toLocaleLowerCase() === marcaAuto.value.toLocaleLowerCase())
        let precioFinal = parseInt(resultado.precio * resultado.iva)
        mensaje.innerHTML = `<h2>El precio final del ${resultado.marca} ${resultado.modelo} es de $${precioFinal} (IVA incluido).</h2> `  

        guardaBusquedaJSON()
     
        } 
        else if
        ( marcaAuto.value.toLocaleLowerCase() === "" || operacion.value.toLocaleLowerCase() == ""){
     
       mensaje.innerHTML = "<h2>⚠️ Recuerda completar todos los campos</h2>"
        } 
        else {
           mensajeFinal()
                }
})


verMas.addEventListener("click", ()=> {
      mostrarUltimaBusquedaJSON()      
})


function mensajeFinal(){
  mensaje.innerHTML = "<h2>Sorry, no tenemos ese auto 😔</h2>"
}


