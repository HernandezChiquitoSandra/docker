"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// Option 3: Passing parameters separately (other dialects)
const sequelize = new sequelize_1.Sequelize('almacen', 'root', 'mypass', {
    host: 'host.docker.internal',
    port: 3310,
    dialect: 'mysql'
});
exports.default = sequelize;
