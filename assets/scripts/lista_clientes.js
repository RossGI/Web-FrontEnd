document.addEventListener('DOMContentLoaded',() =>{

    const contenedor = document.getElementById('container');

    var url = 'http://localhost:3000/clientes?token=123';

    listas(contenedor,url);


    const activos = document.getElementById('activos');

    activos.addEventListener('click',function(){

        url = 'http://localhost:3000/clientes?token=123&activos=true';
        listas(contenedor,url);
       
    })

    const todos = document.getElementById('todos');

    todos.addEventListener('click',function(){
        url = 'http://localhost:3000/clientes?token=123';
        listas(contenedor,url);
    })

    const no_activos = document.getElementById('no_activos');

    no_activos.addEventListener('click',function(){
        url = 'http://localhost:3000/clientes?token=123&activos=false';
        listas(contenedor,url);
    })


   


});





function listas(contenedor,url){


    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.lastChild);
    }

    axios.get(url).then(respuesta =>{
       
    
        const clientes = respuesta.data;
       
        const container = document.getElementById('container');

        clientes.forEach(cliente => {
        
           

            const fila = document.createElement('tr');
            const id = document.createElement('td');
            const nombre = document.createElement('td');
            const apellido = document.createElement('td');
            const correo = document.createElement('td');
            const telefono = document.createElement('td');
            const direccion = document.createElement('td');
            const rfc = document.createElement('td');
            const contraseña = document.createElement('td');
            const estatus = document.createElement('td');


            id.innerText = cliente._id;
            nombre.innerText = cliente.nombre;
            apellido.innerText = cliente.apellido;
            correo.innerText = cliente.correo;
            telefono.innerText = cliente.telefono;
            direccion.innerText = cliente.direccion;
            rfc.innerText = cliente.rfc;
            contraseña.innerText = cliente.contraseña;
            estatus.innerText = cliente.status;
            

            id.setAttribute(
                'style',
                'font-weight: bold;',
            );

            if(estatus.innerText === '1'){
                estatus.setAttribute(
                    'style',
                    'background-color: green; color: white;',
                );
            }
            else{
                estatus.setAttribute(
                    'style',
                    'background-color: salmon; color: white;',
                );
            }
           
            

            fila.append(id);
            fila.append(nombre);
            fila.append(apellido);
            fila.append(correo);
            fila.append(telefono);
            fila.append(direccion);
            fila.append(rfc);
            fila.append(contraseña);
            fila.append(estatus);
           

            container.append(fila);


    
            
        });


        

    });
}