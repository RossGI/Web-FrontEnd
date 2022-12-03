document.addEventListener('DOMContentLoaded',() =>{
    const formulario = document.getElementById('login_form');

    formulario.addEventListener('submit',(e) =>{
        console.log('Evento submit', e);
        e.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const correo = document.getElementById("correo").value;
        const telefono = document.getElementById("telefono").value;
        const direccion = document.getElementById("direccion").value;
        const contraseña = document.getElementById("password").value;
        const rfc = document.getElementById("rfc").value;
        
        
        const datos = {
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            telefono: telefono,
            direccion: direccion,
            rfc: rfc,
            contraseña: contraseña
            
        }

        axios.post('https://paqueteria-backend.herokuapp.com/clientes?token=123',datos).then(respuesta =>{
            console.log('Token',respuesta.data);
            window.location = '/index.html';
        });


    

    })

})