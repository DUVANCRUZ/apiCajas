import getAfiliadoToken from "../tokens/getAfiliadoToken";
import renovarToken from "../tokens/renovarToken";


export const getAfiliado = async (tipDoc: string, doc: string) => {

        const response = await getAfiliadoToken(tipDoc, doc);
        console.log(response)
        if (!response) {
            console.log('Token no válido. Renovando token...');
            const newToken = await renovarToken();
            if (newToken) {
                try {
                    const newResponse = await getAfiliadoToken(tipDoc, doc);
                    return newResponse;
                } catch (newError) {
                    return newError;
                }
            } else {
                return 'No se pudo obtener un nuevo token válido.'
            }
        } 
        return response;
}; 
export default getAfiliado