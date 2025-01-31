import { useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import FormExercicios from "../../components/exercicios/FormExercicio";
import Exercicio from "../../models/Exercicio";
import { createExercicio, updateExercicio } from "../../services/Service";

function InstrutorExercicios() {
  const navigate = useNavigate();
  const { usuario } = useContext(AuthContext);
  const token = usuario.token;

  const handleSubmitExercicio = (data: Exercicio) => {
    if (data.id) {
      try {
        updateExercicio(data, {
          headers: { Authorization: token },
        });
        // alert("O exercício foi atualizado com sucesso!");
      } catch (error: any) {
        // if (error.toString().includes("403")) {
        //   handleLogout();
        // } else {
        alert("Erro ao atualizar o exercício.");
        //}
      }
    } else {
      try {
        createExercicio(data, {
          headers: { Authorization: token },
        });
        // alert("O exercício foi atualizado com sucesso!");
      } catch (error: any) {
        // if (error.toString().includes("403")) {
        //   handleLogout();
        // } else {
        alert("Erro ao cadastrar o exercício.");
        //}
      }
    }
  };

  useEffect(() => {
    if (token === "") {
      alert("Você precisa estar logado!");
      navigate("/");
    }
  }, [token]);

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
          <FormExercicios onSubmit={handleSubmitExercicio} />
        </div>
      </div>
    </>
  );
}

export default InstrutorExercicios;
