import { Response, Request } from "express";
import Cajas from "../../models/Cajas";


export const getCajaById= async (req: Request, res: Response)=>{
    const {id}= req.params;
    try {
        const caja= await Cajas.findByPk(id);
        
        res.status(200).json(caja);

    } catch (error) {
        res.status(400).json({error: error});
    }
}