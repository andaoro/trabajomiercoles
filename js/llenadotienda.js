//creando un arreglo de objetos
//crear 10 productos
let productos=
[
     {foto: 'img/articulos/peluche_tanjiro.jpg', nombre:"peluche Tanjiro",precio:120000,descripcion:"Peluche de 20 cms basado en el personaje Kamado tanjiro"},
     {foto: 'img/articulos/peluche_rengoku.jpg', nombre:"peluche Rengoku",precio:120000,descripcion:"Peluche de 20 cms basado en el personaje Kyoujuro Rengoku"},
     {foto: 'img/articulos/peluche_douma.jpg', nombre:"peluche Douma ",precio:120000,descripcion:"Peluche de 20 cms basado en el personaje Douma"},
     {foto: 'img/articulos/camiseta.jpg', nombre:"camiseta",precio:80000,descripcion:"Camisa estampada de alta calidad"},
     {foto: 'img/articulos/Figuras.jpg', nombre:"Figuras",precio:110000,descripcion:"Figuras chibi del anime kimetsu No Yaiba"},
     {foto: 'img/articulos/aretes.jpg', nombre:"Aretes",precio:12000,descripcion:"Aretes de los personajes del anime kimetsu No Yaiba"},
     {foto: 'img/articulos/kimono.jpg', nombre:"Kimonos",precio:65000,descripcion:"kimonos de distintas tallas de los personajes del anime kimetsu No Yaiba"},
     {foto: 'img/articulos/lamparas.jpg', nombre:"Lamparas",precio:30000,descripcion:"Lamparas led de los personajes del anime kimetsu No Yaiba"},
     {foto: 'img/articulos/mangas.jpg', nombre:"Mangas",precio:25000,descripcion:"Tomos del manga (1 - 23) del anime Kimetsu No Yaiba"},
     {foto: 'img/articulos/llaveros.jpg', nombre:"Llaveros",precio:15000,descripcion:"Llaveros metalicos de la tematica del anime"},

]
//1. creo una variable para almacenar la base para pintar
let fila=document.getElementById("filas")

productos.forEach(function(producto){
     console.log(producto.foto)
     console.log(producto.nombre)
     console.log(producto.precio)

     //pintando etiquetas
     //div con la clase col
     let columna=document.createElement("div")
     columna.classList.add("col")

     let tarjeta=document.createElement("div")
     tarjeta.classList.add("card")
     tarjeta.classList.add("h-100")

     let foto=document.createElement("img")
     foto.classList.add("card-img-top")
     foto.src=producto.foto
     
     let nombre=document.createElement("h4")
     nombre.classList.add("text-center")
     nombre.textContent=producto.nombre

     let descripcion = document.createElement("p")
     descripcion.textContent=producto.descripcion

     //PADRES E HIJOS

     tarjeta.appendChild(nombre)
     tarjeta.appendChild(foto)
     tarjeta.appendChild(descripcion)
     columna.appendChild(tarjeta)
     filas.appendChild(columna)
})

