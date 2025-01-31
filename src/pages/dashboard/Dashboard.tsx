import { Link, useNavigate } from "react-router-dom";
import {
  Barbell,
  Crosshair,
  MapPin,
  Medal,
  Ruler,
  SignOut,
} from "@phosphor-icons/react";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
// import ListaExercicios from "../../components/exercicios/ListaExercicios";

function Dashboard() {
  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      alert("Você precisa estar logado");
      navigate("/");
    }
  }, [usuario.token]);

  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-screen flex-1 m-12">
          <h2 className=" text-2xl/7 font-bold text-yellow-500 sm:truncate sm:text-3xl sm:tracking-tight mb-12">
            DASHBOARD DO ALUNO
          </h2>
          <h2 className=" text-2xl/7 font-bold text-secondary sm:truncate sm:text-3xl sm:tracking-tight mb-2">
            Bem vinde de volta {usuario.nome}!
          </h2>
          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6 mb-8">
            <div className="mt-2 flex items-center text-sm text-neutral-content">
              <MapPin size={20} weight="fill" className="mr-1.5" />
              Academia Gen - Rua Geração Brasil, 1000
            </div>
            <div className="mt-2 flex items-center text-sm text-neutral-content">
              <Medal size={20} weight="fill" className="mr-1.5" />
              Plano Ouro
            </div>
            <div className="mt-2 flex items-center text-sm text-neutral-content">
              <Ruler size={20} weight="fill" className="mr-1.5" />
              IMC 20{usuario.imc}
            </div>
          </div>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4 mr-12">
          <Link to="/todosexercicios">
            <span className="hidden sm:block">
              <button
                type="button"
                className="mr-1.5 px-3.5 py-2.5 inline-flex items-center rounded-md  bg-yellow-500
                text-sm font-semibold text-gray-900 shadow-xs ring-inset hover:bg-yellow-200"
              >
                <Barbell size={20} weight="fill" className="mr-1.5" />
                Exercícios
              </button>
            </span>
          </Link>
          <span className="sm:ml-3">
            <Link to="/todosobjetivos">
              <span className="hidden sm:block">
                <button
                  type="button"
                  className="mr-1.5 px-3.5 py-2.5 inline-flex items-center rounded-md  bg-info
                text-sm font-semibold text-gray-900 shadow-xs ring-inset hover:bg-success"
                >
                  <Crosshair size={20} weight="fill" className="mr-1.5" />
                  Objetivos
                </button>
              </span>
            </Link>
          </span>
          <span className="sm:ml-3">
            <Link
              to="/"
              onClick={handleLogout}
              className="inline-flex items-center rounded-md hover:bg-red-400 
                  bg-red-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              <span className="">Sair</span>
              <SignOut size={20} weight="fill" />
            </Link>
          </span>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
