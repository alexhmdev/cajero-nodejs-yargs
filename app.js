const arg = require('./config/yargs').argv;
const cajero = require('./cajero/cajero');
const color = require('colors');
let command = arg._[0];

switch (command) {
    case 'venta':
        let vendido = cajero.nuevaVenta(arg.id, arg.cajero, arg.articulo, arg.cantidad, arg.precio, arg.fecha);
        console.log('===========Ticket===================='.red);
        console.log(vendido);
        console.log(`=========TOTAL:${arg.precio * arg.cantidad}============`.blue);
        break;
    case 'listar':
        let listado = cajero.getListado(arg.id, arg.cajero, arg.fecha);
        for (let vendido of listado) {
            console.log(`------------- Ticket#${vendido.id} --------------------`.red);
            console.log(vendido);
            console.log(`============= TOTAL:${vendido.cantidad * vendido.precio} ===================`.blue);
            console.log('-------------------------------------------'.red);
        }


        break;
    case 'eliminar':
        let eliminado = cajero.borrar(arg.id);
        console.log(eliminado);
        break;

    case 'actualizar':
        let actualizado = cajero.actualizar(arg.id, arg.cajero, arg.articulo, arg.cantidad, arg.precio, arg.fecha);
        console.log(actualizado);
        break;
    default:
        console.log('comando no reconocido');
        break;
}