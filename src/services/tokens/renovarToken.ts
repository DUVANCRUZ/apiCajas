import fs from "fs";
import FormData from "form-data";
import { restService } from "../webServices/restService";
import {
  WebServiceTokenI,
  WebServiceErrorTokenI,
  optionsI,
} from "../../interfaces/webService.interface";
import { ErrorI } from "../../interfaces/error.interfasce";

export const renovarToken = async (): Promise<string> => {
  try {
    let token: string = "";
    const data: FormData = new FormData();
    data.append("email", `${process.env.REST_USERNAME_Cajamag}`);
    data.append("password", `${process.env.REST_PASSWORD_Cajamag}`);

    const opcionesTokenCajamag: optionsI = {
      method: "POST",
      url: `${process.env.REST_ENDPOINT_TOKEN_Cajamag}`,
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
      console.log(
        `Log Info ==> Error when authenticating webService => ${WStoken.message}`
      );
      throw new Error(WStoken.message);
    }
    //cambiar el API:TOKEN en el archivo .env
    if ("access_token" in WStoken) {
      token = WStoken.access_token;

      process.env.API_TOKEN = token;

      // Leer el contenido actual del archivo .env
      const contenidoArchivoEnv = fs.readFileSync(".env", "utf-8");

      // Dividir las líneas en un array
      const lineas = contenidoArchivoEnv.split("\n");

      // Buscar y reemplazar el valor de API_TOKEN
      const nuevoContenido = lineas
        .map((linea) => {
          if (linea.startsWith("API_TOKEN=")) {
            return `API_TOKEN=${token}`;
          }
          return linea;
        })
        .join("\n");

      // Escribir el nuevo contenido de vuelta al archivo .env
      fs.writeFileSync(".env", nuevoContenido);
    }
    return token;
  } catch (error) {
    console.error("Error al configurar opciones de solicitud de token:", error);
    const responseError: ErrorI = {
      error: true,
      message: `${error}`,
      statusCode: 404,
    };
    throw responseError;
  }
};
