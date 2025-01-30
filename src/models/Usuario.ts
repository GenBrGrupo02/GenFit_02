import Exercicio from "./Exercicio";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  foto: string;
  senha: string;
  exercicio?: Exercicio | null;
  peso: number | null;
  altura: number | null;
  imc?: number | null;
}
