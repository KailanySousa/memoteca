import ModeloEnum from "../enums/Modelo.enum";

export interface Pensamento {
    id?: string;
    conteudo: string;
    autoria: string;
    modelo: ModeloEnum | ''
}

export interface PensamentoResponse {
    prev: number;
    data: Pensamento[]
}