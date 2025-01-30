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

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logininstrutores" element={<LoginInstrutor />} />
            <Route path="/instrutores" element={<DashBoardInstrutor />} />
            <Route path="/sobrenos" element={<Sobrenos />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/exercicio" element={<ListaExercicios />} />
            <Route path="/objetivos" element={<ListaObjetivos />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
export default App;
