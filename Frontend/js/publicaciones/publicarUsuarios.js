async function getPublicaciones(){

    const rawResponse = await fetch("https://servidor-ipc1-201901598.herokuapp.com/usuarios", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const response = await rawResponse.json()
    const arregloUsuarios = response.data;
    console.log(arregloUsuarios)

    let codigoHtml = ``

    for(let i=0; i<arregloUsuarios.length; i++){
        codigoHtml += `\n<div class="col-lg-4">
        <div class="card mb-4">
         
        <div class="card-body">
        
        <p class="card-text">&nbsp;&nbsp;&nbsp;&nbsp;Nombre: ${arregloUsuarios[i].nombre}</p>
        <p class="card-text">&nbsp;&nbsp;&nbsp;&nbsp;Nombre de Usuario: ${arregloUsuarios[i].Nombreusuario}</p>
        <p class="card-text">&nbsp;&nbsp;&nbsp;&nbsp;Correo: ${arregloUsuarios[i].correo}</p>
        <p class="card-text">&nbsp;&nbsp;&nbsp;&nbsp;Genero: ${arregloUsuarios[i].genero}</p>
        
        </div>
        </div>
        </div>`
    

    }





    $('#publicaciones').append(codigoHtml)
    
}