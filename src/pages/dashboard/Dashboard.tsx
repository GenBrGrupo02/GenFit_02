import {
  CheckIcon,
  ChevronDownIcon,
  LinkIcon,
  PencilIcon,
} from "@heroicons/react/20/solid";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { MapPin, Medal } from "@phosphor-icons/react";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Dashboard() {
  /*const navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      alert("Você precisa estar logado");
      navigate("/");
    }
  }, [usuario.token]);*/

  return (
    <>
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-screen flex-1 m-12">
          <h2 className=" text-2xl/7 font-bold text-yellow-500 sm:truncate sm:text-3xl sm:tracking-tight mb-12">
            DASHBOARD DO ALUNO {/*usuario.nome*/}
          </h2>
          <h2 className=" text-2xl/7 font-bold text-secondary sm:truncate sm:text-3xl sm:tracking-tight mb-2">
            Bem vinde de volta Root{/*usuario.nome*/}!
          </h2>
          <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6 mb-8">
            <div className="mt-2 flex items-center text-sm text-neutral-content">
              <MapPin size={20} weight="fill" className="mr-1.5" />
              Academia Gen - Rua General Brasil, 1000
            </div>
            <div className="mt-2 flex items-center text-sm text-neutral-content">
              <Medal size={20} weight="fill" className="mr-1.5" />
              Plano Ouro
            </div>
          </div>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4 mr-12">
          <Link to="/excericios">
            <span className="hidden sm:block">
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
              >
                <PencilIcon
                  aria-hidden="true"
                  className="mr-1.5 -ml-0.5 size-5 text-gray-400"
                />
                Edit
              </button>
            </span>
          </Link>

          <span className="ml-3 hidden sm:block">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50"
            >
              <LinkIcon
                aria-hidden="true"
                className="mr-1.5 -ml-0.5 size-5 text-gray-400"
              />
              View
            </button>
          </span>

          <span className="sm:ml-3">
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              <CheckIcon aria-hidden="true" className="mr-1.5 -ml-0.5 size-5" />
              Publish
            </button>
          </span>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
