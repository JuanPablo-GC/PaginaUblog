const txtnombre = document.getElementById('txtnombre')
const txtusuario = document.getElementById('txtusuario')
const txtcorreo = document.getElementById('txtcorreo')
const txtcontraseña = document.getElementById('txtcontraseña')
const txtgenero = document.getElementById('txtgenero')




async function registro(){
    // `${nombre_variable}`
    //alert(`${txtCorreo.value} ${txtPassword.value}`)
    
    const data = {"nombre": txtnombre.value, "pwd": txtcontraseña.value, "correo": txtcorreo.value, "genero": txtgenero.value,"Nombreusuario": txtusuario.value, }

    // Peticion a servidor con fetch
    // await -> esperar a que la peticion se termine
    const rawResponse = await fetch("https://servidor-ipc1-201901598.herokuapp.com/usuario", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })


    // Convertir de STRING a JSON
    const response = await rawResponse.json()
    if (rawResponse.status == 200){
        // localStorage para almacenar la informacion
        localStorage.setItem("usuario", JSON.stringify(response.data))
        alert(`Usuario creado`)
        location.reload()
        
    } else {
        alert(`${response.mensaje}`)
    }
}