const txtnombreA = document.getElementById('txtnombreA')
const txtusuarioA = document.getElementById('txtusuarioA')
const txtcorreoA = document.getElementById('txtcorreoA')
const txtcontraseñaA = document.getElementById('txtcontraseñaA')
const txtgeneroA = document.getElementById('txtgeneroA')




async function actualizar(){
    // `${nombre_variable}`
    //alert(`${txtCorreo.value} ${txtPassword.value}`)
    
    const data = {"nombre": txtnombreA.value, "pwd": txtcontraseñaA.value, "correo": txtcorreoA.value, "genero": txtgeneroA.value,"Nombreusuario": txtusuarioA.value, }

    // Peticion a servidor con fetch
    // await -> esperar a que la peticion se termine
    const rawResponse = await fetch("https://servidor-ipc1-201901598.herokuapp.com/usuarioActualizar", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })


    // Convertir de STRING a JSON
    const response = await rawResponse.json()
    if (rawResponse.status == 200){
        // localStorage para almacenar la informacion
        
        localStorage.setItem("usuario", JSON.stringify(response.data))
        alert(`Usuario actualizado`)
        location.reload()
        
    } else {
        alert(`Error al buscar el usuarios`)
    }
}