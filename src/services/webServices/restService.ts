import axios, { AxiosRequestConfig } from "axios";
import logger from "../../utils/logger";


export const restService = async (config: AxiosRequestConfig): Promise<any> => {
  try {
    return await axios
      .request(config)
      .then((response) => {
        return response.data;
      })
      .catch((error: any) => {
        if (
          error.response.status === 404 ||
          error.response.status === 401 ||
          error.response.status === 400
        ) {
          return error.response.data;
        }
        throw error.message;
      });
  } catch (error) {
    logger.error(error);
    throw error;
  }
};
