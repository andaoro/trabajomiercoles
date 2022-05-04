import { llenartienda } from "./llenadotienda.js"
import { ampliarinformacion } from "./ampliarinfo.js"


//creo un producto vacio
let producto = {}
//referencia al modal
let modalinfo = new bootstrap.Modal(document.getElementById('modalinfor'))
let modalcompra = new bootstrap.Modal(document.getElementById('resumencompra'))
//lleno tienda
llenartienda()

//rutina amplaiar info
let contenedorTienda = document.getElementById("filas")
contenedorTienda.addEventListener("click", function (evento) {
    if (evento.target.classList.contains("btn")) {


        producto = ampliarinformacion(evento)


        modalinfo.show()

    }
})


//rutina añadir carrito
let carrito = []
let anadir = document.getElementById("anadirc")
anadir.addEventListener("click", function () {

    //debo capturar la cantidad y agregar al producto

    let cantidad = document.getElementById("cantproducto").value


    producto.cantidad = cantidad

    let precio = (producto.precio)
    producto.subtotal = cantidad * Number(precio)





    //agrego producto al carrito
    carrito.push(producto)
    let suma = 0

    //pintar la capsula en el carrito
    carrito.forEach(function (producto) {
        suma = suma + Number(producto.cantidad)
    })

    document.getElementById("cantproducto").value = 1


    let capsula = document.getElementById("pildora")

    capsula.textContent = suma;
    capsula.classList.remove("invisible")




    modalinfo.hide()


})





let limpiarc = document.getElementById("limpiarc")
limpiarc.addEventListener("click", function () {

    carrito = []
    let capsula = document.getElementById("pildora")
    capsula.classList.add("invisible")
    modalcompra.hide()

})

//rutina para ver carrito



let botonvercarrito = document.getElementById("vcarrito")
botonvercarrito.addEventListener("click", function () {

    //recorrer el carrito y comprar los productos
    let base = document.getElementById("basecarro")

    base.innerHTML = ""

    carrito.forEach(function (producto) {


        let fila = document.createElement("div")
        fila.classList.add("row")

        let columna1 = document.createElement("div")
        columna1.classList.add("col-4")

        let columna2 = document.createElement("div")
        columna2.classList.add("col-8")




        let precio = document.createElement("p")
        precio.classList.add("text-light")
        precio.textContent = "Precio Unid: $" + producto.precio + " COP"



        let foto = document.createElement("img")
        foto.classList.add("w-100", "img-fluid")
        foto.src = producto.foto

        let nombre = document.createElement("p")
        nombre.classList.add("text-danger")
        nombre.textContent = producto.titulo

        let subt = document.createElement("p")
        subt.classList.add("text-light")


        subt.textContent = "Subtotal : $" + producto.subtotal + " COP"

        let fila2 = document.createElement("div")
        fila2.classList.add("row")


        let cant = document.createElement("p")
        cant.classList.add("text-light")
        cant.textContent = "cantidad : " + producto.cantidad





        let total = document.getElementById("totalp")
        total.classList.add("text-warning")
        let resultado = Number(producto.cantidad) * Number(producto.precio)
        total.textContent = resultado;




        producto.subtotal = resultado


        let totalneto = 0;

        carrito.forEach(function (producto) {
            totalneto = totalneto + Number(producto.subtotal)
            total.textContent = "Total : $" + totalneto + " COP"
        })


        let cop = document.getElementById("cop")
        cop.addEventListener("click", function () {
            let cop = totalneto

            total.textContent = "Total : $" + cop + " COP"

            precio.textContent = "Precio Unid: $" + producto.precio + " COP"
            let subtcop = producto.subtotal
            subt.textContent = "Subtotal : $" + subtcop + " COP"


        })

        let dolares = document.getElementById("usd")
        dolares.addEventListener("click", function () {
            let usd = 1 * totalneto / Number(4000)

            total.textContent = "Total : $" + usd + " USD"
            let preciousd = producto.precio / Number(4000)
            precio.textContent = "Precio Unid: $" + preciousd + " USD"
            let subtusd = producto.subtotal
            subt.textContent = "Subtotal : $" + subtusd / 4000 + " USD"

        })













        //padres e hijos

        columna1.appendChild(foto)
        columna2.appendChild(nombre)
        columna2.appendChild(precio)
        columna2.appendChild(cant)
        columna2.appendChild(subt)




        fila.appendChild(columna1)
        fila.appendChild(columna2)






        base.appendChild(fila)
    })












    modalcompra.show()

})




