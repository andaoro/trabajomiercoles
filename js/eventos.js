let etiqueta_boton = document.getElementById("button")

etiqueta_boton.addEventListener("click",cambiarFoto)

function cambiarFoto(){
    let titulo2=document.getElementById("titulo2")
    titulo2.textContent= "Buenos dias caballero"
}

let etiqueta_imagen = document.getElementById("fotozenitsu")

etiqueta_imagen.addEventListener("mouseover",cambiarTexto)


function cambiarTexto(){
    let tituloZ = document.getElementById("Titulozenitsu")
    tituloZ.textContent= "Zenitsu"
}