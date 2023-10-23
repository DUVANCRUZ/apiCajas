import { restService } from '../webServices/restService';


async function getAfiliadoToken(tipDoc: string, doc: string) {
    try {
        let token= process.env.API_TOKEN
        const opciones = {
            method: 'GET',
            url: `${process.env.REST_ENDPOINT_USER_Cajamag}/${tipDoc}/${doc}`,
            headers: {
              Authorization: `Bearer ${token}`,
                       
            },
           
          };

        const response = await restService(opciones);
        if(response.code===404){
          return response.code
        }
        return response.data;
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
        return error
    }
}

export default getAfiliadoToken;
