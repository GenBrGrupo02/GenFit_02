import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Exercicio from "../../models/Exercicio";
import { RotatingLines } from "react-loader-spinner";
import { deletar } from "../../services/Service";
import { AuthContext } from "../../contexts/AuthContext";

interface CardExerciciosProps {
  exercicio: Exercicio;
}

function CardExercicioInstrutor({ exercicio }: CardExerciciosProps) {
  const [isLoading, setIsLoading] = useState(false);

  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("AuthContext deve estar dentro de um AuthProvider");
  }

  const { token, handleLogout } = authContext;

  async function deletarExercicio() {
    if (!token) {
      alert("Usuário não autenticado.");
      return;
    }

    setIsLoading(true);

    try {
      await deletar(`/exercicio/${exercicio.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Exercício apagado com sucesso!");
    } catch (error: any) {
      if (error?.response?.status === 403) {
        handleLogout();
      } else {
        alert("Erro ao deletar o exercício.");
      }
    }

    setIsLoading(false);
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl my-4">
      <div className="card-body">
        <div className="flex items-center gap-4">
          <img
            src={exercicio.usuario?.foto}
            className="h-12 w-12 rounded-full"
            alt={exercicio.usuario?.nome}
          />
          <h3 className="text-lg font-bold">{exercicio.usuario?.nome}</h3>
        </div>
        <h4 className="text-2xl font-semibold mt-4">{exercicio.nome}</h4>
        <p className="text-gray-300 mt-2">{exercicio.descricao}</p>
        {exercicio.objetivo && (
          <p className="mt-2">
            <span className="font-semibold">Objetivo:</span>{" "}
            {exercicio.objetivo?.descricao}
          </p>
        )}
        <p className="mt-2">
          <span className="font-semibold">Dificuldade:</span>{" "}
          {exercicio.dificuldade}
        </p>
        {exercicio.videoTutorial && (
          <p className="mt-2">
            <span className="font-semibold">Vídeo Tutorial:</span>{" "}
            <a
              href={exercicio.videoTutorial}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400"
            >
              Assistir
            </a>
          </p>
        )}
      </div>
      <Link
        to={`/editarexercicio/${exercicio.id}`}
        className="btn btn-ghost text-slate-100 bg-info hover:bg-indigo-800 "
      >
        <button>Editar</button>
      </Link>
      <Link
        to={`/deletarexercicio/${exercicio.id}`}
        className=" btn btn-ghost text-slate-100 bg-error hover:bg-red-700"
      >
        <button>Deletar</button>
      </Link>
    </div>
  );
}

export default CardExercicioInstrutor;
