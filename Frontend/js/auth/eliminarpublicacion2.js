const txteliminarpublicacion = document.getElementById('txteliminarpublicacion')





async function eliminarvideo(){
    // `${nombre_variable}`
    //alert(`${txtCorreo.value} ${txtPassword.value}`)
    
    const data = {"url": txteliminarpublicacion.value, }

    // Peticion a servidor con fetch
    // await -> esperar a que la peticion se termine
    const rawResponse = await fetch("https://servidor-ipc1-201901598.herokuapp.com/Eliminarvideo", {
        method: "DELETE",
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })


    // Convertir de STRING a JSON
    const response = await rawResponse.json()
   
    }