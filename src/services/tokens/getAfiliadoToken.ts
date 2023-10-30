import { ErrorI } from "../../interfaces/error.interfasce";
import {
  WebServiceErrorI,
  WebServiceErrorTokenI,
  WebServiceI,
} from "../../interfaces/webService.interface";
import { restService } from "../webServices/restService";

export const getAfiliadoToken = async (
  tipDoc: string,
  doc: string
): Promise<WebServiceI | WebServiceErrorTokenI> => {
  try {
    const opciones = {
      method: "GET",
      url: `${process.env.REST_ENDPOINT_USER_Cajamag}/${tipDoc}/${doc}`,
      headers: {
        Authorization: `Bearer ${process.env.API_TOKEN as string}`,
      },
    };

    const response: WebServiceI | WebServiceErrorI = await restService(
      opciones
    );
    if ("msj" in response) {
      throw new Error(response.msj);
    }
    return response;
  } catch (error) {
    console.error("Error al obtener usuario:", error);
    const responseError: ErrorI = {
      error: true,
      message: `${error}`,
      statusCode: 404,
    };
    throw responseError;
  }
};
