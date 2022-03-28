//creando un arreglo de objetos
//crear 10 productos
let productos=
[
     {foto: 'img/articulos/tanjirof.jpg', nombre:"Figura Tanjiro",precio:"$"+80000,descripcion:"Figura de 20cms del personaje Kamado tanjiro."},
     {foto: 'img/articulos/zenitsuf.jpg', nombre:"Figura Zenitsu",precio:"$"+80000,descripcion:"Figura de 20 cms basado en el personaje Zenitsu agatsuma."},
     {foto: 'img/articulos/nezukof.jpg', nombre:"Figura Nezuko ",precio:"$"+80000,descripcion:"Figura de 20cms basada en el personaje Kamado Nezuko."},
     {foto: 'img/articulos/cartuchera.jpg', nombre:"Cartuchera",precio:"$"+30000,descripcion:"Cartuchera Grande kimetsu No yaiba."},
     {foto: 'img/articulos/billetera.jpg', nombre:"Billeteras",precio:"$"+25000,descripcion:"Billetera Zenitsu Kimetsu No yaiba."},
     {foto: 'img/articulos/accesorios.jpg', nombre:"Accesorios",precio:"$"+20000,descripcion:"Caja de Accesorios Variados Kimetsu No yaiba."},
     {foto: 'img/articulos/zenitsufunko.jpg', nombre:"Funko Pop Zenitsu",precio:"$"+70000,descripcion:"Funko pop zenitsu agamatsu Original."},
     {foto: 'img/articulos/inosukefunko.jpg', nombre:"Funko Pop Inosuke ",precio:"$"+70000,descripcion:"Funko pop Inosuke Hashibara Original."},
     {foto: 'img/articulos/medias.jpg', nombre:"Medias",precio:"$"+7000,descripcion:"Medias Inosuke Hashibara Kimetsu No yaiba."},
     {foto: 'img/articulos/uzui.jpg', nombre:"Figura Tengen Uzui",precio:"$"+75000,descripcion:"Figura de Tengen Uzui pilar del sonido."},

]
//1. creo una variable para almacenar la base para pintar
let fila=document.getElementById("filas")

productos.forEach(function(producto){
     

     //pintando etiquetas
     //div con la clase col
     let columna=document.createElement("div")
     columna.classList.add("col")

     let tarjeta=document.createElement("div")
     tarjeta.classList.add("card")
     tarjeta.classList.add("h-100")
     tarjeta.classList.add("bg-dark")

     let foto=document.createElement("img")
     foto.classList.add("card-img-top")
     foto.classList.add("img-fluid")
     foto.src=producto.foto
     
     let nombre=document.createElement("h4")
     nombre.classList.add("text-center")
     nombre.textContent=producto.nombre

     let descripcion = document.createElement("p")
     descripcion.classList.add("text-left")
     descripcion.textContent=producto.descripcion
     
     let precio = document.createElement("h5")
     precio.classList.add("text-center")
     precio.classList.add("text-warning")
     precio.classList.add("number")
     precio.textContent=producto.precio

     let comprar = document.createElement("button")
     comprar.classList.add("bg-success")
     comprar.classList.add("btn")
     comprar.classList.add("text-light")
     comprar.textContent="Comprar"


     //PADRES E HIJOS

     tarjeta.appendChild(nombre)
     tarjeta.appendChild(foto)
     tarjeta.appendChild(precio)
     tarjeta.appendChild(descripcion)
     tarjeta.appendChild(comprar)
     columna.appendChild(tarjeta)
     fila.appendChild(columna)
})


let contenedorTienda=document.getElementById("filas")
contenedorTienda.addEventListener("click",function(evento){
     
     if(evento.target.classList.contains("btn")){

          console.log(evento.target.parentElement.querySelector("h4"))


          let modalinfo = new bootstrap.Modal(document.getElementById('modalinfor'))
          let nombre = evento.target.parentElement.querySelector("h4").textContent

          let fotoinfo=document.getElementById("fotoinfo")
          fotoinfo.src= evento.target.parentElement.querySelector("img").src

          let titulofoto=document.getElementById("nombreinfo")
          titulofoto.textContent=evento.target.parentElement.querySelector("h4").textContent
          titulofoto.classList.add("text-dark")

          let descripcioncinfo=document.getElementById("descripcioninfo")
          descripcioncinfo.textContent=evento.target.parentElement.querySelector("p").textContent
          descripcioncinfo.classList.add("text-dark")

          let precioinfo=document.getElementById("precioinfo")
          precioinfo.textContent=evento.target.parentElement.querySelector("h5").textContent
          precioinfo.classList.add("text-warning")

          modalinfo.show()
          
     }
})
