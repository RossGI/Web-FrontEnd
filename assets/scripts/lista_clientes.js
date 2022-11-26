document.addEventListener('DOMContentLoaded',() =>{

    const opciones = document.getElementById("clientes");

    const contenedor = document.getElementById('container');

    var url = 'http://localhost:3000/clientes?token=123';
    

    listas(contenedor,url);

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

        listas(contenedor,url);

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
    
    


});





function listas(contenedor,url){


    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.lastChild);
    }

    axios.get(url).then(respuesta =>{
       
    
        const clientes = respuesta.data;
       
      

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


            const datos_cliente = [id,nombre,apellido,correo,telefono,direccion,rfc,contraseña,estatus];


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
           

            datos_cliente.forEach(dato=>{
                fila.append(dato);
            });


            contenedor.append(fila);
    
            
        });


        

    });
}