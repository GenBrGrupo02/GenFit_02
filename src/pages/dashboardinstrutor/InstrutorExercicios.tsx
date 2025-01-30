import { Link } from "react-router-dom";
import ExercicioForm from "../../components/exercicios/FormExercicio";
import Exercicio from "../../models/Exercicio";

function InstrutorExercicios() {
  const handleSubmitExercicio = (data: Exercicio) => {
    console.log(data);
  };

  return (
    <>
      <div>
        <h1 className="text-center text-5xl font-bold text-primary font-title">
          Criar Exercício
        </h1>
      </div>
      <div className="ml-8 breadcrumbs text-sm">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/instrutores">Dashboard do Instrutor</Link>
          </li>
          <li>Criar Exercício</li>
        </ul>
      </div>
      <div className="container mx-auto my-4 grid justify-items-center gap-8 h-screen">
        <div className="flex justify-center items-center w-full">
          <ExercicioForm onSubmit={handleSubmitExercicio} />
        </div>
      </div>
    </>
  );
}

export default InstrutorExercicios;
