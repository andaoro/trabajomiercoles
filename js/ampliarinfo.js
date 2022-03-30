//modal

export function ampliarinformacion(evento){

    let producto={}

    //lleno info del producto
    producto.foto= evento.target.parentElement.querySelector("img").src
    producto.titulo=evento.target.parentElement.querySelector("h4").textContent
    producto.precio=evento.target.parentElement.querySelector("h5").textContent
    producto.descripcion=evento.target.parentElement.querySelector("p").textContent
    
    let fotoinfo=document.getElementById("fotoinfo")
    fotoinfo.src= evento.target.parentElement.querySelector("img").src

    let titulofoto=document.getElementById("nombreinfo")
    titulofoto.textContent=evento.target.parentElement.querySelector("h4").textContent
    titulofoto.classList.add("text-light")

    let descripcioncinfo=document.getElementById("descripcioninfo")
    descripcioncinfo.textContent=evento.target.parentElement.querySelector("p").textContent
    descripcioncinfo.classList.add("text-light")

    let precioinfo=document.getElementById("precioinfo")
    precioinfo.textContent=evento.target.parentElement.querySelector("h5").textContent
    precioinfo.classList.add("text-warning")


    //devolver el producto
    return producto
}
          

          
          
  