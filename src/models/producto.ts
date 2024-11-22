import { DataType, DataTypes } from 'sequelize';
import db from '../db/conectiondb';

//nombre del modelo como parametro y propiedades de la tabla
const Producto = db.define('Productos', {
    nombre:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.DOUBLE
    },
    stock:{
        type: DataTypes.INTEGER
    }
}, {
    createdAt: false,//opciones de sequlize
    updatedAt: false
});

export default Producto;