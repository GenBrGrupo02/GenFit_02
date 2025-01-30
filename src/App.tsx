import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Cadastro from "./pages/cadastro/Cadastro";
import Login from "./pages/login/Login";
import Sobrenos from "./pages/sobrenos/Sobrenos";
import Dashboard from "./pages/dashboard/Dashboard";
import Perfil from "./pages/perfil/Perfil";
import { AuthProvider } from "./contexts/AuthContext";
import ListaExercicios from "./components/exercicios/ListaExercicios";
import ListaObjetivos from "./components/objetivos/listaobjetivos/ListaObjetivos";
import LoginInstrutor from "./pages/logininstrutor/LoginInstrutor";
import DashBoardInstrutor from "./pages/dashboardinstrutor/DashboardInstrutor";
import InstrutorExercicios from "./pages/dashboardinstrutor/InstrutorExercicios";
import InstrutorObjetivos from "./pages/dashboardinstrutor/InstrutorObjetivos";
import TodosObjetivos from "./pages/objetivos/TodosObjetivos";
import TodosExercicios from "./pages/exercicios/TodosExercicios";
import VerObjetivos from "./pages/dashboardinstrutor/VerObjetivos";
import VerExercicios from "./pages/dashboardinstrutor/VerExcercicios";
import ExercicioForm from "./components/exercicios/FormExercicio";
import DeletarExercicio from "./components/exercicios/DeletarExercicio";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className=" bg-slate-800 min-h-[90vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/sobrenos" element={<Sobrenos />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/exercicio" element={<ListaExercicios />} />
              <Route path="/objetivos" element={<ListaObjetivos />} />
              {" "}
              <Route path="/logininstrutores" element={<LoginInstrutor />} />
              <Route path="/instrutores" element={<DashBoardInstrutor />} />
              <Route path="/instrutorexercicios" element={<InstrutorExercicios />} />
              <Route path="/instrutorobjetivos" element={<InstrutorObjetivos />} />
              {" "}
              <Route path="/todosexercicios" element={<TodosExercicios />} />
              <Route path="/todosobjetivos" element={<TodosObjetivos />} />
              <Route path="/verobjetivos" element={<VerObjetivos />} />
              <Route path="/verexercicios" element={<VerExercicios />} />
              {" "}
              <Route path="/deletarexercicio/:id" element={<DeletarExercicio />} />
              <Route path="/editarexercicio/:id" element={<ExercicioForm onSubmit={() => {}} />} />
              {" "}
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;
