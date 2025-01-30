import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import UsuarioLogin from "../../models/UsuarioLogin";
import { RotatingLines } from "react-loader-spinner";

function Login() {
  const navigate = useNavigate();

  const { usuario, handleLogin, isLoading } = useContext(AuthContext);

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin
  );

  useEffect(() => {
    if (usuario.token !== "") {
      navigate("/dashboard");
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <>
      <div className="h-screen flex justify-center items-center px-4">
        <div className="card glass max-w-md w-full p-6 shadow-lg">
          <div className="card-body grid place-items-center">
            <form className="flex flex-col gap-4 w-full" onSubmit={login}>
              <h2 className="text-base-content text-5xl font-bold flex justify-center">
                Entrar
              </h2>
              <div className="flex flex-col w-full my-1">
                <label className="input input-bordered flex items-center gap-2 input-md w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="text"
                    id="usuario"
                    name="usuario"
                    className="grow"
                    placeholder="Insira seu email de usuário"
                    value={usuarioLogin.usuario}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      atualizarEstado(e)
                    }
                  />
                </label>
              </div>
              <div className="flex flex-col w-full my-1">
                <label className="input input-bordered flex items-center gap-2 input-md w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    type="password"
                    id="senha"
                    name="senha"
                    placeholder="Insira sua sennha"
                    className="grow"
                    value={usuarioLogin.senha}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      atualizarEstado(e)
                    }
                  />
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary text-neutral font-bold w-1/2 py-2 flex justify-center mx-auto"
              >
                {isLoading ? (
                  <RotatingLines
                    strokeColor="white"
                    strokeWidth="5"
                    animationDuration="0.75"
                    width="24"
                    visible={true}
                  />
                ) : (
                  <span>Entrar</span>
                )}
              </button>

              <hr className="border-slate-800 w-full" />

              <p className="mt-3">
                Ainda não tem uma conta?{" "}
                <Link to="/cadastro" className="text-primary hover:underline">
                  Cadastre-se
                </Link>
              </p>
              <p className="-mb-4">
                Página dos Instrutores - {" "}
                <Link to="/logininstrutores" className="text-primary hover:underline">
                  Login
                </Link>
              </p>
            </form>
            <div className="fundoLogin hidden lg:block"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
