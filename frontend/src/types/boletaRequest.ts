// Tipo de dato para peticiones HTTP POST
export interface BoletaRequest {
    titulo: string;
    nroBoleta: number;
    fechaBoleta: string;
    montoFinal: number;
    descripcion?: string;
};
