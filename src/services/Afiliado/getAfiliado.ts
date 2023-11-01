import {
  WebServiceI,
  WebServiceErrorTokenI,
} from "../../interfaces/webService.interface";
import { getAfiliadoToken } from "../tokens/getAfiliadoToken";
import { renovarToken } from "../tokens/renovarToken";

export const getAfiliado = async (
  tipDoc: string,
  doc: string
): Promise<WebServiceI> => {
  let response: WebServiceI | WebServiceErrorTokenI = await getAfiliadoToken(
    tipDoc,
    doc
  );
  // console.log(response);
  if ("error" in response) {
    console.log("Token no válido. Renovando token...");
    await renovarToken();
    response = await getAfiliadoToken(tipDoc, doc);
  }
  return response as WebServiceI;
};
