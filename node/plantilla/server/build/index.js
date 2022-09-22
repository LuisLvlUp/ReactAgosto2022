"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
//En TS se pueden definir los tipos
const express_1 = __importDefault(require("express")); //lo de los parentesis se define el tipo de dato
const index_1 = __importDefault(require("./routes/index"));
const color_1 = __importDefault(require("./routes/color"));
class Server {
    constructor() {
        this.app = (0, express_1.default)(); //express() devuelve un objeto
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(express_1.default.json()); //para que entienda el formato json y guarda en un req.body
    }
    routes() {
        this.app.use('/', index_1.default);
        this.app.use('/color', color_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port ', this.app.get('port'));
        });
    }
}
exports.server = new Server(); //ejecutara el constructor
exports.server.start();
