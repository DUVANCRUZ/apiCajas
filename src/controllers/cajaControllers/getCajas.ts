import { Response, Request } from "express";
import Cajas from "../../models/Cajas";


export const getCajas= async (req: Request, res: Response)=>{
    try {
        const cajas= await Cajas.findAll();
        res.status(200).json(cajas);
    } catch (error) {
        res.status(400).json({error: error});
    }
}