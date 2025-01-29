import Objetivo from "./Objetivo";
import Usuario from "./Usuario";

export default interface Exercicio {
    id: number;
    nome: string;
    descricao: string;
    dificuldade: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
    videoTutorial: string;
    objetivo?: Objetivo | null;
    usuario: Usuario | null;
}