import { Link } from "react-router-dom";
import ListaObjetivos from "../../components/objetivos/listaobjetivos/ListaObjetivos";

function TodosObjetivos() {
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
            <li>Objetivos</li>
          </ul>
        </div>
        <div className=" scale-95 my-4 grid justify-items-center gap-8">
          <ListaObjetivos />
        </div>
      </div>
    </>
  );
}

export default TodosObjetivos;
