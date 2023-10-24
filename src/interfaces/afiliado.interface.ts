

export interface AfiliadoInterface{
        id: number,
        tipo_documento: number|null,
        numero_doc: string|null,
        nombre_completo: string|null,
        fecha_nacimiento: Date|null
        email: string|null,
        genero: string,
        tarifa: string|null,
        estado_afiliado: boolean|null,
        descripcion_estado: string|null,    
}