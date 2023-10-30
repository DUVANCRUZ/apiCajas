import axios, { AxiosRequestConfig } from "axios";

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
    console.log(error);
    throw error;
  }
};
