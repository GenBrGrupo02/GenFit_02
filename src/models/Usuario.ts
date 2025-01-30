//import Postagem from "./Postagem";

export default interface Usuario {
  id: number;
  nome: string;
  usuario: string;
  foto: string;
  senha: string;
  peso: number | null;
  altura: number | null;
  imc?: number | null;
}
