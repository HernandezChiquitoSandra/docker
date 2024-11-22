"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const conectiondb_1 = __importDefault(require("../db/conectiondb"));
//nombre del modelo como parametro y propiedades de la tabla
const Producto = conectiondb_1.default.define('Producto', {
    nombre: {
        type: sequelize_1.DataTypes.STRING
    },
    description: {
        type: sequelize_1.DataTypes.STRING
    },
    price: {
        type: sequelize_1.DataTypes.DOUBLE
    },
    stock: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    createdAt: false, //opciones de sequlize
    updatedAt: false
});
exports.default = Producto;
