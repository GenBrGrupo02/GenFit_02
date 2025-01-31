import Exercicio from "../../models/Exercicio";

interface CardExerciciosProps {
  exercicio: Exercicio;
}

function CardExercicio({ exercicio }: CardExerciciosProps) {
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
            <span className="font-semibold">Video Tutorial:</span>
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
    </div>
  );
}

export default CardExercicio