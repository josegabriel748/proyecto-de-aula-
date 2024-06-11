document.getElementById('hamburguesa').addEventListener('click',function(){
    this.classList.toggle('active');
    document.getElementById('nav').classList.toggle('active');
})

document.getElementById('salir').onclick=()=>{
    localStorage.setItem('activo',JSON.stringify(false));
    location.reload();
}

window.addEventListener('load',function(){
    let isActive = false;
    const auth = this.localStorage.getItem('activo');
    if(auth != null) isActive = JSON.parse(auth);
    if(isActive){
        this.document.getElementById('salir').style.display = 'block';
        this.document.getElementById('login').style.display = 'none';
    }
    else{
        this.document.getElementById('salir').style.display = 'none';
        this.document.getElementById('login').style.display = 'block';
    }
})

document.getElementById('cerrar').onclick=()=>{
    document.getElementById('factura').classList.toggle('open');
}
document.getElementById('open').onclick=()=>{
    document.getElementById('factura').classList.toggle('open');

}

let negocio = new EventOptimizer();

document.getElementById('formulario').addEventListener('submit',function(e){
    e.preventDefault();

    let day = new Date().toLocaleDateString().split('/')[0];
    
    const numero_mesero = document.getElementById('numeroMeseros').value;
    const numero_mesa = document.getElementById('numeroMesas').value;
    const tipo_local = document.getElementById('tLocal').value;
    const comida = document.getElementById('cComida').value;
    const decoracion = document.getElementById('tDecoracion').value;
    const tipo_evento = document.getElementById('tipo_evento').value;
    const fInicio = document.getElementById('fInicio').value;
    const fFin = document.getElementById('fFin').value;
    
    const dayInicio = parseInt(fInicio.split('-')[2]);
    const dayFin = parseInt(fFin.split('-')[2]);
    
    
    
    if(dayInicio >= day && dayFin >= day){
        const body = document.getElementById('body');
        const tfooter = document.getElementById('tfooter');
        console.log(body.children.length)

        if(body.children.length > 0){
            while(body.firstChild){body.removeChild(body.firstChild)}
        };
       

        const datos = negocio.calcular_cotizacion(
            numero_mesero,
            numero_mesa,
            tipo_local,
            (dayFin - dayInicio == 0)? 1 * 24:(dayFin - dayInicio ) * 24,
            comida,
            decoracion,
            tipo_evento
        );

        // Creamos las filas y las columnas de la tabla
        // 1 Fila creada
        const row1 = create_row('row');
        const cell0 = create_cell('cell','Valor por comida');
        const cell1 = create_cell('cell',datos.Subtotales.Valor_comida);
        row1.append(cell0,cell1);
        // 2 fila creada
        const row2 = create_row('row');
        const cell2 = create_cell('cell','Valor por decoracion');
        const cell3 = create_cell('cell',datos.Subtotales.Valor_decoraciones);
        row2.append(cell2,cell3);

        // 3 Fila creada
        const row3 = create_row('row');
        const cell4 = create_cell('cell','Valor por local');
        const cell5 = create_cell('cell',datos.Subtotales.Valor_local);
        row3.append(cell4,cell5);

        // 4 Fila creada
        const row4 = create_row('row');
        const cell6 = create_cell('cell','Valor por mesas');
        const cell7 = create_cell('cell',datos.Subtotales.Valor_mesas);
        row4.append(cell6,cell7);

        // 5 fila creada
        const row5 = create_row('row');
        const cell8 = create_cell('cell','Valor por meseros');
        const cell9 = create_cell('cell',datos.Subtotales.Valor_meseros);
        row5.append(cell8,cell9);
        // 6 fila creada
        const row6 = create_row('row');
        const cell10 = create_cell('cell','Valor extra');
        const cell11 = create_cell('cell',(datos.Subtotales.Valor_extra * 100)+' %');
        row6.append(cell10,cell11);


        // Por ultimo agregamos las filas al cuerpo de la tabla
        body.append(
            row1,
            row2,
            row3,
            row4,
            row5,
            row6
        );

        // pie de la tabla

        const row7 = create_row('row');
        const total = create_cell('cell','Total');
        const valor = create_cell('cell',datos.Total);
        row7.append(total,valor);
        
        while(tfooter.firstChild){tfooter.removeChild(tfooter.firstChild);}

        tfooter.append(row7);

        
        document.getElementById('factura').classList.toggle('open');


        


        setInterval(function(){location.reload},15000);
    
    }
})

function create_row(class_neme) {
    const row = document.createElement('div');
    row.className = class_neme;
    return row;
}

function create_cell(class_neme, content){
    const cell = document.createElement('div');
    cell.className = class_neme;
    cell.innerText = content;
    return cell;
}