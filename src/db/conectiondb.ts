import { Sequelize } from "sequelize";

// Configuración de Sequelize
const sequelize = new Sequelize('almacen', 'root', 'mypass', {
    host: 'host.docker.internal', // Solo la dirección IP
    port: 3310,         // Especifica el puerto aquí
    dialect: 'mysql'
});

export default sequelize;
