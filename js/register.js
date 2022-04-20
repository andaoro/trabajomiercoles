import {getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js"

let boton = document.getElementById("botonregistro")

boton.addEventListener("click",function(evento){
    evento.preventDefault()
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value
    
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("exito en el registro")
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("fallo"+errorMessage)
    });

})