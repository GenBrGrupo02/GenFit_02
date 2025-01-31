import { Link } from "react-router-dom";
import FormObjetivo from "../../components/objetivos/formobjetivo/FormObjetivo";

function InstrutorObjetivos() {
  return (
    <>
      <div>
        <h1 className="text-center text-5xl font-bold text-primary font-title">
          Criar Objetivo
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
          <li>Criar Objetivo</li>
        </ul>
      </div>
      <div className="container mx-auto my-4 grid justify-items-center gap-8 h-screen">
        <div className="flex justify-center items-center w-full">
          <FormObjetivo />
        </div>
      </div>
    </>
  );
}

export default InstrutorObjetivos;
