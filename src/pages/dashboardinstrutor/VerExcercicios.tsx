import { Link } from "react-router-dom";
import CardExercicioInstrutor from "../../components/exercicios/ExercicioCardInstrutor";
import Exercicio from "../../models/Exercicio";

function VerExercicios() {
  const exercicioExemplo: Exercicio = {
    id: 1,
    nome: "Agachamento",
    descricao: "Exercício para fortalecimento das pernas.",
    dificuldade: 3,
    usuario: {
      nome: "Instrutor João",
      foto: "https://via.placeholder.com/50",
      usuario: "instrutorjoao",
      senha: "123456",
      peso: 75,
      altura: 1.75,
    },
    objetivo: {
      id: 99,
      descricao: "Fortalecer os músculos das pernas",
    },
    videoTutorial: "https://www.youtube.com/watch?v=Exemplo",
  };

  return (
    <>
      <div className="min-h-screen">
        <div className="ml-8 breadcrumbs text-sm">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard do Instrutor</Link>
            </li>
            <li>Exercícios</li>
          </ul>
        </div>
        <div className="scale-95 my-4 grid justify-items-center gap-8">
          <CardExercicioInstrutor exercicio={exercicioExemplo} />
        </div>
      </div>
    </>
  );
}

export default VerExercicios;
