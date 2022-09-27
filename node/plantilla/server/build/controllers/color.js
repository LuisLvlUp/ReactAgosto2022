"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorController = void 0;
class ColorController {
    constructor() {
        this.data = [];
        this.getColores = (req, res) => {
            res.json(this.data);
        };
        this.newColor = (req, res) => {
            let id = this.data.length > 0 ? (this.data[this.data.length - 1].id + 1) : 1;
            this.data.push({
                id: id,
                color: req.body.color
            });
            res.status(200).send("Data inserted");
        };
        this.getOneColor = (req, res) => {
            let id = req.params.id;
            let response = this.data.filter((color) => color.id == id);
            if (response.length > 0) {
                res.status(200).json(response[0]);
            }
            else {
                res.status(404).send("Data not found");
            }
        };
        this.deleteColor = (req, res) => {
            let id = req.params.id;
            let response = this.data.filter((color) => color.id != id);
            if (response.length !== this.data.length) {
                this.data = response;
                res.status(200).send("Data deleted successfully");
            }
            else {
                res.status(404).send("Data not found");
            }
        };
    }
}
exports.colorController = new ColorController();
