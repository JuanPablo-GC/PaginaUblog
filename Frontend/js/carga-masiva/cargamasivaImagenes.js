
async function cargamasivaImagenes(){
    let archivo = document.getElementById('inputCM').files[0]
    console.log(archivo)

    const reader = new FileReader();

    reader.addEventListener("load", (event) => {
        console.log(event.target.result)
        enviarInfo(JSON.parse(event.target.result))
    })

    reader.readAsText(archivo, "UTF-8")
    
}

async function enviarInfo(jsonCM){
    console.log(jsonCM)
    const rawResponse = await fetch("https://servidor-ipc1-201901598.herokuapp.com/imagenes/carga-masiva", {
        method: "POST",
        body: JSON.stringify({ "imagenes": jsonCM.imagenes }),
        headers: { "Content-Type": "application/json" },
    })

    console.log(rawResponse)
    const response = await rawResponse.json()
    console.log(response)

    location.reload()
}