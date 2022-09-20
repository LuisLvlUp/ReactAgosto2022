//En TS se pueden definir los tipos
import express, { Application } from 'express';//lo de los parentesis se define el tipo de dato

class Server {//esta clase iniciara al servidor

    public app : Application; //es del tipo application

    constructor(){//el constructor inicializa express en app
        this.app = express();//express() devuelve un objeto
        this.app.set('port',process.env.PORT || 3000);

        this.app.get('/', (req, res) => {
            res.send('Hello World!')
        })

        console.log("Ejecutando constructor")
    }

    start():void {//inicializar el servidor -> para que el servidor empiece a escuchar
        this.app.listen(this.app.get('port'),() => {  
            console.log('Server on port ',this.app.get('port'));
        });
    }

}
export const server = new Server();//ejecutara el constructor
server.start();