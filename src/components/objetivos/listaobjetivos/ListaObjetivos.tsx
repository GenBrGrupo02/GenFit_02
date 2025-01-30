import { useContext, useEffect, useState } from "react";
import CardObjetivos from "../cardobjetivos/CardObjetivos";
import { buscar } from "../../../services/Service";
import { AuthContext } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Objetivo from "../../../models/Objetivo";

function ListaObjetivos() {
  const navigate = useNavigate();
  const [objetivos, setObjetivos] = useState<Objetivo[]>([]);
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  async function buscarObjetivos() {
    try {
      await buscar("/objetivos", setObjetivos, {
        headers: { Authorization: token },
      });
    } catch (error: any) {
      if (error.toString().includes("403")) {
        handleLogout();
      }
    }
  }

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado!");
      navigate("/");
    }
  }, [token, navigate]);

  useEffect(() => {
    if (token !== "") {
      buscarObjetivos();
    }
  }, [token]);

  return (
    <div className="flex justify-center w-full my-4">
      <div className="container flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-20 mt-2 p-20">
          {objetivos.map((objetivo) => (
            <CardObjetivos key={objetivo.id} objetivo={objetivo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListaObjetivos;