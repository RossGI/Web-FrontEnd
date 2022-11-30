document.addEventListener('DOMContentLoaded',() =>{

    //Clientes 

    const opciones = document.getElementById("clientes");

    const contenedor_clientes = document.getElementById('contenedor_clientes');

    var url = 'http://localhost:3000/clientes?token=123';

    listarClientes(contenedor_clientes,url);

    opciones.addEventListener("change", function() {
        if(opciones.value === "todos")
        {
            url = 'http://localhost:3000/clientes?token=123';
            
        }

        else if(opciones.value === "activos"){
            url = 'http://localhost:3000/clientes?token=123&activos=true';
            
        }

        else if(opciones.value === "no_activos"){
            url = 'http://localhost:3000/clientes?token=123&activos=false';
            
        }

        listarClientes(contenedor_clientes,url);


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
        listarUnCliente(contenedor_clientes,url);
    })

    

    //Empleados 
//-----------------------------------------------------------------------------------------------------


    const contenedor_empleados = document.getElementById('contenedor_empleados');

    var url_empleados = 'http://localhost:3000/empleados?token=123';
    

    listarEmpleados(contenedor_empleados,url_empleados);



    const todos_empleados = document.getElementById("todos_empleados");

    todos_empleados.addEventListener("click",function(){
        url_empleados = "http://localhost:3000/empleados?token=123";
        listarEmpleados(contenedor_empleados,url_empleados);
    })


    const buscar_empleado_boton = document.getElementById("buscar_empleado_boton");

    buscar_empleado_boton.addEventListener("click",function(){
        const buscar_empleado = document.getElementById("buscar_empleado").value;
        url_empleados = "http://localhost:3000/empleados/"+buscar_empleado+"?token=123";
        listarUnEmpleado(contenedor_empleados,url_empleados);
    })



    const desactivar_empleado_boton = document.getElementById("desactivar_empleado_boton");


    desactivar_empleado_boton.addEventListener("click",function(){
        const desactivar_empleado = document.getElementById("desactivar_empleado").value;
        
        axios.delete("http://localhost:3000/empleados/"+desactivar_empleado+"?token=123").then(respuesta =>{
            alert("empleado eliminado");
        }).catch(err =>{
            alert("No se pudo eliminar al empleado");
        })
    })


            //Cotizaciones

    //------------------------------------------------------------------------------------------------------------


    const opciones_cotizaciones = document.getElementById("cotizaciones");

    const contenedor_cotizaciones = document.getElementById('contenedor_cotizaciones');

    var url_cotizaciones = 'http://localhost:3000/cotizaciones?token=123';

    listarCotizaciones(contenedor_cotizaciones,url_cotizaciones);

    opciones_cotizaciones.addEventListener("change", function() {
        if(opciones_cotizaciones.value === "todos")
        {
            url_cotizaciones = 'http://localhost:3000/cotizaciones?token=123';
            
        }

        else if(opciones_cotizaciones.value === "activos"){
            url_cotizaciones = 'http://localhost:3000/cotizaciones?token=123&activos=true';
            
        }

        else if(opciones_cotizaciones.value === "no_activos"){
            url_cotizaciones = 'http://localhost:3000/cotizaciones?token=123&activos=false';
            
        }

        listarCotizaciones(contenedor_cotizaciones,url_cotizaciones);


    });


    const activar_cotizacion = document.getElementById("activar_cotizacion");
    const desactivar_cotizacion = document.getElementById("desactivar_cotizacion");


    activar_cotizacion.addEventListener("click",function(){
        const id_cotizacion = document.getElementById("estatus_cotizaciones").value;
        
        axios.put("http://localhost:3000/cotizaciones/"+id_cotizacion+"/activar?token=123").then(respuesta =>{
            alert("Cotización activada");
        }).catch(err =>{
            alert("No se pudo activar la cotización");
        })
    })


    desactivar_cotizacion.addEventListener("click",function(){
        const id_cotizacion = document.getElementById("estatus_cotizaciones").value;
        
        axios.delete("http://localhost:3000/cotizaciones/"+id_cotizacion+"?token=123").then(respuesta =>{
            alert("Cotización desactivada");
        }).catch(err =>{
            alert("No se pudo desactivar la cotización");
        })
    })


    const buscar_cotizacion_boton = document.getElementById("buscar_cotizacion_boton");

    buscar_cotizacion_boton.addEventListener("click",function(){
        const buscar_cotizacion = document.getElementById("buscar_cotizacion").value;
        url_cotizaciones = "http://localhost:3000/cotizaciones/"+buscar_cotizacion+"?token=123";
        listarUnaCotizacion(contenedor_cotizaciones,url_cotizaciones);
    })




});





