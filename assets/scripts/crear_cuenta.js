document.addEventListener('DOMContentLoaded',() =>{
    const formulario = document.getElementById('login_form');

    formulario.addEventListener('submit',(e) =>{
        console.log('Evento submit', e);
        e.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const correo = document.getElementById("correo").value;
        const direccion = document.getElementById("direccion").value;
        const password = document.getElementById("password").value;
        
        
        const datos = {
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            direccion: direccion,
            contraseña: password
        }

        axios.post('http://localhost:3000/clientes?token=123',datos).then(respuesta =>{
            console.log('Token',respuesta.data);
            window.location = '/inicio.html';
        });

    })

})