export interface WebServiceI {
  code: number;
  data: {
    nombreUsuario: string;
    estadoAfiliacion: boolean;
    afiliadoCorporativo: boolean;
    categoria: string;
    generoAfiliado: string;
    fechaNacimiento: string | Date;
  };
}
export interface WebServiceErrorI extends Omit<WebServiceI, "data"> {
  msj: string;
}
export interface WebServiceTokenI {
  user: {
    id: number;
    name: string;
    email: string;
    email_verified_at: null;
    created_at: string;
    updated_at: string;
  };
  access_token: string;
}

export interface WebServiceErrorTokenI {
  error?: string;
  message?: string;
}

export type VervosT = "GET" | "POST";
export interface optionsI {
  method: VervosT;
  url: string;
  headers: {
    "Content-Type": string;
    Authorization?: string;
  };
  data?: object;
}
