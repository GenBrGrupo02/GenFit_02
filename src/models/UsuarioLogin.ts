export default interface UsuarioLogin {
  id: number;
  nome: string;
  usuario: string;
  senha: string;
  foto: string;
  peso: number;
  altura: number;
  imc?: number | null;
  token: string;
}
