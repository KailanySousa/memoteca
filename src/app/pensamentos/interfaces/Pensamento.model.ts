import ModeloEnum from "../enums/Modelo.enum";

export interface Pensamento {
    id?: number;
    conteudo: string;
    autoria: string;
    modelo: ModeloEnum
}