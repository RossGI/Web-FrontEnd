document.addEventListener('DOMContentLoaded',() =>{
    const formulario = document.getElementById('formulario_cotizar');

    formulario.addEventListener('submit',(e) =>{
        console.log('Evento submit', e);
        e.preventDefault();
        const fecha = new Date();
        const anio = fecha.getFullYear();
        const mes = fecha.getMonth() + 1;
        const dia = fecha.getDate();
        const fechacotizacion = [dia,mes,anio].join('/');
        const origen = document.getElementById("origenCoti").value;
        const destino = document.getElementById("destinoCoti").value;
        const tipoenvio = document.getElementById("tipoenvioCoti").value;
        const id_cliente = document.getElementById('id_cliente').value;
        const entrega_horas = document.getElementById("fechaentregaCoti");

        var dias = 1;

        var variantes = 0;

        if(tipoenvio === 'Especial'){
            variantes+=100;
        }

        if(entrega_horas.value === '48horas'){
            dias = 2;
            variantes+=60
        }
        else if(entrega_horas.value === '72horas'){
            dias = 3;
            variantes+=20
        }
      

        const entrega_formato = new Date();
        entrega_formato.setDate(fecha.getDate() + dias);
        
        const anio2 = entrega_formato.getFullYear();
        const mes2 = entrega_formato.getMonth() + 1;
        const dia2 = entrega_formato.getDate();
        const fechaentrega = [dia2,mes2,anio2].join('/');
        const pesogr = parseInt(document.getElementById("pesoCoti").value);
        const alto = parseInt(document.getElementById("alturaCoti").value);
        const largo = parseInt(document.getElementById("largoCoti").value);
        const ancho = parseInt(document.getElementById("anchoCoti").value);

      
        variantes = parseInt(variantes);

        const total = parseInt((alto + largo + ancho) + variantes + (pesogr/2));
        
        
        const datos = {
            referencia: id_cliente,
            fechacotizacion: fechacotizacion,
            origen: origen,
            destino: destino,
            tipoenvio: tipoenvio,
            fechaentrega: fechaentrega,
            pesogr: pesogr,
            alto: alto,
            largo: largo,
            ancho: ancho,
            total: total
            
        }

        
        

        axios.post('http://localhost:3000/cotizaciones?token=123',datos).then(respuesta =>{
            console.log('Token',respuesta.data);
            window.location = '/login_admin.html';
    
        });



    })

})

