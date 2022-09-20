"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
//En TS se pueden definir los tipos
const express_1 = __importDefault(require("express")); //lo de los parentesis se define el tipo de dato
class Server {
    constructor() {
        this.app = (0, express_1.default)(); //express() devuelve un objeto
        this.app.set('port', process.env.PORT || 3000);
        this.app.get('/', (req, res) => {
            res.send('Hello World!');
        });
        console.log("Ejecutando constructor");
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
}
exports.server = new Server(); //ejecutara el constructor
exports.server.start();
