import Server from "./models/server";
import dotenv  from 'dotenv'
//importar y crear instancia del servidor

dotenv.config();//conf las variables de entorno
const server = new Server();