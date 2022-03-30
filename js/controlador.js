import { llenartienda } from "./llenadotienda.js"
import {ampliarinformacion} from "./ampliarinfo.js"


//creo un producto vacio
let producto={}

//lleno tienda
llenartienda()

//rutina amplaiar info
let contenedorTienda=document.getElementById("filas")
contenedorTienda.addEventListener("click",function(evento){
    if(evento.target.classList.contains("btn")){
        let modalinfo = new bootstrap.Modal(document.getElementById('modalinfor'))
       
        producto=ampliarinformacion(evento)
        console.log(producto)
        modalinfo.show() 
        
    }
})

//rutina añadir carrito
let carrito=[]
let añadir=document.getElementById("añadirc")
añadir=addEventListener("click",function(){
    
    carrito.push(producto)
    console.log(carrito)
})
