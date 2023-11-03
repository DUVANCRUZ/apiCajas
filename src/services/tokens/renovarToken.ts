import fs from "fs";
import FormData from "form-data";
import { restService } from "../webServices/restService";
import {
  WebServiceTokenI,
  WebServiceErrorTokenI,
  optionsI,
} from "../../interfaces/webService.interface";
import { ErrorI } from "../../interfaces/error.interfasce";
import logger from "../../utils/logger";


export const renovarToken = async (): Promise<string> => {
  try {
    let token: string = "";
    const data: FormData = new FormData();
    data.append("email", `${process.env.AUTHORIZATION_TOKEN_USERNAME}`);
    data.append("password", `${process.env.AUTHORIZATION_TOKEN_PASSWOR}`);

    const opcionesTokenCajamag: optionsI = {
      method: "POST",
      url: `${process.env.ENDPOINT_TOKEN}`,
      headers: {
        "Content-Type": "application/from-data",
        ...data.getHeaders(),
      },
      data: data,
    };

    const WStoken: WebServiceTokenI | WebServiceErrorTokenI = await restService(
      opcionesTokenCajamag
    );

    if ("message" in WStoken) {
      logger.info(
        `Log Info ==> Error when authenticating webService => ${WStoken.message}`
      );
      throw new Error(WStoken.message);
    }

    if ("access_token" in WStoken) {
      token = WStoken.access_token;
    }
    return token;
  } catch (error) {
    logger.error("Error al configurar opciones de solicitud de token: " + error);
    const responseError: ErrorI = {
      error: true,
      message: `${error}`,
      statusCode: 404,
    };
    throw responseError;
  }
};
