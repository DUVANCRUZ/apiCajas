import {
  WebServiceI,
  WebServiceErrorTokenI,
} from "../../interfaces/webService.interface";
import logger from "../../utils/logger";
import { getAfiliadoToken } from "../tokens/getAfiliadoToken";
import { renovarToken } from "../tokens/renovarToken";

export const getAfiliado = async (
  tipDoc: string,
  doc: string
): Promise<WebServiceI> => {
  let token: string = process.env.API_TOKEN as string;
  let response: WebServiceI | WebServiceErrorTokenI = await getAfiliadoToken(
    tipDoc,
    doc,
    token
  );
  // console.log(response);
  if ("error" in response) {
    logger.info("Token no válido. Renovando token...");
    token = await renovarToken();
    response = await getAfiliadoToken(tipDoc, doc, token);
  }
  return response as WebServiceI;
};
