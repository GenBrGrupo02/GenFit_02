import Exercicio from "./Exercicio";

export default interface Objetivo {
    id: number;
    descricao: string;
    exercicio?: Exercicio | null;

}