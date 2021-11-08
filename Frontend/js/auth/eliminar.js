const txteliminarusuario = document.getElementById('txteliminarusuario')





async function eliminar(){
    // `${nombre_variable}`
    //alert(`${txtCorreo.value} ${txtPassword.value}`)
    
    const data = {"Nombreusuario": txteliminarusuario.value, }

    // Peticion a servidor con fetch
    // await -> esperar a que la peticion se termine
    const rawResponse = await fetch("https://servidor-ipc1-201901598.herokuapp.com/usuarios", {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })


    // Convertir de STRING a JSON
    const response = await rawResponse.json()
    if (rawResponse.status == 200){
        
        alert(`Usuario Eliminado Correctamente`)
        location.reload()
        
    } else {
        alert(`Usuario no encontrado`)
    }
    }