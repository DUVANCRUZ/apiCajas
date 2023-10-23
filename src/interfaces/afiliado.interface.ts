
export interface AfiliadoInterface{
        id: number,
        tipo_documento: number|null,
        numero_doc: string|null,
        nombre_completo: string|null,
        email: string|null,
        tarifa: string|null,
        estado_afiliado: boolean|null,
        descripcion_estado: string|null     
}