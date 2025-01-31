import { Link } from "react-router-dom";
import ListaExercicios from "../../components/exercicios/ListaExercicios";

function TodosExercicios() {
  return (
    <>
      <div className="min-h-screen">
        <div className="ml-8 breadcrumbs text-sm">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>Exercícios</li>
          </ul>
        </div>
        <div className="scale-95 my-4 grid justify-items-center gap-8">
          <ListaExercicios />
        </div>
      </div>
    </>
  );
}

export default TodosExercicios;