function listarClientes(contenedor,url){

    contenedor.innerHTML = '';

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



function listarUnCliente(contenedor,url){


    contenedor.innerHTML = '';

    
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

            
        
        
        

    }).catch(err =>{
        alert("No se encontró al cliente");
    })
}




function listarEmpleados(contenedor,url){


    contenedor.innerHTML = '';

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



function listarUnEmpleado(contenedor,url){


    contenedor.innerHTML = '';

    
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

            
    
    }).catch(err =>{
        alert("No se encontró al empleado");
    })
}



function listarCotizaciones(contenedor,url){

    contenedor.innerHTML = '';

    axios.get(url).then(respuesta =>{
       
        
        const cotizaciones = respuesta.data;
   
  
        for (let i = 0; i < cotizaciones.length; i++) {
            const fila = document.createElement('tr');
            const id = document.createElement('td');
            const id_cliente = document.createElement('td');
            const fechacotizacion = document.createElement('td');
            const origen = document.createElement('td');
            const destino = document.createElement('td');
            const tipoenvio = document.createElement('td');
            const pesogr = document.createElement('td');
            const medidas = document.createElement('td');
            const fechaentrega = document.createElement('td');
            const total = document.createElement('td');
            const estatus = document.createElement('td');


            const datos_cotizacion = [id,id_cliente,fechacotizacion,origen,destino,tipoenvio,pesogr,medidas,fechaentrega,total,estatus];


            id.innerText = cotizaciones[i]._id;
            id_cliente.innerText = cotizaciones[i].referencia;
            fechacotizacion.innerText = cotizaciones[i].fechacotizacion;
            origen.innerText = cotizaciones[i].origen;
            destino.innerText = cotizaciones[i].destino;
            tipoenvio.innerText = cotizaciones[i].tipoenvio;
            pesogr.innerText = cotizaciones[i].pesogr;
            medidas.innerText = cotizaciones[i].largo + "x" +  cotizaciones[i].ancho + "x" +  cotizaciones[i].alto;
            fechaentrega.innerText = cotizaciones[i].fechaentrega;
            total.innerText = cotizaciones[i].total;
            estatus.innerText = cotizaciones[i].status;
            
            

            id.setAttribute(
                'style',
                'font-weight: bold;',
            );

            if(estatus.innerText === '1'){
                estatus.innerText = "Pendiente";
                estatus.setAttribute(
                    'style',
                    'background-color: gray; color: white;',
                );
            }
            else{
                estatus.innerText = "Atendido";
                estatus.setAttribute(
                    'style',
                    'background-color: red; color: white;',
                );
            }
           

            datos_cotizacion.forEach(dato=>{
                fila.append(dato);
            });


            contenedor.append(fila);

            
        }
        
        

    });
}






function listarUnaCotizacion(contenedor,url){

    contenedor.innerHTML = '';

    axios.get(url).then(respuesta =>{
       
        
        const cotizaciones = respuesta.data;
   
  
        
            const fila = document.createElement('tr');
            const id = document.createElement('td');
            const id_cliente = document.createElement('td');
            const fechacotizacion = document.createElement('td');
            const origen = document.createElement('td');
            const destino = document.createElement('td');
            const tipoenvio = document.createElement('td');
            const pesogr = document.createElement('td');
            const medidas = document.createElement('td');
            const fechaentrega = document.createElement('td');
            const total = document.createElement('td');
            const estatus = document.createElement('td');


            const datos_cotizacion = [id,id_cliente,fechacotizacion,origen,destino,tipoenvio,pesogr,medidas,fechaentrega,total,estatus];


            id.innerText = cotizaciones._id;
            id_cliente.innerText = cotizaciones.referencia;
            fechacotizacion.innerText = cotizaciones.fechacotizacion;
            origen.innerText = cotizaciones.origen;
            destino.innerText = cotizaciones.destino;
            tipoenvio.innerText = cotizaciones.tipoenvio;
            pesogr.innerText = cotizaciones.pesogr;
            medidas.innerText = cotizaciones.largo + "x" +  cotizaciones.ancho + "x" +  cotizaciones.alto;
            fechaentrega.innerText = cotizaciones.fechaentrega;
            total.innerText = cotizaciones.total;
            estatus.innerText = cotizaciones.status;
            
            

            id.setAttribute(
                'style',
                'font-weight: bold;',
            );

            if(estatus.innerText === '1'){
                estatus.innerText = "Pendiente";
                estatus.setAttribute(
                    'style',
                    'background-color: gray; color: white;',
                );
            }
            else{
                estatus.innerText = "Atendido";
                estatus.setAttribute(
                    'style',
                    'background-color: red; color: white;',
                );
            }
           

            datos_cotizacion.forEach(dato=>{
                fila.append(dato);
            });


            contenedor.append(fila);

            
        
        
        

    });
}