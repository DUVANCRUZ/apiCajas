export interface AfiliadoI {
  id: number;
  tipo_documento: number;
  numero_doc: string;
  nombre_completo: string;
  fecha_nacimiento: Date;
  email: string;
  genero: string;
  tarifa: string;
  estado_afiliado: boolean;
  descripcion_estado: string;
}

export interface asignacionCodigo
  extends Omit<
    AfiliadoI,
    | "tipo_documento"
    | "numero_doc"
    | "nombre_completo"
    | "email"
    | "genero"
    | "estado_afiliado"
    | "descripcion_estado"
  > {
  idSede: number;
  idPlan: number;
}

export interface obtenerConvenio {
  id_afiliado: number;
  asignado: number;
  liberado: number;
}
