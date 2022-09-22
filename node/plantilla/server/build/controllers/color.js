"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorController = void 0;
class ColorController {
    constructor() {
        this.data = ["Azul"];
        this.getColores = (req, res) => {
            res.json(this.data);
        };
        this.newColor = (req, res) => {
            this.data.push(req.body.color);
            res.status(200).send("Data inserted");
        };
    }
}
exports.colorController = new ColorController();
