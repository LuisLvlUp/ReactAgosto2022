import { Request, Response } from 'express';

class ColorController{

    public data : any = ["Azul"];
    
    public getColores  = (req : Request, res : Response) =>{
        res.json(this.data)
    }

    public newColor = (req : Request, res : Response) => {
        this.data.push(req.body.color)
        res.status(200).send("Data inserted")
    }

}
export const colorController = new ColorController();