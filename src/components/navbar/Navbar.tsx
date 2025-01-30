import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const { usuario, handleLogout } = useContext(AuthContext); 

  return (
    <>
      <div className="w-full flex justify-center py-4 bg-base-100 text-white">
        <div className="container flex justify-between text-lg">
          <div className="mr-auto">
            <Link to="/" className="hover:underline">
              <img
                src="https://i.imgur.com/UoA4cEN.png"
                alt="Imagem da Página Home"
                style={{
                  width: "8vh",
                  height: "auto",
                }}
              />
            </Link>
          </div>

          <div className="flex gap-8 font-body justify-end items-center">
            {!usuario.token ? (
              <Link to="/login" className="hover:underline">
                <button className="btn btn-outline">LOGIN</button>
              </Link>
            ) : (
              <>
                <span className="text-lg">{usuario.nome}</span>
                <button className="btn btn-outline" onClick={handleLogout}>
                  LOGOUT
                </button>
              </>
            )}
            <Link to="/sobrenos" className="hover:underline">
              <button className="btn btn-outline btn-warning">SOBRE NÓS</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
