document.addEventListener('DOMContentLoaded',() =>{

    const opciones = document.getElementById("clientes");

    const contenedor = document.getElementById('contenedor_clientes');

    var url = 'http://localhost:3000/clientes?token=123';

    

    listas_clientes(contenedor,url);

    opciones.addEventListener("change", function() {
        if(opciones.value == "todos")
        {
            url = 'http://localhost:3000/clientes?token=123';
            
        }

        else if(opciones.value === "activos"){
            url = 'http://localhost:3000/clientes?token=123&activos=true';
            
        }

        else if(opciones.value === "no_activos"){
            url = 'http://localhost:3000/clientes?token=123&activos=false';
            
        }

        listas_clientes(contenedor,url);


    });

    const activar = document.getElementById("activar");
    const desactivar = document.getElementById("desactivar");


    activar.addEventListener("click",function(){
        const id_cliente = document.getElementById("estatus_clientes").value;
        
        axios.put("http://localhost:3000/clientes/"+id_cliente+"/activar?token=123").then(respuesta =>{
            alert("Cliente activado");
        }).catch(err =>{
            alert("No se pudo activar al cliente");
        })
    })


    desactivar.addEventListener("click",function(){
        const id_cliente = document.getElementById("estatus_clientes").value;
        
        axios.delete("http://localhost:3000/clientes/"+id_cliente+"?token=123").then(respuesta =>{
            alert("Cliente desactivado");
        }).catch(err =>{
            alert("No se pudo desactivar al cliente");
        })
    })


    
    const buscar = document.getElementById("buscar");

    buscar.addEventListener("click",function(){
        const buscar_cliente = document.getElementById("buscar_cliente").value;
        url = "http://localhost:3000/clientes/"+buscar_cliente+"?token=123";
        listas_cliente(contenedor,url);
    })

    


    const contenedor_empleados = document.getElementById('contenedor_empleados');

    var url_empleados = 'http://localhost:3000/empleados?token=123';
    

    listas_empleados(contenedor_empleados,url_empleados);



    const todos_empleados = document.getElementById("todos_empleados");

    todos_empleados.addEventListener("click",function(){
        url_empleados = "http://localhost:3000/empleados?token=123";
        listas_empleados(contenedor_empleados,url_empleados);
    })


    const buscar_empleado_boton = document.getElementById("buscar_empleado_boton");

    buscar_empleado_boton.addEventListener("click",function(){
        const buscar_empleado = document.getElementById("buscar_empleado").value;
        url_empleados = "http://localhost:3000/empleados/"+buscar_empleado+"?token=123";
        listas_empleado(contenedor_empleados,url_empleados);
    })



    const desactivar_empleado_boton = document.getElementById("desactivar_empleado_boton");


    desactivar_empleado_boton.addEventListener("click",function(){
        const desactivar_empleado = document.getElementById("desactivar_empleado").value;
        
        axios.delete("http://localhost:3000/clientes/"+desactivar_empleado+"?token=123").then(respuesta =>{
            alert("empleado eliminado");
        }).catch(err =>{
            alert("No se pudo eliminar al empleado");
        })
    })




});





function listas_clientes(contenedor,url){


    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.lastChild);
    }

    

    axios.get(url).then(respuesta =>{
       
        
    
        const clientes = respuesta.data;
   

      
        for (let i = 0; i < clientes.length; i++) {
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


            const datos_cliente = [id,nombre,apellido,correo,telefono,direccion,rfc,contraseña,estatus];


            id.innerText = clientes[i]._id;
            nombre.innerText = clientes[i].nombre;
            apellido.innerText = clientes[i].apellido;
            correo.innerText = clientes[i].correo;
            telefono.innerText = clientes[i].telefono;
            direccion.innerText = clientes[i].direccion;
            rfc.innerText = clientes[i].rfc;
            contraseña.innerText = clientes[i].contraseña;
            estatus.innerText = clientes[i].status;
            

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
           

            datos_cliente.forEach(dato=>{
                fila.append(dato);
            });


            contenedor.append(fila);

            
        }
        
        

    });
}



function listas_cliente(contenedor,url){


    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.lastChild);
    }

    
    axios.get(url).then(respuesta =>{
       
        
    
        const clientes = respuesta.data;
   
       
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


        const datos_cliente = [id,nombre,apellido,correo,telefono,direccion,rfc,contraseña,estatus];


        id.innerText = clientes._id;
        nombre.innerText = clientes.nombre;
        apellido.innerText = clientes.apellido;
        correo.innerText = clientes.correo;
        telefono.innerText = clientes.telefono;
        direccion.innerText = clientes.direccion;
        rfc.innerText = clientes.rfc;
        contraseña.innerText = clientes.contraseña;
        estatus.innerText = clientes.status;
            

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
           

        datos_cliente.forEach(dato=>{
            fila.append(dato);
        });


        contenedor.append(fila);

            
        
        
        

    });
}




function listas_empleados(contenedor,url){


    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.lastChild);
    }

    axios.get(url).then(respuesta =>{
       
    
        const empleados = respuesta.data;
       
      

        empleados.forEach(empleado => {
        


            const fila = document.createElement('tr');


            const id = document.createElement('td');
            const nombre = document.createElement('td');
            const apellido = document.createElement('td');
            const correo = document.createElement('td');
            const telefono = document.createElement('td');
            const puesto = document.createElement('td');
            const rol = document.createElement('td');
            const rfc = document.createElement('td');
            const contraseña = document.createElement('td');
            


            const datos_empleado = [id,nombre,apellido,correo,telefono,puesto,rol,rfc,contraseña];


            id.innerText = empleado._id;
            nombre.innerText = empleado.nombre;
            apellido.innerText = empleado.apellido;
            correo.innerText = empleado.correo;
            telefono.innerText = empleado.telefono;
            puesto.innerText = empleado.puesto;
            rol.innerText = empleado.rol;
            rfc.innerText = empleado.rfc;
            contraseña.innerText = empleado.contraseña;
            
            

            id.setAttribute(
                'style',
                'font-weight: bold;',
            );

           
           

            datos_empleado.forEach(dato=>{
                fila.append(dato);
            });


            contenedor.append(fila);
    
            
        });


        

    });
}



function listas_empleado(contenedor,url){


    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.lastChild);
    }

    
    axios.get(url).then(respuesta =>{
       
        
    
        const empleados = respuesta.data;
   
       
        const fila = document.createElement('tr');
        const id = document.createElement('td');
        const nombre = document.createElement('td');
        const apellido = document.createElement('td');
        const correo = document.createElement('td');
        const telefono = document.createElement('td');
        const puesto = document.createElement('td');
        const rol = document.createElement('td');
        const rfc = document.createElement('td');
        const contraseña = document.createElement('td');
        


        const datos_empleado = [id,nombre,apellido,correo,telefono,puesto,rol,rfc,contraseña];


        id.innerText = empleados._id;
        nombre.innerText = empleados.nombre;
        apellido.innerText = empleados.apellido;
        correo.innerText = empleados.correo;
        telefono.innerText = empleados.telefono;
        puesto.innerText = empleados.puesto;
        rol.innerText = empleados.rol;
        rfc.innerText = empleados.rfc;
        contraseña.innerText = empleados.contraseña;
       
            

        id.setAttribute(
            'style',
            'font-weight: bold;',
        );

       
           

        datos_empleado.forEach(dato=>{
            fila.append(dato);
        });


        contenedor.append(fila);

            
    
    });
}