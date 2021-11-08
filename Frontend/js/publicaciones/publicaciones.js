

async function getPublicaciones(){

    const rawResponse = await fetch("https://servidor-ipc1-201901598.herokuapp.com/imagenes", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const response = await rawResponse.json()
    const arregloPublicaciones = response.data;
    console.log(arregloPublicaciones)

    let codigoHtml = ``

    for(let i=0; i<arregloPublicaciones.length; i++){
        codigoHtml += `\n<div class="col-lg-4">
        <div class="card mb-4">
        <center>
        <img src="${arregloPublicaciones[i].url}" style="width: 20rem;" 
        
        <div class="card-body">
        <p class="card-text">&nbsp;&nbsp;&nbsp;&nbsp;Fecha: ${arregloPublicaciones[i].date}</p>
        <p class="card-text">&nbsp;&nbsp;&nbsp;&nbsp;Categoria: ${arregloPublicaciones[i].category}</p>
        <p class="card-text">&nbsp;&nbsp;&nbsp;&nbsp;Autor: ${arregloPublicaciones[i].author}</p>
        <a href="${arregloPublicaciones[i].url}" class="btn btn-primary">Ver imagen</a>
        </div>
        </div>
        </div>`
    }

    $('#publicaciones').append(codigoHtml)
    
}