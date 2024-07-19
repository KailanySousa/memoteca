import ModeloEnum from "../enums/Modelo.enum";

export interface Pensamento {
    conteudo: string;
    autoria: string;
    modelo: ModeloEnum
}