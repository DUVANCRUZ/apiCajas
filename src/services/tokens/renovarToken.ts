import fs from "fs";
import dotenv from "dotenv";
import FormData from "form-data";
import { restService } from "../webServices/restService";

export const renovarToken = async () => {
  try {
    let token = "";

    const data = new FormData();
    data.append("email", `${process.env.REST_USERNAME_Cajamag}`);
    data.append("password", `${process.env.REST_PASSWORD_Cajamag}`);
    data.append("grant_type", "password");

    const opcionesTokenCajamag = {
      method: "POST",
      url: `${process.env.REST_ENDPOINT_TOKEN_Cajamag}`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/from-data",
        ...data.getHeaders(),
      },
      data: data,
    };

    try {
      const WStoken = await restService(opcionesTokenCajamag);
      console.log(WStoken);

      if (WStoken.error) {
        console.log(
          `Log Info ==> Error when authenticating webService => ${WStoken.error}`
        );
        return null;
      }

      token = WStoken.access_token;
    } catch (error) {
      console.error("Error al obtener un nuevo token de Cajamag:", error);
      return null;
    }

    //cambiar el API:TOKEN en el archivo .env
    if (token) {
      dotenv.config();
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

      return token;
    }
  } catch (error) {
    console.error("Error al configurar opciones de solicitud de token:", error);
    return null;
  }
};
