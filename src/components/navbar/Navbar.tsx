import { useEffect, useState } from "react";

function Navbar() {
    // Obtém o tema salvo no localStorage ou usa "winter" como padrão
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "winter");

    // Atualiza o tema no HTML e salva no localStorage
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    // Função para alternar entre os temas
    const toggleTheme = () => {
        setTheme(theme === "night" ? "winter" : "night");
    };

    return (
        <div className="w-full flex justify-start py-4 bg-indigo-900 text-white">
            <div className="container flex justify-between text-lg">
                <span className="font-bold text-xl">GENFIT</span>

                <div className="flex gap-4">
                    <span>Perfil</span>
                    <span>Exercícios</span>
                    <span>Objetivos</span>
                    <span>Sobre Nós</span>
                    <span>Sair</span>
                </div>

                {/* Botão para alternar temas */}
                <label className="grid cursor-pointer place-items-center">
                    <input
                        type="checkbox"
                        checked={theme === "night"}
                        onChange={toggleTheme}
                        className="toggle theme-controller bg-base-content col-span-2 col-end-1 row-start-1"
                    />
                    <svg
                        className="stroke-base-100 fill-base-100 col-end-20 row-start-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                    <svg
                        className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </label>
            </div>
        </div>
    );
}

export default Navbar;
