document.addEventListener('DOMContentLoaded',() =>{
    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit',(e) =>{
        console.log('Evento submit', e);
        e.preventDefault();

        const correo = document.getElementById('correo').value;
        const contraseña = document.getElementById('password').value;

        const datos = {
            correo: correo,
            contraseña: contraseña
        }


        axios.post('http://localhost:3000/iniciar_sesion?token=123',datos).then(respuesta =>{
            console.log('Token',respuesta.data);
            window.location = '/inicio.html';
        }).catch(err =>{
            alert("Las credenciales no son válidas");
        })

    })

})
