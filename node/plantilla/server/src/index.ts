//En TS se pueden definir los tipos
import express, { Application } from 'express';//lo de los parentesis se define el tipo de dato
import indexRoutes from './routes/index';
import colorRoutes from './routes/color';

class Server {//esta clase iniciara al servidor

    public app : Application; //es del tipo application

    constructor(){//el constructor inicializa express en app
        this.app = express();//express() devuelve un objeto
        this.config()
        this.routes()
    }

    config():void {
        this.app.set('port',process.env.PORT || 3000);
        this.app.use(express.json());//para que entienda el formato json y guarda en un req.body
    }

    routes(): void {
        this.app.use( '/', indexRoutes )
        this.app.use( '/color', colorRoutes )
    }

    start():void {//inicializar el servidor -> para que el servidor empiece a escuchar
        this.app.listen(this.app.get('port'),() => {  
            console.log('Server on port ',this.app.get('port'));
        });
    }

}
export const server = new Server();//ejecutara el constructor
server.start();