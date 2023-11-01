import {
  WebServiceErrorI,
  WebServiceErrorTokenI,
  WebServiceI,
  optionsI,
} from "../../interfaces/webService.interface";
import { restService } from "../webServices/restService";
import { ErrorI } from "../../interfaces/error.interfasce";

export const getAfiliadoToken = async (
  tipDoc: string,
  doc: string,
  token: string
): Promise<WebServiceI | WebServiceErrorTokenI> => {
  try {
    const opciones: optionsI = {
      method: "GET",
      url: `${process.env.REST_ENDPOINT_USER_Cajamag}/${tipDoc}/${doc}`,
      headers: {
        Authorization: `Bearer ${token}`,
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
