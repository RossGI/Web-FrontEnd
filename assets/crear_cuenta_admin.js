document.addEventListener('DOMContentLoaded',() =>{
    const formulario = document.getElementById('login_form');

    formulario.addEventListener('submit',(e) =>{
        console.log('Evento submit', e);
        e.preventDefault();
        const nombre = document.getElementById("nombre").value;
        const apellido = document.getElementById("apellido").value;
        const correo = document.getElementById("correo").value;
        const telefono = document.getElementById("telefono").value;
        const puesto = document.getElementById("puesto").value;
        const contraseña = document.getElementById("password").value;
        const rfc = document.getElementById("rfc").value;
        const rol = document.getElementById("rol").value;
        
        
        const datos = {
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            telefono: telefono,
            puesto: puesto,
            rol: rol,
            rfc: rfc,
            contraseña: contraseña
            
        }

        axios.post('https://paqueteria-backend.herokuapp.com/empleados?token=123',datos).then(respuesta =>{
            console.log('Token',respuesta.data);
            window.location = '/login_admin.html';
        });

    })

})