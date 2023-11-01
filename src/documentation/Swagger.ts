import swaggerJSDoc, {OAS3Definition,OAS3Options  } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
    
        openapi: '3.0.0',
        info: {
            title: 'Cajamag-api',
            version: '1.0.0',
        },
        servers: [
            {
                url: 'http://localhost:3001',
            },
        ],
        components: {
          securitySchemes: {
            bearerAuth: {
              type: "http",
              scheme: "bearer",
              bearerFormat: "JWT", 
            }
          },
            schemas:{
                datosIngresados:{
                    type: "object",
                    required: ["eMail", "idPlan", "idSede", "nDocumento", "tipoDocumento"],
                    properties:{
                        eMail:{
                            type: "string",
                        },
                        idPlan:{
                            type: "string",
                        },
                        idSede:{
                            type: "string",
                        },
                        nDocumento:{
                            type: "string",
                        },
                        tipoDocumento:{
                            type: "string",
                        },
                    }
                }, 
                responseAsignacionCodigo: {
                    type: "object",
                    properties: {
                      availableCodes: {
                        type: "boolean",
                        example: true,
                      },
                      isAntiguo: {
                        type: "boolean",
                        example: false,
                      },
                      nombreCompleto: {
                        type: ["string", "null"],
                        example: "JHON DOE",
                      },
                      tipoDocumentoIdentidad: {
                        type: "string",
                        example: "Cédula",
                      },
                      numeroDoc: {
                        type: "string",
                        example: "123456789",
                      },
                      idSede: {
                        type: "string",
                        example: "Sede A",
                      },
                      eMail: {
                        type: "string",
                        example: "johndoe@example.com",
                      },
                      estadoAfiliado: {
                        type: ["boolean", "null"],
                        example: true,
                      },
                      tarifa: {
                        type: ["string", "null"],
                        example: "Tarifa A",
                      },
                      valoresAfiliado: {
                        type: ["string", "null"],
                        example: "Valores A",
                      },
                      urlConvenio: {
                        type: "string",
                        example: "https://example.com/convenio",
                      },
                    }
                }, 
                responseWebService: {
                    type: "object",
                    properties: {
                      code: {
                        type: "integer",
                        example: 200,
                      },
                      data: {
                        type: "object",
                        properties: {
                          nombreUsuario: {
                            type: "string",
                            example: "JUAN ESTEBAN LOPEZ MORA",
                          },
                          estadoAfiliacion: {
                            type: "boolean",
                            example: true,
                          },
                          afiliadoCorporativo: {
                            type: "boolean",
                            example: true,
                          },
                          categoria: {
                            type: "string",
                            example: "C",
                          },
                          generoAfiliado: {
                            type: "string",
                            example: "M",
                          },
                          fechaNacimiento: {
                            type: "string",
                            example: "1995-09-12",
                          },
                        }
                      }                            
                    } 
                },
                errorWebService: {
                    type: "object",
                    properties: {
                      error: {
                        type: "boolean",
                        example: true,
                      },
                      message: {
                        type: "string",
                        example: "Error: No se encontró resultado para tipdoc: CC y documento: 8547223",
                      },
                      statusCode: {
                        type: "integer",
                        example: 404,
                      },
                    },
                
                },
                projectInfo: {
                    type: "object",
                    properties: {
                      ProjectName: {
                        type: "string",
                        example: "asignar-codigos-casjas-compensacion-cajamag",
                      },
                      ProjectDescription: {
                        type: "string",
                        example: "Esta aplicación se implementará una solución para asignar códigos a usuarios de las cajas de compensación.",
                      },
                      ProjectCompany: {
                        type: "string",
                        example: "TechnoApes Company",
                      },
                      ProjectDeveloper: {
                        type: "string",
                        example: "Duvan Cruz",
                      },
                      ProjectDeveloperEmail: {
                        type: "string",
                        example: "duvandres9820@gmail.com",
                      },
                      ProjectVersion: {
                        type: "string",
                        example: "1.0.0",
                      },
                    },
                },
                
                
            }
        },
}
       



const swaggerOptions: OAS3Options={
    swaggerDefinition,
    apis: ["./src/routes/*.ts"]
}

export default swaggerJSDoc(swaggerOptions)
