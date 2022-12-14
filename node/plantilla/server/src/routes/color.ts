import express, { Router } from 'express';//definir un enrutador
import { colorController } from '../controllers/color';

class ColorRoutes{

    public router: Router = Router();
    constructor(){
        this.config();
    }
    config(): void{
        //ruta inicial
        this.router.use(express.json());
        this.router.get('/', colorController.getColores);
        this.router.post('/', colorController.newColor);
        this.router.get('/:id', colorController.getOneColor);
        this.router.delete('/:id', colorController.deleteColor);
        // this.router.put('/', colorController.updateColor);

    }
}
const colorRoutes = new ColorRoutes();
export default colorRoutes.router;