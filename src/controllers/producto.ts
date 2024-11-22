import { Response, Request } from 'express'
import Producto from '../models/producto';

export const getProducts = async (req: Request, res: Response) =>{ //exportar para usar en otrso componentes
    //importar modelo
    const listProducts = await Producto.findAll()

    res.json(listProducts)
}

export const getProduct = async (req: Request, res: Response) =>{ //exportar para usar en otrso componentes
    const {id} = req.params;
    const product = await Producto.findByPk(id);

    if(product){
        res.json(product);
    }else{
        res.status(404).json({
            msg: `chin, no existe el producto con el id ${id}`
        })
    }
}

export const deleteProduct = async (req: Request, res: Response) =>{ //exportar para usar en otrso componentes
    const {id} = req.params;
    const product = await Producto.findByPk(id);

    if(!product){
        res.status(404).json({
            msg: `chin, no existe el producto con el id ${id}, no se puede eliminar`
        })
    }else{
        await product.destroy();
        res.json({
            msg: 'producto eliminado con exito'
        })
    }

}

export const postProduct = async (req: Request, res: Response) =>{ //exportar para usar en otrso componentes
    const {body} = req;
    
    try{
        await Producto.create(body);

        res.json({
            msg: 'producto agregado con exito'
        })

    }catch(error){
        res.json({
            msg: 'ocurrio un error'
        })
    }
}


export const updateProduct = async (req: Request, res: Response) =>{ //exportar para usar en otrso componentes

    const {body} = req;
    const {id} = req.params;

    const product = await Producto.findByPk(id);

    try{
        if(product){
            await product.update(body);
            res.json({
                msg: 'actualizacion exitosa del producto'
            })
        }else{
            res.status(404).json({
                msg: 'no existe producto'
            })
    
        }
    }catch(error){
        console.log(error)
        res.json({
            msg: 'ocurrio un error al actualizar '
        })    
    }
}