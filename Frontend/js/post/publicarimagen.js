const txturl = document.getElementById('txturl')

const txtcategory = document.getElementById('txtcategory')
const txtauthor = document.getElementById('txtauthor')

 



async function publicarimagen(){
    // `${nombre_variable}`
    //alert(`${txtCorreo.value} ${txtPassword.value}`)
    
    const data = {"url": txturl.value, "category": txtcategory.value, "author": txtauthor.value, }

    // Peticion a servidor con fetch
    // await -> esperar a que la peticion se termine
    const rawResponse = await fetch("https://servidor-ipc1-201901598.herokuapp.com/imagen", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    })


    // Convertir de STRING a JSON
    const response = await rawResponse.json()
    if (rawResponse.status == 200){
        // localStorage para almacenar la informacion
        localStorage.setItem("usuario", JSON.stringify(response.data))
        alert(`Imagen publicada`)
        location.reload()
        
    } else {
        alert(`${response.mensaje}`)
    }




}