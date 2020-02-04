const cajero = require('../cajero/cajero');


const argv = require('yargs')

.command('venta', 'Registrar nueva venta en la terminal', {
    id: {
        alias: 'id',
        desc: 'Id del ticket',
        default: cajero.ticketID()
    },
    cajero: {
        demand: true,
        alias: 'c',
        desc: 'Nombre del cajero que realiza la venta'
    },
    articulo: {
        demand: true,
        alias: 'a',
        desc: 'Articulo vendido'
    },
    cantidad: {
        demand: true,
        alias: 'ca',
        desc: 'Cantidad de articulos vendidos'
    },
    precio: {
        demand: true,
        alias: 'p',
        desc: 'Precio del articulo'
    },
    fecha: {
        alias: 'f',
        desc: 'Fecha de la venta',
        default: cajero.formatDate(Date())
    }
})

.command('listar', 'este comando lista', {
    id: {
        alias: 'id',
        desc: 'id de venta'
    },
    fecha: {
        alias: 'f',
        desc: 'fecha de venta'
    },
    cajero: {
        alias: 'c',
        desc: 'cajero que realizo la compra'
    }

})

.command('eliminar', 'este comando elimina ', {

    id: {
        demand: true,
        alias: 'id',
        desc: 'elimina'
    }
})

.command('actualizar', 'Actualiza las ventas', {
        id: {
            demand: true,
            alias: 'id',
            desc: 'Id del ticket',
            default: cajero.ticketID()
        },
        cajero: {
            alias: 'c',
            desc: 'Nombre del cajero que realiza la venta'
        },
        articulo: {
            alias: 'a',
            desc: 'Articulo vendido'
        },
        cantidad: {
            alias: 'ca',
            desc: 'Cantidad de articulos vendidos'
        },
        precio: {

            alias: 'p',
            desc: 'Precio del articulo'
        },
        fecha: {
            alias: 'f',
            desc: 'Fecha de la venta',
            default: cajero.formatDate(Date())
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}