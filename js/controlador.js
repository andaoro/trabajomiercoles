import { llenartienda } from "./llenadotienda.js"
import {ampliarinformacion} from "./ampliarinfo.js"


//creo un producto vacio
let producto={}
//referencia al modal
let modalinfo = new bootstrap.Modal(document.getElementById('modalinfor'))
let modalcompra = new bootstrap.Modal(document.getElementById('resumencompra'))
//lleno tienda
llenartienda()

//rutina amplaiar info
let contenedorTienda=document.getElementById("filas")
contenedorTienda.addEventListener("click",function(evento){
    if(evento.target.classList.contains("btn")){
        
       
        producto=ampliarinformacion(evento)
        
        
        modalinfo.show() 
        
    }
})

//rutina añadir carrito
let carrito=[]
let anadir=document.getElementById("anadirc")
anadir.addEventListener("click",function(){

    //debo capturar la cantidad y agregar al producto

    let cantidad=document.getElementById("cantproducto").value
    
    
    producto.cantidad=cantidad


    //agrego producto al carrito
    carrito.push(producto)
    let suma=0
    
    //pintar la capsula en el carrito
    carrito.forEach(function(producto){
        suma=suma+Number(producto.cantidad)
    })
    
    let capsula=document.getElementById("pildora")
   
    capsula.textContent=suma;
    capsula.classList.remove("invisible")
    

    console.log(carrito)

    modalinfo.hide()
    
})



let limpiarc= document.getElementById("limpiarc")
limpiarc.addEventListener("click",function(){
    
    carrito=[]
    let capsula=document.getElementById("pildora")    
    capsula.classList.add("invisible")

})

//rutina para ver carrito

let botonvercarrito=document.getElementById("vcarrito")
botonvercarrito.addEventListener("click",function(){
    
    //recorrer el carrito y comprar los productos
    let base=document.getElementById("basecarro")

    base.innerHTML=""

    carrito.forEach(function(producto){
        let fila=document.createElement("div")
        fila.classList.add("row")

        let columna1=document.createElement("div")
        columna1.classList.add("col-4")
        
        let precio=document.createElement("p")
        precio.classList.add("text-warning")
        precio.textContent=producto.precio

        let columna2=document.createElement("div")
        columna2.classList.add("col-8")

        let foto = document.createElement("img")
        foto.classList.add("w-100", "img-fluid")
        foto.src=producto.foto

        //padres e hijos

        columna1.appendChild(foto)
        columna2.appendChild(precio)
        fila.appendChild(columna1)
        fila.appendChild(columna2)
        base.appendChild(fila)
    })
    
    
    modalcompra.show()

})
