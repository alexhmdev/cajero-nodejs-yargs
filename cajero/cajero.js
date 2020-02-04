const fs = require('fs');

let venta = [];

const guardarDB = () => {
    let data = JSON.stringify(venta);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('Venta no registrada', err);
    });
}

const cargarDB = () => {
    try {
        venta = require('../db/data.json');
    } catch (error) {
        venta = [];
    }

}

const nuevaVenta = (id, cajero, articulo, cantidad, precio, fecha) => {
    cargarDB();
    let compra = {
        id,
        cajero,
        articulo,
        cantidad,
        precio,
        fecha
    }
    venta.push(compra);
    guardarDB();
    return compra;
}

let ticketID = () => {
    cargarDB();
    let identifier = venta.length;
    for(identifier; identifier == identifier;identifier++){
        return identifier;
    }


}
let formatDate = (date) => {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

const getListado = (id, cajero, fecha) => {
    cargarDB();
    let filtroID = venta.filter(filtro => {
        return filtro.id !== id;
    });
    let filtroC = venta.filter(Caj => {
        return Caj.cajero !== cajero;
    });
    let filtroF = venta.filter(Fec => {
        return Fec.fecha!== fecha;
    });
    if(venta.length === filtroID.length && venta.length === filtroF.length && venta.length === filtroC.length){
        return venta;
    }else if(venta.length !== filtroID.length){
        let fID = venta.filter(filtro => {
            return filtro.id === id;
        });
        return fID;
    }
    else if(venta.length !== filtroC.length){
        let fC = venta.filter(filtro => {
            return filtro.cajero === cajero;
        });
        return fC;
    }
    else if(venta.length !== filtroF.length){
        let fF = venta.filter(filtro => {
            return filtro.fecha === fecha;
        });
        return fF;
    }

}

const borrar = (id) => {
    cargarDB();

    let nuevoListado = venta.filter(historial => {
        return historial.id !== id;
    });

    if (venta.length === nuevoListado.length) {
        return 'no se encoontraron resultados';
    } else {
        venta = nuevoListado;
        guardarDB();
        return 'eliminado';
    }
}

const actualizar = (id, cajero, articulo, cantidad, precio, fecha) => {
    cargarDB();

    let index = venta.findIndex(tarea => { // find index sirve para encontrar la posicion de un array
        return tarea.id === id;
    });

    if (index >= 0) {
        venta[index].id = id;
        venta[index].cajero = cajero;
        venta[index].articulo = articulo;
        venta[index].cantidad = cantidad;
        venta[index].precio = precio;
        venta[index].fecha = fecha;
        guardarDB();
        return 'Actualizado';
    } else {
        return 'No se encontraron resultados , colocar un id';
    }
}


module.exports = {
    nuevaVenta,
    ticketID,
    formatDate,
    getListado,
    borrar,
    actualizar
}