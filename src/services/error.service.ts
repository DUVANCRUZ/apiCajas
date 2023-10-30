import { Response } from "express";
import { ErrorI } from "../interfaces/error.interfasce";

export const errorResponse = async (objectResponse: ErrorI, res: Response) => {
  try {
    return res.status(objectResponse.statusCode).json(objectResponse);
  } catch (error) {
    return res.status(500).json(error);
  }
};
