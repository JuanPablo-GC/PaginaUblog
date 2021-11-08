const txteliminarpublicacion2 = document.getElementById('txteliminarpublicacion')





async function eliminarimagen(){
    // `${nombre_variable}`
    //alert(`${txtCorreo.value} ${txtPassword.value}`)
    
    const data = {"url": txteliminarpublicacion2.value, }

    // Peticion a servidor con fetch
    // await -> esperar a que la peticion se termine
    const rawResponse = await fetch("https://servidor-ipc1-201901598.herokuapp.com/Eliminarimagen", {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })


    // Convertir de STRING a JSON
    const response = await rawResponse.json()
    if (rawResponse.status == 200){
        
        alert(`Publicacion Eliminada Correctamente`)
        location.reload()
        
    } else {
        alert(`Publicacion no encontrada`)
    }
    }