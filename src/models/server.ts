import express, {Application, Request, Response} from 'express';
import routeProducto from '../routes/producto';
import db from '../db/conectiondb';

class Server{
    private app: express.Application;
    private port: string;

    constructor(){
        console.log(process.env.PORT)
        this.app = express();
        this.port = process.env.PORT || '3000';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();
    }

    listen(){
        this.app.listen(this.port, () =>{
            console.log('corriendo en el puerto 3000')
        })
    }

    routes(){
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'API working'
            })
        })
        //conf de ruta de api para productos
        this.app.use('/api/productos', routeProducto) 
    }

    midlewares(){
        //parsear el boy
        this.app.use(express.json());
    }

    async dbConnect(){

        try{
            await db.authenticate();
            console.log('Base de datos conectada correctamente');
        }catch(error){
            console.log(error);
            console.log('error al conectarse a la base de datos');

        }
    }

}

export default Server;