document.addEventListener('DOMContentLoaded',() =>{
    axios.get('http://localhost:3000/clientes?token=123').then(respuesta =>{
       
    
        const clientes = respuesta.data;
       
        /*const nombres = document.getElementById('nombre');
        const apellidos = document.getElementById('apellido');
        const correos = document.getElementById('apellido');
        const contraseñas = document.getElementById('apellido');
        const direcciones = document.getElementById('apellido');
       */

        const container = document.getElementById('container');

        clientes.forEach(cliente => {
        
            const id = cliente._id;
            const nombre = cliente.nombre;
            const apellido = cliente.apellido;
            const correo = cliente.correo;
            const contraseña = cliente.contraseña;
            const direccion = cliente.direccion;

            const fila = document.createElement('tr');
            const ID = document.createElement('td');
            const name = document.createElement('td');
            const last = document.createElement('td');
            const mail = document.createElement('td');
            const password = document.createElement('td');
            const address = document.createElement('td');


            ID.innerText = id;
            name.innerText = nombre;
            last.innerText = apellido;
            mail.innerText = correo;
            password.innerText = contraseña;
            address.innerText = direccion;
            

            fila.append(ID);
            fila.append(name);
            fila.append(last);
            fila.append(mail);
            fila.append(password);
            fila.append(address);
            container.append(fila);
            
           
            
        });

        

    });
});

