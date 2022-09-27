import { Request, Response } from 'express';

class ColorController{

    public data : any = [];
    
    public getColores  = (req : Request, res : Response) =>{
        res.json(this.data)
    }

    public newColor = (req : Request, res : Response) => {
        let id = this.data.length > 0 ? (this.data[this.data.length - 1].id + 1) : 1;
        this.data.push({
                id: id,
                color: req.body.color
        })
        res.status(200).send("Data inserted")
    }

    public getOneColor = (req : Request, res : Response) => {
        let id = req.params.id
        let response = this.data.filter( (color : any) => color.id == id )
        if(response.length > 0){
            res.status(200).json(response[0])
        }else{
            res.status(404).send("Data not found")
        }        
    }

    public deleteColor = (req : Request, res : Response) => {
        let id = req.params.id
        let response = this.data.filter( (color : any) => color.id != id )
        if(response.length !== this.data.length){
            this.data = response
            res.status(200).send("Data deleted successfully")
        }else{
            res.status(404).send("Data not found")
        }        
    }

}
export const colorController = new ColorController();